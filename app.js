// Remove exact duplicates
const seen=new Set();
const places=PLACES.filter(p=>{
  const k=(p.name+p.state).toLowerCase();
  if(seen.has(k))return false;
  seen.add(k);return true;
});

const map=L.map('map',{center:[37.5,-96],zoom:5,minZoom:3,maxZoom:16});

const baseLayers={
  'OSM':L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; OpenStreetMap contributors'})
};
baseLayers['OSM'].addTo(map);

const markers=[];

function makeMarker(p,i){
  const hasReversal=!!p.reversal;
  const isFuture=p.tags&&p.tags.includes('future');
  const isReversal=p.tags&&p.tags.includes('reversal');
  const isImproving=p.tags&&p.tags.includes('improving');
  const isPositive=isFuture||isReversal||isImproving;
  let color=isFuture?'#0288d1':isReversal||isImproving?'#2e7d32':SEV[p.severity]||'#666';

  const isPositiveMarker=hasReversal||isPositive;
  let fill='solid';
  if(!isPositiveMarker&&p.severity){
    fill=p.severity==='extreme'?'solid':p.severity==='severe'?'half':'hollow';
  }
  const bg=fill==='solid'?color:fill==='half'?
    `linear-gradient(to bottom,${color} 50%,rgba(0,0,0,0) 50%)`:'rgba(0,0,0,0)';
  const bd=fill==='hollow'?'2px solid '+color:'2px solid '+color+'88';
  const icon=L.divIcon({
    className:'',
    html:`<div style="
      width:${isPositiveMarker?14:12}px;height:${isPositiveMarker?14:12}px;border-radius:50%;
      background:${bg};
      border:${bd};
      box-shadow:0 0 ${isPositiveMarker?10:6}px ${isPositiveMarker?(isFuture?'#0288d166':'#2e7d3166'):color+'66'};
      cursor:pointer;
    "></div>`,
    iconSize:[isPositiveMarker?14:12,isPositiveMarker?14:12],
    iconAnchor:[isPositiveMarker?7:6,isPositiveMarker?7:6]
  });

  const m=L.marker([p.lat,p.lng],{icon}).addTo(map);

  const tagsHtml=p.tags.filter(t=>t!=='reversal').map(t=>{
    const c=TAG_COLORS[t]||{bg:'#333',fg:'#ccc',label:t};
    return `<span class="tag" style="background:${c.bg};color:${c.fg}">${c.label}</span>`;
  }).join('');

  const revHtml=hasReversal?'<span class="tag" style="background:#0a3a1a;color:#2ecc71">Reversing</span>':'';
  const flag=p.severity==='extreme'?'<span class="flag-banner">FLAGGED</span> ':
             p.severity==='severe'?'<span style="color:#d35400;font-size:10px;font-weight:700">WARNING</span> ':'';
  const revBadge=hasReversal?' <span class="reversal-badge">TURNING POINT</span>':'';

  m.bindPopup(`<div class="popup-title">${flag}${p.name}, ${p.state}${revBadge}</div>
    <div class="popup-tags">${tagsHtml}${revHtml}</div>
    <div class="popup-reason">${p.reason.replace(/<[^>]+>/g,'').substring(0,180)}...</div>
    <div class="popup-link" onclick="showDetail(${i})">Full details &rarr;</div>
  </div>`,{maxWidth:340,closeOnClick:true});

  markers.push(m);
}

places.forEach((p,i)=>makeMarker(p,i));

// Search
const searchInput=document.getElementById('search');
const dropdown=document.getElementById('results-dropdown');

