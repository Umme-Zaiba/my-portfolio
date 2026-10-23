/* ===== EDIT ME — all content lives in this object (placeholders for now) ===== */
const C={
  fullName:'UMME ZAIBA',role:'SOFTWARE ENGINEER',city:'YOUR CITY',status:'● OPEN TO NEW OPPORTUNITIES',email:'hello@example.com',
  rotate:['fast interfaces','reliable systems','delightful products','clean architecture'],
  statement:'I build software that feels *effortless* — and I care most about the details nobody notices until they\'re *missing.*',
  bio2:'Replace this paragraph with a short, human intro: what you love building, how you work, and what you\'re learning right now. Two or three sentences is plenty.',
  stats:[['0+','Years experience'],['0+','Projects shipped'],['0','Happy clients']],
  facts:[['Based in','Your City'],['Focus','Full-stack · Product'],['Stack','React · Node · Cloud'],['Status','Open to work']],
  svc:[['01','Product Engineering','End-to-end web apps, from database to the last pixel.',['React','Node','Postgres']],['02','Frontend & Design Systems','Fast, accessible interfaces and reusable component libraries.',['TypeScript','Storybook','A11y']],['03','APIs & Integrations','Reliable services, clean contracts, and systems that talk to each other.',['REST','GraphQL','Queues']],['04','Cloud & DevOps','CI/CD, infrastructure and monitoring so shipping stays boring.',['AWS','Docker','Terraform']]],
  steps:[['Discover','Understand the problem, the users and the constraints before writing code.'],['Design','Sketch flows and systems; agree on what “done” looks like.'],['Build','Small, reviewed increments with tests, shipped behind flags.'],['Ship & Learn','Deploy often, measure what matters, keep improving.']],
  quotes:[['“A short, specific line from a colleague or client about working with you.”','Name Surname','Role, Company'],['“Another testimonial — focus on outcomes: faster, clearer, more reliable.”','Name Surname','Role, Company'],['“A third voice. Replace these placeholders with real feedback.”','Name Surname','Role, Company']],
  projects:[
    {t:'Project One',d:'One sharp sentence on what it does and the problem it solved for real users.',tags:['React','Node','Postgres'],url:'#',file:'engine.ts',
     code:`<span class="k">export async function</span> <span class="f">ship</span>(feature) {\n  <span class="k">const</span> plan = <span class="k">await</span> <span class="f">design</span>(feature)\n  <span class="k">const</span> build = <span class="f">compile</span>(plan)\n  <span class="c">// make it fast, then make it right</span>\n  <span class="k">return</span> <span class="f">deploy</span>(build, { <span class="s">"env"</span>: <span class="s">"prod"</span> })\n}`},
    {t:'Project Two',d:'Describe the scale, the stack decisions, and the measurable outcome.',tags:['TypeScript','AWS','Redis'],url:'#',file:'queue.ts',
     code:`<span class="k">const</span> queue = <span class="k">new</span> <span class="f">Queue</span>({\n  concurrency: <span class="a">32</span>,\n  retries: <span class="a">3</span>,\n  backoff: <span class="s">"exponential"</span>,\n})\n\nqueue.<span class="f">on</span>(<span class="s">"done"</span>, (job) => <span class="f">log</span>(job.id))`},
    {t:'Project Three',d:'A product you designed and built end-to-end. What made it hard, what you learned.',tags:['Next.js','Tailwind','Stripe'],url:'#',file:'page.tsx',
     code:`<span class="k">export default function</span> <span class="f">Page</span>() {\n  <span class="k">return</span> (\n    &lt;<span class="f">Hero</span> title=<span class="s">"Hello, world"</span> /&gt;\n  )\n}`},
    {t:'Project Four',d:'An experiment, an open-source tool, or something you built just because.',tags:['Python','AI','FastAPI'],url:'#',file:'agent.py',
     code:`<span class="k">def</span> <span class="f">think</span>(task):\n    plan = llm.<span class="f">plan</span>(task)\n    <span class="k">for</span> step <span class="k">in</span> plan:\n        <span class="f">run</span>(step)\n    <span class="k">return</span> <span class="s">"done"</span>`}],
  log:[
    ['v3.0.0','2024 — NOW','Senior Role Title','COMPANY NAME','Led a team shipping a core product. Describe impact with real numbers: faster, cheaper, more reliable.',1],
    ['v2.0.0','2022 — 2024','Role Title','COMPANY NAME','Built and scaled key features from zero to production. One line on the outcome.',0],
    ['v1.0.0','2020 — 2022','First Role / Internship','COMPANY NAME','Where it started: learned the craft, shipped the first real code.',0]],
  pkg:{name:'umme-zaiba',version:'1.0.0',description:'software engineer',main:'index.ts',
    scripts:{dev:'curiosity --watch',build:'ship it',test:'break things, then fix them'},
    dependencies:{'javascript':'^ES2024','typescript':'^5.x','react':'^18','node':'^20','postgres':'^16','aws':'*'},
    devDependencies:{'git':'latest','docker':'latest','figma':'latest','coffee':'∞'}},
  socials:[['GITHUB','#'],['LINKEDIN','#'],['X / TWITTER','#'],['RESUME','#']]
};
/* ===== engine ===== */
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)],clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
const RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
$$('[data-t]').forEach(e=>{if(C[e.dataset.t])e.textContent=C[e.dataset.t]});
$('#yr').textContent=new Date().getFullYear();$('#mailTxt').textContent=C.email;
/* split hero name */
$$('.ln').forEach((l,li)=>{l.innerHTML=[...l.dataset.w].map((ch,i)=>`<span class="c" style="--i:${i+li*4}">${ch}</span>`).join('')});
/* about */
$('#statement').innerHTML=C.statement.replace(/\*([^*]+)\*/g,'<mark>$1</mark>');
$('#stats').innerHTML=C.stats.map(s=>`<li><b>${s[0]}</b><span>${s[1]}</span></li>`).join('');
$('#facts').innerHTML=C.facts.map(f=>`<div><dt class="mono">${f[0]}</dt><dd>${f[1]}</dd></div>`).join('');
$('#svc').innerHTML=C.svc.map(s=>`<article class="sv reveal"><span class="mono">${s[0]}</span><h3>${s[1]}</h3><p>${s[2]}</p><div class="tags mono">${s[3].map(t=>`<span>${t}</span>`).join('')}</div></article>`).join('');
$('#steps').innerHTML=C.steps.map((s,i)=>`<li class="reveal"><i class="mono">0${i+1}</i><h4>${s[0]}</h4><p>${s[1]}</p></li>`).join('');
$('#quotes').innerHTML=C.quotes.map(q=>`<figure class="qt reveal"><blockquote>${q[0]}</blockquote><figcaption class="mono"><b>${q[1]}</b><br>${q[2]}</figcaption></figure>`).join('');
/* projects */
$('#deck').innerHTML=C.projects.map((p,i)=>`<a class="pcard" href="${p.url}" style="--n:${i}" data-cursor="VIEW"><div class="pl"><div><div class="pn">0${i+1}</div><h3>${p.t}</h3><p class="d">${p.d}</p><div class="tags mono">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div></div><span class="go mono">VIEW CASE STUDY <i>↗</i></span></div><div class="pr"><div class="fn mono"><span>${p.file}</span><span>●</span></div><div class="code">${p.code.split('\n').map((l,j)=>`<span class="ln-n">${j+1}</span>${l}`).join('\n')}</div></div></a>`).join('');
/* log */
$('#log').innerHTML=C.log.map(l=>`<li class="reveal"><span class="v mono">${l[0]}<br>${l[1]}</span><h4>${l[2]}<small>${l[3]}</small></h4><p>${l[4]}</p><span class="badge mono ${l[5]?'':'o'}">${l[5]?'● LIVE':'✓ SHIPPED'}</span></li>`).join('');
/* package.json */
const J=(o,d=1,out=[])=>{const pad='  '.repeat(d),ks=Object.keys(o);ks.forEach((k,i)=>{const v=o[k],c=i<ks.length-1?',':'';
  if(typeof v==='object'){out.push(`<span class="row">${pad}<span class="f">"${k}"</span>: {</span>`);J(v,d+1,out);out.push(`<span class="row">${pad}}${c}</span>`)}
  else out.push(`<span class="row">${pad}<span class="f">"${k}"</span>: <span class="s">"${v}"</span>${c}</span>`)});return out};
