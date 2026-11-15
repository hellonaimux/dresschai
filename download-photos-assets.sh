#!/bin/bash
# Run inside the dresschai folder (the one with index.html and assets/). Figma links expire after 7 days.
mkdir -p assets
get() { curl -fL --retry 3 -s -o "assets/$1" "$2" && echo "ok  $1" || echo "FAIL $1"; }
F="https://www.figma.com/api/mcp/asset/139a75a5-e80a-44ce-8914-7bacab74cd7a"   # featured
C="https://www.figma.com/api/mcp/asset/e093ef0b-eb42-4a95-8722-b03c6ed7e1eb"   # clothings
C6="https://www.figma.com/api/mcp/asset/1acad9ff-535f-43ff-b75a-7493dcae490d"
W="https://www.figma.com/api/mcp/asset/ab89aafc-ba71-4b0a-a538-f7582ce88e94"   # weeding
W6="https://www.figma.com/api/mcp/asset/5b2b7be2-0f8f-47e5-99fb-3b6b98f9179b"
B="https://www.figma.com/api/mcp/asset/8c427770-7cb8-431d-ae55-054eca4d4c1b"   # bags
B6="https://www.figma.com/api/mcp/asset/bc42bd4c-6ab4-4869-83cd-75f91e953ecc"
S="https://www.figma.com/api/mcp/asset/f009a365-142d-40f1-aa30-81c6d5ddc2f5"   # shoes
S6="https://www.figma.com/api/mcp/asset/31535117-b55c-4277-9383-ceef68e7ec21"
get p-feat-1.png "$F/57f08.png"; get p-feat-2.png "$F/d1fe5.png"; get p-feat-3.png "$F/91393.png"; get p-feat-4.png "$F/2b054.png"; get p-feat-5.png "$F/ad848.png"
get p-clo-1.png "$C/29bb6.png"; get p-clo-2.png "$C/43f8d.png"; get p-clo-3.png "$C/eda58.png"; get p-clo-4.png "$C/c1a94.png"; get p-clo-5.png "$C/7a210.png"; get p-clo-6.png "$C6/ec28a.png"
get p-wed-1.png "$W/58219.png"; get p-wed-2.png "$W/e91b5.png"; get p-wed-3.png "$W/84c2b.png"; get p-wed-4.png "$W/70c8a.png"; get p-wed-5.png "$W/705aa.png"; get p-wed-6.png "$W6/bccad.png"
get p-bag-1.png "$B/64d6d.png"; get p-bag-2.png "$B/f767a.png"; get p-bag-3.png "$B/c1324.png"; get p-bag-4.png "$B/5fea5.png"; get p-bag-5.png "$B/ed220.png"; get p-bag-6.png "$B6/24bfe.png"
get p-sho-1.png "$S/16b6c.png"; get p-sho-2.png "$S/895c7.png"; get p-sho-3.png "$S/2b4ca.png"; get p-sho-4.png "$S/ce628.png"; get p-sho-5.png "$S/03a20.png"; get p-sho-6.png "$S6/4e563.png"
echo "Done."