searchInput.addEventListener('input',function(){
  const q=this.value.trim().toLowerCase();
  if(q.length<2){dropdown.style.display='none';return;}

  const matches=places.map((p,i)=>{
    let score=0;
    const nl=p.name.toLowerCase(),sl=p.state.toLowerCase(),ts=p.tags.join(' ').toLowerCase(),rs=(p.reason+' '+(p.reversal||'')).toLowerCase();
    if(nl===q||(nl+', '+sl)===q)score=100;
    else if(nl.startsWith(q))score=90;
    else if(nl.includes(q))score=70;
    else if(sl.includes(q))score=40;
    else if(ts.includes(q))score=50;
    else if(rs.includes(q))score=30;
    if(p.severity==='extreme')score+=10;
    if(p.severity==='severe')score+=5;
    if(p.reversal)score+=3;
    return{place:p,idx:i,score};
  }).filter(m=>m.score>0).sort((a,b)=>b.score-a.score).slice(0,15);

  if(!matches.length){dropdown.style.display='none';return;}

  dropdown.innerHTML=matches.map(m=>{
    const p=m.place;
    const tagsHtml=p.tags.filter(t=>t!=='reversal').map(t=>{
      const c=TAG_COLORS[t]||{bg:'#333',fg:'#ccc',label:t};
      return `<span class="tag" style="background:${c.bg};color:${c.fg}">${c.label}</span>`;
    }).join('');
    const revHtml=p.reversal?'<span class="tag" style="background:#0a3a1a;color:#2ecc71">Reversing</span>':'';
    const flag=p.severity==='extreme'?'<span class="flag-banner">FLAGGED</span>':
               p.severity==='severe'?'<span style="color:#d35400;font-size:10px;font-weight:700">WARNING</span>':
               '<span style="color:#f39c12;font-size:10px">CAUTION</span>';
    const revBadge=p.reversal?'<span class="reversal-badge" style="font-size:9px;margin-left:4px">REVERSING</span>':'';

    return `<div class="result-item" onclick="selectPlace(${m.idx})">
      <div>
        <div><span class="result-name">${p.name}</span> <span class="result-state">${p.state}</span>${revBadge}</div>
        <div class="result-tags">${tagsHtml}${revHtml}</div>
      </div>
      <div>${flag}</div>
    </div>`;
  }).join('');
  dropdown.style.display='block';
});

searchInput.addEventListener('keydown',e=>{if(e.key==='Escape'){dropdown.style.display='none';searchInput.blur();}});
document.addEventListener('click',e=>{if(!e.target.closest('#search-box'))dropdown.style.display='none';});

function selectPlace(i){dropdown.style.display='none';searchInput.value='';showDetail(i);}

function showDetail(i){
  const p=places[i];
  document.getElementById('sidebar').classList.remove('hidden');
  document.getElementById('detail-title').textContent=p.name+', '+p.state;

  const sevColor=SEV[p.severity];
  const tagsHtml=p.tags.filter(t=>t!=='reversal').map(t=>{
    const c=TAG_COLORS[t]||{bg:'#333',fg:'#ccc',label:t};
    return `<span class="tag" style="background:${c.bg};color:${c.fg}">${c.label}</span>`;
  }).join('');

  let statsHtml='';
  if(p.stats&&Object.keys(p.stats).length){
    statsHtml=Object.entries(p.stats).map(([k,v])=>`
      <div class="detail-stat"><span class="label">${k.replace(/_/g,' ')}</span><span class="value">${v}</span></div>`).join('');
  }

  let reversalHtml='';
  if(p.reversal){
    reversalHtml=`<div class="detail-section" style="border-left:3px solid #2ecc71;padding-left:10px;margin-top:10px">
      <h3 style="color:#2ecc71">Turning Point</h3>
      <div class="detail-reason">${p.reversal}</div>
    </div>`;
  }

  let whatChangedHtml='';
  if(p.what_changed){
    const isGood=p.tags&&p.tags.some(t=>t==='future'||t==='reversal'||t==='improving');
    whatChangedHtml=`<div class="detail-section what-changed">
      <h3 style="color:${isGood?'#2ecc71':'#4fc3f7'}">What Changed</h3>
      <div class="detail-reason" style="font-size:13px;line-height:1.7">${p.what_changed}</div>
    </div>`;
  }

  document.getElementById('detail-content').innerHTML=`
    <div class="detail-section">
      <h3>Severity</h3>
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
        <div style="width:10px;height:10px;border-radius:50%;background:${sevColor}"></div>
        <strong style="color:${sevColor};text-transform:uppercase;font-size:12px">${p.severity}</strong>
        ${p.reversal?'<span class="reversal-badge" style="margin-left:8px">TURNING POINT</span>':''}
      </div>
    </div>
    ${whatChangedHtml}
    <div class="detail-section">
      <h3>Tags</h3>
      <div class="detail-tags">${tagsHtml}${p.reversal?'<span class="tag" style="background:#0a3a1a;color:#2ecc71">Reversing</span>':''}</div>
    </div>
    <div class="detail-section">
      <h3>Full Story</h3>
      <div class="detail-reason">${p.reason}</div>
    </div>
    ${reversalHtml}
    ${statsHtml?`<div class="detail-section"><h3>Data</h3>${statsHtml}</div>`:''}
    <div class="detail-section">
      <h3>Coordinates</h3>
      <div class="detail-stat"><span class="label">lat/lng</span><span class="value">${p.lat.toFixed(4)}, ${p.lng.toFixed(4)}</span></div>
    </div>
    ${civicActionHtml(p)}`;

  map.flyTo([p.lat,p.lng],8,{duration:1});
  markers[i].openPopup();
}