$('#pkg').innerHTML='<span class="row">{</span>'+J(C.pkg).join('')+'<span class="row">}</span>';
$('#socials').innerHTML=C.socials.map(s=>`<a href="${s[1]}" target="_blank" rel="noopener" data-cursor="OPEN">${s[0]} ↗</a>`).join('');
$('#build').textContent=`build #${Math.floor(Math.random()*9000+1000)} · main · deployed`;
/* clock + rotating word */
const tick=()=>$('#clock').textContent=new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit',second:'2-digit'});tick();setInterval(tick,1000);
let ri=0;const rot=$('#rot');rot.textContent=C.rotate[0];setInterval(()=>{rot.style.opacity=0;setTimeout(()=>{rot.textContent=C.rotate[++ri%C.rotate.length];rot.style.opacity=1},350)},2800);
let lenis=null;
/* ===== loader ===== */
const bootLines=['$ npm run build','<b>✓</b> resolving dependencies','<b>✓</b> compiling interface','<b>✓</b> optimising assets','<b>✓</b> ready'];
$('#boot').innerHTML=bootLines.map((l,i)=>`<div style="animation-delay:${i*.3}s">${l}</div>`).join('');
let n=0;const dur=RM?0:1700,t0=performance.now();
(function L(t){n=clamp((t-t0)/dur,0,1);const e=1-Math.pow(1-n,3);$('#pct').textContent=Math.round(e*100);$('#bar').style.width=e*100+'%';n<1?requestAnimationFrame(L):finish()})(t0);
function finish(){setTimeout(()=>{$('#loader').classList.add('done');document.body.classList.remove('loading');document.body.classList.add('ready');lenis&&lenis.start()},200);setTimeout(()=>$('#loader').remove(),1400)}
/* ===== smooth scroll ===== */
if(window.Lenis&&!RM&&!location.search.includes('plain')){lenis=new Lenis({lerp:.09});lenis.stop();(function r(t){lenis.raf(t);requestAnimationFrame(r)})(0)}
/* ===== canvas dot grid ===== */
const cv=$('#bg'),cx=cv.getContext('2d');let W,H,mx=-999,my=-999,sm=-999,sn=-999;const G=30;
const rs=()=>{const d=Math.min(devicePixelRatio||1,2);W=innerWidth;H=innerHeight;cv.width=W*d;cv.height=H*d;cx.setTransform(d,0,0,d,0,0)};rs();addEventListener('resize',rs);
addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY});
function dots(){sm+=(mx-sm)*.12;sn+=(my-sn)*.12;cx.clearRect(0,0,W,H);const light=document.documentElement.dataset.theme==='light',base=light?'0,0,0':'255,255,255',acc=light?'10,125,74':'124,255,178',off=scrollY*.15%G;
  for(let x=G/2;x<W;x+=G)for(let y=G/2-off;y<H;y+=G){const dx=x-sm,dy=y-sn,d=Math.hypot(dx,dy),f=clamp(1-d/220,0,1),px=x+dx/(d||1)*f*14,py=y+dy/(d||1)*f*14;
    cx.fillStyle=f>.02?`rgba(${acc},${.25+f*.75})`:`rgba(${base},.11)`;cx.beginPath();cx.arc(px,py,1+f*2,0,6.283);cx.fill()}
  requestAnimationFrame(dots)}
