// Lär dig klockan – hästversionen. Små steg, ingen tidspress, mycket repetition.
(function(){
const NEXT=h=>h%12+1;
const R=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
const pick=a=>a[Math.floor(Math.random()*a.length)];
const NUM=['noll','ett','två','tre','fyra','fem','sex','sju','åtta','nio','tio','elva','tolv'];

// Svenska klockord
function say(h,m){
  if(m===0) return `klockan ${h}`;
  if(m===30) return `halv ${NEXT(h)}`;
  if(m===15) return `kvart över ${h}`;
  if(m===45) return `kvart i ${NEXT(h)}`;
  if(m<30) return `${m} över ${h}`;
  return `${60-m} i ${NEXT(h)}`;
}
const dig=(h,m)=>`${h}:${String(m).padStart(2,'0')}`;
const mw=s=>`${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`;

// Ritar klockan som ett ridhus. Långa visaren = hästen 🐎, korta = ponnyn.
function clock(h,m,o={}){
  const size=o.size||240,c=120,mins=o.minutes;
  const ang=deg=>(deg-90)*Math.PI/180;
  const mA=m*6,hA=(h%12)*30+m*0.5;
  let s=`<svg viewBox="0 0 240 240" width="${size}" height="${size}" style="display:block;margin:0 auto;max-width:100%">`;
  s+=`<circle cx="${c}" cy="${c}" r="114" fill="#f4e6cf" stroke="#8b5e34" stroke-width="8"/>`;
  s+=`<circle cx="${c}" cy="${c}" r="100" fill="#fffaf2" stroke="#e7cfa8" stroke-width="2" stroke-dasharray="4 5"/>`;
  if(o.part){ // färgad del av varvet (t.ex. halvt varv)
    const a1=ang(0),a2=ang(o.part*360),large=o.part>0.5?1:0;
    if(o.part>=1) s+=`<circle cx="${c}" cy="${c}" r="96" fill="#c7d2fe" opacity=".6"/>`;
    else s+=`<path d="M${c},${c} L${c+96*Math.cos(a1)},${c+96*Math.sin(a1)} A96,96 0 ${large} 1 ${c+96*Math.cos(a2)},${c+96*Math.sin(a2)} Z" fill="#c7d2fe" opacity=".7"/>`;
  }
  for(let i=0;i<60;i++){const a=ang(i*6),r1=i%5?93:87;s+=`<line x1="${c+r1*Math.cos(a)}" y1="${c+r1*Math.sin(a)}" x2="${c+98*Math.cos(a)}" y2="${c+98*Math.sin(a)}" stroke="${i%5?'#c9b08a':'#8b5e34'}" stroke-width="${i%5?1.5:3}"/>`}
  for(let n=1;n<=12;n++){const a=ang(n*30);s+=`<text x="${c+70*Math.cos(a)}" y="${c+70*Math.sin(a)+8}" text-anchor="middle" font-size="22" font-weight="900" fill="#1f2a37" font-family="Nunito,sans-serif">${n}</text>`;
    if(mins){s+=`<text x="${c+108*Math.cos(a)}" y="${c+108*Math.sin(a)+4}" text-anchor="middle" font-size="10" font-weight="800" fill="#2563eb" font-family="Nunito,sans-serif">${(n*5)%60}</text>`}}
  const ha=ang(hA),ma=ang(mA);
  s+=`<line x1="${c}" y1="${c}" x2="${c+46*Math.cos(ha)}" y2="${c+46*Math.sin(ha)}" stroke="#b45309" stroke-width="9" stroke-linecap="round"/>`;
  s+=`<line x1="${c}" y1="${c}" x2="${c+89*Math.cos(ma)}" y2="${c+89*Math.sin(ma)}" stroke="#2563eb" stroke-width="5" stroke-linecap="round"/>`;
  s+=`<circle cx="${c+100*Math.cos(ma)}" cy="${c+100*Math.sin(ma)}" r="11" fill="#fff" stroke="#2563eb" stroke-width="2"/><text x="${c+100*Math.cos(ma)}" y="${c+100*Math.sin(ma)+5}" text-anchor="middle" font-size="14">🐎</text>`;
  s+=`<circle cx="${c}" cy="${c}" r="7" fill="#1f2a37"/></svg>`;
  return s;
}
const microwave=(t,label)=>`<div class="mw"><div class="mwdoor">🍲</div><div class="mwpanel"><div class="mwd">${t}</div><div class="mwl">${label||'mikron'}</div></div></div>`;

// Hjälptexter som alltid finns ett tryck bort
const HELP={
  varv:`${clock(12,0,{minutes:true,size:180})}<p><b>Hästen (långa blå visaren)</b> rider ett helt varv runt ridhuset på <b>60 minuter</b>. Ett helt varv = <b>1 timme</b>.<br>Varje litet streck är 1 minut. Mellan två siffror är det 5 minuter.</p>`,
  hel:`${clock(3,0,{size:180})}<p>När hästen står vid <b>12</b> (högst upp) är det <b>hel timme</b>.<br>Titta då på den <b>korta bruna visaren (ponnyn)</b>. Den pekar på vilken timme det är. Här: <b>klockan 3</b>.</p>`,
  halv:`${clock(3,30,{size:180,part:.5})}<p>Hästen står vid <b>6</b> = den har ridit <b>halva varvet = 30 minuter</b>.<br>På svenska säger vi <b>halv</b> + timmen vi är på väg till. Ponnyn är mellan 3 och 4 → vi är på väg till 4 → <b>halv fyra</b> (3:30).</p>`,
  kvart:`${clock(3,15,{size:150,part:.25})}<p><b>Kvart</b> = en fjärdedels varv = <b>15 minuter</b>.<br>Hästen vid <b>3</b> → <b>kvart över</b> (15 min efter hel timme).<br>Hästen vid <b>9</b> → <b>kvart i</b> (15 min kvar till nästa hela timme).</p>`,
  mikro:`${microwave('1:00')}<p>Mikron visar <b>minuter : sekunder</b>.<br><b>1:00</b> = 1 minut och 0 sekunder = <b>60 sekunder</b>.<br><b>0:30</b> = 30 sekunder. <b>1:30</b> = 60 + 30 = <b>90 sekunder</b>.<br>Precis som med klockan: 60 av de små blir 1 av de stora.</p>`,
  digital:`<p><b>Digital klocka</b> visar timmar : minuter.<br><b>3:30</b> = 3 timmar och 30 minuter = <b>halv fyra</b>.<br>På eftermiddagen räknar man vidare efter 12: <b>13</b>=1, <b>14</b>=2, <b>15</b>=3, <b>16</b>=4, <b>17</b>=5, <b>18</b>=6.<br>Tips: ta bort 12. 17 − 12 = 5 → klockan fem.</p>`,
  langd:`<p>Hur lång tid tar något? Räkna hur långt hästen rider.<br>Ett helt varv = <b>1 timme</b> (60 min). Halvt varv = <b>30 min</b>. Kvarts varv = <b>15 min</b>.<br>Ridlektion 17:00 → 18:00 = ett helt varv = 1 timme.</p>`
};

// Nivåerna – som hinder i en hoppbana
const LEVELS=[
 {id:'varv',n:1,title:'Ett varv i ridhuset',em:'🐎',help:'varv',learn:'ridhus',
  intro:'Klockan är som ett ridhus. Den långa blå visaren är hästen. Ett helt varv tar 60 minuter = 1 timme.',
  gen(){return pick([
   ()=>({p:'Hästen rider ett HELT varv runt klockan. Hur många minuter tar det?',svg:clock(12,0,{minutes:true,part:1,size:180}),o:['60 minuter','100 minuter','12 minuter','30 minuter'],c:0,e:'Ett helt varv = 60 minuter = 1 timme.'}),
   ()=>({p:'Hur många minuter är 1 timme?',o:['60','100','10','24'],c:0,e:'1 timme = 60 minuter = ett helt varv för hästen.'}),
   ()=>({p:'Hästen har ridit HALVA varvet. Hur många minuter?',svg:clock(12,30,{minutes:true,part:.5,size:180}),o:['30 minuter','50 minuter','6 minuter','60 minuter'],c:0,e:'Halva 60 = 30. Halvt varv = 30 minuter.'}),
   ()=>({p:'Hästen har ridit en KVARTS varv (till 3:an). Hur många minuter?',svg:clock(12,15,{minutes:true,part:.25,size:180}),o:['15 minuter','3 minuter','25 minuter','30 minuter'],c:0,e:'En kvart = 15 minuter. Titta på de blå siffrorna: vid 3 står det 15.'}),
   ()=>{const v=R(2,3);return {p:`Hästen rider ${v} hela varv. Hur lång tid är det?`,o:[`${v} timmar`,`${v} minuter`,`${v*10} minuter`,`${v*100} minuter`],c:0,e:`Ett varv = 1 timme. ${v} varv = ${v} timmar (= ${v*60} minuter).`}},
   ()=>{const n=pick([1,2,3,4,6,8,9]);return {p:`Hästen står vid siffran ${n}. Hur många minuter har den ridit sedan 12?`,svg:clock(12,n*5,{minutes:true,size:180}),o:[`${n*5} minuter`,`${n} minuter`,`${n*10} minuter`,`${n+5} minuter`],c:0,e:`Mellan varje siffra är det 5 minuter. ${n} × 5 = ${n*5}. Titta på den lilla blå siffran utanför!`}},
   ()=>({p:'Vilken visare är hästen som rider runt på en timme?',o:['Den långa blå visaren','Den korta bruna visaren','Siffrorna','Mittenpricken'],c:0,e:'Långa blå = minuterna = hästen. Korta bruna = timmarna = ponnyn.'})
  ])()}},
 {id:'hel',n:2,title:'Hela timmar',em:'⏰',help:'hel',
  intro:'När hästen står högst upp vid 12 är det hel timme. Då tittar du på den korta bruna visaren – ponnyn – den visar timmen.',
  gen(){const h=R(1,12);let o=[h,NEXT(h),h===1?12:h-1,NEXT(NEXT(h))].map(x=>`Klockan ${x}`);return {p:'Vad är klockan?',svg:clock(h,0),o,c:0,e:`Hästen står vid 12 = hel timme. Ponnyn pekar på ${h} → klockan ${h}.`}}},
 {id:'halv',n:3,title:'Halv',em:'🌗',help:'halv',
  intro:'Halv = hästen har ridit halva varvet och står vid 6. Vi säger halv + timmen vi är PÅ VÄG TILL. 3:30 = halv fyra.',
  gen(){return pick([
   ()=>{const h=R(1,12);return {p:'Vad är klockan?',svg:clock(h,30,{part:.5}),o:[`halv ${NEXT(h)}`,`halv ${h}`,`klockan ${h}`,`klockan 6`],c:0,e:`Hästen vid 6 = halv. Ponnyn är på väg från ${h} till ${NEXT(h)} → halv ${NEXT(h)} (${dig(h,30)}).`}},
   ()=>{const h=R(1,12);return {p:`Det står ${dig(h,30)} på en digital klocka. Hur säger man det?`,o:[`halv ${NEXT(h)}`,`halv ${h}`,`${h} och trettio i`,`klockan ${h}`],c:0,e:`${dig(h,30)} = 30 minuter efter ${h}. Vi är halvvägs till ${NEXT(h)} → halv ${NEXT(h)}.`}},
   ()=>{const h=R(1,12);return {p:`Mamma säger "vi åker halv ${NEXT(h)}". Vilken digital tid är det?`,o:[dig(h,30),dig(NEXT(h),30),dig(NEXT(h),0),dig(h,0)],c:0,e:`Halv ${NEXT(h)} = 30 minuter innan ${NEXT(h)} = ${dig(h,30)}.`}}
  ])()}},
 {id:'kvart',n:4,title:'Kvart över & kvart i',em:'🍀',help:'kvart',
  intro:'En kvart = 15 minuter = en fjärdedels varv. Hästen vid 3 = kvart över. Hästen vid 9 = kvart i (15 minuter kvar till hel timme).',
  gen(){const h=R(1,12);return pick([
   ()=>({p:'Vad är klockan?',svg:clock(h,15,{part:.25}),o:[`kvart över ${h}`,`kvart i ${h}`,`kvart över 3`,`halv ${NEXT(h)}`],c:0,e:`Hästen vid 3 = kvart över. Ponnyn har precis lämnat ${h} → kvart över ${h} (${dig(h,15)}).`}),
   ()=>({p:'Vad är klockan?',svg:clock(h,45),o:[`kvart i ${NEXT(h)}`,`kvart över ${h}`,`kvart i ${h}`,`halv ${NEXT(h)}`],c:0,e:`Hästen vid 9 = 15 minuter kvar. Ponnyn är nästan framme vid ${NEXT(h)} → kvart i ${NEXT(h)} (${dig(h,45)}).`}),
   ()=>({p:`Hur många minuter är en kvart?`,o:['15 minuter','25 minuter','4 minuter','45 minuter'],c:0,e:'En kvart = en fjärdedel av 60 = 15 minuter.'}),
   ()=>({p:`Kvart i ${NEXT(h)} – vilken digital tid?`,o:[dig(h,45),dig(NEXT(h),15),dig(NEXT(h),45),dig(h,15)],c:0,e:`Kvart i ${NEXT(h)} = 15 min innan ${NEXT(h)} = ${dig(h,45)}.`})
  ])()}},
 {id:'mikro',n:5,title:'Mikron: minuter & sekunder',em:'🍲',help:'mikro',learn:'mikro',
  intro:'Mikron visar minuter:sekunder. 1:00 är 1 minut = 60 sekunder. Samma sak som klockan: 60 små = 1 stor.',
  gen(){return pick([
   ()=>{const s=pick([30,60,90,120,45,150]);const w=[s===60?90:60,s+30,Math.max(10,s-30)].filter(x=>x!==s);return {p:'Mikron visar så här. Hur många sekunder är det?',html:microwave(mw(s)),o:[`${s} sekunder`,...w.slice(0,2).map(x=>`${x} sekunder`),`${parseInt(mw(s).replace(':',''))} sekunder`].filter((v,i,a)=>a.indexOf(v)===i).slice(0,4),c:0,e:`${mw(s)} = ${Math.floor(s/60)} minut${Math.floor(s/60)===1?'':'er'} och ${s%60} sekunder = ${s} sekunder.`}},
   ()=>({p:'Hur många sekunder är 1 minut?',o:['60','100','10','1'],c:0,e:'1 minut = 60 sekunder. Precis som 1 timme = 60 minuter.'}),
   ()=>{const s=pick([30,60,90,120]);return {p:`Popcornen ska vara i ${s} sekunder. Vad slår du in på mikron?`,o:[mw(s),`0:${s}`.slice(0,5),`${s}:00`,`1:${s}`].filter((v,i,a)=>a.indexOf(v)===i),c:0,e:`${s} sekunder = ${mw(s)} (${Math.floor(s/60)} min och ${s%60} sek).`}},
   ()=>({p:'Vilket är LÄNGST tid?',o:['2:00','1:30','1:00','0:45'],c:0,e:'2:00 = 2 minuter = 120 sekunder. Det är längst.'}),
   ()=>({p:'Mikron visar 1:00. Är det 1 sekund eller 1 minut?',html:microwave('1:00'),o:['1 minut (60 sekunder)','1 sekund','100 sekunder','10 sekunder'],c:0,e:'Siffran före kolon är minuter. 1:00 = 1 minut = 60 sekunder.'})
  ])()}},
 {id:'digital',n:6,title:'Digital klocka',em:'📱',help:'digital',
  intro:'På mobilen står t.ex. 15:00. Efter 12 räknar man vidare: 13, 14, 15… Ta bort 12 så får du vanliga klockan: 15 − 12 = 3.',
  gen(){return pick([
   ()=>{const h=R(13,20),k=h-12;return {p:`Mobilen visar ${h}:00. Vad är klockan?`,o:[`klockan ${k} på eftermiddagen`,`klockan ${h%10||10}`,`klockan ${k} på morgonen`,`klockan ${NEXT(k)}`],c:0,e:`${h} − 12 = ${k}. Det är eftermiddag/kväll → klockan ${k}.`}},
   ()=>{const h=R(1,11),m=pick([0,15,30,45]);const right=dig(h,m);const o=[right,dig(NEXT(h),m),dig(h,(m+30)%60),dig(h===1?12:h-1,m)].filter((v,i,a)=>a.indexOf(v)===i);while(o.length<4)o.push(dig(R(1,12),pick([0,15,30,45])));return {p:'Vilken digital tid visar klockan?',svg:clock(h,m),o:o.slice(0,4),c:0,e:`Ponnyn vid ${h}${m?' (och lite till)':''}, hästen visar ${m} minuter → ${right} = ${say(h,m)}.`}},
   ()=>{const h=R(1,12),m=pick([0,30,15,45]);return {p:`Hur säger man ${dig(h,m)}?`,o:[say(h,m),say(NEXT(h),m),say(h,(m+30)%60),say(h===1?12:h-1,m)].filter((v,i,a)=>a.indexOf(v)===i),c:0,e:`${dig(h,m)} = ${say(h,m)}.`}}
  ])()}},
 {id:'langd',n:7,title:'Hur lång tid? (stallet)',em:'🏇',help:'langd',
  intro:'Nu räknar vi tid i stallet. Hur länge håller ridlektionen? När ska du vara klar?',
  gen(){return pick([
   ()=>{const h=R(15,18);return {p:`Ridlektionen börjar ${h}:00 och slutar ${h+1}:00. Hur lång är den?`,o:['1 timme (60 min)','100 minuter','10 minuter','2 timmar'],c:0,e:`${h}:00 → ${h+1}:00 = ett helt varv = 1 timme.`}},
   ()=>{const h=R(15,18);return {p:`Lektionen börjar ${h}:00 och håller i 30 minuter. När slutar den?`,o:[`${h}:30`,`${h+1}:00`,`${h}:03`,`${h+1}:30`],c:0,e:`30 minuter = halvt varv. ${h}:00 + 30 min = ${h}:30.`}},
   ()=>{const h=R(15,18);return {p:`Du ska vara i stallet ${h}:00. Det tar 15 minuter att cykla dit. När måste du åka?`,o:[`${h-1}:45`,`${h}:15`,`${h-1}:15`,`${h-1}:30`],c:0,e:`15 minuter innan ${h}:00 = kvart i = ${h-1}:45.`}},
   ()=>({p:'Det tar 1 timme att mocka, borsta och sadla. Hur många minuter är det?',o:['60 minuter','100 minuter','10 minuter','30 minuter'],c:0,e:'1 timme = 60 minuter.'}),
   ()=>{const h=R(15,18);return {p:`Hoppträningen börjar ${h}:30 och slutar ${h+1}:00. Hur lång är den?`,o:['30 minuter','1 timme','70 minuter','15 minuter'],c:0,e:`${h}:30 → ${h+1}:00 = halvt varv = 30 minuter.`}},
   ()=>({p:'Vad är längst tid?',o:['1 timme','50 minuter','45 minuter','30 minuter'],c:0,e:'1 timme = 60 minuter. Det är mest.'})
  ])()}}
];
const PER=8;
function prep(q){const right=q.o[q.c];q.o=[...new Set(q.o)];q.opts=shuffle(q.o.map(t=>({t,ok:t===right})));return q}

// --- vyer ---
function prog(){return store('klocka')||{}}
function rosett(s){return s==null?'':s>=7?'🥇':s>=5?'🥈':'🥉'}

function clockHome(){
  accent('Bella');const P=prog();
  $.innerHTML=`<header><button class="back" id="bk">←</button><h1>🐴 Lär dig klockan</h1></header>
  <div class="card"><p style="margin:0">Varje hinder är en liten bana. Klara den och få en rosett! 🥇🥈🥉<br><span class="muted small">Ingen tidtagning – ta den tid du behöver. Tryck på 💡 när du vill ha hjälp.</span></p></div>
  ${LEVELS.map(l=>`<button class="lesson" data-l="${l.id}"><span class="ic">${l.em}</span><span><span class="t">Hinder ${l.n}: ${l.title}</span></span><span class="badge ${P[l.id]>=7?'good':P[l.id]!=null?'mid':''}">${P[l.id]!=null?rosett(P[l.id])+' '+P[l.id]+'/'+PER:'Ny'}</span></button>`).join('')}`;
  $.querySelector('#bk').onclick=()=>go('kid');
  $.querySelectorAll('[data-l]').forEach(b=>b.onclick=()=>go('clockLearn',{lvl:LEVELS.find(l=>l.id===b.dataset.l)}));
}

let timer=null;
function clockLearn(){
  clearInterval(timer);
  const l=S.lvl;
  $.innerHTML=`<header><button class="back" id="bk">←</button><h1>${l.em} ${l.title}</h1></header>
  <div class="card"><p style="margin:0 0 6px;font-weight:700">${l.intro}</p><div class="helpbox">${HELP[l.help]}</div></div>
  ${l.learn==='ridhus'?`<div class="card"><h2>Rid själv! 🐎</h2><div id="rh"></div>
    <div class="row"><button class="btn ghost" data-a="1">+1 min</button><button class="btn ghost" data-a="5">+5 min</button><button class="btn ghost" data-a="15">+15 min</button></div>
    <div class="row"><button class="btn ghost" data-a="0">Börja om</button></div></div>`:''}
  ${l.learn==='mikro'?`<div class="card"><h2>Testa mikron 🍲</h2><div id="mwv"></div><div id="dots" class="dots"></div>
    <div class="row"><button class="btn ghost" data-s="30">0:30</button><button class="btn ghost" data-s="60">1:00</button><button class="btn ghost" data-s="90">1:30</button></div>
    <div class="row"><button class="btn" id="go2">▶ Starta</button></div><p class="small muted" id="mwt"></p></div>`:''}
  <button class="btn" id="go">🏇 Hoppa hindret (${PER} frågor)</button>`;
  $.querySelector('#bk').onclick=()=>{clearInterval(timer);go('clockHome')};
  $.querySelector('#go').onclick=()=>{clearInterval(timer);startLvl()};
  if(l.learn==='ridhus'){
    let t=0;const draw=(msg)=>{const h=12+Math.floor(t/60),hh=((h-1)%12)+1,m=t%60;
      $.querySelector('#rh').innerHTML=clock(hh,m,{minutes:true,size:220})+`<p style="text-align:center;font-weight:800;margin:6px 0">Hästen har ridit <span style="color:#2563eb">${t} minuter</span><br>= ${Math.floor(t/60)} varv (timmar) och ${m} minuter</p>${msg?`<div class="fb ok" style="text-align:center">${msg}</div>`:''}`};
    draw();
    $.querySelectorAll('[data-a]').forEach(b=>b.onclick=()=>{const a=+b.dataset.a;if(!a){t=0;draw();return}const before=Math.floor(t/60);t+=a;
      draw(Math.floor(t/60)>before?`🎉 Ett helt varv! 60 minuter = 1 timme. Ponnyn flyttade sig ett steg.`:'')});
  }
  if(l.learn==='mikro'){
    let s=60;const show=()=>{$.querySelector('#mwv').innerHTML=microwave(mw(s));$.querySelector('#dots').innerHTML=Array.from({length:Math.max(s,0)},()=>'<i></i>').join('');$.querySelector('#mwt').textContent=`${mw(s)} = ${s} sekunder. Varje prick är 1 sekund.`};
    show();
    $.querySelectorAll('[data-s]').forEach(b=>b.onclick=()=>{clearInterval(timer);s=+b.dataset.s;show();$.querySelector('#go2').textContent='▶ Starta'});
    $.querySelector('#go2').onclick=e=>{if(timer){clearInterval(timer);timer=null;e.target.textContent='▶ Starta';return}
      e.target.textContent='⏸ Stopp';timer=setInterval(()=>{s--;show();if(s<=0){clearInterval(timer);timer=null;$.querySelector('#mwv').innerHTML=microwave('PLING!','klar 🎉');e.target.textContent='▶ Starta';s=60}},1000)};
  }
}

function startLvl(){
  const l=S.lvl,qs=[],seen=new Set();
  for(let k=0;qs.length<PER&&k<200;k++){const q=l.gen();const key=q.p+(q.svg||q.html||'');if(seen.has(key)&&k<150)continue;seen.add(key);
    qs.push(prep(q))}
  go('clockQuiz',{cq:{qs,i:0,p:null,a:[],help:false}});
}
function clockQuiz(){
  const Q=S.cq,c=Q.qs[Q.i],n=Q.qs.length,ans=Q.p!==null,good=ans&&c.opts[Q.p].ok;
  $.innerHTML=`<header><button class="back" id="bk">✕</button><h1>${S.lvl.em} Hinder ${S.lvl.n}</h1></header>
  <div class="qnum">Fråga ${Q.i+1} av ${n}</div><div class="progress"><i style="width:${(Q.i+(ans?1:0))/n*100}%"></i></div>
  <div class="q">${c.p}</div>
  ${c.svg?`<div style="margin-bottom:12px">${c.svg}</div>`:''}${c.html?`<div style="margin-bottom:12px">${c.html}</div>`:''}
  ${c.opts.map((o,j)=>`<button class="opt ${ans?(o.ok?'ok':j===Q.p?'bad':''):''}" data-j="${j}" ${ans?'disabled':''}>${esc(o.t)}</button>`).join('')}
  ${!ans?`<button class="btn ghost" id="hlp">💡 Visa hjälp</button>${Q.help?`<div class="card helpbox" style="margin-top:10px">${HELP[S.lvl.help]}</div>`:''}`:''}
  ${ans?`<div class="fb ${good?'ok':'bad'}">${good?pick(['✅ Rätt! Snyggt hopp! 🐴','✅ Rätt! Felfri runda!','✅ Rätt! Bra jobbat!']):'💛 Nästan! Rivning – vi tar det igen.'} ${esc(c.e)}</div><button class="btn" id="nx">${Q.i+1<n?'Nästa →':'Se din rosett 🏆'}</button>`:''}`;
  $.querySelector('#bk').onclick=()=>go('clockLearn');
  const h=$.querySelector('#hlp');if(h)h.onclick=()=>{Q.help=!Q.help;render()};
  $.querySelectorAll('[data-j]').forEach(b=>b.onclick=()=>{if(Q.p!==null)return;Q.p=+b.dataset.j;const o=c.opts[Q.p];
    Q.a.push({q:c.p,chosen:o.t,correct:c.opts.find(x=>x.ok).t,ok:o.ok});
    if(!o.ok&&Q.qs.length<PER+4){Q.qs.push(prep(S.lvl.gen()))}
    render()});
  const nx=$.querySelector('#nx');if(nx)nx.onclick=()=>{if(Q.i+1<Q.qs.length){Q.i++;Q.p=null;Q.help=false;render();scrollTo(0,0)}else clockFinish()};
}
function clockFinish(){
  const Q=S.cq,first=Q.a.slice(0,PER),s=first.filter(a=>a.ok).length;Q.s=s;
  const P=prog();if(P[S.lvl.id]==null||s>P[S.lvl.id]){P[S.lvl.id]=s;store('klocka',P)}
  go('clockDone');
}
function clockDone(){
  const Q=S.cq,s=Q.s,r=rosett(s),nextL=LEVELS[S.lvl.n];
  $.innerHTML=`<header><button class="back" id="bk">←</button><h1>${S.lvl.em} ${S.lvl.title}</h1></header>
  <div class="card score"><div style="font-size:4rem">${r}</div><div class="n">${s} / ${PER}</div>
  <p style="font-weight:800">${s>=7?'Felfri runda nästan! Du är en klockstjärna! 🌟':s>=5?'Bra ritt! Kör en gång till för guld 🥇':'Bra kämpat! Varje gång du övar blir det lättare 💛'}</p></div>
  <button class="btn" id="send">📤 Skicka till pappa</button><p class="small muted" id="sent" style="text-align:center"></p>
  <div class="row"><button class="btn ghost" id="ag">🔁 En gång till</button>${nextL&&s>=5?`<button class="btn" id="nl">Nästa hinder →</button>`:''}</div>`;
  $.querySelector('#bk').onclick=()=>go('clockHome');
  $.querySelector('#ag').onclick=startLvl;
  const nl=$.querySelector('#nl');if(nl)nl.onclick=()=>go('clockLearn',{lvl:nextL});
  $.querySelector('#send').onclick=async()=>{const wrong=Q.a.filter(a=>!a.ok);
    const text=`🐴 Bella – Klockan, hinder ${S.lvl.n}: ${S.lvl.title}\n${r} ${s}/${PER} rätt`+(wrong.length?`\n\nÖva mer på:\n`+wrong.map(a=>`• ${a.q.replace(/<[^>]+>/g,'')}\n  Svarade: ${a.chosen} → Rätt: ${a.correct}`).join('\n'):'\n\nAlla rätt! 🌟');
    if(navigator.share){try{await navigator.share({text});$.querySelector('#sent').textContent='Skickat! 👍';return}catch(e){if(e.name==='AbortError')return}}
    location.href='sms:'+(/iPhone|iPad/.test(navigator.userAgent)?'&':'?')+'body='+encodeURIComponent(text)};
}

window.KLOCKA={for:['Bella'],levels:LEVELS,views:{clockHome,clockLearn,clockQuiz,clockDone},
  card(){const P=prog(),done=LEVELS.filter(l=>P[l.id]>=5).length;
    return `<button class="lesson" id="klocka" style="border:2px solid var(--accent)"><span class="ic">🐴</span><span><span class="t">Lär dig klockan</span><br><span class="m">Hästar & ridhus · ${LEVELS.length} hinder</span></span><span class="badge ${done===LEVELS.length?'good':''}">${done}/${LEVELS.length} 🏆</span></button>`}};
})();
