# mappd — how you livin'?

a map of where not to live in america, and who's turning it around.

## what it is
- interactive map of 186 places with data-backed flags on water quality, environmental hazards, education, poverty, infrastructure, governance, and climate
- "Building the Future" entries showing places that are fixing things
- civic action tool: form letters to representatives for places near you
- literacy dashboard: PIAAC scores for all 50 states + DC
- sortable data table with every entry

## files
- `index.html` — main map
- `app.js` — map logic, filters, search, civic action
- `places-data.js` — all entry data (TAG_COLORS, SEV, PLACES array)
- `data.html` — sortable/filterable table of all entries
- `literacy.html` — PIAAC literacy dashboard with interactive state grid
- `state.html` — per-state detail page (literacy + mappd entries)
- `sources.json` — source URLs for fact-checking
- `check-sources.sh` — verifies source URLs are still live
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
edit the STATES array in `literacy.html` and `state.html` when new PIAAC data drops

## hosting
github pages: repo settings → pages → main branch → root. live in 30 seconds.

## data sources
EPA, CDC, NCES, PIAAC, Census, GAO, UNC Sheps Center, local reporting
