#!/bin/bash
# Run inside the dresschai folder (the one with index.html and assets/). Figma links expire after 7 days.
mkdir -p assets
M="https://www.figma.com/api/mcp/asset/2a62379a-18c7-431f-a97f-b4dd49376c01"
get() { curl -fL --retry 3 -s -o "assets/$1" "$2" && echo "ok  $1" || echo "FAIL $1"; }
get arrow-12.svg "$M/15338.svg"
get search-active.svg "$M/7258f.svg"
echo "Done."
