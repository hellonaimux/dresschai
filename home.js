(function () {
  function $all(s, r) { return [].slice.call((r || document).querySelectorAll(s)); }
  // toast for features that are not built yet
  var toast = document.createElement('div'); toast.className = 'h-toast'; toast.textContent = 'This feature is coming soon'; document.body.appendChild(toast);
  var tt; function soon(e) { if (e) e.preventDefault(); toast.classList.add('show'); clearTimeout(tt); tt = setTimeout(function () { toast.classList.remove('show'); }, 2200); }
  $all('[data-soon]').forEach(function (a) { a.addEventListener('click', soon); });
  // category hover state (Vacation is active by default, like the design)
  var cats = $all('.h-cat'), first = cats[0];
  function act(c) { cats.forEach(function (x) { x.classList.toggle('act', x === c); }); }
  act(first);
  cats.forEach(function (c) { c.addEventListener('mouseenter', function () { act(c); }); c.addEventListener('focus', function () { act(c); }); });
  var wrap = document.querySelector('.h-cats'); if (wrap) wrap.addEventListener('mouseleave', function () { act(first); });
  // featured cards -> details page, hearts
  $all('.h-fc').forEach(function (c) { c.addEventListener('click', function (e) { if (e.target.closest('.hb')) return; location.href = 'details.html?id=' + c.getAttribute('data-id'); }); });
  $all('.h-fc .hb').forEach(function (b) { b.addEventListener('click', function (e) { e.stopPropagation(); b.classList.toggle('on'); }); });
  // mobile carousel dots
  var row = document.querySelector('.h-row'), dots = $all('.h-dots i');
  function dot() {
    if (!row || !dots.length) return;
    var max = row.scrollWidth - row.clientWidth, p = max > 0 ? row.scrollLeft / max : 0, i = Math.round(p * (dots.length - 1));
    dots.forEach(function (d, k) { d.classList.toggle('on', k === i); });
  }
  if (row) { row.addEventListener('scroll', dot, { passive: true }); dot(); }
})();
