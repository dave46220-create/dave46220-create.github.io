const DATA_SOURCE='inline';
const SHEET_CSV_URL='https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID_HERE/pub?output=csv';

function parseCSV(csv){const rows=[];let cur='',row=[],q=false;for(let i=0;i<csv.length;i++){const c=csv[i];if(q){if(c==='"'){if(csv[i+1]==='"'){cur+='"';i++;}else{q=false;}}else{cur+=c;}}else{if(c==='"')q=true;else if(c===','){row.push(cur);cur='';}else if(c==='\n'){row.push(cur);rows.push(row);row=[];cur='';}else if(c==='\r'){}else cur+=c;}}row.push(cur);rows.push(row);return rows;}

(function(){try{const r1=parseCSV('a,b\n1,2\n3,4');console.assert(r1.length===3&&r1[1][0]==='1'&&r1[2][1]==='4','CSV newline');const r2=parseCSV('name,desc\n"Doe, John","He said ""hi"""');console.assert(r2[1][0]==='Doe, John'&&r2[1][1]==='He said "hi"','CSV quotes');const parts='Christian;Co-op|Statewide,Secular'.split(/[;|,\\]/);console.assert(parts.length===4&&parts[1]==='Co-op','Tag split');const r3=parseCSV('x,y\r\n7,8\r\n');console.assert(r3.length>=2&&r3[1][0]==='7'&&r3[1][1]==='8','CRLF');}catch(e){console.warn('Self-tests failed:',e);}})();

