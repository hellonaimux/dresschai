/* Sample listings. Later this file is replaced by real data from the backend/database. */
(function () {
  var AREA = { Dhaka: 'Dhanmondi, Dhaka', Chattagram: 'GEC Circle, Chattagram', Rajshahi: 'Shaheb Bazar, Rajshahi', Sylhet: 'Zindabazar, Sylhet' };
  var REGION = { Dhaka: 'Dhaka', Chattagram: 'Chattogram', Rajshahi: 'Rajshahi', Sylhet: 'Sylhet' };
  var SELLERS = [
    { name: 'Fatiama Rahman', city: 'Dhaka', avatar: 'avatar-1.png', rating: 4.8, reviews: 3, listings: 5, since: 2023 },
    { name: 'Nadia Khan', city: 'Chottogram', avatar: 'avatar-2.png', rating: 4.7, reviews: 5, listings: 8, since: 2022 },
    { name: 'Ruma Begum', city: 'Sylhet', avatar: 'avatar-3.png', rating: 4.9, reviews: 2, listings: 3, since: 2024 }
  ];
  var CATS = ['Weeding Wear', 'Party Wear', 'Saree', 'Lehenga', "Men's Tuxedo", 'Kids Wear'];
  var CONDS = ['Like New', 'Never Wear', 'Good', 'Average'];
  var SIZES = ['26', '28', '32', '36', '40', '42'];
  var BRANDS = ['Aarong', 'Yellow', 'Ecstasy', 'Cats Eye', 'Anjans', 'Richman'];
  // image, price text, price, card location  (order follows the Figma listing page)
  var base = [
    ['lst-1.png', 'TK. 1280', 1280, 'Dhaka'], ['lst-2.png', '৳ 1800', 1800, 'Chattagram'], ['lst-3.png', '৳ 800', 800, 'Rajshahi'], ['lst-4.png', '৳ 2300', 2300, 'Sylhet'],
    ['lst-3.png', '৳ 800', 800, 'Rajshahi'], ['lst-4.png', '৳ 2300', 2300, 'Sylhet'], ['lst-2.png', '৳ 1800', 1800, 'Chattagram'], ['lst-1.png', 'TK. 1280', 1280, 'Dhaka'],
    ['lst-4.png', '৳ 2300', 2300, 'Sylhet'], ['lst-2.png', '৳ 1800', 1800, 'Chattagram'], ['lst-1.png', 'TK. 1280', 1280, 'Dhaka'], ['lst-3.png', '৳ 800', 800, 'Rajshahi'],
    ['lst-2.png', '৳ 1800', 1800, 'Chattagram'], ['lst-1.png', 'TK. 1280', 1280, 'Dhaka'], ['lst-3.png', '৳ 800', 800, 'Rajshahi'], ['lst-4.png', '৳ 2300', 2300, 'Sylhet'],
    ['lst-1.png', 'TK. 1280', 1280, 'Dhaka'], ['lst-2.png', '৳ 1800', 1800, 'Chattagram'], ['lst-3.png', '৳ 800', 800, 'Rajshahi'], ['lst-4.png', '৳ 2300', 2300, 'Sylhet'],
    ['lst-2.png', '৳ 1800', 1800, 'Chattagram'], ['lst-4.png', '৳ 2300', 2300, 'Sylhet'], ['lst-3.png', '৳ 800', 800, 'Rajshahi'], ['lst-1.png', 'TK. 1280', 1280, 'Dhaka']
  ];
  var DESC = 'A beautifully kept dress, worn only 1-2 times. No stains or tears, freshly cleaned and stored carefully. Will be re-checked before delivery. Price is slightly negotiable.';
  var D = base.map(function (b, i) {
    var floral = b[0] === 'lst-2.png';
    return {
      id: i + 1, img: b[0], priceText: b[1], price: b[2], loc: b[3], region: REGION[b[3]], area: AREA[b[3]],
      title: 'Polo Sweater in Cotton Merino', detailTitle: floral ? 'Casual Summer Dress' : 'Polo Sweater in Cotton Merino',
      cat: floral ? 'Weeding Wear' : CATS[(i * 5) % CATS.length], cond: floral ? 'Like New' : CONDS[(i * 3) % CONDS.length],
      size: floral ? '36' : SIZES[(i * 7) % SIZES.length], brand: floral ? 'Aarong' : BRANDS[i % BRANDS.length],
      badge: 'Excelent', posted: floral ? '1 day ago' : (i % 6 + 1) + ' days ago', desc: DESC, seller: SELLERS[i % SELLERS.length]
    };
  });
  window.DRESSES = D;
  window.DC = { CATS: CATS, byId: function (id) { for (var i = 0; i < D.length; i++) if (D[i].id === +id) return D[i]; return null; } };
})();
