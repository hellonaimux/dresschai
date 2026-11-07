/* Product card markup shared by listing.html and details.html */
window.cardHTML = function (d, opts) {
  opts = opts || {};
  var heart = opts.heart !== false;
  var p = d.priceText.indexOf('TK. ') === 0 ? '<span>TK. </span><span class="n">' + d.priceText.slice(4) + '</span>' : d.priceText;
  var h = heart ? '<button class="heart" type="button" aria-label="Save"><picture><source media="(max-width:899px)" srcset="assets/heart-card-m.svg"><img src="assets/heart-card.svg" alt=""></picture></button>' : '';
  return '<article class="pcard' + (opts.hh ? ' hh' : '') + (opts.cls ? ' ' + opts.cls : '') + '" data-href="details.html?id=' + d.id + '"><div class="pt"><div class="pthumb"><img class="pimg" src="assets/' + d.img + '" alt="Pre-loved dress" loading="lazy">' + h + '<span class="badge">' + d.badge + '</span></div><div class="dots"><i></i><i class="on"></i><i></i><i></i></div></div><div class="info"><h3>' + d.title + '</h3><div class="meta"><span class="price">' + p + '</span><span class="loc"><picture><source media="(max-width:899px)" srcset="assets/pin-card-m.svg"><img src="assets/pin-card.svg" alt=""></picture>' + d.loc + '</span></div></div></article>';
};
window.bindCards = function (root) {
  [].forEach.call(root.querySelectorAll('.pcard'), function (c) {
    c.addEventListener('click', function (e) { if (e.target.closest('.heart')) return; location.href = c.getAttribute('data-href'); });
  });
  [].forEach.call(root.querySelectorAll('.pcard .heart'), function (b) {
    b.addEventListener('click', function (e) { e.stopPropagation(); b.classList.toggle('on'); });
  });
};