const RAW_INLINE = [
  {
    "state": "Alabama",
    "name": "Homeschool Alabama",
    "url": "https://www.homeschoolalabama.org",
    "tags": "Statewide"
  },
  {
    "state": "Alaska",
    "name": "Alaska Private and Home Educators Association",
    "url": "https://aphea.org",
    "tags": "Statewide"
  },
  {
    "state": "Arizona",
    "name": "Arizona Families for Home Education",
    "url": "https://afhe.org",
    "tags": "Statewide"
  },
  {
    "state": "Arkansas",
    "name": "The Education Alliance",
    "url": "https://arkansashomeschool.org",
    "tags": "Statewide"
  },
  {
    "state": "California",
    "name": "Christian Home Educators Association of CA",
    "url": "https://www.cheaofca.org",
    "tags": "Statewide"
  },
  {
    "state": "California",
    "name": "California Homeschool Network",
    "url": "https://www.californiahomeschool.net",
    "tags": "Statewide"
  },
  {
    "state": "California",
    "name": "Homeschool Association of California",
    "url": "https://www.hsc.org",
    "tags": "Statewide"
  },
  {
    "state": "Colorado",
    "name": "Christian Home Educators of Colorado",
    "url": "https://chec.org",
    "tags": "Statewide"
  },
  {
    "state": "Connecticut",
    "name": "TEACH Connecticut",
    "url": "https://www.teachct.org",
    "tags": "Statewide"
  },
  {
    "state": "Delaware",
    "name": "Delaware Home Educators Association",
    "url": "https://www.dhea.org",
    "tags": "Statewide"
  },
  {
    "state": "Florida",
    "name": "Florida Parent Educators Association",
    "url": "https://fpea.com",
    "tags": "Statewide"
  },
  {
    "state": "Georgia",
    "name": "Georgia Home Education Association",
    "url": "https://ghea.org",
    "tags": "Statewide"
  },
  {
    "state": "Hawaii",
    "name": "Christian Homeschoolers of Hawaii",
    "url": "https://www.christianhomeschoolersofhawaii.org",
    "tags": "Statewide"
  },
  {
    "state": "Idaho",
    "name": "Homeschool Idaho",
    "url": "https://homeschoolidaho.org",
    "tags": "Statewide"
  },
  {
    "state": "Illinois",
    "name": "Illinois Christian Home Educators",
    "url": "https://iche.org",
    "tags": "Statewide"
  },
  {
    "state": "Indiana",
    "name": "The Indiana Association of Home Educators",
    "url": "https://iahe.net",
    "tags": "Statewide"
  },
  {
    "state": "Indiana",
    "name": "Indiana Foundation for Homeschooling",
    "url": "https://www.indianahomeschooling.org",
    "tags": "Statewide"
  },
  {
    "state": "Iowa",
    "name": "Homeschool Iowa",
    "url": "https://homeschooliowa.org",
    "tags": "Statewide"
  },
  {
    "state": "Kansas",
    "name": "Christian Home Educators Confederation of Kansas",
    "url": "https://kansashomeschool.org",
    "tags": "Statewide"
  },
  {
    "state": "Kansas",
    "name": "Kansas Home Educators",
    "url": "https://www.kshomeeducators.com",
    "tags": "Statewide"
  },
  {
    "state": "Kansas",
    "name": "Midwest Parent Educators",
    "url": "https://midwesthomeschoolers.org",
    "tags": "Statewide"
  },
  {
    "state": "Kentucky",
    "name": "Christian Home Educators of Kentucky",
    "url": "https://www.facebook.com",
    "tags": "Statewide"
  },
  {
    "state": "Louisiana",
    "name": "Homeschool Louisiana",
    "url": "https://www.homeschoollouisiana.org",
    "tags": "Statewide"
  },
  {
    "state": "Maine",
    "name": "Homeschoolers of Maine",
    "url": "https://www.homeschoolersofmaine.org",
    "tags": "Statewide"
  },
  {
    "state": "Maryland",
    "name": "Maryland Association of Christian Home Educators",
    "url": "https://machemd.org",
    "tags": "Statewide"
  },
  {
    "state": "Maryland",
    "name": "Maryland Catholic Resources",
    "url": "https://marylandarch.com",
    "tags": "Statewide"
  },
  {
    "state": "Massachusetts",
    "name": "MassHOPE – Massachusetts Homeschool Organization of Parent Educators",
    "url": "https://masshope.org",
    "tags": "Statewide"
  },
  {
    "state": "Massachusetts",
    "name": "Massachusetts Home Learning Association",
    "url": "https://www.mhla.org",
    "tags": "Statewide"
  },
  {
    "state": "Michigan",
    "name": "Michigan Christian Homeschool Network",
    "url": "https://www.michn.org",
    "tags": "Statewide"
  },
  {
    "state": "Minnesota",
    "name": "MÂCHÉ – Minnesota Association of Christian Home Educators",
    "url": "https://mache.org",
    "tags": "Statewide"
  },
  {
    "state": "Mississippi",
    "name": "Mississippi Home Educators Association",
    "url": "https://www.mhea.net",
    "tags": "Statewide"
  },
  {
    "state": "Missouri",
    "name": "Families for Home Education Missouri",
    "url": "https://fhe-mo.org",
    "tags": "Statewide"
  },
  {
    "state": "Missouri",
    "name": "Missouri Association of Teaching Christian Homes",
    "url": "https://www.match-inc.org",
    "tags": "Statewide"
  },
  {
    "state": "Missouri",
    "name": "Midwest Parent Educators",
    "url": "https://midwesthomeschoolers.org",
    "tags": "Statewide"
  },
  {
    "state": "Montana",
    "name": "Montanans Assembling Together for Christian Home Education",
    "url": "https://www.matcheonline.com",
    "tags": "Statewide"
  },
  {
    "state": "Montana",
    "name": "Montana Coalition of Home Educators",
    "url": "https://www.mtche.org",
    "tags": "Statewide"
  },
  {
    "state": "Nebraska",
    "name": "Nebraska Christian Home Educators Association",
    "url": "https://nchea.org",
    "tags": "Statewide"
  },
  {
    "state": "Nebraska",
    "name": "Nebraska Homeschool",
    "url": "https://www.nebraskahomeschool.org",
    "tags": "Statewide"
  },
  {
    "state": "Nevada",
    "name": "Nevada Homeschool Network",
    "url": "https://nevadahomeschoolnetwork.com",
    "tags": "Statewide"
  },
  {
    "state": "New Hampshire",
    "name": "Granite State Home Educators",
    "url": "https://granitestatehomeeducators.org",
    "tags": "Statewide"
  },
  {
    "state": "New Jersey",
    "name": "New Jersey Homeschool Association",
    "url": "https://newjerseyhomeschool.wordpress.com",
    "tags": "Statewide"
  },
  {
    "state": "New Mexico",
    "name": "CAPE – Christian Association of Parent Educators of New Mexico",
    "url": "https://www.cape-nm.org",
    "tags": "Statewide"
  },
  {
    "state": "New York",
    "name": "Homeschool New York",
    "url": "https://www.leah.org",
    "tags": "Statewide"
  },
  {
    "state": "North Carolina",
    "name": "NCHE – North Carolinians for Home Education",
    "url": "https://www.nche.com",
    "tags": "Statewide"
  },
  {
    "state": "North Dakota",
    "name": "North Dakota Home School Association",
    "url": "https://www.ndhsa.org",
    "tags": "Statewide"
  },
  {
    "state": "Ohio",
    "name": "Christian Home Educators of Ohio",
    "url": "https://www.cheohome.org",
    "tags": "Statewide"
  },
  {
    "state": "Oklahoma",
    "name": "Homeschool Oklahoma",
    "url": "https://www.homeschooloklahoma.org",
    "tags": "Statewide"
  },
  {
    "state": "Oregon",
    "name": "OCEANetwork – Oregon Christian Home Education Association Network",
    "url": "https://www.oceanetwork.org",
    "tags": "Statewide"
  },
  {
    "state": "Pennsylvania",
    "name": "CHAP – Christian Homeschool Association of Pennsylvania",
    "url": "https://chaponline.com",
    "tags": "Statewide"
  },
  {
    "state": "Rhode Island",
    "name": "RIGHT – Rhode Island Guild of Home Teachers",
    "url": "https://www.rihomeschool.com",
    "tags": "Statewide"
  },
  {
    "state": "Rhode Island",
    "name": "ENRICHri – A Rhode Island Home Education Community",
    "url": "https://enrichri.org",
    "tags": "Statewide"
  },
  {
    "state": "South Carolina",
    "name": "South Carolina Association of Independent Home Schools",
    "url": "https://schomeschooling.com",
    "tags": "Statewide"
  },
  {
    "state": "South Carolina",
    "name": "South Carolina Home Educators Association",
    "url": "https://schea.net",
    "tags": "Statewide"
  },
  {
    "state": "South Dakota",
    "name": "South Dakota Christian Home Educators",
    "url": "https://www.facebook.com",
    "tags": "Statewide"
  },
  {
    "state": "Tennessee",
    "name": "Memphis-Area Home Education Association",
    "url": "https://www.mymhea.org",
    "tags": "Statewide"
  },
  {
    "state": "Tennessee",
    "name": "THEA-ME – Tennessee Home Education Association – Mid-East Chapter",
    "url": "https://mideastthea.com",
    "tags": "Statewide"
  },
  {
    "state": "Tennessee",
    "name": "Tennessee Home Education Association",
    "url": "https://www.tnhea.org",
    "tags": "Statewide"
  },
  {
    "state": "Texas",
    "name": "Homeschool Association of the Lone Star State",
    "url": "https://halss.org",
    "tags": "Statewide"
  },
  {
    "state": "Texas",
    "name": "THE – Texas Home Educators",
    "url": "https://texashomeeducators.org",
    "tags": "Statewide"
  },
  {
    "state": "Texas",
    "name": "North Texas Home Educators Network",
    "url": "https://nthen.org",
    "tags": "Statewide"
  },
  {
    "state": "Texas",
    "name": "THSC – Texas Home School Coalition",
    "url": "https://thsc.org",
    "tags": "Statewide"
  },
  {
    "state": "Texas",
    "name": "Greater Houston Area Home Educators",
    "url": "https://www.g-hah.org",
    "tags": "Statewide"
  },
  {
    "state": "Utah",
    "name": "UTCH (You Teach) – Utah Christian Homeschool Association",
    "url": "https://www.utch.org",
    "tags": "Statewide"
  },
  {
    "state": "Vermont",
    "name": "Homeschooling Vermont",
    "url": "https://www.facebook.com",
    "tags": "Statewide"
  },
  {
    "state": "Virginia",
    "name": "HEAV – Home Educators Association of Virginia",
    "url": "https://heav.org",
    "tags": "Statewide"
  },
  {
    "state": "Virginia",
    "name": "HEAV – VA Support Group Leaders Help",
    "url": "https://heav.org",
    "tags": "Statewide"
  },
  {
    "state": "Virginia",
    "name": "VaHomeschoolers – The Organization of Virginia Homeschoolers",
    "url": "https://vahomeschoolers.org",
    "tags": "Statewide"
  },
  {
    "state": "Washington",
    "name": "Christian Heritage Home Educators of Washington",
    "url": "https://christianheritagewa.org",
    "tags": "Statewide"
  },
  {
    "state": "Washington",
    "name": "WHO – Washington Homeschool Organization",
    "url": "https://washhomeschool.org",
    "tags": "Statewide"
  },
  {
    "state": "West Virginia",
    "name": "Christian Home Educators of West Virginia",
    "url": "https://chewv.org",
    "tags": "Statewide"
  },
  {
    "state": "West Virginia",
    "name": "West Virginia Home Educators Association",
    "url": "https://www.wvhea.org",
    "tags": "Statewide"
  },
  {
    "state": "Wisconsin",
    "name": "Wisconsin Homeschool Association",
    "url": "https://wihomeschool.org",
    "tags": "Statewide"
  },
  {
    "state": "Wyoming",
    "name": "Homeschooling of Wyoming",
    "url": "https://homeschoolwy.org",
    "tags": "Statewide"
  }
];

