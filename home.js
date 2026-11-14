(function () {
  function $all(s, r) { return [].slice.call((r || document).querySelectorAll(s)); }
  /* ---- "coming soon" toast for features that are not built yet ---- */
  var toast = document.createElement('div'); toast.className = 'h-toast'; toast.textContent = 'This feature is coming soon'; document.body.appendChild(toast);
  var tt; function soon(e) { if (e) e.preventDefault(); toast.classList.add('show'); clearTimeout(tt); tt = setTimeout(function () { toast.classList.remove('show'); }, 2200); }
  $all('[data-soon]').forEach(function (a) { a.addEventListener('click', soon); });

  /* ---- categories: Vacation is highlighted by default, hover moves the highlight ---- */
  var cats = $all('.h-cat'), first = cats[0];
  function act(c) { cats.forEach(function (x) { x.classList.toggle('act', x === c); }); }
  act(first);
  cats.forEach(function (c) { c.addEventListener('mouseenter', function () { act(c); }); c.addEventListener('focus', function () { act(c); }); });
  var wrap = document.querySelector('.h-cats'); if (wrap) wrap.addEventListener('mouseleave', function () { act(first); });

  /* ---- product cards (featured row + listing grid) rendered from data.js ---- */
  var D = window.DRESSES || [];
  function byId(id) { return window.DC.byId(id); }
  function card(d, on) {
    return '<article class="h-fc" data-id="' + d.id + '"><div class="im"><img src="assets/home-feat.png" alt="' + d.title + '" loading="lazy">' +
      '<button class="hb' + (on ? ' on' : '') + '" type="button" aria-label="Save"><picture class="off-ic"><source media="(min-width:900px)" srcset="assets/heart-card.svg"><img src="assets/heart-card-m.svg" alt=""></picture><img class="on-ic" src="assets/heart-on.svg" alt=""></button></div>' +
      '<div class="bd"><div class="t"><b>' + d.title + '</b><div><span class="sz">Size - ' + d.size + '</span><span class="pr">' + d.priceText + '</span></div></div><div class="lc"><img src="assets/pin-h.svg" alt=""><span>' + d.loc + '</span></div></div></article>';
  }
  var feat = D.filter(function (d) { return d.id >= 25; });
  var row = document.getElementById('featRow');
  if (row) row.innerHTML = feat.map(function (d, i) { return card(d, i === 0); }).join('');
  var grid = document.getElementById('listGrid');
  if (grid) { // the design repeats five dresses: Elegant, Elegant, Stylish, Trendy, Fashionable
    var seq = [26, 26, 27, 28, 29], h = '';
    for (var r = 0; r < 4; r++) seq.forEach(function (id) { h += card(byId(id), false); });
    grid.innerHTML = h;
  }
  $all('.h-fc').forEach(function (c) { c.addEventListener('click', function (e) { if (e.target.closest('.hb')) return; location.href = 'details.html?id=' + c.getAttribute('data-id'); }); });
  $all('.h-fc .hb').forEach(function (b) { b.addEventListener('click', function (e) { e.stopPropagation(); b.classList.toggle('on'); }); });

  /* ---- mobile: trust bar loops endlessly (items are duplicated so the loop has no gap) ---- */
  var track = document.querySelector('.h-track');
  if (track) { $all('.h-ti', track).forEach(function (it) { var c = it.cloneNode(true); c.className += ' h-clone'; c.setAttribute('aria-hidden', 'true'); track.appendChild(c); }); }

  /* ---- featured row: swipe / drag, arrows (desktop), dots (mobile) ---- */
  var dots = $all('.h-dots i');
  if (row) {
    var down = false, sx = 0, sl = 0, moved = false;
    row.addEventListener('pointerdown', function (e) { if (e.pointerType !== 'mouse') return; down = true; moved = false; sx = e.clientX; sl = row.scrollLeft; });
    window.addEventListener('pointermove', function (e) { if (!down) return; var dx = e.clientX - sx; if (Math.abs(dx) > 4) { moved = true; row.classList.add('drag'); } if (moved) row.scrollLeft = sl - dx; });
    window.addEventListener('pointerup', function () { if (!down) return; down = false; setTimeout(function () { row.classList.remove('drag'); }, 0); });
    row.addEventListener('click', function (e) { if (moved) { e.stopPropagation(); e.preventDefault(); moved = false; } }, true);
    function dot() {
      if (!dots.length) return;
      var max = row.scrollWidth - row.clientWidth, p = max > 0 ? row.scrollLeft / max : 0, i = Math.round(p * (dots.length - 1));
      dots.forEach(function (d, k) { d.classList.toggle('on', k === i); });
    }
    row.addEventListener('scroll', dot, { passive: true }); dot();
    function page(dir) {
      var max = row.scrollWidth - row.clientWidth, step = row.clientWidth + 24;
      if (dir > 0 && row.scrollLeft >= max - 4) row.scrollTo({ left: 0, behavior: 'smooth' });
      else if (dir < 0 && row.scrollLeft <= 4) row.scrollTo({ left: max, behavior: 'smooth' });
      else row.scrollBy({ left: dir * step, behavior: 'smooth' });
    }
    var pv = document.getElementById('featPrev'), nx = document.getElementById('featNext');
    if (pv) pv.addEventListener('click', function () { page(-1); });
    if (nx) nx.addEventListener('click', function () { page(1); });
  }
})();
