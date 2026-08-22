#!/bin/bash
set -euo pipefail
# add-entry.sh — template for adding a new place to mappd
# Usage: paste this into places-data.js inside the PLACES array

cat << 'ENTRY'
{
  name:"",
  state:"",
  lat:0.0,
  lng:0.0,
  tags:[],
  severity:"moderate",
  reason:"",
  reversal:"",
  stats:{},
  what_changed:"",
},
ENTRY

echo ""
echo "Fill in the fields:"
echo "  name       — city or county name"
echo "  state      — two-letter state code"
echo "  lat/lng    — coordinates (google maps: right-click → What's here?)"
echo "  tags       — from TAG_COLORS keys: water, lead, infra, poor, future, reversal, etc."
echo "  severity   — extreme | severe | moderate"
echo "  reason     — the problem, with stats. HTML ok (<strong>, <span class='rev'>)"
echo "  reversal   — what's being done, if anything. empty string if none."
echo "  stats      — key:value pairs. 3-4 max."
echo "  what_changed — one sentence: problem → action → result"
echo ""
echo "After adding, run: bash check-sources.sh"
echo "Then commit: git add . && git commit -m 'add [name]' && git push"