const ORGS=[{name:'Home School Legal Defense Association (HSLDA)',url:'https://hslda.org',blurb:'Nationwide legal defense and advocacy for homeschool freedom; member services, legal protection, resources.',tags:['Advocacy','Legal','National']},{name:'Homeschool.com',url:'https://www.homeschool.com',blurb:'Long-running portal with resources, printables, curriculum guides, and community articles for homeschool families.',tags:['Resource Hub','Community','National']},{name:'Homeschooling for College Credit (HS4CC)',url:'https://homeschoolingforcollegecredit.org',blurb:'501(c)(3) nonprofit helping families earn college credit in high school and reduce college costs; national community groups.',tags:['College Credit','Nonprofit','National']}];

const CLASSICAL=[{name:'Classical Conversations',url:'https://classicalconversations.com/',blurb:'Christ-centered homeschool communities and curriculum built on the classical model; programs Foundations, Essentials, and Challenge.',tags:['Homeschool','Community','Christian','Classical']},{name:'Great Hearts Academies',url:'https://www.greatheartsamerica.org/',blurb:'Large network of tuition-free public charter and private academies delivering classical K–12 education across multiple states.',tags:['Charter Network','Schools','Classical']}];

function inferTags(name){const lower=name.toLowerCase();const tags=[];if(/christian|heav|chap|cape|mache|homeschool oklahoma|thsc|iche|afhe|oceanetwork/.test(lower))tags.push('Christian');if(/catholic|seton|arch|diocese/.test(lower))tags.push('Catholic');if(/network|association|coalition|organization|alliance/.test(lower))tags.push('Statewide');if(/co-?op|cooperative/.test(lower))tags.push('Co-op');if(tags.length===0)tags.push('Statewide');return Array.from(new Set(tags));}

