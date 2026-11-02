#!/bin/sh
# Serve dist the way GitHub project pages does: http://127.0.0.1:<port>/greyhat-site/
set -eu
port="${1:-4491}"
root="$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)"
cd "$root"
BASE_PATH=/greyhat-site/ npm run build
stage="$(mktemp -d)"
ln -s "$root/dist" "$stage/greyhat-site"
test -f "$stage/greyhat-site/index.html"
exec python3 -m http.server "$port" --directory "$stage" --bind 127.0.0.1
