
function getWorksheetFitClass(problems = [], worksheetType = "") {
  const joinedText = problems.map(p => String(p.text || p.question || p.problem || p)).join(" ");
  const longestProblem = problems.reduce((max, p) => {
    const text = String(p.text || p.question || p.problem || p);
    return Math.max(max, text.length);
  }, 0);
  const typeText = String(worksheetType || "").toLowerCase();
  const isWordHeavy =
    longestProblem > 70 ||
    joinedText.length > 520 ||
    /ratio|rate|proportion|percent|word|coordinate|expression|equation|geometry|slope|pythagorean|system/.test(typeText);
  return isWordHeavy ? " compact-worksheet word-problem-page" : " compact-worksheet";
}

const $ = (id) => document.getElementById(id);

const types = {
  k: [
    ['counting','Counting Objects','Counting','Count each group and write the number.'],
    ['numberOrder','Number Order','Numbers','Fill in the missing numbers.'],
    ['simpleAddition','Simple Addition Within 10','Addition','Add the numbers.']
  ],
  1: [
    ['addWithin20','Addition Within 20','Addition','Solve each addition problem.'],
    ['subWithin20','Subtraction Within 20','Subtraction','Solve each subtraction problem.'],
    ['mixedWithin20','Mixed Addition & Subtraction','Mixed Practice','Add or subtract carefully.']
  ],
  2: [
    ['addWithin100','Addition Within 100','Addition','Solve each problem. Show your work if needed.'],
    ['subWithin100','Subtraction Within 100','Subtraction','Solve each problem. Regroup when needed.'],
    ['wordProblems2','Grade 2 Word Problems','Word Problems','Read each problem carefully. Write the answer with a label.'],
    ['placeValue2','Place Value to 100','Place Value','Identify tens, ones, or expanded form.']
  ],
  3: [
    ['multiplicationFacts','Multiplication Facts','Multiplication','Solve each multiplication fact.'],
    ['divisionFacts','Division Facts','Division','Solve each division fact.'],
    ['wordProblems3','Grade 3 Word Problems','Word Problems','Read carefully and show your thinking.']
  ],
  4: [
    ['multiDigitMultiply','Multi-Digit Multiplication','Multiplication','Multiply. Use the work space to show steps.'],
    ['longDivision','Division Practice','Division','Divide and write the quotient.'],
    ['fractions4','Fractions Practice','Fractions','Solve each fraction question.'],
    ['areaPerimeter','Area & Perimeter','Geometry','Find the area or perimeter.']
  ],
  5: [
    ['decimalOperations','Decimal Operations','Decimals','Solve each decimal problem.'],
    ['fractions5','Fraction Operations','Fractions','Solve and simplify when possible.'],
    ['orderOperations','Order of Operations','Expressions','Use the correct order of operations.'],
    ['wordProblems5','Grade 5 Word Problems','Word Problems','Solve each multi-step problem.']
  ],
  6: [
    ['ratios','Ratios & Unit Rates','Ratios','Solve each ratio or unit rate question.'],
    ['percents','Percent Practice','Percents','Find the percent, part, or whole.'],
    ['integers','Integer Operations','Integers','Add, subtract, multiply, or divide integers.'],
    ['expressions6','Evaluate Expressions','Expressions','Substitute the value and evaluate.'],
    ['coordinatePlane','Coordinate Plane','Graphing','Identify coordinates or find distance on a grid.']
  ],
  7: [
    ['proportions','Proportions','Proportions','Solve each proportion.'],
    ['twoStepEquations','Two-Step Equations','Algebra','Solve for x. Show inverse operations.'],
    ['percentChange','Percent Change','Percents','Find percent increase or decrease.'],
    ['rationalNumbers','Rational Number Operations','Rational Numbers','Solve with fractions, decimals, or integers.'],
    ['geometry7','Circle Geometry','Geometry','Use formulas to solve each geometry problem.']
  ],
  8: [
    ['linearEquations','Linear Equations','Algebra','Solve for x.'],
    ['slope','Slope Practice','Linear Relationships','Find the slope between two points.'],
    ['pythagorean','Pythagorean Theorem','Geometry','Find the missing side length.'],
    ['exponents','Exponent Rules','Exponents','Simplify each expression.'],
    ['systemsIntro','Systems of Equations Intro','Algebra','Solve the simple system.']
  ]
};

