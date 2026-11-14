(function () {
  var G = window.BD_GEO || {};
  var DIVS = ['Dhaka', 'Chattagram', 'Rajshahi', 'Khulna', 'Barishal', 'Sylhet', 'Rangpur', 'Mymensingh'].filter(function (d) { return G[d]; });
  var mq = window.matchMedia('(max-width:899px)');
  function store(v) { try { localStorage.setItem('dc_loc', v); } catch (e) {} }
  function stored() { try { return localStorage.getItem('dc_loc') || ''; } catch (e) { return ''; } }
  function nz(s) { return String(s || '').toLowerCase().replace('chattogram', 'chattagram'); }
  var qs = new URLSearchParams(location.search); if (qs.get('loc')) store(qs.get('loc'));
  var savedPath = stored() && stored() !== 'All Bangladesh' ? stored().split('/') : [];
  function setLabels() {
    var t = savedPath.length ? savedPath[savedPath.length - 1] : (stored() === 'All Bangladesh' ? 'All Bangladesh' : 'Dhaka');
    [].forEach.call(document.querySelectorAll('[data-loc-label]'), function (e) { e.textContent = t; });
  }
  setLabels();
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
  function az(a) { return a.slice().sort(function (x, y) { return x.localeCompare(y); }); }

  /* ---------- location popup: Division > District > Thana (one popup, back button) ---------- */
  var menu = document.createElement('div'); menu.className = 'loc-menu'; menu.setAttribute('role', 'dialog'); menu.setAttribute('aria-label', 'Choose location');
  menu.innerHTML = '<div class="lm-h"><button class="lm-back" type="button" aria-label="Back" hidden><img src="assets/lp-back.svg" alt=""></button><button class="lm-t" type="button">All Bangladesh</button><button class="lm-x" type="button" aria-label="Close"><img src="assets/lp-x.svg" alt=""></button></div>' +
    '<label class="lm-s"><img src="assets/lp-search.svg" alt=""><input type="search" placeholder="Search city or district" autocomplete="off" aria-label="Search city or district"></label><div class="lm-list"></div>';
  document.body.appendChild(menu);
  var back = menu.querySelector('.lm-back'), title = menu.querySelector('.lm-t'), xb = menu.querySelector('.lm-x'), input = menu.querySelector('input'), list = menu.querySelector('.lm-list');
  var path = [], trigger = null, trigImg = null, trigSrc = '';

  function go(p) {
    if (!p.length) { store('All Bangladesh'); location.href = 'listing.html'; return; }
    var v = p.join('/'); store(v); location.href = 'listing.html?loc=' + encodeURIComponent(v);
  }
  function row(label, attrs, hasKids, on, small) {
    return '<button class="lm-row' + (hasKids ? ' has' : '') + (on ? ' on' : '') + '" type="button" ' + attrs + '>' + esc(label) + (small ? '<small>' + esc(small) + '</small>' : '') + (hasKids ? '<img src="assets/lp-next.svg" alt="">' : '') + '</button>';
  }
  function onPath(p) { if (p.length > savedPath.length) return false; for (var i = 0; i < p.length; i++) if (nz(p[i]) !== nz(savedPath[i])) return false; return p.length === savedPath.length; }
  function render() {
    var q = input.value.trim().toLowerCase(), h = '';
    var lvl = path.length;
    back.hidden = lvl === 0;
    title.textContent = lvl === 0 ? 'All Bangladesh' : path[lvl - 1];
    title.style.cursor = lvl === 0 ? 'pointer' : 'default';
    menu.classList.toggle('has-x', lvl > 0);
    if (lvl === 0) {
      if (q) {                                   // search everywhere from the first screen
        DIVS.forEach(function (d) { if (d.toLowerCase().indexOf(q) > -1) h += row(d, 'data-p="' + esc(d) + '"', true, false); });
        DIVS.forEach(function (d) { az(Object.keys(G[d])).forEach(function (j) {
          if (j.toLowerCase().indexOf(q) > -1) h += row(j, 'data-p="' + esc(d + '/' + j) + '" data-pick="1"', true, false, d);
        }); });
        DIVS.forEach(function (d) { Object.keys(G[d]).forEach(function (j) { az(G[d][j]).forEach(function (t) {
          if (t.toLowerCase().indexOf(q) > -1) h += row(t, 'data-p="' + esc(d + '/' + j + '/' + t) + '" data-pick="1"', false, false, j + ', ' + d);
        }); }); });
      } else DIVS.forEach(function (d) { h += row(d, 'data-p="' + esc(d) + '"', true, savedPath.length && nz(savedPath[0]) === nz(d)); });
    } else if (lvl === 1) {
      var d = path[0];
      if (!q) h += row('All ' + d, 'data-p="' + esc(d) + '" data-pick="1"', false, onPath([d]));
      az(Object.keys(G[d])).forEach(function (j) { if (!q || j.toLowerCase().indexOf(q) > -1) h += row(j, 'data-p="' + esc(d + '/' + j) + '"', true, onPath([d, j]) || (savedPath.length > 2 && nz(savedPath[1]) === nz(j) && nz(savedPath[0]) === nz(d))); });
    } else {
      var dd = path[0], jj = path[1];
      if (!q) h += row('All ' + jj, 'data-p="' + esc(dd + '/' + jj) + '" data-pick="1"', false, onPath([dd, jj]));
      az(G[dd][jj]).forEach(function (t) { if (!q || t.toLowerCase().indexOf(q) > -1) h += row(t, 'data-p="' + esc(dd + '/' + jj + '/' + t) + '" data-pick="1"', false, onPath([dd, jj, t])); });
    }
    list.innerHTML = h || '<div class="lm-empty">No place found</div>';
    list.scrollTop = 0;
  }
  function place() {
    if (!trigger) return;
    if (mq.matches) {
      var hd = document.querySelector('.h-top,.top'), top = hd ? Math.max(0, hd.getBoundingClientRect().bottom) : 72;
      menu.style.top = top + 'px'; menu.style.height = 'min(570px, calc(100vh - ' + top + 'px))'; menu.style.left = '0'; return;
    }
    var r = trigger.getBoundingClientRect();
    menu.style.height = ''; menu.style.left = Math.max(16, Math.min(r.left, window.innerWidth - 433 - 16)) + 'px'; menu.style.top = (r.bottom + 8) + 'px';
  }
  function open(t) {
    trigger = t; input.value = ''; path = savedPath.length ? savedPath.slice(0, Math.min(savedPath.length - 1, 2)) : []; // open where the person left off
    if (path.length > 2) path = path.slice(0, 2);
    render(); menu.classList.add('open'); place();
    trigImg = t.querySelector('img'); if (t.hasAttribute('data-loc-icon') && trigImg) { trigSrc = trigImg.getAttribute('src'); trigImg.setAttribute('src', 'assets/search-active.svg'); }
  }
  function close() {
    menu.classList.remove('open');
    if (trigImg && trigSrc) { trigImg.setAttribute('src', trigSrc); trigSrc = ''; }
    trigger = null;
  }
  [].forEach.call(document.querySelectorAll('[data-loc-open]'), function (t) {
    t.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); if (menu.classList.contains('open') && trigger === t) close(); else { close(); open(t); } });
  });
  list.addEventListener('click', function (e) {
    var b = e.target.closest('.lm-row'); if (!b) return;
    var p = b.getAttribute('data-p').split('/');
    if (b.hasAttribute('data-pick')) { if (p.length === 2 && b.classList.contains('has')) { path = p; input.value = ''; render(); } else go(p); return; }
    path = p; input.value = ''; render();
  });
  back.addEventListener('click', function () { path = path.slice(0, -1); input.value = ''; render(); });
  title.addEventListener('click', function () { if (!path.length) go([]); });
  xb.addEventListener('click', close);
  input.addEventListener('input', function () { if (menu.classList.contains('open')) render(); });
  document.addEventListener('click', function (e) { if (!menu.classList.contains('open')) return; var inside = (e.composedPath ? e.composedPath() : []).indexOf(menu) > -1; if (!inside) close(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { close(); closeDr(); } });
  window.addEventListener('scroll', function () { if (menu.classList.contains('open') && !mq.matches) close(); }, { passive: true });
  window.addEventListener('resize', function () { if (menu.classList.contains('open')) close(); });

  /* ---------- hamburger drawer (mobile) ---------- */
  var cats = [['Wedding', 'listing.html?category=Wedding'], ['Party', 'listing.html?category=Party'], ['Ethnic', 'listing.html?category=Ethnic'], ['Mens', 'listing.html?category=Mens'], ['Vacation', 'listing.html?q=vacation'], ['Winter', 'listing.html?q=winter'], ['Summer', 'listing.html?q=summer'], ['Casual', 'listing.html?q=casual']];
  var bd = document.createElement('div'); bd.className = 'dr-bd';
  var dr = document.createElement('nav'); dr.className = 'dr'; dr.setAttribute('aria-label', 'Menu');
  dr.innerHTML = '<div class="dr-top"><img src="assets/logo-home.svg" alt="DressChai"><button class="dr-x" type="button" aria-label="Close menu">&times;</button></div>' +
    '<a href="/">Home</a><a href="listing.html">All Dresses</a><div class="lab">Categories</div>' + cats.map(function (c) { return '<a href="' + c[1] + '">' + c[0] + '</a>'; }).join('') +
    '<div class="lab">Account</div><a href="#" data-soon-d>Sell Your Dress</a><a href="#" data-soon-d>My Account</a><a href="#" data-soon-d>Saved</a>';
  document.body.appendChild(bd); document.body.appendChild(dr);
  function openDr() { close(); document.body.classList.add('dr-open'); }
  function closeDr() { document.body.classList.remove('dr-open'); }
  [].forEach.call(document.querySelectorAll('[data-menu-open]'), function (t) { t.addEventListener('click', function (e) { e.preventDefault(); openDr(); }); });
  bd.addEventListener('click', closeDr); dr.querySelector('.dr-x').addEventListener('click', closeDr);
  [].forEach.call(dr.querySelectorAll('[data-soon-d]'), function (a) { a.addEventListener('click', function (e) { e.preventDefault(); closeDr(); var t = document.querySelector('.h-toast'); if (!t) { t = document.createElement('div'); t.className = 'h-toast'; t.textContent = 'This feature is coming soon'; document.body.appendChild(t); } t.classList.add('show'); setTimeout(function () { t.classList.remove('show'); }, 2200); }); });
})();