function closeSidebar(){document.getElementById('sidebar').classList.add('hidden');}

// ── Two-level filter: main categories → subcategories ──

const CATEGORIES={
  water:{label:'Water',color:'#4fc3f7',subs:{'water-contam':'Contaminated','water-scarce':'Scarcity','water-infra':'Infrastructure',water:'All Water'}},
  pollution:{label:'Pollution',color:'#e67e22',subs:{pfas:'PFAS / Forever Chem',toxic:'Toxic Legacy',fracking:'Fracking',cancer:'Cancer Risk',industrial:'Industrial',ozone:'Air Quality',env:'Environmental',air:'Air Quality',food:'Food Desert',seismic:'Seismic / Quakes'}},
  society:{label:'Society',color:'#d4ac0d',subs:{poor:'Deep Poverty','mental-health':'Mental Health',medicaid:'Medicaid Loss','brain-drain':'Brain Drain',decline:'Declining',economic:'Economic Distress',rural:'Rural Decline'}},
  education:{label:'Education',color:'#64b5f6',subs:{educ:'Education Desert',literacy:'Low Literacy','school-closure':'School Closures'}},
  infrastructure:{label:'Infrastructure',color:'#9b59b6',subs:{infra:'Crumbling Infra',lead:'Lead Contamination'}},
  governance:{label:'Governance',color:'#ff6ec7',subs:{'policy-cut':'Policy Cuts',governance:'Social Contract'}},
  climate:{label:'Climate',color:'#f39c12',subs:{heat:'Extreme Heat',flood:'Flood Risk','flooding':'Flood Risk',hurricane:'Hurricane Zone',farm:'Agricultural Crisis'}},
  reversal:{label:'Reversing',color:'#2ecc71',subs:{improving:'Improving',future:'Building the Future',reversal:'Turning Point'}}
};

const TAG_TO_CAT={};
Object.entries(CATEGORIES).forEach(([cat,data])=>{
  Object.keys(data.subs).forEach(sub=>{TAG_TO_CAT[sub]=cat;});
});

const mainBar=document.getElementById('main-categories');
const subBar=document.getElementById('sub-categories');
let activeCategory='all';
let activeSubTags=new Set();

function renderMainPills(){
  Object.entries(CATEGORIES).forEach(([cat,data])=>{
    const btn=document.createElement('button');
    btn.className='cat-pill';
    btn.dataset.cat=cat;
    btn.textContent=data.label;
    btn.onclick=()=>selectCategory(cat);
    mainBar.appendChild(btn);
  });
}
renderMainPills();

function selectCategory(cat){
  activeCategory=cat;
  activeSubTags.clear();
  document.querySelectorAll('.cat-pill').forEach(p=>{
    p.classList.remove('active');
    p.style.background='var(--surface)';
    p.style.borderColor='var(--border)';
  });

  if(cat==='all'){
    document.querySelector('.cat-pill[data-cat="all"]').classList.add('active');
    subBar.classList.remove('visible');
    subBar.innerHTML='';
  }else{
    const pill=document.querySelector(`.cat-pill[data-cat="${cat}"]`);
    pill.classList.add('active');
    pill.style.background=CATEGORIES[cat].color;
    pill.style.borderColor=CATEGORIES[cat].color;
    renderSubPills(cat);
    subBar.classList.add('visible');
  }
  applyFilters();
}

function renderSubPills(cat){
  subBar.innerHTML='';
  const data=CATEGORIES[cat];

  const allBtn=document.createElement('button');
  allBtn.className='sub-pill active all-sub';
  allBtn.textContent='ALL';
  allBtn.onclick=()=>toggleSubAll();
  subBar.appendChild(allBtn);

  Object.entries(data.subs).forEach(([tag,label])=>{
    const btn=document.createElement('button');
    btn.className='sub-pill';
    btn.dataset.tag=tag;
    btn.textContent=label;
    btn.onclick=()=>toggleSubFilter(tag);
    subBar.appendChild(btn);
  });
}

function toggleSubAll(){
  activeSubTags.clear();
  document.querySelectorAll('.sub-pill').forEach(p=>p.classList.remove('active'));
  document.querySelector('.sub-pill.all-sub').classList.add('active');
  applyFilters();
}

