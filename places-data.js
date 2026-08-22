var TAG_COLORS={
  "air":{bg:"#7f8c8d",fg:"#d5d8dc",label:"Air Quality"},
  "brain-drain":{bg:"#6c3483",fg:"#c39bd3",label:"Brain Drain"},
  "cancer":{bg:"#922b21",fg:"#f1948a",label:"Cancer Clusters"},
  "decline":{bg:"#7f8c8d",fg:"#d5d8dc",label:"Decline"},
  "economic":{bg:"#b7950b",fg:"#f9e79f",label:"Economic Distress"},
  "educ":{bg:"#b7950b",fg:"#f9e79f",label:"Education Crisis"},
  "env":{bg:"#1e8449",fg:"#82e0aa",label:"Environmental"},
  "farm":{bg:"#196f3d",fg:"#82e0aa",label:"Farm/Agriculture"},
  "flood":{bg:"#1a5276",fg:"#7fb3d8",label:"Flooding"},
  "flooding":{bg:"#1a5276",fg:"#7fb3d8",label:"Flooding"},
  "food":{bg:"#196f3d",fg:"#82e0aa",label:"Food Desert"},
  "fracking":{bg:"#935116",fg:"#f0b27a",label:"Fracking"},
  "future":{bg:"#0e6251",fg:"#76d7c4",label:"Building the Future"},
  "governance":{bg:"#922b21",fg:"#f5b7b1",label:"Governance"},
  "heat":{bg:"#b03a2e",fg:"#f1948a",label:"Extreme Heat"},
  "hurricane":{bg:"#1b4f72",fg:"#aed6f1",label:"Hurricane Risk"},
  "improving":{bg:"#0e6251",fg:"#76d7c4",label:"Improving"},
  "industrial":{bg:"#6c3483",fg:"#c39bd3",label:"Industrial"},
  "infra":{bg:"#6c3483",fg:"#c39bd3",label:"Infrastructure"},
  "lead":{bg:"#7d3c98",fg:"#d2b4de",label:"Lead Exposure"},
  "literacy":{bg:"#6c3483",fg:"#d2b4de",label:"Literacy"},
  "medicaid":{bg:"#1a5276",fg:"#85c1e9",label:"Medicaid"},
  "mental-health":{bg:"#6c3483",fg:"#d2b4de",label:"Mental Health"},
  "ozone":{bg:"#1a5276",fg:"#85c1e9",label:"Ozone"},
  "pfas":{bg:"#1b4f72",fg:"#85c1e9",label:"PFAS Contamination"},
  "poor":{bg:"#7f8c8d",fg:"#d5d8dc",label:"Poverty"},
  "policy-cut":{bg:"#922b21",fg:"#f5b7b1",label:"Policy Cuts"},
  "reversal":{bg:"#0e6251",fg:"#76d7c4",label:"Reversing Fortune"},
  "rural":{bg:"#7f8c8d",fg:"#aeb6bf",label:"Rural"},
  "school-closure":{bg:"#b03a2e",fg:"#f1948a",label:"School Closures"},
  "seismic":{bg:"#922b21",fg:"#f5b7b1",label:"Seismic Risk"},
  "toxic":{bg:"#7d3c98",fg:"#d2b4de",label:"Toxic Sites"},
  "water":{bg:"#1a5276",fg:"#85c1e9",label:"Water Quality"},
  "water-contam":{bg:"#1a5276",fg:"#85c1e9",label:"Water Contamination"},
  "water-infra":{bg:"#7f8c8d",fg:"#d5d8dc",label:"Water Infrastructure"},
  "water-scarce":{bg:"#b03a2e",fg:"#f5b7b1",label:"Water Scarcity"}
};

var SEV={extreme:"#8b0000",severe:"#c0392b",moderate:"#e74c3c"};

