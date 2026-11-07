(function () {
  var id = new URLSearchParams(location.search).get('id');
  var d = window.DC.byId(id) || window.DC.byId(2);
  function $(s) { return document.querySelector(s); }
  document.title = d.detailTitle + ' — DressChai';
  $('#dt').textContent = d.detailTitle;
  $('#dp').textContent = d.priceText;
  $('#dloc').textContent = d.area;
  $('#dago').textContent = d.posted;
  $('#gimg').src = 'assets/' + d.img; $('#gimg').alt = d.detailTitle;
  [].forEach.call(document.querySelectorAll('.gth img'), function (i) { i.src = 'assets/' + d.img; });
  $('#f-brand').textContent = d.brand; $('#f-size').textContent = d.size; $('#f-cond').textContent = d.cond; $('#f-cat').textContent = d.cat;
  $('#bc-cat').textContent = d.cat;
  $('#ddesc').textContent = d.desc;
  var s = d.seller;
  $('#s-av').src = 'assets/' + s.avatar; $('#s-name').textContent = s.name; $('#s-city').textContent = s.city;
  $('#s-rate').textContent = s.rating; $('#s-rev').textContent = '(' + s.reviews + ' reviews)';
  $('#s-list').textContent = s.listings; $('#s-since').textContent = s.since;
  var g = $('#gimg');
  [].forEach.call(document.querySelectorAll('.gth'), function (t) { t.addEventListener('click', function () { g.src = t.querySelector('img').src; }); });
  // related: same category first, then the rest
  var rest = window.DRESSES.filter(function (x) { return x.id !== d.id; });
  var rel = rest.filter(function (x) { return x.cat === d.cat; }).concat(rest.filter(function (x) { return x.cat !== d.cat; })).slice(0, 4);
  var box = $('#relgrid');
  box.innerHTML = rel.map(function (x, i) { return window.cardHTML(x, { hh: i === 0, heart: i === 0, cls: i === 3 ? 'hm' : '' }); }).join('');
  window.bindCards(box);
})();
