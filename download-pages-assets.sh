#!/bin/bash
# Run inside the dresschai folder (the one with index.html and assets/). Figma links expire after 7 days.
mkdir -p assets
LD="https://www.figma.com/api/mcp/asset/e3ac3133-849d-4ba0-b994-2a968524a7c0"
LM="https://www.figma.com/api/mcp/asset/5f6e013b-4931-4f88-906d-4ed87260de2e"
DD="https://www.figma.com/api/mcp/asset/0f302b8d-c45e-4961-8c97-e2077b8baffb"
RD="https://www.figma.com/api/mcp/asset/0aefb7ba-72db-48ab-9030-72f459951359"
get() { curl -fL --retry 3 -s -o "assets/$1" "$2" && echo "ok  $1" || echo "FAIL $1"; }
# listing
get lst-1.png "$LD/00bf0.png"; get lst-2.png "$LD/783ce.png"; get lst-3.png "$LD/4fd90.png"; get lst-4.png "$LD/94d4d.png"
get chevron-down-sm.svg "$LD/5c0f7.svg"; get move-horizontal.svg "$LD/f5afb.svg"
get sliders.svg "$LM/11a1d.svg"; get heart-card-m.svg "$LM/26395.svg"; get pin-card-m.svg "$LM/e7826.svg"
# details
get pin-gray.svg "$DD/3f75a.svg"; get whatsapp-w.svg "$DD/22588.svg"; get phone.svg "$DD/0d4c0.svg"; get star.svg "$DD/74970.svg"
# related dresses
get lst-5.png "$RD/938ce.png"; get lst-6.png "$RD/c1bc6.png"
echo "Done."
