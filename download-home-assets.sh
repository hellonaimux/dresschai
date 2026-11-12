#!/bin/bash
# Run inside the dresschai folder (the one with index.html and assets/). Figma links expire after 7 days.
mkdir -p assets
D="https://www.figma.com/api/mcp/asset/6f259790-c23f-453a-823b-257e198cff15"
M="https://www.figma.com/api/mcp/asset/e03d6275-ebd2-4046-98b0-9dcc88bf9f18"
get() { curl -fL --retry 3 -s -o "assets/$1" "$2" && echo "ok  $1" || echo "FAIL $1"; }
# hero + logo + header icons
get hero-img.png "$D/66e63.png"; get hero-mask.png "$M/ba02f.png"; get logo-home.svg "$D/85d44.svg"
get user-h.svg "$D/7ad0c.svg"; get heart-h.svg "$D/2c053.svg"
get search-btn-h.svg "$D/db127.svg"; get search-btn-hm.svg "$M/caf9e.svg"
# trust bar
get t-banknote.svg "$D/861c8.svg"; get t-user-check.svg "$D/cb59e.svg"; get t-van.svg "$D/06691.svg"; get t-shirt.svg "$D/95e2b.svg"
get t-banknote-m.svg "$M/888e8.svg"; get t-user-check-m.svg "$M/cd15d.svg"; get t-van-m.svg "$M/66b23.svg"; get t-shirt-m.svg "$M/f7dc6.svg"
get t-line.svg "$D/5000b.svg"
# categories
get hc-vacation.png "$D/52556.png"; get hc-wedding.png "$D/0c8a6.png"; get hc-party.png "$D/06462.png"; get hc-ethnic.png "$D/baaee.png"
get hc-winter.png "$D/3392b.png"; get hc-summer.png "$D/00426.png"; get hc-casual.png "$D/b31c7.png"; get hc-mens.png "$D/0abe8.png"
# featured
get home-feat.png "$D/08da9.png"; get pin-h.svg "$D/89876.svg"
echo "Done."