export default function App(){
function handleCSVUpload(file){if(!file)return;const reader=new FileReader();reader.onload=e=>{try{const text=String(e.target?.result||'');const rows=parseCSV(text);const header=rows[0]||[];const rest=rows.slice(1);const idx={state:header.findIndex(h=>String(h).trim().toLowerCase()==='state'),name:header.findIndex(h=>String(h).trim().toLowerCase()==='name'),url:header.findIndex(h=>String(h).trim().toLowerCase()==='url'),tags:header.findIndex(h=>String(h).trim().toLowerCase()==='tags')};if(idx.state<0||idx.name<0||idx.url<0)throw new Error('CSV must have headers: State, Name, URL, Tags');const items=rest.filter(r=>r.filter(Boolean).length).map(r=>({state:r[idx.state]||'',name:r[idx.name]||'',url:r[idx.url]||'',tags:String(r[idx.tags]||'').split(/;|,|\|/).map(x=>x.trim()).filter(Boolean)})).filter(o=>o.state&&o.name&&o.url);setData(items);setSource('upload');setError(null);}catch(err){setError(err?.message||String(err));}};reader.readAsText(file)}
const [q,setQ]=useState('');const [state,setState]=useState('');const [selectedTags,setSelectedTags]=useState([]);const [data,setData]=useState(RAW_INLINE);const [source,setSource]=useState(DATA_SOURCE);const [error,setError]=useState(null);
const [tab,setTab]=useState('states');const [orgQ,setOrgQ]=useState('');const [orgTags,setOrgTags]=useState([]);const orgAllTags=useMemo(()=>Array.from(new Set(ORGS.flatMap(o=>o.tags))).sort(),[]);const filteredOrgs=useMemo(()=>{const needle=orgQ.trim().toLowerCase();return ORGS.filter(o=>(!needle||o.name.toLowerCase().includes(needle))&&(orgTags.length===0||orgTags.every(t=>o.tags.includes(t))))},[orgQ,orgTags]);
const [classQ,setClassQ]=useState('');const [classTags,setClassTags]=useState([]);const classAllTags=useMemo(()=>Array.from(new Set(CLASSICAL.flatMap(o=>o.tags))).sort(),[]);const filteredClassical=useMemo(()=>{const needle=classQ.trim().toLowerCase();return CLASSICAL.filter(o=>(!needle||o.name.toLowerCase().includes(needle))&&(classTags.length===0||classTags.every(t=>o.tags.includes(t))))},[classQ,classTags]);
useEffect(()=>{async function loadSheet(){if(DATA_SOURCE!=='sheet')return;if(!/docs.google.com\/spreadsheets\//.test(SHEET_CSV_URL)||SHEET_CSV_URL.includes('YOUR_SHEET_ID_HERE')){setSource('inline');return;}try{const res=await fetch(SHEET_CSV_URL);if(!res.ok)throw new Error('Fetch failed: '+res.status);const csv=await res.text();const rows=parseCSV(csv);const header=rows[0]||[];const rest=rows.slice(1);const idx={state:header.findIndex(h=>String(h).trim().toLowerCase()==='state'),name:header.findIndex(h=>String(h).trim().toLowerCase()==='name'),url:header.findIndex(h=>String(h).trim().toLowerCase()==='url'),tags:header.findIndex(h=>String(h).trim().toLowerCase()==='tags')};const items=rest.filter(r=>r.length>=3).map(r=>({state:r[idx.state]||'',name:r[idx.name]||'',url:r[idx.url]||'',tags:String(r[idx.tags]||'').split(/;|,|\|/).map(x=>x.trim()).filter(Boolean)})).filter(o=>o.state&&o.name&&o.url);if(!items.length)throw new Error('No rows parsed');setData(items);setSource('sheet');}catch(e){setError(e&&e.message?e.message:String(e));setSource('inline');setData(RAW_INLINE);}}loadSheet();},[])
const normalized=useMemo(()=>data.map(o=>{const rawTags=Array.isArray(o.tags)?o.tags:(o.tags?String(o.tags).split(/;|,|\|/):[]);const clean=rawTags.map(t=>t.trim()).filter(Boolean);return {...o,tags:clean.length?clean:inferTags(o.name)}}),[data]);
const states=useMemo(()=>Array.from(new Set(normalized.map(r=>r.state))).sort((a,b)=>a.localeCompare(b)),[normalized]);const allTags=useMemo(()=>Array.from(new Set(normalized.flatMap(r=>r.tags))).sort(),[normalized]);
const filtered=useMemo(()=>{const needle=q.trim().toLowerCase();return normalized.filter(r=>(!state||r.state===state)&&(!needle||r.name.toLowerCase().includes(needle)||r.state.toLowerCase().includes(needle))&&(selectedTags.length===0||selectedTags.every(t=>r.tags.includes(t))))},[normalized,q,state,selectedTags]);
function toggleTag(t){setSelectedTags(prev=>prev.includes(t)?prev.filter(x=>x!==t):[...prev,t])}function toggleOrgTag(t){setOrgTags(prev=>prev.includes(t)?prev.filter(x=>x!==t):[...prev,t])}function toggleClassTag(t){setClassTags(prev=>prev.includes(t)?prev.filter(x=>x!==t):[...prev,t])}

return (<div className='min-h-screen'>
  <header style={{position:'sticky',top:0,zIndex:40,background:'rgba(255,255,255,.8)',backdropFilter:'blur(6px)',borderBottom:'1px solid #e5e5e5'}}>
    <div style={{maxWidth:'72rem',margin:'0 auto',padding:'0 1.5rem',height:'4rem',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
      <div style={{display:'flex',alignItems:'center',gap:'0.75rem'}}>
        <div style={{height:'2.25rem',width:'2.25rem',borderRadius:'1rem',background:'linear-gradient(135deg,#6366F1,#0EA5E9,#10B981)'}} />
        <span style={{fontWeight:600,letterSpacing:'-0.01em'}}>{BRAND.name}</span>
      </div>
    </div>
  </header>

  <main style={{maxWidth:'72rem',margin:'0 auto',padding:'2.5rem 1.5rem'}}>
    <div style={{marginBottom:'1rem',display:'inline-flex',border:'1px solid #e5e5e5',borderRadius:'0.75rem',background:'#fff',padding:'0.25rem'}}>
      <button style={{padding:'0.5rem 1rem',borderRadius:'0.5rem',background:tab==='states'?'#0a0a0a':'transparent',color:tab==='states'?'#fff':'inherit'}} onClick={()=>setTab('states')}>By State</button>
      <button style={{padding:'0.5rem 1rem',borderRadius:'0.5rem',background:tab==='orgs'?'#0a0a0a':'transparent',color:tab==='orgs'?'#fff':'inherit'}} onClick={()=>setTab('orgs')}>Organizations</button>
      <button style={{padding:'0.5rem 1rem',borderRadius:'0.5rem',background:tab==='classical'?'#0a0a0a':'transparent',color:tab==='classical'?'#fff':'inherit'}} onClick={()=>setTab('classical')}>Classical</button>
    </div>

    {tab==='states' && (
      <section style={{borderRadius:'1.5rem',border:'1px solid #e5e5e5',background:'#fff',padding:'2rem',boxShadow:'0 1px 2px rgba(0,0,0,0.03)'}}>
        <h1 style={{fontSize:'1.5rem',fontWeight:600}}>Find a Homeschool Group</h1>
        <p style={{marginTop:'0.25rem',color:'#525252',fontSize:'0.95rem'}}>Browse by state, search by name, or filter by tags.</p>
        <p style={{marginTop:'0.25rem',color:'#737373',fontSize:'0.8rem'}}>Source: {source==='sheet'?'Google Sheet':'Inline dataset'}{error?` (fallback due to: ${error})`:''}</p>

        <div style={{marginTop:'1.5rem',display:'grid',gap:'0.75rem',gridTemplateColumns:'1fr 1fr 1fr'}}>
          <div style={{gridColumn:'span 2'}}>
            <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search organizations (e.g., HEAV, THSC, Iowa)" style={{width:'100%',border:'1px solid #d4d4d4',borderRadius:'0.75rem',padding:'0.5rem 0.75rem'}}/>
          </div>
          <div>
            <select value={state} onChange={e=>setState(e.target.value)} style={{width:'100%',border:'1px solid #d4d4d4',borderRadius:'0.75rem',padding:'0.5rem 0.75rem'}}>
              <option value=''>All States</option>
              {states.map(s=>(<option key={s} value={s}>{s}</option>))}
            </select>
          </div>
        </div>

        <div style={{marginTop:'0.75rem',display:'flex',gap:'0.75rem',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap'}}>
          <div style={{fontSize:'0.8rem',color:'#525252'}}>
            <p><strong>Want all 50 states?</strong> Upload a CSV with columns <code>State, Name, URL, Tags</code> or connect a Google Sheet.</p>
            <p style={{marginTop:'0.25rem'}}>Tip: You can download our template CSV and fill it in, then upload it here.</p>
          </div>
          <label style={{display:'inline-flex',alignItems:'center',gap:'0.5rem',fontSize:'0.8rem',cursor:'pointer'}}>
            <span style={{padding:'0.5rem 0.75rem',border:'1px solid #e5e5e5',borderRadius:'0.5rem',background:'#fff'}}>Choose CSV…</span>
            <input type='file' accept='.csv,text/csv' style={{display:'none'}} onChange={e=>handleCSVUpload(e.target.files?.[0])}/>
          </label>
        </div>

        <div style={{marginTop:'1rem',display:'flex',flexWrap:'wrap',gap:'0.5rem',fontSize:'0.8rem'}}>
          {allTags.map(t=>(
            <button key={t} onClick={()=>toggleTag(t)} style={{padding:'0.25rem 0.6rem',borderRadius:'999px',border:'1px solid #d4d4d4',background:selectedTags.includes(t)?'#0a0a0a':'#fff',color:selectedTags.includes(t)?'#fff':'inherit'}}>{t}</button>
          ))}
          {allTags.length>0 && (<button onClick={()=>setSelectedTags([])} style={{padding:'0.25rem 0.6rem',borderRadius:'999px',textDecoration:'underline'}}>Clear</button>)}
        </div>

        <div style={{marginTop:'1rem',display:'flex',flexWrap:'wrap',gap:'0.25rem',fontSize:'0.8rem',color:'#525252'}}>
          {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(ch=>(
            <button key={ch} onClick={()=>{const match=states.find(s=>s.startsWith(ch)); if(match) setState(match);}} title={`Jump to ${ch}`} style={{padding:'0.25rem 0.4rem',borderRadius:'0.5rem',border:'1px solid transparent'}}>{ch}</button>
          ))}
          <button onClick={()=>setState('')} style={{marginLeft:'0.5rem',textDecoration:'underline'}}>Reset</button>
        </div>

        <div style={{marginTop:'1.5rem',display:'grid',gap:'1rem',gridTemplateColumns:'repeat(3,minmax(0,1fr))'}}>
          {filtered.map((r,i)=>(
            <a key={`${r.state}-${r.name}-${i}`} href={r.url} target='_blank' rel='noopener noreferrer' style={{border:'1px solid #e5e5e5',background:'#fafafa',borderRadius:'1rem',padding:'1rem',textDecoration:'none',color:'inherit'}}>
              <p style={{fontSize:'0.75rem',color:'#6b7280'}}>{r.state}</p>
              <h3 style={{marginTop:'0.25rem',fontSize:'0.95rem',fontWeight:600,lineHeight:1.2}}>{r.name}</h3>
              <p style={{marginTop:'0.25rem',fontSize:'0.8rem',color:'#3730a3',wordBreak:'break-all'}}>{r.url}</p>
              <div style={{marginTop:'0.5rem',display:'flex',flexWrap:'wrap',gap:'0.25rem'}}>
                {r.tags.map(t=>(<span key={t} style={{fontSize:'0.7rem',padding:'0.125rem 0.5rem',borderRadius:'999px',background:'#fff',border:'1px solid #e5e5e5'}}>{t}</span>))}
              </div>
            </a>
          ))}
        </div>

        {filtered.length===0 && (<p style={{marginTop:'2rem',fontSize:'0.9rem',color:'#737373'}}>No matches. Try another search, state, or tag.</p>)}
      </section>
    )}

    {tab==='orgs' && (
      <section style={{borderRadius:'1.5rem',border:'1px solid #e5e5e5',background:'#fff',padding:'2rem',boxShadow:'0 1px 2px rgba(0,0,0,0.03)'}}>
        <h2 style={{fontSize:'1.25rem',fontWeight:600}}>National Organizations</h2>
        <p style={{marginTop:'0.25rem',color:'#525252',fontSize:'0.95rem'}}>Search or filter organizations that serve families nationally.</p>

        <div style={{marginTop:'1.5rem',display:'grid',gap:'0.75rem',gridTemplateColumns:'1fr 1fr 1fr'}}>
          <div style={{gridColumn:'span 2'}}>
            <input value={orgQ} onChange={e=>setOrgQ(e.target.value)} placeholder='Search organizations (e.g., HSLDA, NHERI, HS4CC)' style={{width:'100%',border:'1px solid #d4d4d4',borderRadius:'0.75rem',padding:'0.5rem 0.75rem'}}/>
          </div>
          <div style={{display:'flex',gap:'0.5rem',flexWrap:'wrap',alignItems:'start'}}>
            {orgAllTags.map(t=>(<button key={t} onClick={()=>toggleOrgTag(t)} style={{padding:'0.25rem 0.6rem',borderRadius:'999px',border:'1px solid #d4d4d4',background:orgTags.includes(t)?'#0a0a0a':'#fff',color:orgTags.includes(t)?'#fff':'inherit'}}>{t}</button>))}
            {orgAllTags.length>0 && (<button onClick={()=>setOrgTags([])} style={{padding:'0.25rem 0.6rem',borderRadius:'999px',textDecoration:'underline'}}>Clear</button>)}
          </div>
        </div>

        <div style={{marginTop:'1.5rem',display:'grid',gap:'1rem',gridTemplateColumns:'repeat(3,minmax(0,1fr))'}}>
          {filteredOrgs.map((o,i)=>(
            <a key={`${o.name}-${i}`} href={o.url} target='_blank' rel='noopener noreferrer' style={{border:'1px solid #e5e5e5',background:'#fafafa',borderRadius:'1rem',padding:'1rem',textDecoration:'none',color:'inherit'}}>
              <p style={{fontSize:'0.75rem',color:'#6b7280'}}>National</p>
              <h3 style={{marginTop:'0.25rem',fontSize:'0.95rem',fontWeight:600,lineHeight:1.2}}>{o.name}</h3>
              <p style={{marginTop:'0.25rem',fontSize:'0.8rem',color:'#3730a3',wordBreak:'break-all'}}>{o.url}</p>
              <p style={{marginTop:'0.5rem',fontSize:'0.8rem',color:'#404040',lineHeight:1.5}}>{o.blurb}</p>
              <div style={{marginTop:'0.5rem',display:'flex',flexWrap:'wrap',gap:'0.25rem'}}>
                {o.tags.map(t=>(<span key={t} style={{fontSize:'0.7rem',padding:'0.125rem 0.5rem',borderRadius:'999px',background:'#fff',border:'1px solid #e5e5e5'}}>{t}</span>))}
              </div>
            </a>
          ))}
        </div>

        {filteredOrgs.length===0 && (<p style={{marginTop:'2rem',fontSize:'0.9rem',color:'#737373'}}>No matches. Try another search or clear tag filters.</p>)}
      </section>
    )}

    {tab==='classical' && (
      <section style={{borderRadius:'1.5rem',border:'1px solid #e5e5e5',background:'#fff',padding:'2rem',boxShadow:'0 1px 2px rgba(0,0,0,0.03)'}}>
        <h2 style={{fontSize:'1.25rem',fontWeight:600}}>Classical Education Groups</h2>
        <p style={{marginTop:'0.25rem',color:'#525252',fontSize:'0.95rem'}}>Search or filter classical organizations, school networks, and publishers.</p>

        <div style={{marginTop:'1.5rem',display:'grid',gap:'0.75rem',gridTemplateColumns:'1fr 1fr 1fr'}}>
          <div style={{gridColumn:'span 2'}}>
            <input value={classQ} onChange={e=>setClassQ(e.target.value)} placeholder='Search (e.g., Classical Conversations, Great Hearts, Hillsdale)' style={{width:'100%',border:'1px solid #d4d4d4',borderRadius:'0.75rem',padding:'0.5rem 0.75rem'}}/>
          </div>
          <div style={{display:'flex',gap:'0.5rem',flexWrap:'wrap',alignItems:'start'}}>
            {classAllTags.map(t=>(<button key={t} onClick={()=>toggleClassTag(t)} style={{padding:'0.25rem 0.6rem',borderRadius:'999px',border:'1px solid #d4d4d4',background:classTags.includes(t)?'#0a0a0a':'#fff',color:classTags.includes(t)?'#fff':'inherit'}}>{t}</button>))}
            {classAllTags.length>0 && (<button onClick={()=>setClassTags([])} style={{padding:'0.25rem 0.6rem',borderRadius:'999px',textDecoration:'underline'}}>Clear</button>)}
          </div>
        </div>

        <div style={{marginTop:'1.5rem',display:'grid',gap:'1rem',gridTemplateColumns:'repeat(3,minmax(0,1fr))'}}>
          {filteredClassical.map((o,i)=>(
            <a key={`${o.name}-${i}`} href={o.url} target='_blank' rel='noopener noreferrer' style={{border:'1px solid #e5e5e5',background:'#fafafa',borderRadius:'1rem',padding:'1rem',textDecoration:'none',color:'inherit'}}>
              <p style={{fontSize:'0.75rem',color:'#6b7280'}}>Classical</p>
              <h3 style={{marginTop:'0.25rem',fontSize:'0.95rem',fontWeight:600,lineHeight:1.2}}>{o.name}</h3>
              <p style={{marginTop:'0.25rem',fontSize:'0.8rem',color:'#3730a3',wordBreak:'break-all'}}>{o.url}</p>
              <p style={{marginTop:'0.5rem',fontSize:'0.8rem',color:'#404040',lineHeight:1.5}}>{o.blurb}</p>
              <div style={{marginTop:'0.5rem',display:'flex',flexWrap:'wrap',gap:'0.25rem'}}>
                {o.tags.map(t=>(<span key={t} style={{fontSize:'0.7rem',padding:'0.125rem 0.5rem',borderRadius:'999px',background:'#fff',border:'1px solid #e5e5e5'}}>{t}</span>))}
              </div>
            </a>
          ))}
        </div>

        {filteredClassical.length===0 && (<p style={{marginTop:'2rem',fontSize:'0.9rem',color:'#737373'}}>No matches. Try another search or clear tag filters.</p>)}
      </section>
    )}
  </main>

  <footer style={{padding:'2.5rem 0',borderTop:'1px solid #e5e5e5',background:'rgba(255,255,255,.6)'}}>
    <div style={{maxWidth:'72rem',margin:'0 auto',padding:'0 1.5rem',display:'flex',gap:'0.5rem',alignItems:'center',justifyContent:'space-between',color:'#525252',fontSize:'0.95rem'}}>
      <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
    </div>
  </footer>
</div>);
}