let problems = [];
let pages = [];
let cur = 0;
let all = true;

const esc = (s) => String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'","&#039;");
const r = (a,b) => Math.floor(Math.random() * (b-a+1)) + a;
const ch = (a) => a[r(0,a.length-1)];

function gcd(a,b){ a=Math.abs(a); b=Math.abs(b); while(b){ const t=b; b=a%b; a=t; } return a || 1; }
function simp(n,d){ const g=gcd(n,d); n/=g; d/=g; if(d<0){n=-n; d=-d;} return d===1 ? `${n}` : `${n}/${d}`; }
function grade(g){ return g === 'k' ? 'Kindergarten' : `Grade ${g}`; }
function selectedGrade(){ return String($('gradeLevel').value || '2'); }
function gradeTypes(){ return types[selectedGrade()] || types['2']; }
function cfg(){ const t=$('worksheetType').value; return gradeTypes().find(x => x[0] === t) || gradeTypes()[0]; }

function updateTypes(){
  const list = gradeTypes();
  $('worksheetType').innerHTML = list.map(x => `<option value="${x[0]}">${x[1]}</option>`).join('');
  $('worksheetType').value = list[0][0];
  $('worksheetTitle').value = `${grade(selectedGrade())} ${list[0][1]}`;
}

function high(base){ const d=$('difficulty').value; return d==='easy' ? base : d==='challenge' ? Math.floor(base*1.9) : Math.floor(base*1.35); }

