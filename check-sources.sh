#!/bin/bash
set -euo pipefail
# check-sources.sh — verify source URLs are still live
# Run from the mappd directory: ./check-sources.sh

SOURCES="sources.json"
if [ ! -f "$SOURCES" ]; then
  echo "No sources.json found."
  exit 1
fi

echo "Checking source URLs..."
echo "---"

# Extract all URLs from sources.json (skip _meta)
urls=$(python3 -c "
import json
with open('$SOURCES') as f:
    data = json.load(f)
for key, val in data.items():
    if key.startswith('_'): continue
    if isinstance(val, list):
        for u in val: print(u)
    elif isinstance(val, str):
        print(val)
")

total=0
live=0
dead=0
dead_list=""

while IFS= read -r url; do
  [ -z "$url" ] && continue
  total=$((total + 1))
  code=$(curl -s -o /dev/null -w "%{http_code}" -L --max-time 10 "$url" 2>/dev/null || echo "000")
  if [ "$code" -ge 200 ] && [ "$code" -lt 400 ]; then
    live=$((live + 1))
    echo "  ✓ $code $url"
  else
    dead=$((dead + 1))
    dead_list="$dead_list\n  ✗ $code $url"
    echo "  ✗ $code $url"
  fi
done <<< "$urls"

echo "---"
echo "Total: $total | Live: $live | Dead: $dead"

if [ "$dead" -gt 0 ]; then
  echo ""
  echo "Dead links need attention:"
  echo -e "$dead_list"
  exit 1
fi

echo "All sources live."