if(!RM)dots();
/* ===== cursor ===== */
const cur=$('#cur'),ring=$('#ring'),rl=$('span',ring);let rx=0,ry=0,cxp=0,cyp=0;
addEventListener('pointermove',e=>{cxp=e.clientX;cyp=e.clientY;cur.style.transform=`translate(${cxp}px,${cyp}px)`});
(function rr(){rx+=(cxp-rx)*.16;ry+=(cyp-ry)*.16;ring.style.transform=`translate(${rx}px,${ry}px)`;requestAnimationFrame(rr)})();
document.addEventListener('pointerover',e=>{const t=e.target.closest('[data-cursor],a,button');if(t){ring.classList.add('big');rl.textContent=t.dataset.cursor||'';if(!t.dataset.cursor)ring.classList.remove('big')}});
document.addEventListener('pointerout',e=>{if(e.target.closest('[data-cursor]'))ring.classList.remove('big')});
/* ===== scroll-driven ===== */
const cards=$$('.pcard'),stages=$$('[data-stage]');let fps=60,lf=performance.now(),fc=0;
function onScroll(){
  const vh=innerHeight,sy=scrollY,max=document.documentElement.scrollHeight-vh,p=clamp(sy/max,0,1);
  $('#prog').style.width=p*100+'%';$('#pctHud').textContent=String(Math.round(p*100)).padStart(2,'0');
  cards.forEach((c,i)=>{const nx=cards[i+1];if(!nx||innerWidth<=900){c.style.transform='';return}const k=clamp((vh*.85-nx.getBoundingClientRect().top)/(vh*.6),0,1);c.style.transform=`scale(${1-k*.07})`;c.style.filter=`brightness(${1-k*.35})`});
  let cur='INIT';stages.forEach(s=>{if(s.getBoundingClientRect().top<vh*.5)cur=s.dataset.stage});$('#stage').textContent=cur;
}
addEventListener('scroll',onScroll,{passive:true});onScroll();
cards.forEach(c=>c.addEventListener('pointermove',e=>{const b=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-b.left+'px');c.style.setProperty('--my',e.clientY-b.top+'px')}));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});$$('.reveal').forEach(e=>io.observe(e));
/* ===== live session console ===== */
const sl=$('#sLog');let ex=0,ey=0;addEventListener('pointermove',e=>{ex=e.clientX;ey=e.clientY});
const nav=navigator,tz=Intl.DateTimeFormat().resolvedOptions().timeZone||'—';
function frames(){fc++;const t=performance.now();if(t-lf>500){fps=Math.round(fc*1000/(t-lf));fc=0;lf=t}requestAnimationFrame(frames)}frames();
setInterval(()=>{sl.innerHTML=`<b>$</b> whoami → <u>visitor</u><br>viewport · <u>${innerWidth}×${innerHeight}</u><br>tz · <u>${tz}</u><br>scroll · <u>${Math.round(scrollY)}px</u><br>cursor · <u>${ex}, ${ey}</u><br>fps · <u>${fps}</u><br><b>●</b> session live`},200);
/* ===== copy email / toast ===== */
const toast=m=>{const t=$('#toast');t.textContent=m;t.classList.add('on');setTimeout(()=>t.classList.remove('on'),1800)};
$('#mail').onclick=()=>{navigator.clipboard?.writeText(C.email).catch(()=>{});toast('EMAIL COPIED');setTimeout(()=>location.href='mailto:'+C.email,500)};
/* ===== theme ===== */
const setTheme=t=>{document.documentElement.dataset.theme=t;try{localStorage.t=t}catch{}};const toggle=()=>setTheme(document.documentElement.dataset.theme==='light'?'dark':'light');
try{if(localStorage.t)setTheme(localStorage.t);else if(matchMedia('(prefers-color-scheme:light)').matches)setTheme('light')}catch{};$('#themeBtn').onclick=toggle;$('#themeTop').onclick=toggle;
/* ===== command palette ===== */
const go=id=>()=>lenis?lenis.scrollTo(id,{offset:0}):$(id).scrollIntoView({behavior:'smooth'});
const cmds=[['Go to — About','#about'],['Go to — Services','#services'],['Go to — Process','#process'],['Go to — Work','#work'],['Go to — Changelog','#exp'],['Go to — Stack','#stack'],['Go to — Contact','#contact'],['Toggle theme',toggle],['Copy email',()=>{navigator.clipboard?.writeText(C.email);toast('EMAIL COPIED')}],...C.socials.map(s=>['Open '+s[0],()=>open(s[1],'_blank')])].map(c=>[c[0],typeof c[1]==='string'?go(c[1]):c[1],typeof c[1]==='string'?'jump':'action']);
const cm=$('#cmd'),inp=$('#cmdIn'),ul=$('#cmdList');let sel=0,cur2=cmds;
const draw=()=>ul.innerHTML=cur2.map((c,i)=>`<li class="${i===sel?'on':''}" data-i="${i}">${c[0]}<small>${c[2]}</small></li>`).join('');
const close=()=>cm.hidden=true,show=()=>{cm.hidden=false;inp.value='';cur2=cmds;sel=0;draw();inp.focus()},run=i=>{const c=cur2[i];if(c){close();c[1]()}};
$('#openCmd').onclick=show;cm.onclick=e=>{if(e.target===cm)close()};ul.onclick=e=>{const l=e.target.closest('li');if(l)run(+l.dataset.i)};
inp.oninput=()=>{cur2=cmds.filter(c=>c[0].toLowerCase().includes(inp.value.toLowerCase()));sel=0;draw()};
addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key==='k'){e.preventDefault();cm.hidden?show():close()}if(cm.hidden)return;
  if(e.key==='Escape')close();if(e.key==='ArrowDown'){e.preventDefault();sel=(sel+1)%cur2.length;draw()}if(e.key==='ArrowUp'){e.preventDefault();sel=(sel-1+cur2.length)%cur2.length;draw()}if(e.key==='Enter')run(sel)});