function prob(type){
  let a,b,c,ans,text,label='answer';
  if(type==='counting'){ ans=r(1,high(10)); text=Array.from({length:ans},()=>ch(['●','★','■','♥','▲'])).join(' '); label='objects'; }
  else if(type==='numberOrder'){ a=r(1,40); b=r(1,3); const seq=[a,a+1,a+2,a+3]; ans=seq[b]; seq[b]='___'; text=seq.join(', '); label='missing number'; }
  else if(['simpleAddition','addWithin20','addWithin100'].includes(type)){ const max=type==='addWithin100'?100:type==='addWithin20'?20:10; a=r(1,high(max)); b=r(1,high(max)); ans=a+b; text=`${a} + ${b} =`; label='sum'; }
  else if(['subWithin20','subWithin100'].includes(type)){ const max=type==='subWithin100'?100:20; a=r(1,high(max)); b=r(1,a); ans=a-b; text=`${a} − ${b} =`; label='difference'; }
  else if(type==='mixedWithin20') return prob(Math.random()>.5?'addWithin20':'subWithin20');
  else if(type==='placeValue2'){ const n=r(10,$('difficulty').value==='challenge'?999:99), kind=ch(['tens','ones','expanded']); if(kind==='tens'){ ans=Math.floor((n%100)/10); text=`How many tens are in ${n}?`; } else if(kind==='ones'){ ans=n%10; text=`How many ones are in ${n}?`; } else { ans=[Math.floor(n/100)*100,Math.floor((n%100)/10)*10,n%10].filter(Boolean).join(' + '); text=`Write ${n} in expanded form.`; } }
  else if(type==='multiplicationFacts'){ a=r(2,Math.min(12,high(10))); b=r(2,Math.min(12,high(10))); ans=a*b; text=`${a} × ${b} =`; label='product'; }
  else if(type==='divisionFacts'){ b=r(2,$('difficulty').value==='challenge'?12:10); c=r(2,$('difficulty').value==='challenge'?12:10); a=b*c; ans=c; text=`${a} ÷ ${b} =`; label='quotient'; }
  else if(type==='multiDigitMultiply'){ a=r(12,$('difficulty').value==='challenge'?999:99); b=r(2,$('difficulty').value==='challenge'?99:12); ans=a*b; text=`${a} × ${b} =`; label='product'; }
  else if(type==='longDivision'){ b=r(2,$('difficulty').value==='challenge'?25:12); c=r(10,$('difficulty').value==='challenge'?80:40); a=b*c; ans=c; text=`${a} ÷ ${b} =`; label='quotient'; }
  else if(type==='fractions4'){ const d=r(3,12); a=r(1,d-1); b=r(1,d-a); ans=simp(a+b,d); text=`${a}/${d} + ${b}/${d} =`; label='fraction'; }
  else if(type==='fractions5'){ const d=r(3,12); a=r(1,d-1); b=r(1,d-1); ans=simp(a*b,d*d); text=`${a}/${d} × ${b}/${d} =`; label='fraction'; }
  else if(type==='areaPerimeter'){ const w=r(3,18), h=r(3,18), area=Math.random()>.5; ans=area?`${w*h} square units`:`${2*(w+h)} units`; text=`A rectangle is ${w} units by ${h} units. Find the ${area?'area':'perimeter'}.`; }
  else if(type==='decimalOperations'){ a=(r(10,900)/10).toFixed(1); b=(r(10,900)/10).toFixed(1); const add=Math.random()>.5; ans=add?(+a+ +b).toFixed(1):(Math.max(+a,+b)-Math.min(+a,+b)).toFixed(1); text=add?`${a} + ${b} =`:`${Math.max(+a,+b).toFixed(1)} − ${Math.min(+a,+b).toFixed(1)} =`; }
  else if(type==='orderOperations'){ a=r(2,12); b=r(2,12); c=r(2,12); ans=a+b*c; text=`${a} + ${b} × ${c} =`; }
  else if(type.startsWith('wordProblems')) return word(type);
  else if(type==='ratios'){ a=r(2,12); b=r(2,12); c=r(2,5); ans=`${a*c}:${b*c}`; text=`A recipe uses ${a} cups of flour for every ${b} cups of sugar. What is an equivalent ratio multiplied by ${c}?`; label='ratio'; }
  else if(type==='percents'){ a=ch([10,20,25,30,40,50,60,75]); b=r(20,200); ans=(a*b/100).toFixed((a*b)%100?1:0); text=`What is ${a}% of ${b}?`; label='value'; }
  else if(type==='integers'){ a=r(-20,20); b=r(-20,20); const op=ch(['+','−','×']); ans=op==='+'?a+b:op==='−'?a-b:a*b; text=`${a} ${op} ${b} =`; label='integer'; }
  else if(type==='expressions6'){ a=r(2,12); b=r(1,20); c=r(1,12); ans=a*c+b; text=`Evaluate ${a}x + ${b} when x = ${c}.`; label='value'; }
  else if(type==='coordinatePlane'){ a=r(-8,8); b=r(-8,8); c=r(-8,8); ans=Math.abs(c-a); text=`Points A(${a}, ${b}) and B(${c}, ${b}) are on a coordinate plane. What is the distance AB?`; label='units'; }
  else if(type==='proportions'){ a=r(2,12); b=r(2,12); c=r(2,9); ans=b*c; text=`Solve: ${a}/${b} = ${a*c}/x`; label='x'; }
  else if(type==='twoStepEquations'){ a=r(2,9); ans=r(2,15); b=r(1,20); c=a*ans+b; text=`Solve for x: ${a}x + ${b} = ${c}`; label='x'; }
  else if(type==='percentChange'){ a=r(20,150); const pct=ch([10,20,25,30,40,50]); const inc=Math.random()>.5; ans=(inc?a*(1+pct/100):a*(1-pct/100)).toFixed(2).replace(/\.00$/,''); text=`A price of $${a} ${inc?'increases':'decreases'} by ${pct}%. What is the new price?`; label='new price'; }
  else if(type==='rationalNumbers'){ a=r(-12,12); b=r(-12,12); const op=ch(['+','−','×']); ans=op==='+'?a+b:op==='−'?a-b:a*b; text=`${a} ${op} ${b} =`; label='value'; }
  else if(type==='geometry7'){ const radius=r(2,12); ans=`${(3.14*radius*radius).toFixed(2)} square units`; text=`Find the area of a circle with radius ${radius}. Use π = 3.14.`; label='area'; }
  else if(type==='linearEquations'){ a=r(2,10); ans=r(-10,15); b=r(-20,20); c=a*ans+b; text=`Solve: ${a}x ${b>=0?'+':'−'} ${Math.abs(b)} = ${c}`; label='x'; }
  else if(type==='slope'){ const x1=r(-8,4), y1=r(-8,4), m=r(-5,5)||2, x2=x1+r(1,6), y2=y1+m*(x2-x1); ans=m; text=`Find the slope between (${x1}, ${y1}) and (${x2}, ${y2}).`; label='slope'; }
  else if(type==='pythagorean'){ const t=ch([[3,4,5],[5,12,13],[6,8,10],[8,15,17],[7,24,25]]); ans=t[2]; text=`A right triangle has legs ${t[0]} and ${t[1]}. Find the hypotenuse.`; label='hypotenuse'; }
  else if(type==='exponents'){ a=r(2,9); b=r(2,5); c=r(2,4); ans=`${a}^${b+c}`; text=`Simplify: ${a}^${b} × ${a}^${c}`; label='simplified'; }
  else if(type==='systemsIntro'){ const x=r(-5,8), y=r(-5,8), sum=x+y, diff=x-y; ans=`x = ${x}, y = ${y}`; text=`Solve the system: x + y = ${sum}, x − y = ${diff}`; label='solution'; }
  else return prob('addWithin20');
  return { text, answer: ans, label };
}

