/* ===== EDIT ME: all site content lives here (placeholders for now) ===== */
const C={
  first:'Your',last:'Name',fullName:'Your Name',initials:'YN',role:'Full-Stack Developer',city:'Your City',
  status:'Available for new projects',email:'hello@example.com',
  rotate:['fast interfaces','delightful products','scalable backends','clean design systems'],
  marquee:['Design','Engineering','Performance','Accessibility','Craft','Systems'],
  projects:[
    {t:'Project One',d:'One-line pitch about what it does and why it matters.',tags:['React','Node'],c:'#c6ff3d',url:'#'},
    {t:'Project Two',d:'Short description of the problem you solved.',tags:['TypeScript'],c:'#7c5cff',url:'#'},
    {t:'Project Three',d:'What you built and the impact it had.',tags:['Next.js','AWS'],c:'#ff5c8a',url:'#'},
    {t:'Project Four',d:'A side project, experiment or open-source tool.',tags:['Python','AI'],c:'#3dd6ff',url:'#'}],
  stats:[['0+','Years experience'],['0+','Projects shipped'],['0','Happy clients'],['∞','Cups of coffee']],
  timeline:[['2024 — Now','Role Title','Company'],['2022 — 2024','Role Title','Company'],['2020 — 2022','Role Title','Company']],
  stack:['JavaScript','TypeScript','React','Node.js','Python','SQL','Docker','AWS','Figma','Git'],
  socials:[['GitHub','#'],['LinkedIn','#'],['X / Twitter','#'],['Resume','#']]
};
/* ===== engine ===== */
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
$$('[data-t]').forEach(e=>{const v=C[e.dataset.t];if(v)e.textContent=v});
$('#yr').textContent=new Date().getFullYear();
$('#mail').href='mailto:'+C.email;$('#mail').textContent=C.email;
$('#marq').innerHTML=[...C.marquee,...C.marquee,...C.marquee,...C.marquee].map(s=>`<span>${s}</span><span>✦</span>`).join('');
$('#bento').innerHTML=C.projects.map((p,i)=>`<a class="card" href="${p.url}" style="--c:${p.c}"><span class="arrow">↗</span><div><span class="n">0${i+1}</span><h3>${p.t}</h3><p>${p.d}</p></div><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div></a>`).join('');
$('#stats').innerHTML=C.stats.map(s=>`<li><b>${s[0]}</b><span>${s[1]}</span></li>`).join('');
$('#timeline').innerHTML=C.timeline.map(t=>`<li><small>${t[0]}</small><b>${t[1]}</b><span>${t[2]}</span></li>`).join('');
$('#chips').innerHTML=C.stack.map(s=>`<span>${s}</span>`).join('');
$('#socials').innerHTML=C.socials.map(s=>`<a href="${s[1]}" target="_blank" rel="noopener">${s[0]} ↗</a>`).join('');
/* live clock */
const tick=()=>$('#clock').textContent=new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});tick();setInterval(tick,3e4);
/* rotating words */
let ri=0;setInterval(()=>{const r=$('#rot');r.style.opacity=0;setTimeout(()=>{r.textContent=C.rotate[++ri%C.rotate.length];r.style.opacity=1},300)},2600);$('#rot').style.transition='opacity .3s';$('#rot').textContent=C.rotate[0];
/* cursor spotlight + card glow + magnetic buttons */
const spot=$('#spot');addEventListener('pointermove',e=>spot.style.transform=`translate(${e.clientX}px,${e.clientY}px)`);
$$('.card').forEach(c=>c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect();c.style.setProperty('--x',e.clientX-r.left+'px');c.style.setProperty('--y',e.clientY-r.top+'px')}));
$$('.mag').forEach(m=>{m.addEventListener('pointermove',e=>{const r=m.getBoundingClientRect();m.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.25}px,${(e.clientY-r.top-r.height/2)*.35}px)`});m.addEventListener('pointerleave',()=>m.style.transform='')});
/* scroll reveal (staggered) */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('in'),(e.target.dataset.d||0)*90);io.unobserve(e.target)}}),{threshold:.15});
$$('.reveal,.card,.timeline li,.stats li').forEach((e,i)=>{e.dataset.d=i%4;io.observe(e)});
/* theme */
const setTheme=t=>{document.documentElement.dataset.theme=t;try{localStorage.t=t}catch{}};
const toggle=()=>setTheme(document.documentElement.dataset.theme==='light'?'dark':'light');
try{if(localStorage.t)setTheme(localStorage.t)}catch{};$('#themeBtn').onclick=toggle;
/* command palette */
const cmds=[['Go to Work','#work'],['Go to About','#about'],['Go to Stack','#stack'],['Contact','#contact'],['Toggle theme',toggle],['Copy email',()=>navigator.clipboard?.writeText(C.email)],...C.socials.map(s=>['Open '+s[0],()=>open(s[1],'_blank')])];
const cmd=$('#cmd'),inp=$('#cmdIn'),list=$('#cmdList');let sel=0,cur=cmds;
const draw=()=>list.innerHTML=cur.map((c,i)=>`<li class="${i===sel?'on':''}" data-i="${i}">${c[0]}<small>${typeof c[1]==='string'?'jump':'action'}</small></li>`).join('');
const run=i=>{const c=cur[i];if(!c)return;close();typeof c[1]==='string'?(location.hash=c[1]):c[1]()};
const close=()=>cmd.hidden=true,show=()=>{cmd.hidden=false;inp.value='';cur=cmds;sel=0;draw();inp.focus()};
$('#openCmd').onclick=show;cmd.onclick=e=>{if(e.target===cmd)close()};list.onclick=e=>{const l=e.target.closest('li');if(l)run(+l.dataset.i)};
inp.oninput=()=>{cur=cmds.filter(c=>c[0].toLowerCase().includes(inp.value.toLowerCase()));sel=0;draw()};
addEventListener('keydown',e=>{
  if((e.metaKey||e.ctrlKey)&&e.key==='k'){e.preventDefault();cmd.hidden?show():close()}
  if(cmd.hidden)return;
  if(e.key==='Escape')close();
  if(e.key==='ArrowDown'){e.preventDefault();sel=(sel+1)%cur.length;draw()}
  if(e.key==='ArrowUp'){e.preventDefault();sel=(sel-1+cur.length)%cur.length;draw()}
  if(e.key==='Enter')run(sel)});
