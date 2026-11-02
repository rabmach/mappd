#!/bin/bash
set -euo pipefail
# watch-piaac.sh — watch for the PIAAC Cycle 2 state/county estimates release.
# NCES says they land "in 2026". The watch fingerprints (sha256) the exact
# section of NCES's data-files page that lists state/county estimates; when
# that fingerprint CHANGES, it raises the marker. No phrase-guessing, so it
# cannot fire early — any edit to that section (likely the release) rings it.
LOGDIR="${HOME}/.local/state"
HASHFILE="$LOGDIR/piaac-hash"
mkdir -p "$LOGDIR"
url="https://nces.ed.gov/surveys/piaac/datafiles.asp"
page="$(curl -fsSL --max-time 60 "$url" 2>/dev/null || true)"
if [ -z "$page" ]; then
  echo "fetch failed (offline? site down?) — try again later"
  exit 0
fi
snippet="$(printf '%s\n' "$page" | grep -i -A3 'state and county estimates' | head -10 || true)"
if [ -z "$snippet" ]; then
  echo "warning: 'state and county estimates' text not found on page — page changed shape, inspect manually"
  printf '%s\n' "$page" | grep -io 'county[a-z ]*estimates[^<]*' | head -3 || true
  exit 0
fi
hash="$(printf '%s\n' "$snippet" | sha256sum | cut -d' ' -f1)"
ts="$(date '+%F %T')"
if [ -f "$HASHFILE" ] && ! cmp -s "$HASHFILE" <(printf '%s\n' "$hash"); then
  echo "$ts  *** CHANGED *** — the state/county section moved. PIAAC Cycle 2 may have landed."
  cp -- "$HASHFILE" "$HASHFILE.bak" 2>/dev/null || true
  printf '%s\n' "PIAAC ROUND 2 WATCH FIRED at $ts. NCES data-files page changed.
See: $url
Then refresh mappd's literacy layer (all state scores, every county).
Current snippet:
$snippet" > "$LOGDIR/PIAAC-ROUND2-READY"
else
  echo "$ts  not yet — NCES unchanged since last check"
fi
printf '%s\n' "$hash" > "$HASHFILE"
