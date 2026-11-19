#!/bin/bash
# Run inside the dresschai folder (the one with index.html and assets/). Figma links expire after 7 days.
mkdir -p assets
get() { curl -fL --retry 3 -s -o "assets/$1" "$2" && echo "ok  $1" || echo "FAIL $1"; }
F="https://www.figma.com/api/mcp/asset/bc9ff255-69ac-43c6-9cad-67c5d5637e7c"    # featured
C="https://www.figma.com/api/mcp/asset/4d6ca526-4186-4769-8d51-54bee0bf87b2"    # clothings
W="https://www.figma.com/api/mcp/asset/3fce5995-90ca-4f3c-abbb-4aff87cd539e"    # weeding
E="https://www.figma.com/api/mcp/asset/fc62358e-bc06-456e-9620-a46546b26f69"    # ethnic wear
S="https://www.figma.com/api/mcp/asset/759c0dbc-19c2-45e1-90a6-f11fd597aef0"    # shoes
T="https://www.figma.com/api/mcp/asset/5a02263e-a561-4c58-b5da-3e84d159791a"    # sell steps
get n-feat-1.png "$F/efd05.png"; get n-feat-2.png "$F/e4733.png"; get n-feat-3.png "$F/13a5b.png"; get n-feat-4.png "$F/a4e71.png"; get n-feat-5.png "$F/85ae6.png"
get n-clo-1.png "$C/173b5.png"; get n-clo-2.png "$C/a6014.png"; get n-clo-3.png "$C/0260e.png"; get n-clo-4.png "$C/b97c0.png"; get n-clo-5.png "$C/9e13d.png"
get n-wed-1.png "$W/047ce.png"; get n-wed-2.png "$W/f86fc.png"; get n-wed-3.png "$W/0cf75.png"; get n-wed-4.png "$W/81158.png"; get n-wed-5.png "$W/43ff0.png"
get n-eth-1.png "$E/5d461.png"; get n-eth-2.png "$E/27a48.png"; get n-eth-3.png "$E/35758.png"; get n-eth-4.png "$E/116e1.png"; get n-eth-5.png "$E/4415e.png"
get n-sho-1.png "$S/ee243.png"; get n-sho-2.png "$S/57db8.png"; get n-sho-3.png "$S/4fa5c.png"; get n-sho-4.png "$S/3331b.png"; get n-sho-5.png "$S/e8d4d.png"
get n-step-1.png "$T/6dacb.png"; get n-step-2.png "$T/c2387.png"; get n-step-3.png "$T/bb17d.png"
echo "Done."