function word(type){ const names=['Mia','Leo','Ava','Noah','Lily','Ethan'], objs=['stickers','pencils','apples','books','marbles']; if(type==='wordProblems2'){ const a=r(12,50), b=r(5,40), add=Math.random()>.5, o=ch(objs); return {text:add?`${ch(names)} has ${a} ${o}. A friend gives ${b} more. How many are there now?`:`${ch(names)} has ${a} ${o} and gives away ${Math.min(b,a)}. How many are left?`, answer:add?a+b:a-Math.min(b,a), label:'items'}; } if(type==='wordProblems3'){ const g=r(3,9), e=r(4,12), o=ch(objs); return {text:`${ch(names)} packs ${g} bags with ${e} ${o} in each bag. How many are there in all?`, answer:g*e, label:'items'}; } const p=r(4,12), e=r(8,25), x=r(15,80); return {text:`A class has ${p} boxes with ${e} markers in each box. They also have ${x} extra markers. How many markers are there altogether?`, answer:p*e+x, label:'markers'}; }

function make(){ problems=Array.from({length:+$('questionCount').value},()=>prob($('worksheetType').value)); cur=0; render(); }
function header(title,c){ const today=new Date().toLocaleDateString(); return `<div class="worksheet-header"><div class="title-row"><h2>${esc(title)}</h2><span class="skill-badge">${esc(c[2])}</span></div><div class="student-row"><div>Name:<div class="student-line">${esc($('studentName').value||'')}</div></div><div>Date:<div class="student-line">${today}</div></div><div>Grade:<div class="student-line">${esc(grade(selectedGrade()))}</div></div></div></div>`; }
function work(){ return $('showWorkSpace').checked ? `<div class="work-space"><span></span><span></span></div>` : ''; }

