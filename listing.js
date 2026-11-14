(function () {
  var all = window.DRESSES, grid = document.getElementById('lgrid'), more = document.getElementById('more'), empty = document.getElementById('empty');
  var filtersEl = document.getElementById('filters'), sortSel = document.getElementById('sortsel');
  var wide = window.matchMedia('(min-width:900px)'), pageSize = wide.matches ? 16 : 6, shown = pageSize;
  var qs = new URLSearchParams(location.search);
  var MAP = { 'Wedding': ['Weeding Wear'], 'Party': ['Party Wear'], 'Ethnic': ['Saree', 'Lehenga'], 'Mens': ["Men's Tuxedo"], 'Saree': ['Saree'], 'Menz': ["Men's Tuxedo"] };
  var q = (qs.get('q') || '').trim().toLowerCase();
  function nz(s) { return String(s || '').toLowerCase().replace('chattogram', 'chattagram'); }
  var locP = (qs.get('loc') || '').split('/').map(function (s) { return nz(s.trim()); }).filter(Boolean);
  var urlCat = qs.get('category');
  if (urlCat) {
    var want = MAP[urlCat] || [urlCat];
    [].forEach.call(filtersEl.querySelectorAll('input[name=cat]'), function (i) { if (want.indexOf(i.nextElementSibling.textContent) > -1) i.checked = true; });
  }
  var sb = document.querySelector('.pill.search input'); if (sb && q) sb.value = qs.get('q');
  function vals(name) { return [].filter.call(filtersEl.querySelectorAll('input[name=' + name + ']'), function (i) { return i.checked; }).map(function (i) { return i.nextElementSibling.textContent; }); }
  function current() {
    var cats = vals('cat'), conds = vals('cond'), locs = vals('loc');
    var sizes = [].filter.call(filtersEl.querySelectorAll('.sz.on'), function () { return true; }).map(function (s) { return s.textContent.trim(); });
    var mn = parseFloat(document.getElementById('pmin').value), mx = parseFloat(document.getElementById('pmax').value);
    var out = all.filter(function (d) {
      if (q && (d.title + ' ' + d.loc + ' ' + d.cat + ' ' + d.brand + ' ' + (d.tags || '')).toLowerCase().indexOf(q) < 0) return false;
      if (locP.length) {
        var lv = [nz(d.div), nz(d.dist), nz(d.thana)];
        if (locP.length === 1) { if (locP[0] !== lv[0] && locP[0] !== lv[1] && locP[0] !== lv[2]) return false; }
        else for (var li = 0; li < locP.length; li++) if (locP[li] !== lv[li]) return false;
      }
      if (cats.length && cats.indexOf(d.cat) < 0) return false;
      if (conds.length && conds.indexOf(d.cond) < 0) return false;
      if (sizes.length && sizes.indexOf(d.size) < 0) return false;
      if (locs.length && locs.indexOf(d.region) < 0) return false;
      if (!isNaN(mn) && d.price < mn) return false;
      if (!isNaN(mx) && d.price > mx) return false;
      return true;
    });
    var s = sortSel.value;
    if (s === 'low') out = out.slice().sort(function (a, b) { return a.price - b.price; });
    if (s === 'high') out = out.slice().sort(function (a, b) { return b.price - a.price; });
    return out;
  }
  function render() {
    var list = current(), part = list.slice(0, shown);
    grid.innerHTML = part.map(function (d) { return window.cardHTML(d, { hh: d.img === 'lst-1.png' }); }).join('');
    window.bindCards(grid);
    empty.hidden = list.length > 0;
    more.style.display = list.length > shown ? '' : 'none';
  }
  function reset() { shown = pageSize; render(); }
  filtersEl.addEventListener('change', reset);
  filtersEl.addEventListener('input', reset);
  [].forEach.call(filtersEl.querySelectorAll('.sz'), function (s) { s.addEventListener('click', function () { s.classList.toggle('on'); reset(); }); });
  sortSel.addEventListener('change', reset);
  more.addEventListener('click', function (e) { e.preventDefault(); shown += pageSize; render(); });
  var fb = document.getElementById('fbtn'); if (fb) fb.addEventListener('click', function () { filtersEl.classList.toggle('open'); });
  render();
})();
