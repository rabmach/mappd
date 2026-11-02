# mappd — how you livin'?

a map of where not to live in america, and who's turning it around.

## what it is
- interactive map of 196 places with data-backed flags on water quality, environmental hazards, education, poverty, infrastructure, governance, and climate
- "Building the Future" entries showing places that are fixing things
- the story: `story.html` — the six months the map didn't have, told plainly, with the therapies that landed riding beside the ledger of losses
- civic action tool: form letters to representatives for places near you
- literacy dashboard: PIAAC scores for all 50 states + DC
- sortable data table with every entry

## files
- `index.html` — main map
- `app.js` — map logic, filters, search, civic action
- `places-data.js` — all entry data (TAG_COLORS, SEV, PLACES array)
- `story.html` — the story page (hand-formatted prose — genuine paragraphs, lists, no generator)
- `data.html` — sortable/filterable table of all entries
- `literacy.html` — PIAAC literacy dashboard with interactive state grid
- `state.html` — per-state detail page (literacy + mappd entries)
- `sources.json` — source URLs for fact-checking
- `check-sources.sh` — verifies source URLs are still live (cron: sundays 07:07)
- `watch-piaac.sh` — sha256 fingerprint of NCES's PIAAC release page; fires a marker when the state/county estimates land (cron: monthly 1st, 08:08)
- `add-entry.sh` — template for adding new entries

## keeping it current

### add a new entry
```bash
bash add-entry.sh  # prints a template
# fill it in, paste into places-data.js
git add . && git commit -m "add [place name]" && git push
```

### check if sources are still live
```bash
bash check-sources.sh
```

### update literacy data
`watch-piaac.sh` (cron, monthly) fingerprints NCES's release page and waits for the PIAAC Cycle 2 state/county estimates — national scores already refreshed (258, down 12).&nbsp;  When the watch fires, edit the STATES array in `literacy.html` and `state.html`.

## paint laws (so new entries wear the right dot)
tags paint, in order of precedence: `future` → blue #0288d1 (outranks everything); `reversal`/`improving` → the comeback cameo, pink #e91e63; otherwise severity — extreme #7f1d1d darkest red, severe #c62828 red, moderate #ef6c00 orange.&nbsp;  paint is law; the ledger decides by tag, not by vibe.

## hosting
github pages: repo settings → pages → main branch → root.&nbsp;  live in 30 seconds.

## data sources
EPA, CDC, NCES, PIAAC, Census, GAO, UNC Sheps Center, local reporting