function toggleSubFilter(tag){
  document.querySelector('.sub-pill.all-sub').classList.remove('active');
  const pill=document.querySelector(`.sub-pill[data-tag="${tag}"]`);
  if(activeSubTags.has(tag)){
    activeSubTags.delete(tag);
    pill.classList.remove('active');
  }else{
    activeSubTags.add(tag);
    pill.classList.add('active');
  }
  if(activeSubTags.size===0){
    document.querySelector('.sub-pill.all-sub').classList.add('active');
  }
  applyFilters();
}

function applyFilters(){
  let visCount=0;
  const visStates=new Set();
  places.forEach((p,i)=>{
    let show=true;
    if(activeCategory!=='all'){
      if(activeSubTags.size===0){
        show=p.tags.some(t=>TAG_TO_CAT[t]===activeCategory);
      }else{
        show=p.tags.some(t=>activeSubTags.has(t));
      }
    }
    if(show){
      markers[i].addTo(map);
      visCount++;
      visStates.add(p.state);
    }else{
      map.removeLayer(markers[i]);
    }
  });
  document.getElementById('stat-total').textContent=activeCategory==='all'&&activeSubTags.size===0?places.length:visCount;
  document.getElementById('stat-states').textContent=activeCategory==='all'&&activeSubTags.size===0?new Set(places.map(p=>p.state)).size:visStates.size;
}

// Stats
document.getElementById('stat-total').textContent=places.length;
const revCount=places.filter(p=>p.reversal).length;
document.getElementById('stat-rev').textContent=revCount;
const states=new Set(places.map(p=>p.state));
document.getElementById('stat-states').textContent=states.size;

document.addEventListener('keydown',e=>{if(e.key==='/'&&document.activeElement!==searchInput){e.preventDefault();searchInput.focus();}});

// ── Civic Action: geolocation, distance, representative lookup ──

let userLoc=null;

// IP geolocation on load (ip-api.com, free, no key)
(function(){
  try{
    fetch('http://ip-api.com/json/?fields=status,country,regionName,city,lat,lon')
      .then(r=>r.json())
      .then(d=>{
        if(d.status==='success')userLoc={lat:d.lat,lng:d.lon,city:d.city,state:d.regionName};
      })
      .catch(()=>{});
  }catch(e){}
})();

function haversine(lat1,lng1,lat2,lng2){
  const R=3959;
  const toRad=x=>x*Math.PI/180;
  const dLat=toRad(lat2-lat1),dLng=toRad(lng2-lng1);
  const a=Math.sin(dLat/2)**2+Math.cos(toRad(lat1))*Math.cos(toRad(lat2))*Math.sin(dLng/2)**2;
  return R*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
}

function civicDistance(p){
  if(!userLoc)return null;
  return haversine(userLoc.lat,userLoc.lng,p.lat,p.lng);
}

// Issue category labels for form letters
const ISSUE_LABELS={
  'water':'water quality','water-contam':'water contamination','water-scarce':'water scarcity',
  'water-infra':'water infrastructure','lead':'lead contamination','pfas':'PFAS contamination',
  'toxic':'toxic sites','fracking':'fracking pollution','cancer':'cancer clusters',
  'industrial':'industrial contamination','ozone':'air quality','env':'environmental hazards',
  'air':'air quality','food':'food deserts','seismic':'seismic risk',
  'poor':'poverty','mental-health':'mental health crisis','medicaid':'medicaid access',
  'brain-drain':'brain drain','decline':'community decline','economic':'economic distress',
  'rural':'rural decline','educ':'education crisis','literacy':'low literacy',
  'school-closure':'school closures','infra':'infrastructure failure',
  'policy-cut':'policy cuts','governance':'governance failure',
  'heat':'extreme heat','flood':'flooding','flooding':'flooding',
  'hurricane':'hurricane risk','farm':'agricultural crisis'
};

function issueLabel(tags){
  for(const t of tags){
    if(ISSUE_LABELS[t])return ISSUE_LABELS[t];
  }
  return 'quality of life';
}

function statSummary(stats){
  if(!stats)return'';
  return Object.entries(stats).slice(0,3).map(([k,v])=>k.replace(/_/g,' ')+': '+v).join('; ');
}

