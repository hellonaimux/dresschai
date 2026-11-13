(function () {
  var DIV = {
    'Dhaka': ['Dhanmondi', 'Gulshan', 'Banani', 'Uttara', 'Mirpur', 'Mohammadpur', 'Motijheel', 'Basundhara', 'Malibag', 'Farmgate', 'Badda', 'Tejgaon'],
    'Chattagram': ['Agrabad', 'Alankar', 'Anderkilla', 'Anwara', 'Baizid', 'Bakoliya', 'Bandar', 'Banshkhali', 'Boalkhali', 'Chandgaon', 'Double Mooring', 'EPZ', 'Fatikchhari', 'GEC Circle', 'Halishahar', 'Hathazari', 'Khulshi', 'Kotwali', 'Pahartali', 'Panchlaish', 'Patenga', 'Sitakunda'],
    'Rajshahi': ['Boalia', 'Rajpara', 'Motihar', 'Shah Makhdum', 'Paba', 'Godagari', 'Shaheb Bazar', 'Katakhali', 'Tanore'],
    'Khulna': ['Sonadanga', 'Khalishpur', 'Daulatpur', 'Khan Jahan Ali', 'Batiaghata', 'Boyra', 'Gollamari'],
    'Barishal': ['Kotwali', 'Bakerganj', 'Babuganj', 'Muladi', 'Gournadi', 'Banaripara'],
    'Sylhet': ['Zindabazar', 'Ambarkhana', 'Subid Bazar', 'Upashahar', 'Jalalabad', 'Bandar Bazar', 'Kumarpara'],
    'Rangpur': ['Kotwali', 'Mahiganj', 'Pirgacha', 'Badarganj', 'Mithapukur', 'Taraganj'],
    'Mymensingh': ['Kotwali', 'Muktagacha', 'Trishal', 'Bhaluka', 'Gaffargaon', 'Phulpur']
  };
  var NAMES = Object.keys(DIV), mq = window.matchMedia('(max-width:899px)');
  function store(v) { try { localStorage.setItem('dc_loc', v); } catch (e) {} }
  function stored() { try { return localStorage.getItem('dc_loc') || ''; } catch (e) { return ''; } }
  var qs = new URLSearchParams(location.search); if (qs.get('loc')) store(qs.get('loc'));
  var cur = stored() || 'Dhaka';
  [].forEach.call(document.querySelectorAll('[data-loc-label]'), function (e) { e.textContent = cur; });
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  /* ---------- location menu ---------- */
  var menu = document.createElement('div'); menu.className = 'loc-menu'; menu.setAttribute('role', 'dialog'); menu.setAttribute('aria-label', 'Choose location');
  menu.innerHTML = '<div class="lp" id="lp1"><div class="lp-h"><button class="lp-cur" type="button" data-all>All Bangladesh</button><label class="lp-s"><img src="assets/search-sm.svg" alt=""><input type="search" id="lq1" placeholder="Search city or district" autocomplete="off"></label></div><div class="lp-list" id="ll1"></div></div>' +
    '<div class="lp" id="lp2" hidden><div class="lp-h"><button class="lp-cur" type="button" id="lcur2">All Bangladesh</button><label class="lp-s"><img src="assets/search-sm.svg" alt=""><input type="search" id="lq2" placeholder="Search city or district" autocomplete="off"></label></div><div class="lp-list" id="ll2"></div></div>';
  document.body.appendChild(menu);
  var lp2 = menu.querySelector('#lp2'), ll1 = menu.querySelector('#ll1'), ll2 = menu.querySelector('#ll2'), lq1 = menu.querySelector('#lq1'), lq2 = menu.querySelector('#lq2'), cur2 = menu.querySelector('#lcur2');
  var trigger = null, activeDiv = null, trigImg = null, trigSrc = '';

  function go(name) {
    if (name === 'All Bangladesh') { store(name); location.href = 'listing.html'; return; }
    store(name); location.href = 'listing.html?loc=' + encodeURIComponent(name);
  }
  function renderDivs(q) {
    q = (q || '').toLowerCase(); var h = '';
    NAMES.forEach(function (d) { if (!q || d.toLowerCase().indexOf(q) > -1) h += '<button class="lp-row' + (d === activeDiv ? ' on' : '') + '" type="button" data-d="' + d + '">' + d + '<img src="assets/arrow-12.svg" alt=""></button>'; });
    if (q) NAMES.forEach(function (d) { DIV[d].forEach(function (a) { if (a.toLowerCase().indexOf(q) > -1) h += '<button class="lp-row" type="button" data-a="' + esc(a) + '">' + esc(a) + '<small>' + d + '</small></button>'; }); });
    ll1.innerHTML = h || '<div class="lp-empty">No place found</div>';
  }
  function renderAreas(d, q) {
    q = (q || '').toLowerCase(); var h = mq.matches ? '<button class="lp-row lp-all" type="button" data-d-all="' + d + '">All ' + d + '</button>' : '';
    DIV[d].forEach(function (a) { if (!q || a.toLowerCase().indexOf(q) > -1) h += '<button class="lp-row" type="button" data-a="' + esc(a) + '">' + esc(a) + '</button>'; });
    ll2.innerHTML = h;
  }
  function showDiv(d) {
    activeDiv = d; cur2.textContent = mq.matches ? '\u2039 ' + d : 'All Bangladesh';
    lq2.value = ''; renderAreas(d, ''); lp2.hidden = false;
    [].forEach.call(ll1.querySelectorAll('.lp-row'), function (r) { r.classList.toggle('on', r.getAttribute('data-d') === d); });
    if (mq.matches) menu.classList.add('drill'); else place();
  }
  function place() {
    if (!trigger) return;
    if (mq.matches) {
      var hd = document.querySelector('.h-top,.top'), top = hd ? Math.max(0, hd.getBoundingClientRect().bottom) : 72;
      menu.style.top = top + 'px'; menu.style.left = '0'; menu.style.maxHeight = 'min(570px, calc(100vh - ' + top + 'px))'; return;
    }
    var r = trigger.getBoundingClientRect(), w = 885;
    menu.style.maxHeight = ''; menu.style.left = Math.max(16, Math.min(r.left, window.innerWidth - w - 16)) + 'px'; menu.style.top = (r.bottom + 8) + 'px';
  }
  function open(t) {
    trigger = t; activeDiv = null; lq1.value = ''; lp2.hidden = true; menu.classList.remove('drill'); cur2.textContent = 'All Bangladesh';
    var sel = NAMES.indexOf(stored()) > -1 ? stored() : null; renderDivs('');
    menu.classList.add('open'); place();
    if (sel && !mq.matches) showDiv(sel);
    trigImg = t.querySelector('img'); if (t.hasAttribute('data-loc-icon') && trigImg) { trigSrc = trigImg.getAttribute('src'); trigImg.setAttribute('src', 'assets/search-active.svg'); }
  }
  function close() {
    menu.classList.remove('open', 'drill');
    if (trigImg && trigSrc) { trigImg.setAttribute('src', trigSrc); trigSrc = ''; }
    trigger = null;
  }
  [].forEach.call(document.querySelectorAll('[data-loc-open]'), function (t) {
    t.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); if (menu.classList.contains('open') && trigger === t) close(); else { close(); open(t); } });
  });
  ll1.addEventListener('click', function (e) {
    var b = e.target.closest('.lp-row'); if (!b) return;
    if (b.hasAttribute('data-a')) return go(b.getAttribute('data-a'));
    var d = b.getAttribute('data-d'); if (mq.matches) showDiv(d); else go(d);
  });
  ll1.addEventListener('mouseover', function (e) { if (mq.matches) return; var b = e.target.closest('.lp-row[data-d]'); if (b && b.getAttribute('data-d') !== activeDiv) showDiv(b.getAttribute('data-d')); });
  ll2.addEventListener('click', function (e) {
    var b = e.target.closest('.lp-row'); if (!b) return;
    if (b.hasAttribute('data-d-all')) return go(b.getAttribute('data-d-all'));
    go(b.getAttribute('data-a'));
  });
  menu.querySelector('[data-all]').addEventListener('click', function () { go('All Bangladesh'); });
  cur2.addEventListener('click', function () { if (mq.matches) { menu.classList.remove('drill'); lp2.hidden = true; activeDiv = null; renderDivs(lq1.value); } else go('All Bangladesh'); });
  lq1.addEventListener('input', function () { if (!menu.classList.contains('open')) return; renderDivs(lq1.value); if (!mq.matches) { lp2.hidden = true; activeDiv = null; place(); } });
  lq2.addEventListener('input', function () { if (activeDiv) renderAreas(activeDiv, lq2.value); });
  document.addEventListener('click', function (e) { if (menu.classList.contains('open') && !menu.contains(e.target)) close(); });
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
