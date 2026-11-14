#!/bin/bash
# Run inside the dresschai folder (the one with index.html and assets/). Figma links expire after 7 days.
mkdir -p assets
P="https://www.figma.com/api/mcp/asset/402e5c07-c138-46fa-a3c7-962aa52effb0"
H="https://www.figma.com/api/mcp/asset/4b826d93-a685-4892-a83a-706b926ea3b1"
get() { curl -fL --retry 3 -s -o "assets/$1" "$2" && echo "ok  $1" || echo "FAIL $1"; }
# location popup
get lp-back.svg "$P/5445b.svg"; get lp-x.svg "$P/30101.svg"; get lp-search.svg "$P/f7b00.svg"; get lp-next.svg "$P/5574b.svg"
# homepage: saved (orange) heart and carousel arrows
get heart-on.svg "$H/46c60.svg"; get car-left.svg "$H/73b08.svg"; get car-right.svg "$H/a6667.svg"
echo "Done."