function buildLetter(p){
  const issue=issueLabel(p.tags);
  const where=p.name+', '+p.state;
  const facts=statSummary(p.stats);
  const problemText=p.reason.replace(/<[^>]+>/g,'').replace(/\s+/g,' ').trim();

  let opening=`I'm writing about ${issue} in ${where}.`;
  if(userLoc)opening+=` I'm a resident of the area.`;

  let body=problemText;
  if(body.length>350)body=body.substring(0,350)+'...';

  let closing='';
  if(p.reversal){
    const revText=p.reversal.replace(/<[^>]+>/g,'').replace(/\s+/g,' ').trim();
    closing=`\n\nSimilar communities have made progress on this. ${revText.substring(0,280).trim()} I'd like to understand what's currently being done here, and whether there are plans to build on what's working elsewhere.`;
  }else{
    closing=`\n\nI'd like to understand what's being done about this. Are there plans, funding, or oversight efforts in progress? If there are resources available to residents, I'd appreciate knowing about them.`;
  }

  return `${opening}\n\n${body}${closing}\n\nHappy to discuss further.\n\n,\n[Your Name]\n[Your Address]`;
}

function buildMailto(p,reps){
  const issue=issueLabel(p.tags);
  const subject=encodeURIComponent(`Concerns about ${issue} in ${p.name}, ${p.state}`);
  const body=encodeURIComponent(buildLetter(p));
  if(reps&&reps.length){
    const emails=reps.filter(r=>r.email).map(r=>r.email);
    if(emails.length)return`mailto:${emails[0]}?subject=${subject}&body=${body}`;
  }
  return`mailto:?subject=${subject}&body=${body}`;
}

function civicActionHtml(p){
  const dist=civicDistance(p);
  const sameState=userLoc&&userLoc.state&&userLoc.state.toLowerCase()===p.state.toLowerCase();
  if(dist===null||(!sameState&&dist>100))return'';
  const miles=dist!==null?Math.round(dist):null;
  const issue=issueLabel(p.tags);

  const distLabel=miles!==null?`${miles} mile${miles!==1?'s':''} from your location`:`Same state (${p.state})`;

  return`<div class="detail-section civic-action">
    <h3 style="color:#4fc3f7">Near You</h3>
    <p class="civic-distance">${distLabel}</p>

    <div id="civic-letter-section">
      <p class="civic-prompt">This ${issue} issue is in your area. Here's a letter you can send to your representatives.</p>

      <div id="civic-letter-preview" class="civic-letter">${buildLetter(p).replace(/\n/g,'<br>')}</div>

      <div class="civic-lookup">
        <a class="civic-btn" href="https://www.usa.gov/elected-officials" target="_blank" rel="noopener noreferrer">Find your representatives &#8599;</a>
      </div>

      <div class="civic-actions">
        <button class="civic-btn civic-btn-primary" onclick="copyLetter('${p.name.replace(/'/g,"\\'")}','${p.state}')">Copy letter</button>
        <button class="civic-btn" id="civic-mailto-btn" onclick="sendMailto('${p.name.replace(/'/g,"\\'")}','${p.state}')">Open in email</button>
      </div>
      <p class="civic-note">Your location is approximate (city-level from IP). No data is stored.</p>
    </div>
  </div>`;
}

function copyLetter(name,state){
  const p=places.find(x=>x.name===name&&x.state===state);
  if(!p)return;
  const text=buildLetter(p);
  navigator.clipboard.writeText(text).then(()=>{
    const btn=document.querySelector('.civic-btn-primary');
    if(btn){btn.textContent='Copied';setTimeout(()=>btn.textContent='Copy letter',2000);}
  });
}

function sendMailto(name,state){
  const p=places.find(x=>x.name===name&&x.state===state);
  if(!p)return;
  const reps=[];
  window.location.href=buildMailto(p,reps);
}

// ── URL param deep-linking ──
(function(){
  const params=new URLSearchParams(window.location.search);
  const cat=params.get('cat');
  const sub=params.get('sub');
  if(cat&&CATEGORIES[cat]){
    selectCategory(cat);
    if(sub){
      setTimeout(()=>{
        if(activeSubTags.size===0||!activeSubTags.has(sub)){
          toggleSubFilter(sub);
        }
      },50);
    }
  }

  // #place= deep link (from data.html)
  const hash=window.location.hash;
  if(hash.startsWith('#place=')){
    const q=decodeURIComponent(hash.slice(7)).toLowerCase();
    const idx=places.findIndex(p=>p.name.toLowerCase()===q);
    if(idx>=0)showDetail(idx);
  }
})();