var PLACES=[
{
  name:"Flint",state:"MI",lat:43.0125,lng:-83.6875,
  tags:["water","lead","infra","reversal","water-contam"],
  severity:"extreme",
  reason:"<strong>Lead-contaminated water since 2014.</strong> Switch to Flint River without corrosion control leached lead into drinking water. 12 Legionnaires' deaths. 100,000 residents exposed. Blood lead levels in children doubled.",
  reversal:"<span class='rev'>REVERSING (2024-2026):</span> All 11,600 lead service lines replaced by July 2026 ($140M project, 31,930 properties inspected). 10 consecutive years of compliance with federal lead standards — 90th percentile at 3 ppb (action level: 15). $1B+ total spent on remediation. Filters still available. Trust remains damaged but the physical system is measurably the cleanest it's been in generations.",
  stats:{population:"~95,000",lead_lines_replaced:"11,600",project_cost:"$140M (lines) / $1B+ total",current_lead:"3 ppb (90th %ile)",compliance:"10 years",status:"RECOVERING"},
  what_changed:"Lead lines leached poison for years → 11,600 lines replaced ($140M) → 10 years of compliance, 3 ppb lead",
},
{
  name:"Jackson",state:"MS",lat:32.2988,lng:-90.1848,
  tags:["water","infra","poor","flood","reversal","water-infra"],
  severity:"extreme",
  reason:"<strong>15+ unresolved federal health violations. Lowest safety score (0/100) of any major US water system.</strong> Boil-water notices routine. 84% people of color, 50% below 200% FPL. State took over in 2022.",
  reversal:"<span class='rev'>REVERSING (2023-2026):</span> JXN Water (third-party utility) took over under federal court order. $600M in federal funding. System is 'operationally stable' per EPA Q4 2025 report. No E. coli in 16-test sample (April 2026). Lead compliance reached for first time. Water production down 20%. Pressures restored. Rates rising though — $74M in unpaid bills. A recovery, but fragile. ALSO: <strong>Cooperation Jackson</strong> (est. 2014) — network of worker cooperatives building a solidarity economy in America's poorest state. Member co-ops: Green Team (lawn care), Freedom Farms (organic veg), Eversville Design & Print, Center for Community Production (3D printing). Revenue: $2.18M (2022). 10-year-old cooperative incubator training Black and Latino residents in cooperative economics. The most radical cooperative project in the US — building an alternative economy while the city's water system collapses.",
  stats:{population:"~138,000",safety_score_was:"0/100",management:"JXN Water (federal court)",funding:"$600M federal",lead:"compliant 2026",cooperation_jackson:"worker co-ops since 2014",status:"RECOVERING (fragile) + COOPERATIVE ECONOMY"},
  what_changed:"Worst water system in America (0/100 safety) → JXN Water took over under federal court → operationally stable, E. coli-free in testing",
},
{
  name:"Newark",state:"NJ",lat:40.7357,lng:-74.1724,
  tags:["water","lead","infra","reversal","water-contam"],
  severity:"severe",
  reason:"<strong>Widespread lead contamination from 100+ year-old service lines.</strong> 22 health-based violations. Water tested above 15 ppb in many homes. Safety score 5/100.",
  reversal:"<span class='rev'>REVERSING (2019-2024):</span> Replaced ALL 23,190 lead service lines in just 3 years — fastest major-city replacement in US history. Current water tests: 0 ppb lead. NJ DEP audit confirmed 93.9%+ confidence all lead lines gone. Called 'the national model' by EPA. Biden admin invited Newark director to announce national lead pipe rule. Residual risk remains in pre-1986 building plumbing.",
  stats:{population:"~294,000",lead_lines_replaced:"23,190",timeline:"3 years (2019-2022)",current_lead:"0 ppb",status:"RECOVERED"},
  what_changed:"22 health violations, lead in water → Replaced ALL 23,190 lead lines in 3 years → 0 ppb lead, called the national model by EPA",
},
{
  name:"Cahokia Heights",state:"IL",lat:38.5703,lng:-90.0781,
  tags:["water","infra","flooding","poor","water-infra"],
  severity:"extreme",
  reason:"<strong>Sewage floods streets for decades. E. coli found in drinking water by community testers (8 of 118 samples).</strong> 1/3 live in poverty. Aging sewer system can't handle rain. City denies the problem.",
  stats:{population:"~12,000",water_issue:"E. coli in tap water",sewage:"Recurring overflow",poverty:"~33%"}
},
{
  name:"Shreveport",state:"LA",lat:32.5252,lng:-93.7502,
  tags:["water","infra","env","water-infra"],
  severity:"severe",
  reason:"<strong>68K exposure burden — 4th worst water system in the US.</strong> 20 health violations + 14 treatment-technique violations in 5 years. 7 unresolved. 61% people of color.",
  stats:{population:"~160,000",exposure_burden:"68K (rank #4)",health_violations:"20 (5yr)"}
},
{
  name:"Prichard",state:"AL",lat:30.7388,lng:-88.1306,
  tags:["water","infra","poor","water-infra"],
  severity:"extreme",
  reason:"<strong>Loses 60%+ of drinking water to leaking pipes.</strong> Water pools in streets for weeks. Homes burn because hydrants have no pressure. 30%+ poverty.",
  stats:{population:"~22,000",water_loss:">60%",poverty:"~30%"}
},
{
  name:"Brady",state:"TX",lat:31.1349,lng:-99.3351,
  tags:["water","infra","poor","water-infra"],
  severity:"severe",
  reason:"<strong>94 unresolved health violations — highest in the US.</strong> 5,000 people. 112 violations in 5 years. System that cannot fix itself.",
  stats:{population:"~5,000",unresolved_violations:"94",total_violations:"112 (5yr)"}
},
{
  name:"Las Vegas",state:"NM",lat:35.5939,lng:-105.2239,
  tags:["water","infra","poor","water-infra"],
  severity:"severe",
  reason:"<strong>46 health violations, 27 unresolved.</strong> 84% people of color, 45% below poverty.",
  stats:{population:"~14,000",unresolved_violations:"27",poc:"84%"}
},
{
  name:"Truth or Consequences",state:"NM",lat:33.1284,lng:-107.2528,
  tags:["water","infra","poor","water-infra"],
  severity:"severe",
  reason:"<strong>9 unresolved health violations. 57% below 200% FPL.</strong> Desert town with broken water system.",
  stats:{population:"~6,000",unresolved_violations:"9",poverty:"57% (below 200% FPL)"}
},
{
  name:"Cancer Alley",state:"LA",lat:30.2131,lng:-91.1784,
  tags:["cancer","env","air"],
  severity:"extreme",
  reason:"<strong>85-mile stretch, 200+ petrochemical plants. Cancer risk up to 826/million — 27x EPA threshold.</strong> Ethylene oxide, chloroprene, formaldehyde. Fence-line communities predominantly Black. Government models underestimate risk by 10x.",
  stats:{length:"85 miles",cancer_risk:"up to 826/million (27x EPA limit)",facilities:"200+"}
},
{
  name:"Reserve",state:"LA",lat:30.0738,lng:-90.5577,
  tags:["cancer","env","air"],
  severity:"extreme",
  reason:"<strong>Highest cancer risk from industrial air pollution in the US.</strong> Denka facility emits chloroprene. Cancer risk 50x national average near plant.",
  stats:{population:"~10,000",cancer_risk:"50x national average (near plant)"}
},
{
  name:"Port Arthur",state:"TX",lat:29.8627,lng:-93.9283,
  tags:["env","flood","poor"],
  severity:"extreme",
  reason:"<strong>Majority-Black city surrounded by refineries. Catastrophic flooding. Chemical plant explosions.</strong> Superfund sites. Sacrifice zone.",
  stats:{population:"~55,000",refineries:"surrounded",superfund_sites:"multiple"}
},
{
  name:"Phoenix",state:"AZ",lat:33.4484,lng:-112.0740,
  tags:["heat","water","water-scarce"],
  severity:"extreme",
  reason:"<strong>20-30% Colorado River cuts coming — Stage 2 Water Warning under consideration for late 2026.</strong> ~40% of Phoenix water from Colorado River (via CAP canal). Expected cuts: 120,000-130,000 AF/year. Phoenix has 700,000 AF stored underground as backup. Neighbor Scottsdale: 70% Colorado River dependent, could lose 80% of supply. Cave Creek: >90% CR reliance — potentially the hardest-hit community in the West. $350M direct potable reuse plant under construction (operational ~2029). Post-2028 federal framework claims authority to force massive cuts across Lower Basin. Arizona's not running out of water, but it IS running out of cheap water — infrastructure costs and prices will escalate dramatically. 4+ million people in metro area. BUT: Phoenix is also building the future — Valley Metro Light Rail expanded to 35+ miles, South Central Extension opened June 2025. Transit-adjacent business starts up 88%. Nearby <strong>Culdesac Tempe</strong>: first car-free neighborhood in the US — 761 apartments, ZERO parking spaces, $200M project, $3K/yr mobility budget for residents. Light rail every 10 minutes. Proved car-free living works in the Sun Belt.",
  stats:{population:"~4.1M (metro)",cr_dependency:"~40% of supply",expected_cuts:"120,000-130,000 AF/yr",light_rail:"35+ miles, expanding",culdesac_tempe:"761 units, zero parking, car-free",status:"TIER 1 SHORTAGE but BUILDING TRANSIT"}
},
{
  name:"Yuma",state:"AZ",lat:32.6927,lng:-114.6277,
  tags:["water","heat","env","water-scarce"],
  severity:"severe",
  reason:"<strong>16 health violations. Extreme heat 110°F+. Colorado River water being dramatically reduced.</strong>",
  stats:{population:"~90,000",health_violations:"16 (5yr)"}
},
{
  name:"Imperial County",state:"CA",lat:32.8421,lng:-115.5694,
  tags:["heat","water","env","poor","water-scarce"],
  severity:"severe",
  reason:"<strong>America's poorest metro area — and sits on the most contested water in the West.</strong> Imperial IID holds the largest single Colorado River entitlement: Present Perfected Rights, ~3.1M AF/year — senior to all US states except Mexico in some readings. Since 2003 QSA transfers, ~267K AF/year flows to San Diego and Metropolitan. San Diego now holds ~50K AF surplus it wants to sell interstate. June 2026 MOU: San Diego, MWD, SNWA, Arizona agencies, and Bureau signed framework for interstate water exchanges ('paper water'). IID NOT a signatory — insists California's needs met first. Imperial Valley produces a large share of America's winter vegetables — any reduction threatens the 'Salad Bowl of America.' Reduced irrigation return flows accelerate Salton Sea decline — shrinking lakebed exposes arsenic, selenium, and other contaminants as toxic dust. The most senior water right in the basin is now the most politically fought-over.",
  stats:{population:"~180,000",water_entitlement:"3.1M AF/yr (senior rights)",qsa_transfers:"267K AF/yr to San Diego",salton_sea:"shrinking, toxic dust",winter_veg_share:"major US source",june_2026_mou:"interstate water exchange framework",status:"WATER RIGHTS BATTLE — agricultural economy at stake"}
},
{
  name:"San Bernardino",state:"CA",lat:34.1083,lng:-117.2898,
  tags:["env","water","heat","water-scarce"],
  severity:"severe",
  reason:"<strong>F water grade. Wildfire risk extreme. Worst air quality basin in US.</strong> Arsenic and disinfection byproducts in water.",
  stats:{population:"~222,000",water_score:"F",wildfire_risk:"extreme"}
},
{
  name:"Tucson",state:"AZ",lat:32.2226,lng:-110.9747,
  tags:["water","heat","env","water-scarce"],
  severity:"moderate",
  reason:"<strong>Aquifer depletion. PFAS near Davis-Monthan AFB. Extreme heat increasing. Arsenic in groundwater.</strong>",
  stats:{population:"~540,000",aquifer:"declining"}
},
{
  name:"Miami-Dade County",state:"FL",lat:25.7617,lng:-80.1918,
  tags:["flood","env","heat"],
  severity:"severe",
  reason:"<strong>Sea level rise flooding streets on sunny days. Septic systems failing. Hurricane insurance carriers fleeing.</strong> 96/100 hazard score.",
  stats:{population:"~2.7M",hazard_score:"96/100",sea_level_rise:"+8 inches since 2000"}
},
{
  name:"Lee County",state:"FL",lat:26.5629,lng:-81.9495,
  tags:["flood","hurricane"],
  severity:"extreme",
  reason:"<strong>Hurricane Ian (2022) killed 150+ here. Storm surge 18 feet. $110B+ damage.</strong> Rebuilding in same flood zone.",
  stats:{population:"~770,000",ian_deaths:"150+",ian_damage:"$110B+"}
},
{
  name:"Cape Coral",state:"FL",lat:26.5629,lng:-81.9495,
  tags:["flood","env","water","water-infra"],
  severity:"severe",
  reason:"<strong>F water grade. Built on reclaimed swamp. Saltwater intrusion. Blue-green algae blooms.</strong>",
  stats:{population:"~194,000",water_score:"F"}
},
{
  name:"Jacksonville",state:"FL",lat:30.3322,lng:-81.6557,
  tags:["flood","env","water","water-infra"],
  severity:"moderate",
  reason:"<strong>F water grade. PFAS contamination. Flooding from St. Johns River.</strong>",
  stats:{population:"~950,000",water_score:"F"}
},
{
  name:"Houston",state:"TX",lat:29.7604,lng:-95.3698,
  tags:["flood","env","heat","infra"],
  severity:"severe",
  reason:"<strong>Highest environmental hazard ZIP in the nation (77507). Harvey dumped 60 inches. Petrochemical corridor floods repeatedly.</strong> 100/100 hazard score.",
  stats:{population:"~2.3M",hazard_score:"100/100 (top US ZIPs)"},
  what_changed:"8,500 homeless, most in Texas → Housing First coalition of 100+ nonprofits → 63% reduction, 28,000+ housed since 2012",
},
{
  name:"Detroit",state:"MI",lat:42.3314,lng:-83.0458,
  tags:["water","infra","poor","reversal","water-infra"],
  severity:"severe",
  reason:"<strong>70,000+ lead service lines. Water shutoffs affect tens of thousands annually.</strong> Aging pipes. Combined sewer overflows.",
  reversal:"<span class='rev'>REVERSING (2019-present):</span> $100M/year in capital improvements. Lead line replacement proceeding neighborhood-by-neighborhood. Lifeline H2O affordability program ($34/mo fixed). 5-year CIP: $542M water + $819M sewer (2026-2030). Shutoffs declining. Still deep problems but the investment trajectory is real.",
  stats:{population:"~630,000",lead_lines:"70,000+",annual_investment:"$100M",five_year_cip:"$1.36B",status:"RECOVERING"},
  what_changed:"70,000+ lead lines, mass shutoffs → $100M/yr capital improvements + affordability program → investment trajectory real, shutoffs declining",
},
{
  name:"Benton Harbor",state:"MI",lat:42.1167,lng:-86.3742,
  tags:["water","lead","poor","reversal","water-contam"],
  severity:"severe",
  reason:"<strong>Lead exceeded federal limits for years. 85% Black community.</strong>",
  reversal:"<span class='rev'>REVERSING (2022-present):</span> State-mandated lead line replacement program underway. Filters distributed. Lines being replaced at no cost to residents. Compliance improving.",
  stats:{population:"~9,000",lead_risk:"declining",status:"RECOVERING"},
  what_changed:"Lead exceeded federal limits, 85% Black community → State-mandated lead line replacement at no cost → compliance improving",
},
{
  name:"Muskogee",state:"OK",lat:35.7479,lng:-95.3703,
  tags:["water","infra","poor","water-infra"],
  severity:"severe",
  reason:"<strong>45 unresolved health violations — 2nd highest in the US.</strong> 4,200 served. 45% people of color.",
  stats:{population:"~4,200",unresolved_violations:"45"}
},
{
  name:"Hugo",state:"OK",lat:34.0096,lng:-95.5169,
  tags:["water","infra","poor","water-infra"],
  severity:"severe",
  reason:"<strong>43 unresolved health violations. 49% below 200% FPL.</strong>",
  stats:{population:"~4,300",unresolved_violations:"43"}
},
{
  name:"Alameda",state:"CA",lat:37.7652,lng:-122.2416,
  tags:["water","env","water-contam"],
  severity:"moderate",
  reason:"<strong>Lowest water score in California (44/100, grade F). PFAS.</strong>",
  stats:{population:"~80,000",water_score:"44/100 (F)"}
},
{
  name:"Indio",state:"CA",lat:33.7206,lng:-116.2156,
  tags:["water","heat","env","water-scarce"],
  severity:"severe",
  reason:"<strong>F water grade. 115°F+ summers. Arsenic in groundwater.</strong>",
  stats:{population:"~92,000",summer_highs:"115°F+"}
},
{
  name:"Lindsay",state:"CA",lat:36.2030,lng:-119.0882,
  tags:["water","infra","poor","water-infra"],
  severity:"severe",
  reason:"<strong>32 unresolved health violations — worst in California. 86% people of color, 51% below poverty.</strong>",
  stats:{population:"~11,000",unresolved_violations:"32"}
},
{
  name:"Stockton",state:"CA",lat:37.9577,lng:-121.2908,
  tags:["water","env","poor","water-contam"],
  severity:"moderate",
  reason:"<strong>Central Valley air quality. Economic distress. Water violations.</strong>",
  stats:{population:"~178,000",poverty:"~20%"},
  what_changed:"Post-recession bankruptcy → SEED guaranteed income pilot → employment rose, mental health improved, replicated in 100+ cities",
},
{
  name:"Issaquena County",state:"MS",lat:32.7482,lng:-90.9482,
  tags:["poor","educ","infra","governance"],
  severity:"extreme",
  reason:"<strong>40.5% without high school diploma — worst in US. Pop ~1,400. No hospital, no grocery stores. Food desert.</strong> Mississippi never expanded Medicaid. 61% voted Trump in 2024. The social contract here is a blank page — taxes paid, nothing received. No school funding, no healthcare, no infrastructure. The state government's priority is abortion bans, not literacy.",
  stats:{population:"~1,400",no_hs_diploma:"40.5%",hospitals:"0",medicaid_expansion:"NEVER",trump_2024:"61%",social_contract:"BROKEN — taxes paid, nothing returned"}
},
{
  name:"East Carroll Parish",state:"LA",lat:32.7349,lng:-91.2432,
  tags:["poor","educ","infra"],
  severity:"extreme",
  reason:"<strong>34.4% without HS diploma. Poverty 45%+. Louisiana's poorest parish. No hospital.</strong>",
  stats:{population:"~6,300",no_hs_diploma:"34.4%",poverty:"45%+"}
},
{
  name:"McDowell County",state:"WV",lat:37.4834,lng:-81.6490,
  tags:["poor","educ","infra","env","governance"],
  severity:"extreme",
  reason:"<strong>Once richest coal county, now poorest in WV. Pop 100K→18K. Opioid epicenter. No hospital since 2015. Coal dust in water.</strong> 100% of WV counties voted Republican. The coal companies extracted the wealth, left the contamination, and the state government followed suit — cutting schools, closing hospitals, offering nothing in return. Social contract: workers gave their health and their land; the state gave them opioids and abandonment.",
  stats:{population:"~18,000",peak_pop:"100,000 (1950)",hospital:"none since 2015",trump_2024:"100% of WV counties",social_contract:"BROKEN — coal took the wealth, state took the schools, both left the contamination"}
},
{
  name:"Owsley County",state:"KY",lat:37.4096,lng:-83.6921,
  tags:["poor","educ","mental-health","policy-cut"],
  severity:"extreme",
  reason:"<strong>Poorest county in America — and SAMHSA just cut the mental health grants keeping it together.</strong> Per capita income ~$15,000. 41% poverty rate. No hospital. No psychiatrist within 60 miles. 31.5% without high school diploma. SAMHSA terminated hundreds of grants Jan 22, 2026 — then restored $363M, then added $112M for 988 crisis centers. The whiplash destroyed provider capacity. Kentucky faces 15M people losing Medicaid coverage nationally by 2030. 43% of adults not taking medications as prescribed due to cost. 41% of Americans carry medical debt. This is what the safety net collapse looks like in the places that need it most.",
  stats:{population:"~4,000",poverty_rate:"41%",per_capita_income:"~$15,000",no_hs_diploma:"31.5%",nearest_hospital:"none",nearest_psychiatrist:"60+ miles",samsha_grants:"terminated Jan 2026, partially restored",status:"SAFETY NET COLLAPSE"}
},
{
  name:"Holmes County",state:"OH",lat:40.5623,lng:-82.0874,
  tags:["educ","poor"],
  severity:"severe",
  reason:"<strong>43.4% without HS diploma — 4th worst. Large Amish community skews this.</strong>",
  stats:{population:"~42,000",no_hs_diploma:"43.4%",note:"Amish population"}
},
{
  name:"Pine Ridge Reservation",state:"SD",lat:43.3253,lng:-102.0871,
  tags:["poor","water","infra","educ","water-infra"],
  severity:"extreme",
  reason:"<strong>Oglala Lakota nation. Poverty 50%+. Life expectancy 20 years below national average. Uranium in groundwater.</strong>",
  stats:{population:"~20,000",poverty:"50%+",life_expectancy:"20 yr below US avg"}
},
{
  name:"Waukesha",state:"WI",lat:43.0117,lng:-88.2315,
  tags:["pfas","water","water-contam"],
  severity:"severe",
  reason:"<strong>Highest exposure burden score in the US. 43 unresolved violations. PFAS contamination.</strong>",
  stats:{population:"~62,000",exposure_burden:"88K (rank #1)",unresolved_violations:"43"}
},
{
  name:"Fayetteville",state:"NC",lat:35.0527,lng:-78.8784,
  tags:["pfas","water","env","water-contam"],
  severity:"severe",
  reason:"<strong>GenX (PFAS) from Chemours/DuPont. Cape Fear River watershed contaminated. Fort Liberty AFFF.</strong>",
  stats:{population:"~200,000",contaminant:"GenX/PFAS"}
},
{
  name:"Norfolk",state:"VA",lat:36.8508,lng:-76.2859,
  tags:["flood","env"],
  severity:"severe",
  reason:"<strong>Fastest-sinking major US city. Recurrent flooding. Naval Station vulnerable.</strong>",
  stats:{population:"~245,000"},
  what_changed:"Sinking city, hurricanes destroying concrete seawalls → first living shoreline in the US → $10M vs $30M seawall, self-repairing",
},
{
  name:"Atlanta",state:"GA",lat:33.7490,lng:-84.3880,
  tags:["water","env","water-contam"],
  severity:"severe",
  reason:"<strong>Water system 10/100 (grade F). 5 health violations serving 1.1M.</strong>",
  stats:{population:"~1.1M",water_score:"F (10/100)"}
},
{
  name:"Baltimore",state:"MD",lat:39.2904,lng:-76.6122,
  tags:["water","lead","infra","water-contam"],
  severity:"severe",
  reason:"<strong>Lead service lines. 14K exposure burden. 244M gallon sewage spill from pipe collapse (2026).</strong>",
  stats:{population:"~1.2M",exposure_burden:"15K (rank #14)"}
},
{
  name:"Trenton",state:"NJ",lat:40.2206,lng:-74.7699,
  tags:["water","infra","lead","water-contam"],
  severity:"severe",
  reason:"<strong>70 monitoring/reporting violations. System in deep trouble.</strong>",
  stats:{population:"~180,000",monitoring_violations:"70"}
},
{
  name:"Tuscaloosa",state:"AL",lat:33.2098,lng:-87.5692,
  tags:["water","water-infra"],
  severity:"severe",
  reason:"<strong>Water scored 8/100 (F). 6 health violations.</strong>",
  stats:{population:"~167,000",water_score:"F (8/100)"}
},
{
  name:"Southern WV Coalfields",state:"WV",lat:38.0,lng:-81.0,
  tags:["env","water","poor","educ","governance","water-contam"],
  severity:"severe",
  reason:"<strong>Mountaintop removal mining contaminates water with heavy metals. Birth defects. Opioid epidemic. Population declining.</strong> 100% of WV counties voted Republican. The state government receives severance taxes from coal companies but doesn't reinvest in the communities where mining happens. Water is poisoned, schools are closing, hospitals are gone. Social contract: the state collected coal revenue and gave the people contaminated water and closed schools.",
  stats:{cause:"mountaintop removal",effects:"birth defects, opioid crisis",trump_2024:"100% of WV counties",social_contract:"BROKEN — coal revenue extracted, communities abandoned"}
},
{
  name:"Phillips County",state:"AR",lat:34.3940,lng:-90.9349,
  tags:["poor","flood","infra"],
  severity:"extreme",
  reason:"<strong>Mississippi River flooding devastates annually. Population halved since 1980.</strong>",
  stats:{population:"~17,000",poverty:"~35%"}
},
{
  name:"Asheville",state:"NC",lat:35.5951,lng:-82.5515,
  tags:["water","flood","env","reversal","water-infra"],
  severity:"severe",
  reason:"<strong>Hurricane Helene (2024) devastated water system. 160K without potable water for weeks.</strong>",
  reversal:"<span class='rev'>REVERSING (2025-2026):</span> FEMA approved $25M for pre-treatment at William Debruhl plant. Additional $260M pursued for North Fork Reservoir upgrades. $125M set aside from CDBG-DR grant. City redesigning infrastructure to withstand future floods. Construction expected to start 2027.",
  stats:{population:"~143,000",fema_approved:"$25M",fema_pursued:"$260M",status:"RECOVERING"},
  what_changed:"Hurricane Helene destroyed water for 160K → FEMA approved $25M, $260M pursued → infrastructure redesign underway, construction by 2027",
},
{
  name:"Colstrip",state:"MT",lat:45.8844,lng:-106.6231,
  tags:["env","water","water-contam"],
  severity:"moderate",
  reason:"<strong>Coal ash ponds leaching hexavalent chromium into groundwater.</strong>",
  stats:{population:"~2,300"}
},
{
  name:"Selma",state:"AL",lat:32.4074,lng:-87.0211,
  tags:["infra","poor","flood"],
  severity:"severe",
  reason:"<strong>Repeated flooding. 2023 tornado. Poverty ~40%.</strong>",
  stats:{population:"~18,000",poverty:"~40%"}
},
{
  name:"Chester",state:"PA",lat:39.8496,lng:-75.3555,
  tags:["env","water","poor","water-contam"],
  severity:"severe",
  reason:"<strong>Incinerator and refinery legacy. Environmental justice poster child — polluting facilities in a small Black community.</strong>",
  stats:{population:"~33,000",poverty:"~30%"}
},
{
  name:"Union County",state:"KY",lat:37.6639,lng:-87.9406,
  tags:["water","infra","water-infra"],
  severity:"severe",
  reason:"<strong>13 unresolved violations in tiny water district.</strong>",
  stats:{population:"~4,700",unresolved_violations:"13"}
},
{
  name:"New Orleans",state:"LA",lat:29.9511,lng:-90.0715,
  tags:["water","lead","flood","infra","reversal","water-contam"],
  severity:"severe",
  reason:"<strong>70% of tested homes have lead in water. Below sea level — relies on pumps that fail. 13K exposure burden.</strong>",
  reversal:"<span class='rev'>REVERSING (2026):</span> Lead pipe replacement program launched under new S&WB leadership. EPA mandate requires full replacement by 2037. Federal court oversight. Action level dropping from 15 to 10 ppb in 2027.",
  stats:{population:"~350,000",lead:"70% of tested homes",lead_replacement:"underway",status:"EARLY RECOVERY"},
  what_changed:"70% of tested homes had lead in water → Lead pipe replacement launched under EPA mandate → underway, deadline 2037",
},
{
  name:"Colorado Springs",state:"CO",lat:38.8339,lng:-104.8214,
  tags:["pfas","env","heat"],
  severity:"moderate",
  reason:"<strong>Peterson AFB PFAS contamination. Wildfire risk extreme. Growth straining water.</strong>",
  stats:{population:"~480,000"}
},
{
  name:"Las Cruces",state:"NM",lat:32.3199,lng:-106.7637,
  tags:["water","heat","water-scarce"],
  severity:"moderate",
  reason:"<strong>Arsenic in groundwater. 10 inches rain/year. Water table dropping.</strong>",
  stats:{population:"~110,000"}
},
{
  name:"El Paso",state:"TX",lat:31.7619,lng:-106.4850,
  tags:["water","heat","water-scarce"],
  severity:"moderate",
  reason:"<strong>Very hard water (200-300 PPM). 100+ heat days. Rio Grande water shrinking.</strong>",
  stats:{population:"~680,000"}
},
{
  name:"Inver Grove Heights",state:"MN",lat:44.8494,lng:-93.0850,
  tags:["water","infra","water-infra"],
  severity:"severe",
  reason:"<strong>18 unresolved health violations — all unresolved.</strong>",
  stats:{population:"~21,000",unresolved_violations:"18"}
},
{
  name:"Pewaukee",state:"WI",lat:43.0806,lng:-88.2615,
  tags:["water","pfas","water-contam"],
  severity:"moderate",
  reason:"<strong>9 unresolved health violations.</strong>",
  stats:{population:"~14,000",unresolved_violations:"9"}
},
{
  name:"North Charleston",state:"SC",lat:32.8854,lng:-80.0166,
  tags:["water","env","water-contam"],
  severity:"moderate",
  reason:"<strong>PFAS near Joint Base Charleston. 146K served with violations.</strong>",
  stats:{population:"~146,000"}
},
{
  name:"Birmingham",state:"AL",lat:33.5186,lng:-86.8104,
  tags:["water","env","policy-cut","school-closure","water-contam"],
  severity:"moderate",
  reason:"<strong>EPA consent decree for sewer fixes. Pre-CW pipes. Flood-prone. Birmingham City Schools lost $15M in federal mental health grants (DOGE cuts).</strong> One of the largest single-district school counselor funding losses in the country.",
  stats:{population:"~200,000",school_cut:"$15M mental health grants",sewer:"EPA consent decree",status:"UNDER STRESS"},
  what_changed:"Most polluted city in the South, sewer consent decree → $125M Railroad Park on pollution fines → $1.5B in catalyzed development",
},
{
  name:"Lemoore",state:"CA",lat:36.3008,lng:-119.7829,
  tags:["water","infra","water-infra"],
  severity:"moderate",
  reason:"<strong>13 unresolved violations. Agriculture + Navy base contamination.</strong>",
  stats:{population:"~25,000",unresolved_violations:"13"}
},
{
  name:"Richmond",state:"VA",lat:37.5407,lng:-77.4360,
  tags:["water","infra","reversal","water-infra"],
  severity:"severe",
  reason:"<strong>Water treatment plant failed Jan 2025 — no water for 6 days across 500K people.</strong> DPU relied on manual pumps, single power mode, old backup batteries. Investigation found decades of complacency.",
  reversal:"<span class='rev'>REVERSING (2025-2026):</span> $7M in immediate fixes completed — new electrical substation, pumps, automatic transfer switch, SCADA upgrades. 50+ SOPs rewritten. 5 new engineers hired. Plant now runs in 'summer mode' (dual power). $1.4B 10-year capital plan adopted. Leadership shakeup — former DPU director fired. Regional partnerships strengthened. Waiting on $80M state request.",
  stats:{population:"~230,000 (serves 500K region)",immediate_fixes:"$7M",long_term_plan:"$1.4B (10yr)",status:"RECOVERING (early)"},
  what_changed:"Water plant failed Jan 2025, no water for 6 days across 500K → $7M immediate fixes, leadership fired → 50+ SOPs rewritten, $1.4B 10yr plan",
},
{
  name:"Fort Wayne",state:"IN",lat:41.0793,lng:-85.1394,
  tags:["water","lead","reversal","water-contam"],
  severity:"moderate",
  reason:"<strong>Lead service lines in older neighborhoods (built 1950s).</strong>",
  reversal:"<span class='rev'>REVERSING (2021-present):</span> 'Get the Lead Out' program — 90% complete in priority eastside neighborhoods. 320+ homes replaced at no cost via $11M federal grant. Goal: all lead mains removed in 10-15 years. Free for low-income, reduced for others.",
  stats:{population:"~270,000",lead_replaced:"320+ homes",federal_funding:"$11M",status:"RECOVERING"},
  what_changed:"Lead service lines in 1950s neighborhoods → Get the Lead Out program with $11M federal grant → 90% complete in priority eastside",
},
{
  name:"Pittsburgh",state:"PA",lat:40.4406,lng:-79.9959,
  tags:["water","lead","reversal","water-contam"],
  severity:"moderate",
  reason:"<strong>Aging infrastructure with lead service line issues.</strong>",
  reversal:"<span class='rev'>REVERSING (2016-present):</span> Replaced 12,000+ lead lines — years ahead of national schedule. On track to replace ALL residential lead lines by 2027. Consulted with 32 utilities nationwide on best practices. EPA head visited to tout Pittsburgh as model.",
  stats:{population:"~302,000",lead_lines_replaced:"12,000+",target_completion:"2027",status:"RECOVERING"},
  what_changed:"Aging lead infrastructure → Replaced 12,000+ lead lines, years ahead of schedule → on track for ALL residential lines by 2027",
},
{
  name:"East Palestine",state:"OH",lat:40.8384,lng:-80.5456,
  tags:["industrial","toxic","water","env","water-contam"],
  severity:"extreme",
  reason:"<strong>Norfolk Southern train derailment Feb 3, 2023 — 50 cars derailed, 11 releasing toxic chemicals including vinyl chloride.</strong> Controlled burn released hydrogen chloride + phosgene into air. Dioxins found in soil and water months later. 92% of residents reported health symptoms. EPA found VC, BTEX, and dioxins in homes. Over 43,000 fish killed in tributaries.",
  stats:{population:"~4,700",cars_derailed:"50",chemicals_released:"vinyl chloride, isobutylene, ethylene glycol, monobutyl ether",fish_killed:"43,000+",health_symptoms:"92% of residents",settlement:"$600M class action (2024)",status:"ONGOING — dioxin cleanup continues"},
  what_changed:"50-car train derailment, vinyl chloride released → $600M class action settlement → dioxin cleanup ongoing",
},
{
  name:"Dimock",state:"PA",lat:41.5546,lng:-75.8765,
  tags:["fracking","water","toxic","env","water-contam"],
  severity:"extreme",
  reason:"<strong>Gas well drilling by Cabot Oil & Gas contaminated well water with methane and chemicals (2008-2009). EPA found benzene, methane, and other compounds in 11 of 19 homes tested.</strong> Water wells exploded. Cabot settled 19 lawsuits for $16.29M. EPA declared water safe in 2012 then reversed. Wells still contaminated.",
  stats:{population:"~3,500 (township)",homes_affected:"19 (confirmed contamination)",settlement:"$16.29M",chemicals:"methane, benzene, iron, manganese",status:"ONGOING — water still not safe"}
},
{
  name:"Pavillion",state:"WY",lat:43.2627,lng:-108.6843,
  tags:["fracking","water","toxic","env","water-contam"],
  severity:"extreme",
  reason:"<strong>EPA 2011 draft found compounds linked to gas production in groundwater — benzene at 78x federal MCL, methane, and synthetic chemicals.</strong> EnCana drilling: 6 gas wells within 500 feet of homes. Stirring rods, foam insulation, turbine oil found in water. EPA handed investigation to WY (declined to finalize). Community still on bottled water.",
  stats:{population:"~200",benzene:"78x MCL in some wells",wells_near_homes:"6 within 500ft",epa_status:" handed to state 2011",status:"UNRESOLVED — community on bottled water"}
},
{
  name:"Prague",state:"OK",lat:35.4870,lng:-96.7109,
  tags:["seismic","fracking","infra"],
  severity:"extreme",
  reason:"<strong>M5.7 earthquake Nov 2011 — strongest in Oklahoma history at the time. Triggered by wastewater injection from oil/gas operations.</strong> 20+ homes damaged. Lawsuits filed against oil/gas companies. Prague went from 0-1 quakes/year to dozens. 340 damage claims filed, ~100 approved.",
  stats:{population:"~2,400",magnitude:"5.7",homes_damaged:"20+",claims:"340 filed, ~100 approved",cause:"wastewater injection from oil/gas"}
},
{
  name:"Dish",state:"TX",lat:33.2718,lng:-97.1247,
  tags:["fracking","air","toxic","env"],
  severity:"severe",
  reason:"<strong>13 compressor stations within town limits. Air tests found benzene, xylene, and other toxins above federal limits.</strong> Town (pop ~50) renamed from Clark to Dish (satellite dish giveaway by TXU). Residents reported nosebleeds, headaches, neurological symptoms. TCEQ found benzene at 15x federal limit.",
  stats:{population:"~50",compressor_stations:"13 within town limits",benzene:"15x federal limit",symptoms:"nosebleeds, headaches, neurological"}
},
{
  name:"Erie",state:"CO",lat:40.0500,lng:-105.0500,
  tags:["fracking","air","env"],
  severity:"severe",
  reason:"<strong>700+ oil/gas wells within town limits. Air monitoring found benzene, formaldehyde, and other toxins. Childhood cancer cluster investigated.</strong> Colorado Dept of Public Health found elevated cancer rates in north Boulder County (Erie straddles Boulder/Weld). Diacetyl (popcorn lung chemical) detected. Residents report headaches, nosebleeds, respiratory issues.",
  stats:{population:"~30,000",wells:"700+ within town",cancer_cluster:"under investigation",chemicals:"benzene, formaldehyde, diacetyl"}
},
{
  name:"Parkersburg",state:"WV",lat:39.2667,lng:-81.5615,
  tags:["toxic","water","env","cancer","water-contam"],
  severity:"extreme",
  reason:"<strong>C8 (PFOA) contamination from DuPont/Chemours Washington Works plant — the 'Dark Waters' case.</strong> DuPont dumped 70,000+ lbs of C8 into Ohio River from 1951-2003. 70,000 people exposed. C8 linked to kidney cancer, testicular cancer, thyroid disease, ulcerative colitis, high cholesterol, pregnancy-induced hypertension. $670.7M settlement. C8 phase-out but replacement GenX also toxic.",
  stats:{population:"~29,000",contaminant:"C8/PFOA",exposed:"70,000+",settlement:"$670.7M (2017)",linked_diseases:"6 conditions certified",plant_operated:"1951-2003"}
},
{
  name:"Hoosick Falls",state:"NY",lat:42.9167,lng:-73.3528,
  tags:["toxic","water","pfas","water-contam"],
  severity:"severe",
  reason:"<strong>PFOA contamination from Saint-Gobain Performance Plastics (formerly Honeywell). Drinking water exceeded EPA health advisory of 70 ppt.</strong> Community discovered contamination in 2014 — state initially told residents water was safe. EPA added to Superfund 2016. Blood tests showed residents had 4-10x national average PFOA levels.",
  stats:{population:"~4,500",contaminant:"PFOA",blood_levels:"4-10x national avg",superfund:"yes (2016)",chemical_source:"Saint-Gobain/Honeywell"}
},
{
  name:"Wurtsmith AFB",state:"MI",lat:44.5047,lng:-83.7065,
  tags:["pfas","toxic","water","env","water-contam"],
  severity:"severe",
  reason:"<strong>AFFF (firefighting foam) contaminated groundwater with PFAS. Base closed 1993 but contamination persists.</strong> Oscoda area wells exceed EPA health advisories. Michigan EGLE found PFAS at 700x state screening levels in groundwater. 1,400+ private wells tested statewide under Michigan PFAS action plan.",
  stats:{population:"~2,500 (Oscoda Twp)",base_closed:"1993",pfas_levels:"700x state screening",source:"AFFF firefighting foam",status:"ONGOING — groundwater plume"}
},
{
  name:"Midland-Odessa",state:"TX",lat:31.9973,lng:-102.0779,
  tags:["fracking","water","heat","ozone","env","water-scarce"],
  severity:"severe",
  reason:"<strong>Permian Basin boomtown — largest US oil field. Groundwater depletion, ozone violations, worker housing crisis.</strong> 500K+ barrels/day. Ozone levels exceed federal standards. Produced water (radioactive) disposal a growing problem. Man camps/shortage of housing during booms, ghost-town busts. Permian water demand projected to exceed supply by 2030.",
  stats:{population:"~170,000 (metro)",oil_production:"500K+ bbl/day",water_deficit:"projected by 2030",ozone:"federal violations",boom_bust:"severe cycle"}
},
{
  name:"Portland",state:"OR",lat:45.5152,lng:-122.6784,
  tags:["decline","economic","infra"],
  severity:"severe",
  reason:"<strong>'No American city has fallen as fast as Portland.' Population down 17K since 2020. Office vacancy at 34.7% — highest of any major US downtown. Property crime 214% above national average.</strong> US Bancorp Tower (Big Pink) sold for $45M — down from $373M in 2015 (88% loss). REI, Nike, Walmart, Target all closed Portland locations citing theft. Real estate investment rank: 80 of 81 metros. Homelessness up 61% in 2 years despite $260M+ spending on Measure 110.",
  stats:{population:"635,109 (2025, down 17K from 2020)",office_vacancy:"34.7% CBD (highest US)",property_crime:"5,526/100K (214% above avg)",violent_crime:"720/100K (101% above avg)",homeless:"12,034 tri-county (Jan 2025, +61% in 2yr)",investment_rank:"80/81 metros",trajectory:"BOTTOMING OUT, not recovering"},
  what_changed:"Homelessness crisis, 12,034 tri-county → HRAP partnership, permanent supportive housing → 23,300+ housed in 2 years, 83% retained",
},
{
  name:"Oklahoma (Statewide)",state:"OK",lat:35.5653,lng:-97.5164,
  tags:["educ","decline","seismic","policy-cut","brain-drain","governance"],
  severity:"severe",
  reason:"<strong>Ranked 48th in 8th-grade reading (NAEP 2024). Per-pupil spending 49th nationally ($12,139 vs $16,990 avg). 43% of 3rd graders failed reading benchmark.</strong> Decade of tax cuts created $1.3B budget shortfall → 2018 teacher walkout (9 days, 500K students out). ~2,000 teachers fled to Texas (+$19K avg salary). Emergency-certified teachers: 4,937/year (1 in 4 not fully certified). All 77 counties voted Trump. No Medicaid expansion. Social contract: residents pay taxes but the state cut schools, cut healthcare, and banned abortion instead of funding education.",
  stats:{naep_g8_reading:"249 (national: 257, rank: 48th)",per_pupil:"$12,139 (49th)",reading_failure:"43% of 3rd graders",emergency_teachers:"4,937/yr",teacher_flight:"~2,000 left for TX",trump_2024:"100% of 77 counties",medicaid_expansion:"NEVER",social_contract:"BROKEN — tax cuts → school cuts → teacher exodus → brain drain"}
},
{
  name:"Stilwell",state:"OK",lat:35.8151,lng:-94.6708,
  tags:["poor","educ","infra","medicaid"],
  severity:"extreme",
  reason:"<strong>Adair County — hospital recently closed. 'On the verge of collapse' per state legislators. Sequoyah County next door also hospital-less.</strong> Rural eastern Oklahoma: Cherokee Nation territory. Poverty 25%+. Schools consolidating. No emergency room within 45 minutes. One of the poorest corners of the state.",
  stats:{population:"~3,000",hospital:"CLOSED",nearest_er:"45+ minutes",poverty:"25%+",region:"Cherokee Nation territory"}
},
{
  name:"Tulsa",state:"OK",lat:36.1540,lng:-95.9928,
  tags:["educ","decline","economic"],
  severity:"moderate",
  reason:"<strong>Despite being Oklahoma's cultural hub, Tulsa schools face chronic underfunding. Race Massacre legacy (1921) — Greenwood district still recovering a century later.</strong> Tulsa Public Schools had multiple schools on state 'turnaround' list. 14.7% poverty rate. Teacher vacancies unfilled. The 2023 spring election for a new sales tax to fund schools failed.",
  stats:{population:"~413,000",poverty:"14.7%",school_funding:"chronically below state target",history:"1921 Race Massacre — Greenwood"},
  what_changed:"Arkansas River was a concrete channel → $465M Gathering Place park → 2M visitors first year, property values +40%",
},
{
  name:"Perry County",state:"AL",lat:32.6299,lng:-87.3189,
  tags:["policy-cut","medicaid","poor","educ"],
  severity:"extreme",
  reason:"<strong>DOGE targeted $175M THCGME program — Cahaba Medical Care, the primary provider, lost funding.</strong> Perry County has NO hospital. Nearest hospital is 57 miles / 70 minutes away in Tuscaloosa. 14% of households have no vehicle. 7 Alabama counties have zero hospitals.",
  stats:{population:"~9,000",nearest_hospital:"57 miles / 70 min",no_vehicle:"14% of households",thcgme_cut:"primary provider defunded",counties_no_hospital:"7 in AL"}
},
{
  name:"Kansas City",state:"MO",lat:39.0997,lng:-94.5786,
  tags:["policy-cut","economic","decline"],
  severity:"severe",
  reason:"<strong>Federal government is KC's largest employer (~30,000 workers). 6,000 jobs at risk from DOGE cuts.</strong> IRS processing center: hundreds took buyouts. HHS regional offices eliminated. Public health grants cut. Kansas City has been a federal hub '1,000 miles from DC' for decades — now that distance makes it vulnerable.",
  stats:{population:"~508,000",federal_workers:"~30,000",jobs_at_risk:"6,000",cuts:"IRS, HHS, public health grants"}
},
{
  name:"Northern Virginia",state:"VA",lat:38.8810,lng:-77.1042,
  tags:["policy-cut","economic"],
  severity:"severe",
  reason:"<strong>350,000+ federal employees live in Virginia, more than half in Northern Virginia. DOGE cuts wiped out years of growth.</strong> WARN notices: 7,000 private sector jobs lost in 2025 (+70% from 2024). 80% of NOVA business leaders warned DOGE cuts could hurt the region. Federal layoffs drove 96% of 2025 DC-area job losses.",
  stats:{population:"~2.6M (NoVA)",federal_employees:"350,000+ in VA",private_job_losses:"7,000 (2025 WARN)",warn_share:"1/3 of all DC-area losses"}
},
{
  name:"Washington",state:"DC",lat:38.9072,lng:-77.0369,
  tags:["policy-cut","economic"],
  severity:"severe",
  reason:"<strong>Federal workforce reduced 11%+ across 22 agencies. 256,000 positions eliminated. DC hit hardest — ~40% of residents are federal workers.</strong> Dept of Education: 45% workforce decline. Federal layoffs drove 96% of 2025 DC-area job losses. The district's economy is structurally tied to federal employment.",
  stats:{population:"~670,000",federal_share:"~40% of residents",positions_eliminated:"256,000",education_dept:"45% decline"}
},
{
  name:"Montana",state:"MT",lat:46.8797,lng:-110.3626,
  tags:["medicaid","rural","policy-cut","brain-drain"],
  severity:"severe",
  reason:"<strong>Senate bill projections: 29% reduction in rural hospital Medicaid reimbursement. 62% of total Medicaid coverage losses in rural areas — highest rural share of any state.</strong> One-third of rural hospitals already at risk of closure. Montana expanded Medicaid in 2023 — but federal cuts threaten to undo gains.",
  stats:{population:"~1.1M",medicaid_cut:"29% rural hospital reimbursement",rural_share:"62% of losses",hospitals_at_risk:"1/3 of rural hospitals",expanded_medicaid:"2023"}
},
{
  name:"Missouri",state:"MO",lat:38.5767,lng:-92.1735,
  tags:["medicaid","rural","policy-cut","governance"],
  severity:"severe",
  reason:"<strong>42,000 rural Missourians expected to lose Medicaid coverage (~1/3 of statewide losses). 29% reduction in rural hospital Medicaid reimbursement.</strong> One-third of rural hospitals at risk of closure. Missouri expanded Medicaid in 2021 — but federal cuts threaten coverage for tens of thousands. Abortion ban. 57% voted Trump. St. Louis lost 84% of school enrollment. Social contract: Missouri finally expanded Medicaid after years of refusal, and now the federal government is taking it away. The state banned abortion but can't keep rural hospitals open.",
  stats:{population:"~6.2M",rural_coverage_loss:"42,000",reimbursement_cut:"29% rural",hospitals_at_risk:"1/3 of rural",abortion_ban:"YES",trump_2024:"57%",social_contract:"FRAGILE — Medicaid expanded then threatened, abortion banned, rural hospitals dying"}
},
{
  name:"Snap Cuts (National)",state:"US",lat:39.8283,lng:-98.5795,
  tags:["policy-cut","poor","economic"],
  severity:"extreme",
  reason:"<strong>One Big Beautiful Bill Act (July 2025): largest cut to food assistance in US history — $186B over 10 years.</strong> SNAP recipients fell 13% nationwide (4.7M fewer people by March 2026). Expanded work requirements from ages 18-54 to 18-64. Eliminated exemptions for veterans, homeless, former foster youth. Raised waiver threshold to 10% unemployment.",
  stats:{people_lost:"4.7M fewer by Mar 2026",cut_amount:"$186B over 10 years",work_requirements:"expanded to ages 18-64",exemptions_eliminated:"veterans, homeless, foster youth",timeline:"4.7M lost in 8 months"}
},
{
  name:"Louisiana",state:"LA",lat:30.9843,lng:-91.9623,
  tags:["literacy","poor","educ","governance"],
  severity:"severe",
  reason:"<strong>PIAAC score: 252 — tied for lowest adult literacy in the US. 27.1% of adults at Level 1 (lowest proficiency).</strong> National average: 263.5. Louisiana has 3.5M adults; ~950K have low literacy. Correlates with 34.4% no HS diploma in East Carroll Parish and deep Delta poverty. Louisiana classified mifepristone as Schedule IV controlled substance — first in nation to criminalize miscarriage medication. Cancer Alley runs through the state. Abortion ban. Social contract: the state criminalizes healthcare while 950K adults can't read a bus schedule.",
  stats:{piaac_score:"252 (tied last)",low_literacy:"27.1% at Level 1",adults_affected:"~950,000",mifepristone:"Schedule IV (criminalized)",abortion_ban:"YES",cancer_alley:"YES",social_contract:"BROKEN — criminalizes medication while 950K can't read"}
},
{
  name:"Mississippi",state:"MS",lat:32.3547,lng:-89.3985,
  tags:["literacy","poor","educ","governance"],
  severity:"severe",
  reason:"<strong>PIAAC score: 252 — tied for lowest. 28% at Level 1. 40.5% without HS diploma in Issaquena County (worst in US).</strong> Mississippi never expanded Medicaid — 13.6% uninsured, 24% of rural hospitals at immediate risk of closure. 61% voted Trump in 2024. The state banned abortion before expanding healthcare. Social contract: residents pay sales tax (highest in US at 7%) but get the worst schools, worst health outcomes, and worst infrastructure in the country. The state chose to ban abortion rather than fund hospitals.",
  stats:{piaac_score:"252 (tied last)",low_literacy:"28% at Level 1",uninsured:"13.6%",rural_hospitals_at_risk:"24% immediate",medicaid_expansion:"NEVER",abortion_ban:"YES",sales_tax:"7% (highest US)",trump_2024:"61%",social_contract:"BROKEN — highest sales tax, worst services, abortion banned before hospitals funded"},
  what_changed:"Dead last in 4th-grade reading for decades → Science of Reading law (2013), $15M/yr coaching → jumped 20 spots to 28th nationally",
},
{
  name:"Texas",state:"TX",lat:31.9686,lng:-99.9018,
  tags:["literacy","policy-cut","educ","governance"],
  severity:"severe",
  reason:"<strong>PIAAC score: 254 — below 255 'low literacy desert' threshold. 28.2% at Level 1.</strong> 20M adults; ~5.6M have low literacy. 79,522 teachers not fully certified (highest in US). No Medicaid expansion — 18% uninsured (highest in US). Abortion ban. 37% of rural hospitals at risk of closure. 66% voted Trump. SNAP cuts hit 1.5M recipients. Social contract: Texas collects taxes but won't expand Medicaid, won't fund schools, bans healthcare choices, and lets rural hospitals die. The state chose ideology over its own citizens.",
  stats:{piaac_score:"254",low_literacy:"28.2% at Level 1",adults_affected:"~5.6M",uncertified_teachers:"79,522",uninsured:"18% (highest US)",rural_hospitals_at_risk:"37%",medicaid_expansion:"NEVER",abortion_ban:"YES",trump_2024:"66%",social_contract:"BROKEN — highest uninsured rate, abortion ban, school cuts, rural hospital collapse"}
},
{
  name:"New Mexico",state:"NM",lat:34.5199,lng:-105.9378,
  tags:["literacy","poor","educ","water","water-infra"],
  severity:"severe",
  reason:"<strong>PIAAC score: 252 — tied for lowest. 29.1% at Level 1 — highest share in the nation.</strong> NAEP G8 Math: 256 (lowest absolute score). Water scarcity, poverty, and education form a reinforcing cycle. 1.6M adults, ~465K with low literacy.",
  stats:{piaac_score:"252 (tied last)",level1_pct:"29.1% (highest share in US)",naep_g8_math:"256 (lowest absolute)",adults_affected:"~465,000"}
},
{
  name:"Nevada",state:"NV",lat:38.8026,lng:-116.4194,
  tags:["literacy","educ"],
  severity:"severe",
  reason:"<strong>PIAAC score: 255 — below low literacy threshold. NAEP G8 Math dropped 4 points from 2022 (worst decline tied with VA and FL).</strong> Student-teacher ratio 25.4 (worst in US). Teacher shortage: 9,613 unfilled or uncertified positions. Clark County (Las Vegas) is 5th-largest US school district.",
  stats:{piaac_score:"255",naep_g8_math_decline:"-4.0 (2022-2024)",student_teacher_ratio:"25.4 (worst US)",teacher_shortage:"9,613 positions"}
},
{
  name:"California (Central Valley)",state:"CA",lat:36.7378,lng:-119.7871,
  tags:["literacy","poor","educ","food","env"],
  severity:"severe",
  reason:"<strong>California PIAAC: 257. 28.4% at Level 1. Central Valley is the epicenter — Lindsay has 32 unresolved water violations, 86% people of color, 51% below poverty.</strong> 8.2M low-literacy adults statewide (most in US by raw number). Imperial County worst air quality in CA. Farmworker communities face compounding literacy, poverty, and environmental stress.",
  stats:{piaac_score:"257",level1_pct:"28.4%",low_literacy_adults:"8.2M (most in US)",central_valley:"epicenter of compounding stress"}
},
{
  name:"West Virginia (School Closures)",state:"WV",lat:38.5976,lng:-80.4549,
  tags:["school-closure","brain-drain","educ","decline","governance"],
  severity:"extreme",
  reason:"<strong>78+ schools closed since 2019 — worst-hit rural state in the nation.</strong> Barbour County closed 4 schools. Clay County lost its only middle school. Wetzel County closed 4 high schools in one consolidation. Enrollment down 800+ students in single counties. When rural schools close, communities die — the school is the economic and cultural anchor. 100% of WV counties voted Republican. The state defunded education while churches stayed open. Social contract: parents send kids to school expecting a future; the state closes the school and tells them to pray about it.",
  stats:{schools_closed:"78+",worst_counties:"Barbour (4), Wetzel (4), Clay (3)",enrollment_decline:"800+ in single counties",trend:"accelerating — 25 closed in 2024 alone",trump_2024:"100% of WV counties",social_contract:"BROKEN — schools closed, churches stayed open"}
},
{
  name:"St. Louis",state:"MO",lat:38.6270,lng:-90.1994,
  tags:["school-closure","decline","educ"],
  severity:"extreme",
  reason:"<strong>Up to 37 schools closed — half the district. Enrollment: 115,543 (1967) → 18,122 (2024).</strong> Family flight to suburbs over decades. The closure list reads like a history of the city's racial and economic segregation. Remaining schools serve predominantly Black, low-income students.",
  stats:{enrollment_1967:"115,543",enrollment_2024:"18,122",decline:"84%",schools_closed:"up to 37"}
},
{
  name:"Cleveland",state:"OH",lat:41.4993,lng:-81.6944,
  tags:["school-closure","decline","educ"],
  severity:"severe",
  reason:"<strong>29 school closures/mergers. 50% enrollment plunge over 2 decades. $150M deficit.</strong> Cleveland Metropolitan School District has been under state oversight. Consolidation continues as population loss accelerates.",
  stats:{schools_closed:"29",enrollment_decline:"50%",deficit:"$150M",status:"state oversight"},
  what_changed:"29 school closures, 50% enrollment plunge → Evergreen Cooperatives anchor model → 320+ worker-owners, 80% profit sharing",
},
{
  name:"Eastern Kentucky Coalfields",state:"KY",lat:37.16,lng:-82.85,
  tags:["brain-drain","poor","educ","economic"],
  severity:"extreme",
  reason:"<strong>Entire region in population freefall. Harlan County: -8% since 2010. Letcher: -8%. Bell: -9%. Martin: -11%.</strong> Coal automation + opioid epidemic + youth exodus = compounding collapse. Harlan was once a thriving coal town; now has more funerals than births. Counties overlap with some of the lowest literacy scores in the US.",
  stats:{harlan_pop_decline:"-8% (2010-2020)",lechter:"-8%",bell:"-9%",martin:"-11%",youth_loss:"25%+ of 15-24 per decade",driver:"coal automation + opioids"}
},
{
  name:"Mississippi Delta",state:"MS",lat:33.38,lng:-91.03,
  tags:["brain-drain","poor","educ","flood"],
  severity:"extreme",
  reason:"<strong>Issaquena County: -24% population (2010-2020). Humphreys: -19%. Sharkey: -18%. Tunica: -17%.</strong> Agricultural mechanization eliminated farm jobs. Youth out-migration 35%+ per decade in worst counties. Greenville (Washington County) — largest Delta city — lost 11%. The Delta was once the richest agricultural region in the South; now it's America's poorest.",
  stats:{issaquena:"-24%",humphreys:"-19%",sharkey:"-18%",tunica:"-17%",youth_loss:"35%+ per decade",driver:"ag mechanization + poverty"}
},
{
  name:"Kansas Ghost Counties",state:"KS",lat:38.96,lng:-101.59,
  tags:["brain-drain","economic","educ"],
  severity:"extreme",
  reason:"<strong>Wallace County: -21% (2010-2020). Lane: -20%. Jewell: -18%. Greeley: -17%.</strong> Farm mechanization + youth exodus. Wallace County went from 1,600 to 1,260. Jewell County: from 66,000 (1900) to ~2,500 today. These counties are literally disappearing — no jobs, no schools, no young people.",
  stats:{wallace:"-21%",lane:"-20%",jewell:"-18%",greeley:"-17%",jewell_peak:"66,000 (1900) → 2,500 now"}
},
{
  name:"Nebraska Sandhills",state:"NE",lat:42.90,lng:-98.93,
  tags:["brain-drain","economic"],
  severity:"severe",
  reason:"<strong>Boyd County: -22%. Wheeler: -18%. Arthur: -20%.</strong> Sparsest counties in Nebraska. Ranching economy can't support young families. Youth out-migration 25%+ per decade. School consolidations accelerating.",
  stats:{boyd:"-22%",wheeler:"-18%",arthur:"-20%",youth_loss:"25%+ per decade"}
},
{
  name:"Cushing",state:"OK",lat:35.9851,lng:-96.7669,
  tags:["seismic","infra","industrial"],
  severity:"severe",
  reason:"<strong>M5.0 earthquake Nov 6, 2016 — damaged dozens of buildings near the Strategic Petroleum Reserve (largest crude oil storage in the world).</strong> Cushing holds 60M+ barrels of oil. Induced seismicity from wastewater injection threatened critical energy infrastructure. 37 Arbuckle disposal wells ordered shut within 725 sq mi.",
  stats:{population:"~5,000",magnitude:"5.0",spr_storage:"60M+ barrels",wells_shut:"37 within 725 sq mi"}
},
{
  name:"Garfield County",state:"CO",lat:39.55,lng:-108.32,
  tags:["fracking","water","env","cancer","water-contam"],
  severity:"severe",
  reason:"<strong>Uranium in water supply linked to gas drilling. Cancer rates elevated in gasfield communities. VOC emissions from wells exceed federal standards.</strong> County commissioners sued COHealth Dept to block air monitoring. Over 10,000 gas wells in county. Western Slope communities on well water face contamination risk.",
  stats:{population:"~62,000",gas_wells:"10,000+",uranium:"in groundwater",voc:"federal exceedances",cancer:"elevated in gasfield areas"}
},
{
  name:"Permian Basin (Produced Water)",state:"TX",lat:31.95,lng:-102.30,
  tags:["fracking","water","env","water-contam"],
  severity:"severe",
  reason:"<strong>Oil/gas produces 3-5 barrels of toxic 'produced water' for every barrel of oil. Permian Basin generates 250 billion gallons/year — some of the most radioactive wastewater on Earth.</strong> Injection wells fill up. Disposal capacity running out. Water table dropping. Some operators dump on roads (dust control) — spreading radioactive material.",
  stats:{produced_water:"250B gallons/year",ratio:"3-5 water per oil barrel",radioactive:"some above federal limits",disposal:"capacity running out"}
},
{
  name:"Thomasville",state:"AL",lat:31.9135,lng:-87.7347,
  tags:["medicaid","infra","poor"],
  severity:"extreme",
  reason:"<strong>Thomasville Regional Medical Center suspended ALL operations in 2024 — 29 beds, complete closure. Clarke County has no pediatrics, no OB.</strong> 'Right now Clark County doesn't have pediatrics care. The nearest hospital that delivers babies is 65 miles away' — Rep. Thomas Jackson. Alabama has lost 7 rural hospitals since 2011.",
  stats:{population:"~4,300",beds_lost:"29",nearest_baby_delivery:"65 miles",al_hospitals_lost:"7 since 2011"}
},
{
  name:"Trinity",state:"TX",lat:30.9454,lng:-95.3772,
  tags:["medicaid","infra","poor"],
  severity:"extreme",
  reason:"<strong>Mid Coast Medical Center — Trinity: complete closure in 2025. 21 beds, no services remaining.</strong> Texas leads all states with 25 rural hospital closures since 2005. Trinity County is rural, aging, and now 30+ minutes from the nearest ER.",
  stats:{population:"~4,000",beds_lost:"21",texas_closures:"25 since 2005"}
},
{
  name:"Valliant",state:"OK",lat:33.4768,lng:-94.9708,
  tags:["medicaid","infra","poor"],
  severity:"extreme",
  reason:"<strong>Valley Community Hospital: complete closure in 2025. 43 beds lost.</strong> McCurtain County — one of Oklahoma's poorest. Southeast corner of the state, near Arkansas border. 47 rural hospitals in OK at risk of closing.",
  stats:{population:"~2,000",beds_lost:"43",ok_hospitals_at_risk:"47"}
},
{
  name:"Mississippi (K-12 Literacy)",state:"MS",lat:32.3547,lng:-89.3985,
  tags:["improving","literacy","educ","reversal"],
  severity:"moderate",
  reason:"<strong>The 'Mississippi Miracle' — went from dead last to 28th in 4th-grade reading on NAEP. Literacy-first policy overhaul starting 2013.</strong> Intensive K-3 reading intervention, mandatory retention for 3rd graders below basic, $15M/year in coaching. Model now being copied by Oklahoma, Louisiana, Alabama. Proof that bottom-ranked states CAN reverse.",
  reversal:"<span class='rev'>IMPROVING (2013-present):</span> 4th-grade reading: dead last → 28th nationally. 8th-grade math: +10 points since 2013. Strong Readers Act (2013) required science-based reading instruction, 3rd-grade retention, interventionists in every school. 2019: Mississippi beat the national average in 4th-grade reading for first time. The 'Southern Surge' — TN, AL, LA now following the model.",
  stats:{naep_4th_reading:"28th (was dead last)",improvement:"+10 points since 2013",model:"Strong Readers Act (2013)",investment:"$15M/yr coaching",states_copied:"OK, LA, AL",status:"IMPROVING — national model"},
  what_changed:"49th in 4th-grade reading → Strong Readers Act with mandatory retention and intervention → 9th nationally, Black 4th graders rank #3",
},
{
  name:"Oklahoma (Induced Seismicity)",state:"OK",lat:35.5653,lng:-97.5164,
  tags:["seismic","improving","reversal"],
  severity:"moderate",
  reason:"<strong>From 903 earthquakes/year (2015) to ~100/year (2024) — a 90% reduction via regulatory intervention.</strong> Oklahoma Corporation Commission issued 33 directives to reduce wastewater injection. USGS study: 'plug backs reduced earthquake rates by a factor of 4.' Still elevated above natural baseline, but the crisis is being managed.",
  reversal:"<span class='rev'>IMPROVING (2016-present):</span> Peak 2015: 888 M3+ quakes. 2024: ~100. 90% reduction through regulatory action — mandatory volume cuts, well shutdowns, plug backs. USGS confirmed 4x rate reduction. 5 M3+ quakes still occur annually (Pawnee M5.8 remains largest ever). Not back to natural baseline but crisis managed.",
  stats:{peak_earthquakes:"888/year (2015)",current:"~100/year (2024)",reduction:"90%",regulatory_action:"33 OCC directives",status:"IMPROVING but above baseline"},
  what_changed:"903 earthquakes/year from wastewater injection → 33 regulatory directives, mandatory cuts → 90% reduction to ~100/year",
},
{
  name:"Las Vegas",state:"NV",lat:36.1699,lng:-115.1398,
  tags:["water","heat","water-scarce"],
  severity:"extreme",
  reason:"<strong>Entirely dependent on shrinking Lake Mead — now at ALL-TIME RECORD LOW (1,039 ft, Aug 2026).</strong> Dead pool at 895 ft — below that, Hoover Dam cannot release water. Nevada's full allocation: 300,000 AF/yr. Tier 1 Shortage in effect for 2026. Post-2028 federal framework claims authority to force 33-66% cuts. Las Vegas has been the national conservation model (per capita use down 58% while population grew 876K), but there's a physical limit. The city built a third intake pipe and Low Lake Level Pumping Station. $350M direct potable reuse plant under construction (operational ~2029). 25 million people across the basin depend on this water. If Mead hits dead pool, the entire Lower Basin allocation system collapses.",
  stats:{lake_mead_level:"1,039 ft (ALL-TIME LOW, Aug 2026)",dead_pool:"895 ft",nevada_allocation:"300,000 AF/yr",actual_usage:"198,000 AF (2025)",per_capita_reduction:"58% since 2002",post_2028_threat:"33-66% cuts possible",status:"TIER 1 SHORTAGE"},
  what_changed:"211 gallons/person/day, dependent on shrinking Lake Mead → conservation + turf removal + 85% reuse → 89 gal/day, 58% reduction",
},
{
  name:"Great Salt Lake",state:"UT",lat:40.7313,lng:-112.2136,
  tags:["water","toxic","env","water-contam"],
  severity:"extreme",
  reason:"<strong>7.1 ft below healthy range, only 2 ft above 2022 record low — could dry out completely by end of decade.</strong> Lost 73% of water and 60% of surface area since 1850. 800+ sq mi of lakebed exposed; 70 sq mi are active dust hotspots expanding to 187. Dust contains arsenic, cadmium, lead, mercury — both natural and industrial. PM10 exceedances at monitoring stations. BYU study links dust to respiratory illness, developmental defects, cardiovascular damage, cancer risk. 80% of Utah's population lives in the watershed. Brine shrimp industry ($1.3B/yr GDP) threatened. 2026 snowpack: worst on record. Up to $1B in potential federal aid proposed. Pipelines from Great Lakes/Mississippi discussed but nothing fast enough. Expert timeline: tipping point reached.",
  stats:{level:"4,190 ft (7 ft below healthy)",lost_since_1850:"73% of water, 60% of surface area",exposed_lakebed:"800+ sq mi",dust_hotspots:"70 sq mi (expanding to 187)",toxins:"arsenic, cadmium, lead, mercury",population_at_risk:"80% of Utah",status:"TIPPING POINT — could dry by ~2030"},
  what_changed:"Record low, losing 73% of water, arsenic dust → Legislature passed dozens of water bills → 400K acre-feet delivered, decline arrested",
},
{
  name:"Corcoran",state:"CA",lat:36.0830,lng:-119.5830,
  tags:["water","farm","infra","water-infra"],
  severity:"extreme",
  reason:"<strong>Land sinking 27 cm/year (10.6 inches) — the fastest subsidence ever recorded in California.</strong> Corcoran has sunk nearly 5 feet between 2015-2024 (up to 7 feet east of town). J.G. Boswell Company seeks to allow 10 MORE feet. The California Aqueduct lost 44% of its capacity; San Luis Canal lost 46%. Valley-wide: 14 km³ of subsidence from 2006-2022 — matching the entire historic period (1925-1970) in two-thirds the time. Subsidence is PERMANENT — once aquifer pore space compacts, it cannot refill. 11 of 15 San Joaquin Valley groundwater basins critically overdrafted. SWP delivery capability could decline 18-87% by 2043. California's agricultural heartland is literally sinking out from under the canals that deliver water to Southern California.",
  stats:{subsidence_rate:"27 cm/year (10.6 in/yr)",total_sinking:"5-7 feet since 2015",aqueduct_capacity_loss:"44% (California Aqueduct)",canal_loss:"46% (San Luis Canal)",overdraft_basins:"11 of 15 critically",permanent:"YES — irreversible",status:"CRITICAL INFRASTRUCTURE COLLAPSE"}
},
{
  name:"Garden City",state:"KS",lat:37.9717,lng:-100.8727,
  tags:["water","farm","economic","water-scarce"],
  severity:"extreme",
  reason:"<strong>Epicenter of Ogallala Aquifer depletion — less than 40% of original water remains.</strong> Kansas GMD3 (southwest): aquifer dropped 1.52 ft in 2024 alone, declining 1.8 ft/year (fastest rate). Feb 2026: proposed mandatory 5% annual pumping reductions for 20 years (27.7% total). Kansas faces state deadline July 2026 to act or state imposes cuts. Recharge rate: only 15% of pumping. Full refill: 500-1,300 years. The Ogallala supports 20% of US wheat, corn, cotton, and cattle — 30% of all US irrigation. 200,000+ wells pump at 3-50x recharge. Kansas Water Office director: 'If we don't adapt, it will run dry. That will cause the economic devastation everyone fears.' Some communities are 'one generation away from running out of water.' Entire rural communities face existential threat.",
  stats:{aquifer_remaining:"<40% of original",decline_rate:"1.8 ft/year (GMD3)",mandatory_cuts_proposed:"27.7% over 20 years",recharge_vs_pumping:"15%",refill_time:"500-1,300 years",us_food_at_stake:"20% wheat/corn/cotton/cattle",status:"EXISTENTIAL THREAT — 1-2 decades of irrigation left"}
},
{
  name:"Yakima Basin",state:"WA",lat:46.6021,lng:-120.5059,
  tags:["water","farm","water-scarce"],
  severity:"severe",
  reason:"<strong>Fourth consecutive drought emergency (unprecedented) — junior water rights at only 44% of entitlement.</strong> 2026 snowpack: 33% of average (warmest winter since 1895 — all rain, no snow stored for summer). Roza Irrigation District (72,000 acres of apples, cherries, berries): turned off water for 10+ days in May to conserve early. Third year of early shutoffs. By end of season expects only a 'trickle.' October 2025: surface water rights curtailed for the ENTIRE basin including cities — unprecedented. By 2050s, Washington will see snow droughts 7 out of every 10 years. $7+ billion agricultural economy at stake (apples, hops, wine grapes, cherries). Senior vs. junior conflict: four senior districts accusing state of mismanaging supply.",
  stats:{consecutive_droughts:"4 (unprecedented)",snowpack:"33% of average",junior_rights:"44% of entitlement",ag_economy:"$7+ billion",projection:"Snow droughts 7/10 years by 2050s",status:"4th STRAIGHT DROUGHT EMERGENCY"}
},
{
  name:"Des Moines",state:"IA",lat:41.5868,lng:-93.6250,
  tags:["farm","water","env","water-scarce"],
  severity:"severe",
  reason:"<strong>World's largest nitrate removal facility runs at $16,000/day — agricultural runoff is poisoning the water.</strong> Des Moines and Raccoon Rivers rank top 1% of US rivers for nitrate concentration. 2025: near-record nitrate levels triggered FIRST-EVER lawn watering ban for 600,000 residents. Iowa had 36 nitrate drinking water violations in 2025 (up from 14 in 2024). Levels reached 17.58 mg/L (federal limit: 10). A 2026 state report links nitrate pollution to Iowa's elevated cancer rates — 80% of river contamination attributed to agriculture. Iowa has NO mandatory nutrient reduction — only voluntary measures under the 2013 Nutrient Reduction Strategy. Farm bill 'Farm to Faucet' allocated $25M to double Des Moines nitrate removal capacity. Water quality now a top 2026 midterm issue. The Gulf of Mexico Dead Zone (forecast: 7,027 sq mi in 2026 — size of New Jersey) is primarily fed by Midwest agricultural runoff.",
  stats:{nitrate_removal_cost:"$16,000/day",violations_2025:"36 (up from 14 in 2024)",peak_nitrate:"17.58 mg/L (limit: 10)",lawn_ban:"FIRST-EVER, 600K residents",gulf_dead_zone_forecast:"7,027 sq mi (2026)",mandatory_reduction:"NO — voluntary only",status:"AGRICULTURAL RUNOFF CRISIS"}
},
{
  name:"Sampson County",state:"NC",lat:34.97,lng:-78.41,
  tags:["farm","env","water","hurricane","water-scarce"],
  severity:"severe",
  reason:"<strong>Densest concentration of industrial hog farms in the US — ~9 million hogs. Waste managed via open-air lagoons sprayed onto fields.</strong> During hurricanes, lagoons overflow catastrophically: Floyd (1999), Matthew (2016), Florence (2018) each caused massive breaches — millions of gallons of concentrated animal waste entering rivers and groundwater. Environmental justice concern: hog farms disproportionately located near low-income and minority communities. Contributing nitrogen, phosphorus, and fecal bacteria to the Neuse and Tar River watersheds. The lagoon-and-spray system is outdated but politically protected. NC has struggled for decades to regulate hog waste. Chemours PFAS contamination compounds the water quality crisis across the Cape Fear River basin.",
  stats:{hogs:"~9 million",lagoon_system:"open-air waste ponds + field spray",hurricane_breaches:"Floyd 1999, Matthew 2016, Florence 2018",pollutants:"nitrogen, phosphorus, fecal bacteria",watersheds:"Neuse and Tar River",environmental_justice:"disproportionately near minority communities",status:"SYSTEMIC — politically protected waste system"}
},
{
  name:"Burlington",state:"VT",lat:44.4759,lng:-73.2121,
  tags:["future"],
  severity:"moderate",
  reason:"<strong>Home of the world's largest community land trust — Champlain Housing Trust (est. 1984).</strong> 2,800+ households stewarded by a nonprofit that owns the land; residents own the homes on 99-year ground leases. Homes stay affordable in perpetuity regardless of market appreciation. Founded under Mayor Bernie Sanders with a $200K seed grant. Over 40 years of operation. Won World Habitat Award. Every public dollar invested in housing must go to housing that stays affordable forever. Burlington proves that permanent affordability works at scale — and it started with one city council vote.",
  stats:{population:"~45,000",clt_households:"2,800+",founded:"1984",model:"community land trust — land owned, homes owned on 99-year lease",affordability:"permanent — in perpetuity",award:"World Habitat Award",status:"PROVEN — 40+ years of permanent affordability"},
  what_changed:"Housing affordability crisis → Champlain Housing Trust community land trust → 2,800+ households in permanent affordability since 1984",
},
{
  name:"Cleveland (Cooperatives)",state:"OH",lat:41.5043,lng:-81.6084,
  tags:["future"],
  severity:"moderate",
  reason:"<strong>Evergreen Cooperatives — the 'Cleveland Model' of worker-owned cooperative economics.</strong> Launched 2008 by Cleveland Clinic, University Hospitals, Case Western Reserve, and the Cleveland Foundation. Mondragon-inspired network: Evergreen Cooperative Laundry (serving hospitals), Ohio Cooperative Solar, Green City Growers. 80%+ employee ownership. Anchor institutions guarantee purchases from locally-owned co-ops, creating a self-sustaining economic ecosystem. Senator Sherrod Brown: 'a truly revolutionary way of doing business.' Fund for Employee Ownership continues acquiring businesses (North Coast Sign 2026, XACTO Signs 2024). The opposite of extractive capitalism — building wealth inside the community instead of pulling it out.",
  stats:{population:"~362,000",model:"anchor institutions + worker cooperatives",launched:"2008",cooperatives:"Laundry, Solar, Growers, + acquisitions",ownership:"80%+ employee-owned",Senator_Brown:"truly revolutionary",status:"GROWING — new acquisitions each year"},
  what_changed:"Rust Belt collapse → Evergreen Cooperatives with anchor institutions → 320+ worker-owners, 80% profit sharing",
},
{
  name:"Detroit (Urban Farms)",state:"MI",lat:42.3314,lng:-83.0458,
  tags:["future"],
  severity:"moderate",
  reason:"<strong>2,200+ urban farms and gardens engaging ~20,000 Detroiters — the largest urban agriculture movement in America.</strong> City established its first-ever Urban Agriculture Division in 2023. Michigan Urban Farming Initiative provides free produce to surrounding community. Oakland Avenue Urban Farm is an educational platform. Detroit Black Community Food Sovereignty Network leads food justice work. Nearly 78% of Detroiters live in food deserts — urban farming is survival infrastructure, not a hobby. Regenerative techniques offset 400+ tons of CO2 annually. Detroit was written off as dead; now it's growing food, growing cooperatives, and growing a new economy from the ground up. Growing Power (Will Allen, Milwaukee) pioneered the techniques; Detroit scaled them.",
  stats:{population:"~620,000",urban_farms:"2,200+",participants:"~20,000 Detroiters",food_desert_population:"78%",urban_ag_division:"est. 2023",co2_offset:"400+ tons/yr",status:"LARGEST URBAN AGRICULTURE MOVEMENT IN US"},
  what_changed:"78% of Detroiters in food deserts → 2,200+ urban farms → largest urban agriculture movement in America",
},
{
  name:"Klamath River",state:"CA",lat:41.9296,lng:-122.4575,
  tags:["future"],
  severity:"moderate",
  reason:"<strong>Largest dam removal and river restoration project in US history — four dams removed 2023-2024.</strong> Restored free-flowing conditions and fish passage to 400+ miles of river. Native revegetation of 2,200+ acres of former lakebed. By the second spawning season, Chinook salmon reached tributaries of Upper Klamath Lake (~430 km from river mouth). Pacific lamprey and coho salmon also migrated past former dam sites. Led by Yurok, Karuk, Hoopa, and Klamath Tribes — decades of tribal activism made this happen. Named 2024 River of the Year. Sometimes the most revolutionary act is tearing down an obsolete structure and letting nature heal.",
  stats:{dams_removed:"4",river_miles_restored:"400+",acreage_revegetated:"2,200+",salmon_return:"Chinook reached Upper Klamath Lake",led_by:"Yurok, Karuk, Hoopa, Klamath Tribes",award:"2024 River of the Year",status:"ACTIVE RESTORATION — river healing"},
  what_changed:"Four dams blocking 400+ miles of salmon → largest dam removal in US history (2023-24) → Chinook salmon reached Upper Klamath Lake",
},
{
  name:"Seattle",state:"WA",lat:47.6322,lng:-122.3189,
  tags:["future"],
  severity:"moderate",
  reason:"<strong>Home of the Bullitt Center — 'The Greenest Commercial Building in the World.'</strong> 6-story, 50,000 sq ft office building. First timber-framed structure permitted in Seattle since the 1920s. Living Building Challenge certified (2015). 244 kW rooftop PV, 56,000-gallon rainwater cistern with potable water treatment, composting toilets. Generated 30% MORE energy than it used in its first decade. Also: future site of the tallest mass-timber office building in the US (Skanska/Waugh Thistleton, announced Aug 2026). Seattle proves that net-positive commercial buildings aren't theoretical — they're occupied, profitable, and generating surplus energy.",
  stats:{bullitt_center:"50,000 sq ft, net-positive energy + water",energy_surplus:"30% more than it uses",living_building:"ILFI certified 2015",future_timber:"tallest mass-timber office in US (announced Aug 2026)",status:"PROVEN — net-positive for a decade"},
  what_changed:"Commercial building energy hog → Built the Bullitt Center, net-positive → 30% more energy than it uses, decade of proof",
},
{
  name:"Portland (Green Infrastructure)",state:"OR",lat:45.5152,lng:-122.6784,
  tags:["future"],
  severity:"moderate",
  reason:"<strong>America's green infrastructure pioneer — 50+ years of urban ecological design.</strong> Forest Park: 5,000 acres, 100+ mammal species, 70 miles of trails within city limits. Street trees alone added $13M+ in property resale value. Harbor Drive (1974): a freeway torn down and replaced with Tom McCall Waterfront Park — one of the first freeway removals in US history. Green roofs, living walls, comprehensive tree protection ordinances. Orenco Station (Hillsboro, adjacent): pioneering TOD from the 1990s, now a mature thriving neighborhood. Portland has been doing this for 50 years — it's the proof of concept for US urban green infrastructure.",
  stats:{forest_park:"5,000 acres, 70 miles trails",harbor_drive:"freeway → park (1974)",street_trees:"$13M+ property value added",orenco_station:"pioneering TOD since 1990s",status:"PROVEN — 50+ years of green infrastructure"},
  what_changed:"1970s highway-centric city → tore down Harbor Drive for a park, 50 years of green design → 5,000-acre urban forest, $13M in tree value",
},
{
  name:"Minneapolis",state:"MN",lat:44.9778,lng:-93.2650,
  tags:["future"],
  severity:"moderate",
  reason:"<strong>Minneapolis 2040: first major US city to end single-family-only zoning citywide.</strong> Duplexes and triplexes legal on every residential lot. Parking minimums eliminated citywide. Policy 80 supports walkable TOD around every METRO station — no standalone parking garages near stations, bike-share and first-last-mile infrastructure at every stop. Green Line generated 86% more ridership than bus replacement. 18,000+ multifamily units permitted 2018-2022 (best 5-year stretch ever). Rents grew slower than 126 comparison cities. Housing choice for very low-income: 20.3% vs 18.1% in comparisons. The comprehensive plan turns every station into a 15-minute neighborhood.",
  stats:{zoning:"duplexes/triplexes legal everywhere",parking:"minimums eliminated citywide",metro:"Blue Line + Green Line + extensions",multifamily:"18,000+ units 2018-2022",rents:"slower growth than 126 cities",transit:"Green Line +86% ridership",housing_choice:"20.3% vs 18.1% comparison",status:"BOLD POLICY - most ambitious in US"},
  what_changed:"Housing shortage, single-family-only zoning → ended SF zoning citywide, duplexes legal everywhere → 18,000+ units, rents slower than 126 cities",
},
{
  name:"Austin",state:"TX",lat:30.2959,lng:-97.7070,
  tags:["future"],
  severity:"moderate",
  reason:"<strong>Austin is where the future is being built — literally.</strong> ICON 3D-printed homes: Wolf Ranch (Georgetown) — 100 3D-printed houses, world's largest community. Mueller neighborhood — mixed-income walkable TOD on former airport land. Community First Village — 51-acre permanent housing for people exiting chronic homelessness. ICON's Vulcan printer extrudes Lavacrete (more durable than masonry, resistant to water/mold/termites). Homes printed in ~3 weeks. Initiative 99 competition aims for homes under $99K. Austin ranked #1 in US for smart city preparedness (75.4/100). 3D printing, walkable urbanism, and homeless housing — all in one city.",
  stats:{icon_3d_printing:"100 homes at Wolf Ranch, world's largest",mueller:"700-acre walkable TOD on former airport",community_first:"51-acre homeless housing",print_time:"~3 weeks per home",smart_city_rank:"#1 in US (75.4/100)",status:"BUILDING THE FUTURE — 3D printing, TOD, housing"},
  what_changed:"Housing affordability crisis → ICON 3D-printed homes + Community First Village → 100 homes printed, 51-acre homeless housing",
},
{
  name:"New York City",state:"NY",lat:40.7113,lng:-73.9776,
  tags:["future"],
  severity:"moderate",
  reason:"<strong>NYC is simultaneously the most ambitious climate adaptation and passive house buildout in the country.</strong> Sendero Verde (East Harlem): 709-unit Passive House — world's largest fully certified. 50% less energy than comparable buildings. Houses low-income and formerly homeless. NYC Big U: 10 miles of flood protection around Lower Manhattan ($816M). East Side Coastal Resiliency: 2.4-mile integrated flood system opening 2026. State banned gas in new buildings (first in nation, 2021). 1,860+ certified Passive House units. NYC Buildings of Excellence: $15M competition creating replicable net-zero models. The biggest city in America is building the biggest climate defenses and the biggest passive house pipeline.",
  stats:{sendero_verde:"709 units, world's largest Passive House",big_u:"10 miles flood protection, $816M",gas_ban:"first in nation (2021)",passive_house_units:"1,860+",status:"BUILDING AT SCALE — climate defense + Passive House"},
  what_changed:"Climate-vulnerable megacity → 10 miles of flood protection, 1,860+ Passive House units → biggest climate defense in the country",
},
{
  name:"Atlanta (Living Building)",state:"GA",lat:33.7763,lng:-84.3969,
  tags:["future"],
  severity:"moderate",
  reason:"<strong>Home of the Kendeda Building — first Living Building Challenge certified in the Southeast.</strong> 47,000 sq ft at Georgia Tech. 100% energy from rooftop PV (overproduces 125%). Net-positive water from rainwater harvesting. Composting toilets. All materials screened for Red List chemicals. 99% construction waste eliminated. First Living Building of this scale in the hot, humid Southeast — proving it works outside the Pacific NW. Diana Blank (Kendeda Fund): 'If it can work in Seattle, it can work in Atlanta.' The knowledge transfer created a replicable model for the entire region.",
  stats:{living_building:"ILFI certified Earth Day 2021",energy:"100% PV, overproduces 125%",water:"net-positive rainwater",waste:"99% eliminated",significance:"first in hot/humid Southeast",status:"PROVEN — replicable model for the South"}
},
{
  name:"Cleveland (Evergreen Cooperatives)",state:"OH",lat:41.4993,lng:-81.6944,
  tags:["future"],
  severity:"moderate",
  reason:"<strong>The Cleveland Model: worker-owned cooperatives built by anchor institutions.</strong> Evergreen Cooperatives launched 2008 with Cleveland Clinic, University Hospitals, Case Western. 5 worker-owned businesses, 320+ employee-owners. Laundry cooperative: 150 workers, $25M revenue (2023), 80% profits shared (~$10K/yr per worker). Processes 60,000 lbs of laundry/day. 20% formerly incarcerated. Fund for Employee Ownership acquires and converts existing businesses. Pay 20-25% above competitors. 35.7% net growth in US worker cooperatives 2013-2019.",
  stats:{employees:"320+",revenue:"$25M (2023)",profit_share:"80% to workers (~$10K/yr)",clinic:"60,000 lbs/day 99% fulfillment",incarcerated:"20% of workforce",wages:"20-25% above competitors",status:"PROVEN - Cleveland Model replicated globally"},
  what_changed:"Steel collapse → worker-owned cooperatives + Cleveland Clinic → 5 businesses, 60K lbs laundry/day, 20-25% above market wages",
},
{
  name:"Klamath River Dam Removal",state:"CA",lat:41.9860,lng:-122.5615,
  tags:["future"],
  severity:"moderate",
  reason:"<strong>Largest dam removal in US history - and salmon came back immediately.</strong> Four dams removed 2024. 640km of salmon habitat reopened after 100+ years. First year SONAR: 7,742 Chinook and 324 Coho migrated past former Iron Gate Dam. First Chinook spawning in Jenny Creek since 1961. First Coho in upper basin in 60+ years. $35M Fall Creek Hatchery: 3.25M Chinook and 75,000 Coho annual production. Tribes dreamed of this for decades.",
  stats:{dams_removed:"4",habitat:"640km reopened",chinook:"7,742 first year",coho:"324 first year",spawning:"Jenny Creek since 1961",hatchery:"$35M 3.25M salmon/yr",status:"PROVEN - nature recovered immediately"},
  what_changed:"100+ years of blocked salmon runs → 4 dams removed → 7,742 Chinook migrated past Iron Gate first year",
},
{
  name:"Burlington (Champlain Housing Trust)",state:"VT",lat:44.4759,lng:-73.2121,
  tags:["future"],
  severity:"moderate",
  reason:"<strong>Champlain Housing Trust: the gold standard for community land trusts since 1984.</strong> 700+ shared equity homes. Average purchase $169K vs $500K+ market. 1,300+ families served over 40 years. Affordability IMPROVES on resale (5.65% gain). Only 9 foreclosures in 40 years (through the national crisis). 91.8% of first-time buyers still homeowners after 5 years. Public subsidy of $2.1M served 357 households - would cost 5x more as traditional grants. 2,929 affordable apartments. 500+ formerly homeless housed.",
  stats:{homes:"706 shared equity + 2,929 apts",price:"$169K vs $500K+ market",families:"1,300+ over 40 years",affordability:"+5.65% on resale",foreclosures:"9 in 40 years",retention:"91.8% after 5 years",homeless:"500+ housed",status:"PROVEN - 40-year gold standard CLT"}
},
{
  name:"Detroit (Urban Agriculture)",state:"MI",lat:42.3314,lng:-83.0458,
  tags:["future"],
  severity:"moderate",
  reason:"<strong>Detroit turned 40 square miles of vacant land into one of America's largest urban food systems.</strong> 1,600+ community gardens and urban farms. Michigan Urban Farming Initiative: first free urban sustainables agriculture center in US. D-Town Farm: 7 acres, community-run, feeds 2,000+ families. Keep Growing Detroit: 1,900+ gardens supplying 15% of city's fresh produce. The average Detroit household spends 3.2x more on food than suburban neighbors - these farms close that gap. From ruins to resilience.",
  stats:{gardens:"1,600+ community gardens",dtown:"7 acres feeds 2,000+ families",keep_growing:"1,900+ gardens 15% of produce",food_gap:"households spend 3.2x more than suburbs",significance:"one of largest urban food systems in US",status:"RESILIENCE - from crisis to food sovereignty"}
},
{
  name:"Houston (Housing First)",state:"TX",lat:29.7604,lng:-95.3698,
  tags:["future"],
  severity:"moderate",
  reason:"<strong>Houston cut homelessness 63% since 2011 - the most successful Housing First program in America.</strong> The Way Home coalition: 100+ nonprofits under one data system. 28,000+ placed in permanent housing since 2012. From 8,500 homeless to 3,200. Dismantled 127 encampments after housing every occupant. Spent least of any major US city ($60M/yr) by investing in housing not shelters. $200M COVID investment housed 12,000 more. Apartment first, services after. No sobriety requirement.",
  stats:{reduction:"63% since 2011",housed:"28,000+ since 2012",coalition:"100+ nonprofits one data system",encampments:"127 (all after housing found)",cost:"least of any major US city",covid:"$200M for 12,000 more",status:"PROVEN - most successful Housing First in US"}
},
{
  name:"Stockton (Guaranteed Income)",state:"CA",lat:37.9577,lng:-121.2908,
  tags:["future"],
  severity:"moderate",
  reason:"<strong>SEED: America's first mayor-led guaranteed income pilot - and it worked.</strong> 125 residents got $500/month for 24 months, no strings. Randomized controlled trial. Full-time employment: 28% to 40% (control: 32% to 37%). Income volatility: 19% vs 26% control. Mental distress dropped from mild disorder to likely well. Emergency savings: 25% to 52% could cover $400. No adverse employment effects. Replicated in 100+ cities nationwide.",
  stats:{employment:"28% to 40% full-time",vs_control:"control only 32% to 37%",volatility:"19% vs 26% control",mental_health:"moved to likely well",savings:"25% to 52% cover $400",replications:"100+ cities",status:"PROVEN - RCT with causal evidence"}
},
{
  name:"Minneapolis (Zoning Reform)",state:"MN",lat:44.9778,lng:-93.2650,
  tags:["future"],
  severity:"moderate",
  reason:"<strong>Minneapolis 2040: first major US city to end single-family-only zoning citywide.</strong> Duplexes and triplexes legal on every residential lot. Parking minimums eliminated. 18,000+ multifamily units permitted 2018-2022 (best 5-year stretch). Rents grew slower than 126 comparison cities. Housing choice for very low-income: 20.3% vs 18.1% in comparisons.",
  stats:{zoning:"duplexes/triplexes legal everywhere",parking:"minimums eliminated",multifamily:"18,000+ units 2018-2022",rents:"slower growth than 126 cities",housing_choice:"20.3% vs 18.1% comparison",status:"BOLD POLICY - most ambitious in US"},
  what_changed:"Housing shortage, single-family-only zoning → ended it citywide, parking minimums eliminated → 18,000+ units, rents slower than 126 cities",
},
{
  name:"New York City (Subway Fix)",state:"NY",lat:40.7128,lng:-74.0060,
  tags:["future"],
  severity:"moderate",
  reason:"<strong>NYC subway on-time rate went from 65% to 82% in 3 years.</strong> MTA attacked slow zones, replaced old signals, prioritized reliability over expansion. The G train went from worst-in-class to 90% on-time. Late-night service expanded. The simple act of actually maintaining things changed millions of commutes.",
  stats:{ontime:"65% to 82%",g_train:"worst to 90% on-time",approach:"fix what exists not build new",impact:"millions of daily commutes",status:"PROVEN - maintenance beats new construction"},
  what_changed:"65% on-time rate, worst subway reliability → MTA attacked slow zones, replaced signals → 82% on-time, G train from worst to 90%",
},
{
  name:"Columbus",state:"OH",lat:39.9612,lng:-82.9988,
  tags:["future"],
  severity:"moderate",
  reason:"<strong>Columbus won the US DOT Smart City Challenge and used $50M to fix real transit problems.</strong> Smart Columbus: EV sharing, real-time transit data, connected corridors. Solar-powered EV charging network. Mobility hubs at transit stations. Transit ridership increased 10% while reducing emissions. A mid-size city leapfrogging the coasts.",
  stats:{grant:"$50M DOT Smart City Challenge winner",ev_network:"solar-powered charging citywide",ridership:"+10% increase",connectivity:"real-time data at every stop",status:"PROVEN - mid-size city leapfrogging coasts"},
  what_changed:"Mid-size city lagging on transit → won $50M Smart City Challenge → solar EV charging, 10% ridership increase",
},
{
  name:"Chattanooga",state:"TN",lat:35.0456,lng:-85.3096,
  tags:["future"],
  severity:"moderate",
  reason:"<strong>Chattanooga built the fastest internet in America and it is publicly owned.</strong> EPB Fiber Optics: municipal fiber offering 25 Gbps symmetrical speeds. Private ISPs fought it in court and lobbied to ban it. EPB won. 88% take rate. $1.2B in new business investment. The city that was a 1960s worst-polluted steel town now has the fastest internet in the country.",
  stats:{speed:"25 Gbps residential (fastest in US)",ownership:"municipal EPB Fiber Optics",take_rate:"88% adoption",economic:"$1.2B new business investment",fought:"won court battles vs Comcast and AT&T",status:"PROVEN - public broadband beats private monopoly"},
  what_changed:"Polluted 1960s steel town → built municipal fiber optics → 25 Gbps, fastest internet in America, $1.2B new business investment",
},
{
  name:"Pittsburgh (Steel to Tech)",state:"PA",lat:40.4406,lng:-79.9959,
  tags:["future"],
  severity:"moderate",
  reason:"<strong>From steel collapse to AI research hub, with air and water cleanup to match.</strong> When steel died in the 1980s 150000 manufacturing jobs vanished. The Monongahela River caught fire. Now: 1000+ tech companies, world-class robotics at CMU, Air Force partnership for autonomous systems. River returned to life with bass fishing in city limits. Air quality went from 60+ bad days/year to under 10. Steel mills are now state parks.",
  stats:{tech:"1000+ companies",robotics:"CMU and Air Force partnership",river:"bass fishing in city limits",air:"60+ bad days to under 10",steel_mills:"now state parks",status:"FULL TURNAROUND - measured not slogan"},
  what_changed:"Steel collapsed, 150K manufacturing jobs lost → pivoted to tech, CMU robotics, river cleanup → 1,000+ tech companies, bass fishing in city",
},
{
  name:"Providence",state:"RI",lat:41.8240,lng:-71.4128,
  tags:["future"],
  severity:"moderate",
  reason:"<strong>Providence buried its river under asphalt for 50 years, then dug it up.</strong> The Moshassuck and Woonasquatucket rivers were paved over in the 1950s for highways. In 2010 the city daylighted the rivers, created Waterplace Park, and built the Riverwalk. Providence Venetian-style gondola rides now pass under bridges that carry foot traffic over restored waterways. The river Renaissance attracted $2.5B in downtown investment. A city that buried its natural assets instead chose to restore them.",
  stats:{rivers:"daylighted after 50 years under asphalt",investment:"$2.5B downtown",park:"Waterplace Park and Riverwalk",approach:"reverse 1950s highway destruction",status:"PROVEN - unburying what was buried"},
  what_changed:"River buried under asphalt in 1950s → daylighted rivers, built Waterplace Park → $2.5B downtown investment followed",
},
{
  name:"Duluth",state:"MN",lat:46.7867,lng:-92.1005,
  tags:["future"],
  severity:"moderate",
  reason:"<strong>Duluth built a $100M park system on a river that used to be an open sewer.</strong> The St Louis River was so polluted EPA listed it a Great Lakes Area of Concern. $100M in cleanup converted industrial ruins into parkland. Spirit Mountain, Bayfront Festival Park, the Lakewalk. Bald eagles returned to nest downtown. Property values near the river doubled. The city that used to hide its waterfront now celebrates it. 8.6 miles of restored shoreline.",
  stats:{cleanup:"$100M St Louis River restoration",eagles:"nesting downtown",shoreline:"8.6 miles restored",property_values:"doubled near river",status:"PROVEN - waterfront renaissance"},
  what_changed:"St. Louis River was an open sewer, EPA Area of Concern → $100M cleanup → bald eagles nesting downtown, property values doubled",
},
{
  name:"Richmond",state:"CA",lat:37.9358,lng:-122.3478,
  tags:["future"],
  severity:"moderate",
  reason:"<strong>Richmond forced Chevron to pay and rebuilt itself as a cooperative economy.</strong> After the 2012 refinery fire Richmond sued Chevron and won $5M in damages plus $90M in infrastructure improvements. The city then built one of the strongest community wealth-building programs in America: worker cooperatives, community land trusts, local hiring requirements for all city contracts. From a violent refinery town to a model of community self-determination. The turnaround is measured in jobs created and violence reduced.",
  stats:{chevron_settlement:"$90M infrastructure investment",cooperatives:"worker-owned businesses funded",hiring:"local hiring requirements for city contracts",status:"PROVEN - community wealth building"},
  what_changed:"Chevron refinery fire in 2012 → sued and won $90M in infrastructure → worker cooperatives, local hiring requirements",
},
{
  name:"Gary",state:"IN",lat:41.5934,lng:-87.3464,
  tags:["future"],
  severity:"moderate",
  reason:"<strong>Gary: from 175000 people to 69000, but urban farming is feeding the community back to life.</strong> When US Steel collapsed Gary lost 90% of its jobs and two-thirds of its population. But the vacant land became opportunity. Gary has one of the most productive urban agriculture networks in the Midwest. 160+ community gardens. The Food Commons trust manages 35 acres of urban farmland feeding 5000+ families. Gleaning programs recover 100000+ lbs of produce yearly. A city that lost everything is growing its own food and its own future.",
  stats:{gardens:"160+ community gardens",food_commons:"35 acres urban farmland",families_fed:"5000+",gleaning:"100000+ lbs produce recovered yearly",status:"RESILIENCE - from steel collapse to food sovereignty"},
  what_changed:"Lost 90% of jobs when US Steel collapsed → urban farming feeding 5,000+ families → 160+ community gardens, 100K lbs gleaned yearly",
},
{
  name:"Portland (Bureau of Environmental Services)",state:"OR",lat:45.5152,lng:-122.6784,
  tags:["future"],
  severity:"moderate",
  reason:"<strong>Portland spent 20 years turning sewage overflows into parks.</strong> The Big Pipe project plus 2000+ bioswales reduced combined sewer overflows by 94%. Johnson Creek salmon returned after decades. The Eastbank Esplanade turned a highway corridor into 1.5 miles of waterfront trail. Stormwater pollution cut 75% using dirt and plants instead of just concrete.",
  stats:{csos:"94% reduction since 1990s",bioswales:"2000+ street rain gardens",salmon:"returned to Johnson Creek",pollution:"75% stormwater reduction",status:"PROVEN - green infrastructure at city scale"},
  what_changed:"Sewage overflows dumping into rivers → Big Pipe + 2,000+ bioswales → 94% CSO reduction, salmon returned to Johnson Creek",
},
{
  name:"San Antonio",state:"TX",lat:29.4241,lng:-98.4936,
  tags:["future"],
  severity:"moderate",
  reason:"<strong>San Antonio turned a clogged river into a $3.5B economic engine.</strong> The Mission Reach restoration: 8 miles of river ecosystem, native plants, fish habitat, kayak launches. 40+ bird species returned. Tourism increased 35%. From drainage ditch to most visited attraction in Texas.",
  stats:{investment:"$3.5B Mission Reach",miles:"8 miles river restored",birds:"40+ species returned",tourism:"+35% increase",status:"PROVEN - river pays for itself"},
  what_changed:"Clogged drainage ditch → $3.5B Mission Reach restoration → 8 miles of river, 40+ bird species, tourism up 35%",
},
{
  name:"Minneapolis (Green Line TOD)",state:"MN",lat:44.9778,lng:-93.2650,
  tags:["future"],
  severity:"moderate",
  reason:"<strong>The Green Line generated 86% more ridership than the bus it replaced.</strong> Opened 2014 connecting Minneapolis and St Paul. 12000+ housing units near stations, 70% affordable. Catalyzed $3.5B in station-area investment. 45000 daily riders.",
  stats:{ridership:"+86% vs bus",daily:"45000 riders",housing:"12000+ units near stations",investment:"$3.5B station area",status:"PROVEN - TOD works at scale"}
},
{
  name:"Asheville (Public Water)",state:"NC",lat:35.5951,lng:-82.5515,
  tags:["future"],
  severity:"moderate",
  reason:"<strong>Asheville proved a small city can build the best water system in the Southeast.</strong> Public since 1917. Serves 120000 customers. 97 contaminants tested monthly. Revenue bonds fund improvements without raising taxes. 100 years of public water done right.",
  stats:{customers:"120000 served",contaminants:"97 tested monthly",funding:"revenue bonds no tax increase",history:"public since 1917",status:"PROVEN - 100 years of public water done right"}
},
{
  name:"Cleveland (Cooperative Economics)",state:"OH",lat:41.4993,lng:-81.6944,
  tags:["future"],
  severity:"moderate",
  reason:"<strong>Cleveland's Evergreen Cooperatives: 320+ worker-owners, 80% profit sharing.</strong> Laundry cooperative processes 60000 lbs/day for Cleveland Clinic. 20% of workers formerly incarcerated. Pay is 20-25% above competitors. Fund for Employee Ownership now converts existing businesses to worker ownership. From Rust Belt collapse to cooperative economy.",
  stats:{employees:"320+",profit_share:"80% to workers",clinic:"60000 lbs/day 99% fulfillment",incarcerated:"20% of workforce",wages:"20-25% above competitors",status:"PROVEN - Cleveland Model replicated globally"}
},
{
  name:"Hartford",state:"CT",lat:41.7658,lng:-72.6734,
  tags:["future"],
  severity:"moderate",
  reason:"<strong>Hartford went from bankruptcy to the most ambitious municipal insurance co-op in America.</strong> The city was insolvent in 1997. Then it created the Hartford Community Insurance Company: a municipally owned insurance pool that now covers 18 neighboring towns. Premiums are 20% below private market. Reserve fund grew to $45M. Other cities are now copying the model. The city that went bankrupt invented a way for communities to self-insure.",
  stats:{towns_covered:"18 municipalities",savings:"20% below private market",reserves:"$45M fund",approach:"municipal insurance co-op",status:"PROVEN - self-insurance model copied nationwide"},
  what_changed:"Municipal bankruptcy in 1997 → created community insurance co-op → covers 18 towns, 20% below private market, $45M reserves",
},
{
  name:"South Bend",state:"IN",lat:41.6764,lng:-86.2520,
  tags:["future"],
  severity:"moderate",
  reason:"<strong>South Bend's smart sewers prevented 1.5 billion gallons of sewage from hitting the St Joseph River.</strong> The city installed 200+ sensors in its 100-year-old sewer system. AI reads rainfall data and predicts overflow events, then pre-emptively diverts flow. $500M problem solved with $50M in smart infrastructure. The river's E. coli counts dropped 70%. From Combined Sewer Overflow poster child to national model.",
  stats:{overflow_prevented:"1.5 billion gallons",sensors:"200+ in century-old sewers",savings:"$500M problem solved for $50M",ecoli:"70% drop in river E. coli",status:"PROVEN - smart infrastructure at fraction of cost"},
  what_changed:"100-year-old sewer dumping 1.5B gallons into river → 200+ smart sensors with AI → overflow prevented, E. coli down 70%",
},
{
  name:"Tulsa (Gathering Place)",state:"OK",lat:36.1540,lng:-95.9928,
  tags:["future"],
  severity:"moderate",
  reason:"<strong>Tulsa rebuilt its entire riverfront in 10 years and won Urban Land Institute's top award.</strong> The Gathering Place: 66 acres of public park on the Arkansas River. $465M funded entirely by private donors. Connected to 26 miles of riverside trails. Property values within a mile rose 40%. The Arkansas River went from concrete channel to one of the best urban parks in America. The Gathering Place drew 2 million visitors in its first year.",
  stats:{park:"66 acres Gathering Place",funding:"$465M all private donations",trails:"26 miles riverside",property_values:"+40% within one mile",visitors:"2 million first year",status:"PROVEN - private philanthropy built world-class public space"}
},
{
  name:"Detroit (Cooperative Economy)",state:"MI",lat:42.3314,lng:-83.0458,
  tags:["future"],
  severity:"moderate",
  reason:"<strong>Cooperation Jackson built a cooperative economy from scratch in one of America's hardest-hit cities.</strong> 7 worker-owned cooperatives. Community land trust owns 40 acres. The Fannie Lou Hamer Community Land Trust provides affordable housing. The cooperating economy generates $12M in annual revenue. 300+ jobs created. From the ruins of auto industry collapse to community self-determination.",
  stats:{cooperatives:"7 worker-owned businesses",land_trust:"40 acres community-owned",revenue:"$12M annual",jobs:"300+ created",status:"PROVEN - cooperative economy from ruins"}
},
{
  name:"Birmingham (Railroad Park)",state:"AL",lat:33.5186,lng:-86.8104,
  tags:["future"],
  severity:"moderate",
  reason:"<strong>Birmingham turned its pollution fines into the largest urban park in the Southeast.</strong> After a massive sewer consent decree the city rebuilt its entire stormwater system and created Railroad Park: 19 acres of green space in the heart of downtown. $125M investment. The park catalyzed $1.5B in new development. Red Mountain Park added 12 miles of trails on former iron ore mines. From the most polluted city in the South to the city that turned fines into parks.",
  stats:{park:"19 acres Railroad Park",investment:"$125M",development:"$1.5B catalyzed",trails:"12 miles Red Mountain Park",status:"PROVEN - pollution fines became parks"}
},
{
  name:"Madison",state:"WI",lat:43.0731,lng:-89.4012,
  tags:["future"],
  severity:"moderate",
  reason:"<strong>Madison: 100% renewable electricity by 2030, already at 80%.</strong> The city's utility MGE committed to 100% carbon-free electricity by 2030. Already at 80%. The remaining 20% is being closed with the biggest solar farm in Wisconsin (300 MW). The municipal utility model means the city controls the transition. Meanwhile Madison has the highest bike commute rate in the Midwest and the most farmers markets per capita in the US.",
  stats:{renewable:"80% carbon-free electricity",target:"100% by 2030",solar:"300 MW largest in Wisconsin",utility:"municipal controlled transition",status:"PROVEN - municipal utility leading the transition"},
  what_changed:"Standard municipal utility → MGE committed to 100% carbon-free → already at 80%, 300 MW solar farm, highest bike commute in Midwest",
},
{
  name:"Fort Collins",state:"CO",lat:40.5853,lng:-105.0844,
  tags:["future"],
  severity:"moderate",
  reason:"<strong>Fort Collins proved a mid-size city can reach 90% renewable electricity.</strong> Municipal utility Green Energy Program reached 90% renewable by 2020. The remaining 10% is gas peaker plants being phased out. Net-zero carbon target by 2030. The city also built the first municipal fiber network in Colorado. 10 Gbps available. Population grew 30% while emissions dropped 40%. Growth without pollution is possible.",
  stats:{renewable:"90% achieved",target:"net zero by 2030",fiber:"municipal 10 Gbps network",growth:"+30% population while -40% emissions",status:"PROVEN - growth without pollution"},
  what_changed:"Carbon-heavy municipal energy → Green Energy Program → 90% renewable electricity, population up 30% while emissions down 40%",
},
{
  name:"Lancaster",state:"CA",lat:34.6868,lng:-118.1542,
  tags:["future"],
  severity:"moderate",
  reason:"<strong>Lancaster went from meth capital of LA County to a solar-powered city.</strong> The city installed solar on every municipal building. Built the first net-zero energy city hall in California. Created a solar feed-in tariff that brought 200 MW of rooftop solar. Cut municipal energy costs 40%. Implemented Homeless Housing and Assistance Program: 400+ people housed. The city that was a punchline is now a model.",
  stats:{solar:"200 MW rooftop solar",energy_costs:"-40% municipal",homeless:"400+ housed",approach:"net-zero municipal buildings",status:"PROVEN - punchline to model"},
  what_changed:"Meth capital of LA County → solar on every municipal building, net-zero city hall → 200 MW rooftop solar, 400+ homeless housed",
},
{
  name:"Eau Claire",state:"WI",lat:44.8113,lng:-91.4985,
  tags:["future"],
  severity:"moderate",
  reason:"<strong>Eau Claire built a $35M performing arts center and revitalized downtown without displacing anyone.</strong> The Pablo Center at the Confluence: 40000 sq ft on the Chippewa River. Tax increment financing paid for it without raising property taxes. Downtown housing increased 200% in 10 years. Median household income rose 25%. Zero displacement of existing residents. The arts-center-as-economic-engine model that actually works.",
  stats:{arts_center:"$35M Pablo Center",financing:"TIF no property tax increase",housing:"+200% downtown",income:"+25% median household",displacement:"zero existing residents displaced",status:"PROVEN - arts-led revitalization without displacement"},
  what_changed:"Economic stagnation → $35M performing arts center + TIF financing → downtown housing +200%, income +25%, zero displacement",
},
{
  name:"Boise",state:"ID",lat:43.6150,lng:-116.2023,
  tags:["future"],
  severity:"moderate",
  reason:"<strong>Boise turned a superfund site into the largest urban park in the US.</strong> Expo Idaho Fairgrounds was toxic soil and contaminated groundwater. The city remediated 80 acres and built not a park but a whole neighborhood. Barber Park on the Boise River: 117 acres of greenway. The Greenbelt now stretches 25 miles through the city. Property values along the Greenbelt are 30% above city average. From contamination to the most walkable city in Idaho.",
  stats:{remediation:"80 acres cleaned",greenbelt:"25 miles through city",park:"117 acres Barber Park",property_values:"+30% along Greenbelt",status:"PROVEN - super clean and walkable"},
  what_changed:"Superfund site in the city → remediated 80 acres, built 25-mile Greenbelt → property values +30% along protected corridors",
},
{
  name:"Norfolk (Living Shoreline)",state:"VA",lat:36.8508,lng:-76.2859,
  tags:["future"],
  severity:"moderate",
  reason:"<strong>Norfolk is the first US city to build a living shoreline instead of a seawall.</strong> The 2003 hurricane showed concrete walls fail. So Norfolk built oyster reefs and marsh grasses instead. Living shoreline cost $10M vs $30M for equivalent seawall. Itself-repairing and self-expanding. Fish returned. Property values stabilized. The approach is now being copied by Norfolk's military neighbors and across the Chesapeake Bay.",
  stats:{approach:"living shoreline not seawall",cost:"$10M vs $30M seawall",benefit:"self-repairing and self-expanding",fish:"returned to restored habitat",status:"PROVEN - nature-based beats concrete"}
},
{
  name:"Mississippi (Literacy Miracle)",state:"MS",lat:32.3547,lng:-89.3985,
  tags:["future","literacy","educ"],
  severity:"moderate",
  reason:"<strong>Mississippi went from 49th to 29th in fourth-grade reading in 6 years.</strong> The 2013 Literacy-Based Promotion Act invested $15M/year in Science of Reading training for teachers, early screening for struggling readers, and targeted coaching. By 2019 the state jumped 20 spots on NAEP. By 2025, 85% of third-graders pass the reading assessment. Peer-reviewed research (Spencer 2024, Economics of Education Review) confirmed the LBPA caused the gains: 0.14-0.23 standard deviation increase. The so-called Mississippi Miracle is now a national model. 22 new reading coaches hired in 2025 to expand the program to grades 4-8.",
  stats:{naep_jump:"49th to 29th in 6 years",pass_rate:"85% third-grade reading",investment:"$15M per year",research:"peer-reviewed 0.14-0.23 SD gains",approach:"Science of Reading teacher coaching",expansion:"22 new coaches for grades 4-8",status:"PROVEN - peer-reviewed, national model"},
  what_changed:"49th in 4th-grade reading → Literacy-Based Promotion Act with $15M/yr coaching → 29th by 2019, peer-reviewed causal evidence",
},
{
  name:"Muskegon Lake",state:"MI",lat:43.2342,lng:-86.2484,
  tags:["future","env","water"],
  severity:"moderate",
  reason:"<strong>Muskegon Lake was one of the Great Lakes most polluted places. Now it's delisted.</strong> Designated Area of Concern in 1985 after a century of industrial contamination. $84M cleanup over 28 years: 190000 cubic yards of contaminated sediment removed, 134 acres of habitat restored, 110000 tons of logging-era sawmill debris removed. All 9 Beneficial Use Impairments removed by 2024. Delisted September 2025. The 8th US AOC to be delisted. Economic impact: $8M increase in home values, $28M annual recreation economy. 19% increase in marina customers, 45% increase in hotel tax. 6:1 return on investment.",
  stats:{cleanup:"$84M over 28 years",sediment:"190000 cubic yards removed",habitat:"134 acres restored",home_values:"+$8M",recreation:"+$28M annually",marina:"+19% customers",ROI:"6 to 1",delisted:"September 2025",status:"PROVEN - 28 year turnaround, delisted"},
  what_changed:"One of the Great Lakes most polluted places → $84M cleanup over 28 years → delisted Sept 2025, 6:1 return on investment",
},
{
  name:"Rochester Embayment",state:"NY",lat:43.2557,lng:-77.6133,
  tags:["future","env","water"],
  severity:"moderate",
  reason:"<strong>Rochester's Lake Ontario shoreline was a contaminated industrial wasteland. Now it's a thriving ecosystem.</strong> Designated Area of Concern in 1987. Nearly $14M in GLRI funding cleaned up 8 habitat restoration projects. 275 acres of habitat and 30000 linear feet of wetland restored. All 14 original Beneficial Use Impairments removed. Delisted October 2024. The 7th US AOC and second in New York to be delisted. The transformation from pollution hotspot to thriving recreation area happened within a generation.",
  stats:{funding:"$14M GLRI",habitat:"275 acres restored",wetlands:"30000 linear feet",BUIs:"all 14 removed",delisted:"October 2024",status:"PROVEN - 14 impairments eliminated"},
  what_changed:"Contaminated industrial shoreline on Lake Ontario → $14M GLRI cleanup, 275 acres restored → all 14 impairments removed, delisted 2024",
},
{
  name:"Spirit Lake (Duluth)",state:"MN",lat:46.7867,lng:-92.1005,
  tags:["future","env","water"],
  severity:"moderate",
  reason:"<strong>$186M cleanup turned a Superfund-level toxic lake into a public trail and fish habitat.</strong> Spirit Lake near Duluth: 1.3 million cubic yards of contaminated material remediated over 4 years. 460000 cubic yards dredged. Protective caps placed over 96 acres of aquatic habitat. A new 42-acre shallow bay created for fish spawning. A 2-mile waterfront trail opened to the public in 2024. Part of the St. Louis River Area of Concern delisting effort on Lake Superior. The river that was an open sewer now has a trail and fish spawning habitat.",
  stats:{cost:"$186M over 4 years",remediated:"1.3 million cubic yards",caps:"96 acres aquatic habitat",spawning_bay:"42 acres created",trail:"2 miles waterfront",delisting:"part of St. Louis River AOC",status:"PROVEN - toxic to trail in 4 years"},
  what_changed:"Toxic lake near Duluth → $186M cleanup, 1.3M cubic yards remediated → 2-mile waterfront trail, fish spawning habitat created",
},
{
  name:"Cuyahoga River (Cleveland)",state:"OH",lat:41.4993,lng:-81.6944,
  tags:["future","env","water"],
  severity:"moderate",
  reason:"<strong>The river that caught fire is now River of the Year.</strong> The 1969 Cuyahoga fire helped create the EPA and the Clean Water Act. 55 years later: 6 of 10 Area of Concern impairments removed since 2017. Bald eagles returned in 2006 and have fledged 19 eaglets. Lake sturgeon reintroduced in 2024 with transmitters. Brecksville Dam removed in 2020 reopening the river. Gorge Dam removal underway ($200M). Kayakers and anglers now share water with blue herons. High-end restaurants line banks that once epitomized industrial bleak. Goal: full delisting by 2030. If we can come back from a river that burned, we can come back from anything.",
  stats:{BUIs_removed:"6 of 10 since 2017",eagles:"19 eaglets fledged since 2006",sturgeon:"reintroduced 2024 with transmitters",dam_removed:"Brecksville 2020",next_dam:"Gorge Dam $200M removal underway",river_of_year:"2019",delisting_goal:"2030",status:"FULL COMEBACK in progress - 55 years and counting"},
  what_changed:"River that caught fire in 1969 → 55 years of cleanup, 6 of 10 impairments removed → bald eagles returned, sturgeon reintroduced",
},
{
  name:"Enid (Grassroots Recall)",state:"OK",lat:36.3956,lng:-97.8783,
  tags:["future","governance"],
  severity:"moderate",
  reason:"<strong>Two women in a deep-red county organized a recall that ousted a white nationalist from city council by 20 points.</strong> Connie Vickers and Nancy Presnall, Democrats in a 4-to-1 Republican county, formed the Enid Social Justice Committee after learning their new council member had marched in Charlottesville. Six months of activism, protests and heated council meetings. Cheryl Patterson ran against him. Result: 829 to 561. The committee chair: We did this because we did this. We did not even know what we were doing and we did this. This is possible. A small group anywhere can fight extremism.",
  stats:{margin:"20 points",vote:"829 to 561",organizers:"two women in 4-to-1 GOP county",committee:"Enid Social Justice Committee",lesson:"small group anywhere can fight extremism",status:"PROVEN - grassroots defeated hate"},
  what_changed:"White nationalist on city council in deep-red county → Two women organized recall → ousted by 20 points",
},
{
  name:"77 Officials Recalled",state:"US",lat:39.8283,lng:-98.5795,
  tags:["future","governance"],
  severity:"moderate",
  reason:"<strong>77 officials were recalled in 2024. 70% of those who faced recall elections were removed.</strong> The second-highest removal rate since Ballotpedia began tracking in 2012. Michigan led with 70 officials targeted. California had 65. Oakland recalled its mayor (largest city recall in a decade). Enid recalled a white nationalist council member. The message: voters are paying attention and they are not afraid to act. The social contract is being enforced at the local level where it matters most.",
  stats:{recalled:"77 officials removed in 2024",removal_rate:"70% of those who faced elections",michigan:"70 officials targeted",california:"65 targeted",oakland:"largest city recall in decade",status:"PROVEN - voters enforcing the social contract"}
},
{
  name:"White Lake",state:"MI",lat:43.3764,lng:-86.3395,
  tags:["future","env","water"],
  severity:"moderate",
  reason:"<strong>White Lake was so polluted it was declared dead. Now it's a success story and recreation destination.</strong> Designated Area of Concern in 1985 after decades of industrial contamination from a chemical plant that dumped DDT and PCBs. $30M+ in cleanup over 25 years. All 10 Beneficial Use Impairments removed by 2014. Delisted 2014. The first Great Lakes AOC to be delisted in Michigan. Lake trout returned. Beaches reopened. Property values doubled. A 3000-acre lake that was written off came back to life.",
  stats:{delisted:"2014 (first MI AOC delisted)",cleanup:"$30M+ over 25 years",BUIs:"all 10 removed",lake_trout:"returned",property_values:"doubled near lake",status:"PROVEN - dead lake comes back to life"},
  what_changed:"So polluted it was declared dead, DDT and PCBs → $30M+ cleanup over 25 years → delisted 2014, lake trout returned, values doubled",
},
{
  name:"Menominee River",state:"MI",lat:45.1094,lng:-87.6153,
  tags:["future","env","water"],
  severity:"moderate",
  reason:"<strong>The Menominee River separating Michigan and Wisconsin was delisted in 2020 after decades of cleanup.</strong> Area of Concern since 1987 due to industrial contamination from paper mills and mining. $25M+ in cleanup: sediment remediation, habitat restoration, fish passage improvements. All Beneficial Use Impairments removed. Walleye and smallmouth bass populations rebounded. The river is now a popular recreational fishery. Proof that bipartisan Great Lakes investment works across state lines.",
  stats:{delisted:"2020",cleanup:"$25M+",boundary:"Michigan-Wisconsin",fisheries:"walleye and bass rebounded",status:"PROVEN - bipartisan cross-state cleanup"},
  what_changed:"Industrial contamination from paper mills → $25M+ cleanup, habitat restoration → delisted 2020, walleye and bass rebounded",
},
{
  name:"Las Vegas (Water Conservation)",state:"NV",lat:36.1699,lng:-115.1398,
  tags:["future","water"],
  severity:"moderate",
  reason:"<strong>Las Vegas reduced water use 58% while population grew 52%.</strong> The city known for excess turned into the most water-efficient metro in the Colorado River Basin. 85% wastewater reuse rate (highest in the basin). 200 million square feet of turf removed. Every shower and faucet in every hotel room on the Strip returns 100% of water to Lake Mead via the Las Vegas Wash - 200 million gallons per day. Per capita use dropped to 89 gallons per day from 211 in 2002. New golf courses prohibited. Evaporative cooling banned in new buildings. Indoor water use is a perpetual motion machine - it does not increase Colorado River consumption.",
  stats:{reduction:"58% per capita since 2002",reuse:"85% wastewater (basin leader)",turf:"200M sq ft removed",strip:"100% indoor water returned to Lake Mead",per_capita:"89 gallons/day (from 211)",status:"PROVEN - excess city becomes efficiency leader"},
  what_changed:"211 gallons/person/day in the desert → conservation mandates, 200M sq ft turf removed → 89 gal/day, every hotel gallon returns to Mead",
},
{
  name:"Chandler (Arizona)",state:"AZ",lat:33.3062,lng:-111.8413,
  tags:["future","water"],
  severity:"moderate",
  reason:"<strong>Chandler AZ stored 500000 acre-feet of water underground and built a 100-year supply.</strong> The city invested in diverse water sources: Salt and Verde Rivers, Colorado River, groundwater, reclaimed water. 95% reclaimed water reuse rate. The $44.6M Reclaimed Water Interconnect Facility (public-private partnership with Intel) opened 2024, treating river water and recharging it into the aquifer. 32+ groundwater wells provide redundancy. Arizona's 1980 Groundwater Management Act forced the transition from wells to renewable supplies - the carrot-and-stick approach worked. Chandler is recognized as one of the most sustainable water providers in Arizona.",
  stats:{storage:"500000 acre-feet underground",reuse:"95% reclaimed water",rwif:"$44.6M public-private with Intel",wells:"32+ for redundancy",supply:"100 year assured",status:"PROVEN - most sustainable water provider in AZ"},
  what_changed:"Arizona water-dependent growth → stored 500K acre-feet underground, 95% reclaimed reuse → 100-year assured water supply",
},
{
  name:"Great Salt Lake (Recovery)",state:"UT",lat:41.1000,lng:-112.5000,
  tags:["future","water"],
  severity:"moderate",
  reason:"<strong>Utah rewrote its entire water law to save a dying lake - and the lake is responding.</strong> Great Salt Lake hit record low in 2022. The Legislature passed dozens of bills: suspended new water appropriations, expanded water leasing, restricted sprinklers, regulated mineral extraction. Between 2021 and 2025 nearly 400000 acre-feet of water was delivered to the lake. Brine shrimp egg numbers up 50%. American white pelicans returned. 15600 acres of invasive phragmites removed. Ducks Unlimited committed $100M. Great Salt Lake Rising pledged $100M. The 2034 Charter commits the state to a multi-decade recovery. Still below healthy levels but the decline has been arrested. Utah will be the exception among the world's declining saline lakes.",
  stats:{water_delivered:"400000 acre-feet 2021-2025",brine_shrimp:"+50% egg numbers",phragmites:"15600 acres removed",funding:"$200M+ committed",charter:"2034 multi-decade commitment",status:"IN PROGRESS - decline arrested, recovery underway"},
  what_changed:"Tipping point, could dry by 2030 → Utah rewrote entire water law → brine shrimp eggs +50%, pelicans returned, $200M+ committed",
},
{
  name:"Boise (Foothill-to-Foothills)",state:"ID",lat:43.6150,lng:-116.2023,
  tags:["future","env"],
  severity:"moderate",
  reason:"<strong>Boise built the largest urban wilderness in the US through a grassroots land trust.</strong> The Foothills-to-Foothills conservation initiative connected 80000 acres of protected open space from the Boise River to the benchlands. The City of Boise, Ada County, and the Nature Conservancy partnered to permanently protect foothills habitat. 190 miles of trails. The greenbelt stretches 25 miles through the city. Property values along protected corridors increased 30%. The largest urban wilderness in the country, built by citizens who voted to tax themselves for it.",
  stats:{protected:"80000 acres open space",trails:"190 miles foothills + 25 miles greenbelt",property_values:"+30% near protected land",approach:"citizen-led land trust vote",status:"PROVEN - largest urban wilderness in US"},
  what_changed:"Unprotected foothills → citizen-led land trust vote → 80,000 acres protected, 190 miles of trails, largest urban wilderness in US",
},
{
  name:"Aldine ISD (Texas Education Turnaround)",state:"TX",lat:29.9588,lng:-95.4181,
  tags:["future","edu"],
  severity:"moderate",
  reason:"<strong>Aldine ISD gained 12 points in 2 years - from D to C, with F-rated schools dropping from 23 to 4.</strong> Superintendent Goffney took over a teetering district and implemented 'Teach Like a Champion' (6 classroom strategies), high-quality instructional materials, and year-round school at select campuses. Scholarships increased 500% in one year: $50M to $300M. College/career readiness rose to 80%. Cypresswood Elementary went F→B in one year with 700+ students. Teague Middle School same jump. The district closed 9 underperforming campuses with minimal pushback - families rezoned to newer schools. 88-92% of staff stayed after closures. Aldine is the most improved large district in Texas.",
  stats:{gain:"+12 points in 2 years",f_schools:"23→4 (83% reduction)",scholarships:"$50M→$300M (500%)",ccmr:"80% college/career ready",closures:"9 campuses, 88-92% staff retained",status:"PROVEN - most improved large district in TX"},
  what_changed:"D-rated district with 23 failing schools → Teach Like a Champion + high-quality curriculum → gained 12 points, F schools: 23→4",
},
{
  name:"Dallas ISD (Comprehensive Turnaround)",state:"TX",lat:32.7767,lng:-96.7970,
  tags:["future","edu"],
  severity:"moderate",
  reason:"<strong>Dallas ISD went C→B with F-rated schools dropping from 24 to 2.</strong> 93% of campuses now rated A, B, or C. A-rated schools doubled from 30 to 60. South Oak Cliff High School - 98% economically disadvantaged, 73% at risk - went D→B (score 89, one point shy of A). The school uses aggressive monitoring: teachers check student mastery multiple times per exercise. Principal Johnson: 'Once we put an A on this institution, then this is the mecca.' The district set a goal of zero D/F campuses by 2026-27 and is on track. Superintendent Elizalde says the strategy is replicable across comprehensive (non-magnet) campuses.",
  stats:{f_schools:"24→2",a_schools:"30→60 (doubled)",overall:"C→B",soc:"South Oak Cliff 89/100 (98% disadvantaged)",goal:"zero D/F by 2026-27",status:"PROVEN - replicable turnaround model"},
  what_changed:"C-rated district with 24 failing schools → aggressive monitoring + targeted closures → F schools: 24→2, South Oak Cliff D→B",
},
{
  name:"Houston ISD (State Takeover Reversal)",state:"TX",lat:29.7604,lng:-95.3698,
  tags:["future","edu"],
  severity:"moderate",
  reason:"<strong>Houston ISD under state takeover since 2023 achieved B rating with zero F campuses.</strong> 74% of 273 schools now A or B rated. 130,000+ of 170,000 students attend A/B schools. Before the takeover, 56 campuses had failing ratings and 65 had D ratings. Jefferson Elementary went D→A in one year. Commissioner Morath: 'The district is extraordinarily close to meeting all metrics' for ending the takeover. The superintendent says 'zip code is no longer destiny in HISD.' Despite community pushback over staffing changes, the academic results are the strongest in years.",
  stats:{overall:"B rating (from D/F era)",a_b_schools:"74% of 273 campuses",f_schools:"0 (was 56 failing)",students_in_ab:"130000+ (of 170000)",takeover:"may end 2026",status:"IN PROGRESS - strongest results in years"},
  what_changed:"56 failing campuses under state takeover → 74% of schools now A/B rated → zero F campuses, takeover may end 2026",
},
{
  name:"Oklahoma County (Justice Reform)",state:"OK",lat:35.5514,lng:-97.4604,
  tags:["future","gov","social"],
  severity:"moderate",
  reason:"<strong>Oklahoma County reduced jail population 46% since 2015 - from 2500 to record low 1385.</strong> The Criminal Justice Advisory Council (CJAC) implemented 4 of 6 Vera Institute recommendations. Police cite-and-release increased 61%. 1500+ warrants cleared in one year. Drug courts expanded. ReMerge program serves mothers. Fines/fees as jail driver reduced to under 1.5% of admissions. State Legislature passed law allowing $25/month payment plans to avoid arrest. The county now has lower jail population than Tulsa County despite larger general population.",
  stats:{decline:"46% since 2015 (2500→1385)",cite_release:"+61%",warrants_cleared:"1500+/year",fees_jail:"under 1.5% of admissions",payment_plans:"$25/month to avoid arrest",status:"PROVEN - record low jail population"},
  what_changed:"Overcrowded jails → CJAC implemented Vera Institute reforms → 46% jail reduction, 1,500+ warrants cleared per year",
},
{
  name:"Oklahoma (Recidivism & Rehabilitation)",state:"OK",lat:35.4676,lng:-97.5164,
  tags:["future","gov"],
  severity:"moderate",
  reason:"<strong>Oklahoma has the second-lowest recidivism rate in the US at 15.6%.</strong> The R.I.S.E. program (cosmetology inside prisons) provides job skills + transitional housing + salon partnerships. 88% success rate for 18-24 year olds at BJCC (vs 15% national). 8000-9000 of 21000 inmates participating in rehabilitation programs. ODOC launched medication-assisted treatment for substance abuse. Body cameras rolled out statewide. Officer retention jumped from 37% to 84%. Braille transcription program teaches inmates to transcribe books for blind children (Library of Congress certification). 'We Change Lives' mission adopted.",
  stats:{recidivism:"15.6% (2nd lowest in US)",rise_program:"cosmetology + transitional housing + salon jobs",bjcc_18_24:"88% success (vs 15% national)",participants:"8000-9000 of 21000 inmates",officer_retention:"37%→84%",status:"PROVEN - systemic rehabilitation model"},
  what_changed:"High recidivism → R.I.S.E. program + rehab inside prisons → 15.6% recidivism, 2nd lowest in US",
},
{
  name:"Portland (Housing First Model)",state:"OR",lat:45.5152,lng:-122.6784,
  tags:["future","social"],
  severity:"moderate",
  reason:"<strong>Portland housed 23300+ people in 2 years - 46% more than the prior period.</strong> The Homelessness Response Action Plan (HRAP) launched July 2024 as a City-County partnership. 83% of people placed in permanent supportive housing remained housed 24 months later (surpassing the 75% goal). The Supportive Housing Services measure has placed 15724 people in permanent housing since 2020, with 85% retained one year later. 26381 households received eviction prevention. 3500 affordable units in development pipeline. Portland has opened and preserved 6000+ affordable housing units since declaring a housing emergency in 2015.",
  stats:{housed:"23300+ in 2 years (46% increase over prior)",retention:"83% in PSH at 24 months",eviction_prevention:"26381 households",affordable_units:"6000+ preserved/opened since 2015",shs_total:"15724 in permanent housing",status:"IN PROGRESS - strong early results"},
  what_changed:"Homelessness crisis → HRAP City-County partnership → 23,300+ housed in 2 years, 83% retained at 24 months",
},
{
  name:"Washington State (Paid Family Leave)",state:"WA",lat:47.0379,lng:-122.9007,
  tags:["future","social"],
  severity:"moderate",
  reason:"<strong>Washington's Paid Family and Medical Leave paid $4.2B on 700000+ claims since 2020.</strong> In FY24 alone: 204000 employees received $1.67B in benefits covering 61M hours of leave. Average weekly payment $890. The program is funded by a 0.92% premium split between employers and employees. Job protection is the key: when workers are protected from losing their job, take-up increases 64%. For the lowest-earning workers, job protection increases the likelihood of returning to the same employer by 12.6 percentage points (from 85.5% to 98.1%). The program is self-funding through premiums - not tax dollars.",
  stats:{total_paid:"$4.2B on 700000+ claims",fy24_benefits:"$1.67B to 204000 employees",avg_weekly:"$890",job_protection:"+64% take-up, +12.6pp retention for lowest earners",funding:"0.92% premium (self-funded)",status:"PROVEN - self-sustaining social insurance"},
  what_changed:"No paid family leave → premium-funded program since 2020 → $4.2B paid on 700K+ claims, self-sustaining",
},
{
  name:"Oregon (Paid Leave Milestone)",state:"OR",lat:44.9429,lng:-123.0351,
  tags:["future","social"],
  severity:"moderate",
  reason:"<strong>Paid Leave Oregon surpassed $1B in benefits to 150000+ workers since January 2023.</strong> The program delivered $334M in its first 7 months (Aug 2023-Mar 2024): 46% bonding leave, 39% medical leave, 9% family care, 14% pregnancy-related, 1% safe leave. Average medical leave: 8 weeks, 7 median. Average bonding leave: 12 median. The program is a national model for state-administered paid leave, funded entirely by employer and employee contributions. $1B in less than 2 years of operation.",
  stats:{total:"$1B+ to 150000+ workers",first_7mo:"$334M, avg $828/week bonding, $774/week medical",leave_mix:"46% bonding, 39% medical, 9% family",duration:"8 weeks avg medical, 12 weeks avg bonding",funding:"employer + employee contributions",status:"PROVEN - national model"},
  what_changed:"No paid family leave → Paid Leave Oregon launched Jan 2023 → $1B+ to 150K+ workers in under 2 years",
},
{
  name:"Minnesota (Paid Leave Launch)",state:"MN",lat:44.9778,lng:-93.2650,
  tags:["future","social"],
  severity:"moderate",
  reason:"<strong>Minnesota launched paid leave Jan 2026 and hit 75000 users in 6 months - $70M under budget.</strong> The program launched on time and under budget, with the implementation cost $70M below projections (savings redirected to the trust fund). 48000 applications in first 2 months. 45% bonding leave, 44% medical, 11% caregiving. Average leave 6-9 weeks. Up to 12 weeks paid, job-protected leave. First payments arrived within 3-5 days of approval. Average payment $1153. Commissioner Varilek: 'Paid Leave is delivering timely service and payments.'",
  stats:{users:"75000 in 6 months",budget:"$70M under budget",avg_payment:"$1153",avg_leave:"6-9 weeks",approval_rate:"two-thirds approved within 3 weeks",status:"PROVEN - on-time, under-budget launch"},
  what_changed:"No paid family leave → Program launched Jan 2026 → 75,000 users in 6 months, $70M under budget",
},
{
  name:"Colorado (Water Conservation & Innovation)",state:"CO",lat:39.5501,lng:-105.7821,
  tags:["future","water","env"],
  severity:"moderate",
  reason:"<strong>Colorado is reimagining water use in the Colorado River Basin through conservation and crop innovation.</strong> The System Conservation Pilot Program paid 110 participants $28.6M to cut water use by 63631 acre-feet in 2024. The $98.5M Shoshone water rights deal keeps 1M acre-feet of water in the river instead of sending it to the Front Range. At research stations, three alternative crops to water-thirsty alfalfa are emerging: Kernza (wheatgrass grain), sainfoin (legume), and silflower - all using less water and better for cattle. Sports betting tax revenues now fund water projects (Proposition JJ). The state passed SB24-197 conservation measures.",
  stats:{pilot_program:"$28.6M to 110 participants, 63631 acre-feet saved",shoshone:"$98.5M to keep 1M acre-feet in the river",crops:"Kernza, sainfoin, silflower as alfalfa alternatives",sports_betting:"tax revenue now funds water projects",status:"IN PROGRESS - innovation across agriculture + policy"},
  what_changed:"Colorado River Basin water crisis → System Conservation Pilot + crop innovation → 63,631 acre-feet saved, alternative crops emerging",
},
{
  name:"Great Salt Lake (Legislative Response)",state:"UT",lat:41.1000,lng:-112.5000,
  tags:["future","water"],
  severity:"moderate",
  reason:"<strong>Utah passed dozens of bills to save the Great Salt Lake - the lake is responding.</strong> Hit record low in 2022. Legislature: suspended new water appropriations, expanded water leasing, restricted sprinklers, regulated mineral extraction. 400000 acre-feet delivered 2021-2025. Brine shrimp eggs up 50%. American white pelicans returned. 15600 acres of invasive phragmites removed. Ducks Unlimited committed $100M. Great Salt Lake Rising pledged $100M. The 2034 Charter commits to multi-decade recovery. Still below healthy levels but the decline has been arrested - Utah will be the exception among the world's declining saline lakes.",
  stats:{water_delivered:"400000 acre-feet 2021-2025",brine_shrimp:"+50%",phragmites:"15600 acres removed",funding:"$200M+ committed",charter:"2034 multi-decade commitment",status:"IN PROGRESS - decline arrested"},
  what_changed:"Record low threatening 80% of Utah's population → Legislature rewrote water law → 400K acre-feet delivered, $200M+ committed",
},
{
  name:"Mississippi (Education Miracle)",state:"MS",lat:32.3547,lng:-89.3985,
  tags:["future","edu"],
  severity:"moderate",
  reason:"<strong>Mississippi went from 50th in the nation to 9th in 4th grade reading in just 11 years.</strong> The Literacy-Based Promotion Act (2013) transformed education in a state that had been dead last for decades. 4th grade reading: #49 in 2013 to #9 in 2024 (nation's #1 gains). 4th grade math: #50 to #16. African American 4th graders rank #3 nationally. Hispanic 4th graders rank #1 for reading, #2 for math. Economically disadvantaged 4th graders rank #1 nationally in reading. 85% of 3rd graders pass the reading assessment. Schools rated A/B/C: 62.4% in 2016 to 80.1% in 2024-25. KIDS COUNT ranked Mississippi #16 for education in 2025, the state's highest ranking ever.",
  stats:{reading_4th:"#49 to #9 in 11 years",math_4th:"#50 to #16",african_american:"#3 nationally",hispanic:"#1 reading, #2 math nationally",economically_disadvantaged:"#1 nationally in reading",schools_abc:"62.4% to 80.1% since 2016",status:"PROVEN - nation's #1 education turnaround"},
  what_changed:"50th in 4th-grade reading → Science of Reading + $15M/yr investment → 9th nationally, Black students rank #3, Hispanic #1 reading",
},
{
  name:"Charleston SC (Tourism Economy)",state:"SC",lat:32.7765,lng:-79.9311,
  tags:["future","econ"],
  severity:"moderate",
  reason:"<strong>Charleston's tourism industry hit $14B economic impact in 2024, a record.</strong> 7.8 million visitors spent $1,105 per trip on average. Tourism supports 54,900 jobs and accounts for 23.5% of all sales. Economic impact jumped 45% since 2019 with only 6% visitor growth, meaning the destination attracts high-value travelers. Hotel occupancy 70.6%. Charleston International broke its own record with 6.2M passengers. Wage growth in Charleston was #18 nationally at +7.4%.",
  stats:{impact:"$14B (45% up since 2019)",visitors:"7.8M",jobs:"54900 hospitality",spend:"$1105 per trip average",airport:"6.2M passengers (record)",wages:"+7.4% (18th nationally)",status:"PROVEN - high-value tourism model"},
  what_changed:"Post-recession tourism decline → invested in cultural assets → $14B economic impact, 45% growth since 2019, 54,900 jobs",
},
{
  name:"Washington Paid Leave (Evidence)",state:"WA",lat:47.0379,lng:-122.9007,
  tags:["future","social"],
  severity:"moderate",
  reason:"<strong>Washington Paid Leave study proves job protection works: 64% more take-up, lowest earners return to same employer 98.1% of the time.</strong> The UW study found that when workers have job protection during paid leave, they are 64% more likely to use the program. For the lowest-earning workers, job protection increases the likelihood of returning to the same employer from 85.5% to 98.1%, a 12.6 percentage point increase. Overall, job-protected workers are 5% more likely to be employed after leave and 6% more likely to return to the same employer. First evidence that job protection through a leave program increases both program use and employment stability.",
  stats:{take_up:"+64% with job protection",same_employer_low_wage:"85.5% to 98.1%",employed_after_leave:"+5% with job protection",same_employer_all:"+6% with job protection",study:"UW first evidence of job protection impact",status:"PROVEN - evidence-based policy"}
},
{
  name:"Oregon Sports Betting for Water",state:"OR",lat:44.9429,lng:-123.0351,
  tags:["future","water"],
  severity:"moderate",
  reason:"<strong>Oregon voters passed Proposition JJ to redirect sports betting tax revenue to water projects.</strong> The measure lifts the revenue cap on sports betting taxes, directing all excess to water conservation instead of refunding it to casinos. Initially adds $1M in 2024-25 and $2.5M the next fiscal year. Combined with the federal System Conservation Pilot Program ($44.6M spent across 4 states), farmers are being paid $509 per acre-foot to cut water use. Research stations are testing Kernza, sainfoin, and silflower as alternatives to water-thirsty alfalfa.",
  stats:{jj_measure:"sports betting tax to water projects",initial_revenue:"$1M year 1, $2.5M year 2",pilot_program:"$44.6M across 4 states",payment_rate:"$509 per acre-foot",alternative_crops:"Kernza, sainfoin, silflower",status:"PROVEN - creative funding model"}
}
,
{
  name:"Indianapolis (Gun Violence Reduction)",state:"IN",lat:39.7684,lng:-86.1581,
  tags:["future","social","gov"],
  severity:"moderate",
  reason:"<strong>Indianapolis achieved 4 consecutive years of gun violence decline - 44% reduction in murders and nonfatal shootings since 2022.</strong> The Gun Violence Reduction Strategy (GVRS) launched January 2022. In 2025: 20% fewer murders and 21% fewer shootings than 2024, the fewest murders in 11 years. The data-driven approach identifies very high-risk individuals and provides intensive intervention through Indy Peace. Violent crime down 30% and property crime down 15.6% since 2021. The City initially allocated $150M in ARPA funds, then approved general fund dollars for long-term sustainability. Washington Post named Indianapolis one of five cities explaining why homicide rates are down nationwide.",
  stats:{reduction:"44% in murders+shootings since 2022",consecutive_years:"4 years of decline",2025:"20% fewer murders, 21% fewer shootings",violent_crime:"-30% since 2021",funding:"$150M ARPA + general fund",status:"PROVEN - 4 consecutive years of decline"},
  what_changed:"Surging gun violence → data-driven Gun Violence Reduction Strategy → 44% reduction over 4 consecutive years, fewest murders in 11 years",
},
{
  name:"Denver (Transit-Oriented Development)",state:"CO",lat:39.7392,lng:-104.9903,
  tags:["future","econ"],
  severity:"moderate",
  reason:"<strong>Denver built 54000+ housing units near transit - 44% of all new housing in the MSA despite tiny land area.</strong> Since 2005, 68% of all new office development and 44% of new housing across Metro Denver has been within a half-mile of an RTD station. RTD Station Areas make up a tiny fraction of land but capture outsized development. 54430 existing residential units and 11.5M SF of office space near stations. Colorado HB-1313 (2024) requires jurisdictions to raise zoning potential along high-frequency corridors. RTD is converting empty park-and-ride lots (many at 25-30% capacity post-pandemic) into 800+ unit affordable housing developments. The 41st-Fox Station has 1300 units completed in 5 years with 1500 more planned.",
  stats:{housing:"54430 units near transit",office:"11.5M SF near stations",share:"44% of all new MSA housing",zoning:"HB-1313 mandates density near transit",parking_conversion:"empty lots to 800+ affordable units",status:"PROVEN - transit-driven development model"},
  what_changed:"Housing crisis and sprawl → transit-oriented development near RTD stations → 54,000+ units near transit, 44% of all new housing",
},
{
  name:"Hazard KY (Downtown Revival)",state:"KY",lat:37.2493,lng:-83.1938,
  tags:["future","econ","reversal"],
  severity:"moderate",
  reason:"<strong>Hazard KY went from a dying coal town to a thriving downtown in 5 years: 70 new businesses, 250+ jobs, 18% population growth.</strong> The city redoubled its Main Street renovation when prospective employers saw there were no good gathering places. 70 new businesses opened (62 still operating), accounting for 250+ jobs. Population rose 18% from 2010-2020 while Pikeville grew 12%. Pineville: 20% to 100% building occupancy in 3 years after a moratorium on property-tax assessment increases. Corbin went fully wet for restaurants, triggering a regional chain of downtown revivals. Southeast Community College helps businesses with quarterly check-ins.",
  stats:{businesses:"70 new in 5 years (62 still open)",jobs:"250+",population:"+18% (2010-2020)",pineville:"20% to 100% occupancy",approach:"Main Street renovation + tax incentives",status:"PROVEN - coal country reinvention"},
  what_changed:"Dying coal town, no gathering places → Main Street renovation + tax incentives → 70 new businesses, 250+ jobs, 18% pop growth",
},
{
  name:"West Virginia (Clean Energy Transition)",state:"WV",lat:38.5976,lng:-80.4549,
  tags:["future","econ","reversal"],
  severity:"moderate",
  reason:"<strong>West Virginia now has more clean energy jobs than coal jobs - and the transition is just beginning.</strong> In 2022 the state had 17959 clean energy jobs, exceeding total coal employment. The ACT Now Coalition received $63M from the federal Build Back Better Regional Challenge to transform 21 southern WV counties into a clean energy hub. The Appalachian Solar Finance Fund has seeded 46 new solar projects. Boone County: half of residents worked in coal in 2008, employment dropped 80% by 2016. Now the region has nascent renewable climate technologies, abandoned mines with environmental implications, but also key assets for clean energy leadership. Speaker of the House Roger Hanshaw: 'West Virginia's transition from coal to clean energy is the only path for prosperity.'",
  stats:{clean_energy_jobs:"17959 (exceeds coal jobs)",coal_decline:"60% production drop 2008-2015",bbbrc_grant:"$63M for 21-county transformation",solar:"46 new projects seeded",political_support:"bipartisan momentum",status:"IN PROGRESS - just transition underway"},
  what_changed:"Coal economy collapsed → $63M federal grant for clean energy → more clean energy jobs than coal jobs for the first time",
},
{
  name:"Spokane River (PCB Cleanup)",state:"WA",lat:47.6588,lng:-117.4260,
  tags:["future","water","reversal"],
  severity:"moderate",
  reason:"<strong>Spokane removed 8000+ pounds of PCBs from the river and wastewater plants now remove 95-99% of PCBs.</strong> The Spokane River was listed as impaired for PCBs in 2004. The collaborative Spokane River Toxics Task Force led to removal of 8000+ pounds of PCBs. The city built the $125M Taylor Tertiary Treatment Facility (opened 2021) that removes 99%+ of PCBs. Spokane County: 99% removal. Liberty Lake: 97% removal. Inland Empire Paper: 99% removal ('most advanced system for a pulp mill in North America'). EPA set a new stricter standard at 1.3 picograms per liter, based on the Spokane Tribe's 2013 standard. $6.9M EPA grant for implementation.",
  stats:{pcbs_removed:"8000+ pounds",treatment:"95-99% removal at all facilities",taylor_facility:"$125M, opened 2021",new_standard:"1.3 pg/L (from 7 pg/L)",tribal_standard:"Spokane Tribe led since 2013",status:"IN PROGRESS - significant reductions underway"},
  what_changed:"River impaired for PCBs since 2004 → Removed 8,000+ lbs PCBs, built $125M treatment facility → 95-99% removal at all plants",
},
{
  name:"Appalachia (Broadband & Income Gains)",state:"WV",lat:38.3498,lng:-81.6326,
  tags:["future","social"],
  severity:"moderate",
  reason:"<strong>Appalachia's poverty rate dropped 2 points, broadband access jumped 12.2 percentage points, and income grew 9.3%.</strong> The Appalachian Regional Commission's 2024 data: poverty rate declined in every subregion, state and county type. Median family income increased 9.3% (on par with national growth). Labor force employment rate at 95.7%, slightly above the US rate. Broadband access increased 12.2 percentage points (exceeding national average). Computer device ownership up 8.6 points. Education attainment increased across the region. The ARC's federal-state partnership continues to invest in economic development across 423 counties.",
  stats:{poverty:"-2 percentage points",income:"+9.3% median family",broadband:"+12.2 percentage points",employment:"95.7% (above US rate)",education:"increasing across region",status:"IN PROGRESS - steady improvement"},
  what_changed:"Poverty and digital divide → Appalachian Regional Commission investment → poverty -2pts, broadband +12.2pts, income +9.3%",
}
];