function render(){
  const c=cfg(), title=$('worksheetTitle').value.trim()||c[1], per=$('pageSize').value==='a5'?8:12, out=[];
  for(let i=0;i<problems.length;i+=per){
    const chunk=problems.slice(i,i+per);
    out.push(`<article class="page worksheet-page">${header(title,c)}<div class="instructions">${esc(c[3])}</div><div class="problem-grid">${chunk.map((p,j)=>`<div class="problem-card"><div class="problem-number">Problem ${i+j+1}</div><div class="problem-text">${esc(p.text)}</div><div class="answer-line"></div>${work()}</div>`).join('')}</div><div class="footer-note">Generated with Just Pages Studio</div></article>`);
  }
  if($('includeAnswerKey').checked){
    out.push(`<article class="page answer-key-page">${header(title+' — Answer Key',c)}<div class="instructions">Use this answer key to check the worksheet.</div><div class="answer-key-list">${problems.map((p,i)=>`<div>${i+1}. ${esc(p.answer)} <span class="answer-label">${esc(p.label||'')}</span></div>`).join('')}</div><div class="footer-note">Generated with Just Pages Studio</div></article>`);
  }
  pages=out; cur=Math.min(cur,pages.length-1);
  const prev=$('worksheetPreview');
  prev.className=`worksheet-preview theme-${$('themeStyle').value} ${$('pageSize').value}-size ${all?'':'single-page-only'}`;
  prev.innerHTML=pages.map((p,i)=>p.replace('class="page ',`class="page ${i===cur?'active-page':''} `)).join('');
  $('previewTitle').textContent=title;
  $('worksheetInfo').innerHTML=`<div><span>Grade</span><strong>${esc(grade(selectedGrade()))}</strong></div><div><span>Skill</span><strong>${esc(c[2])}</strong></div><div><span>Questions</span><strong>${problems.length}</strong></div><div><span>Pages</span><strong>${pages.length}</strong></div><div><span>Answer key</span><strong>${$('includeAnswerKey').checked?'Included':'Off'}</strong></div>`;
  $('pageIndicator').textContent=all?`Viewing all • ${pages.length} pages`:`Page ${cur+1} of ${pages.length}`;
  printSize();
}

function printSize(){ const sizes={letter:'8.5in 11in',a4:'8.27in 11.69in',a5:'5.83in 8.27in'}; let s=document.getElementById('dynamicPrintPageSize'); if(!s){s=document.createElement('style'); s.id='dynamicPrintPageSize'; document.head.appendChild(s);} s.textContent=`@page{size:${sizes[$('pageSize').value]};margin:0}`; }
function sample(){ $('studentName').value='Taylor'; $('gradeLevel').value='7'; updateTypes(); $('worksheetType').value='twoStepEquations'; $('worksheetTitle').value='Grade 7 Two-Step Equations'; $('difficulty').value='medium'; $('questionCount').value='16'; $('themeStyle').value='colorful'; $('includeAnswerKey').checked=true; $('showWorkSpace').checked=true; make(); }

function init(){
  updateTypes();
  make();
  $('gradeLevel').addEventListener('change',()=>{ updateTypes(); make(); });
  $('worksheetType').addEventListener('change',()=>{ const c=cfg(); $('worksheetTitle').value=`${grade(selectedGrade())} ${c[1]}`; make(); });
  ['difficulty','questionCount'].forEach(id=>{ $(id).addEventListener('input',make); $(id).addEventListener('change',make); });
  ['studentName','worksheetTitle','pageSize','themeStyle','includeAnswerKey','showWorkSpace'].forEach(id=>{ $(id).addEventListener('input',render); $(id).addEventListener('change',render); });
  $('generateBtn').addEventListener('click',make);
  $('sampleBtn').addEventListener('click',sample);
  $('printBtn').addEventListener('click',()=>{printSize(); window.print();});
  $('prevPageBtn').addEventListener('click',()=>{all=false; cur=Math.max(0,cur-1); render();});
  $('nextPageBtn').addEventListener('click',()=>{all=false; cur=Math.min(pages.length-1,cur+1); render();});
  $('viewAllBtn').addEventListener('click',()=>{all=!all; $('viewAllBtn').textContent=all?'Single Page':'View All'; render();});
}

document.addEventListener('DOMContentLoaded',init);
