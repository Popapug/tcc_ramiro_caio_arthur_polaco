// --------- USUÁRIOS / LOGIN ---------
const uM = {
  'ramiro@admin.com': {
    n:'Ramiro',
    f:'Admin',
    c:'Sala 07',
    p:'022.876.543-21',
    m:'00000001',
    a:'🧑‍💼'
  },
  'caio@aluno.com': {
    n:'Caio',
    f:'Aluno',
    c:'Sala 07',
    p:'123.456.789-10',
    m:'00000002',
    a:'👨‍🎓'
  }
};
const aE = Object.keys(uM);

let lg = false;    // logado?
let cu = null;     // email usuário atual

// DOM base
const nB = document.querySelectorAll('.nav-btn');
const pL = document.querySelectorAll('.panel');

const lF = document.getElementById('loginForm');
const lM = document.getElementById('loginMessage');

const uN = document.getElementById('userName');
const uR = document.getElementById('userRole');
const uC = document.getElementById('userClass');
const uP = document.getElementById('userCpf');
const uMt = document.getElementById('userMat');
const uA = document.getElementById('userAvatar');

const lOut = document.getElementById('logoutBtn');

// --------- FUNÇÕES GERAIS ---------
function fnP(id){
  if(!pL.length) return;
  pL.forEach(p => p.classList.remove('active'));
  const tg = document.getElementById(id);
  if(tg) tg.classList.add('active');

  nB.forEach(b => b.classList.remove('active'));
  const bt = Array.from(nB).find(b => b.dataset.panel === id);
  if(bt) bt.classList.add('active');

  window.scrollTo({top:0, behavior:'smooth'});
}

function fnA(){
  return lg && cu && uM[cu] && uM[cu].f === 'Admin';
}

function fnPf(em){
  const d = uM[em];
  if(!d || !uN) return;
  cu = em;
  lg = true;
  uN.textContent = d.n;
  uR.textContent = d.f;
  uC.textContent = d.c;
  uP.textContent = d.p;
  uMt.textContent = d.m;
  uA.textContent = d.a;
}

function fnCl(){
  cu = null;
  lg = false;
  if(!uN) return;
  uN.textContent = 'Usuário';
  uR.textContent = '-';
  uC.textContent = '-';
  uP.textContent = '-';
  uMt.textContent = '-';
  uA.textContent = '👨‍🎓';
}

// --------- TAREFAS (dados) ---------
let tL = [
  {
    i:1,
    t:'Relatório sobre Revolução Francesa',
    d:'Entregar um relatório de 3 páginas sobre a Revolução Francesa.',
    p:'2025-12-20',
    s:'História',
    c:false
  },
  {
    i:2,
    t:'Exercícios de Equações',
    d:'Resolver os exercícios da página 45 a 50 do livro.',
    p:'2025-12-15',
    s:'Matemática',
    c:false
  },
  {
    i:3,
    t:'Mapa do Brasil',
    d:'Criar um mapa com as regiões do Brasil.',
    p:'2025-12-18',
    s:'Geografia',
    c:false
  },
  {
    i:4,
    t:'Redação',
    d:'Escreva um texto dissertativo-argumentativo sobre o envelhecimento no Brasil.',
    p:'2025-12-18',
    s:'Português',
    c:false
  },
  {
    i:5,
    t:'Task 05',
    d:'Complete: "She ___ to the gym every morning".',
    p:'2025-12-18',
    s:'Inglês',
    c:false
  },
  {
    i:6,
    t:'Atividade de Biologia',
    d:'Resolver as páginas 100 a 105 do livro.',
    p:'2025-12-18',
    s:'Biologia',
    c:false
  }
];

// DOM tarefas
const tBoxP = document.getElementById('tPend');
const tBoxC = document.getElementById('tConc');
const tAdm = document.getElementById('tAdmBox');
const tFm = document.getElementById('tForm');
const tTi = document.getElementById('tTit');
const tPr = document.getElementById('tPrazo');
const tMtI = document.getElementById('tMat');
const tDs = document.getElementById('tDesc');

// --------- MATERIAIS ---------
const mL = [
  {
    i:'hist',
    t:'História',
    p:'Prof. Manoel',
    d:'Acontecimentos que moldaram o mundo moderno e a história do Brasil.',
    r:[
      {tp:'PDF', lb:'Linha do tempo: Revoluções', u:'#'},
      {tp:'Resumo', lb:'Revolução Francesa - 1 página', u:'#'}
    ]
  },
  {
    i:'geo',
    t:'Geografia',
    p:'Prof. Juliano',
    d:'Clima, relevo, vegetação e dinâmica populacional.',
    r:[
      {tp:'Mapa', lb:'Mapas das Regiões do Brasil', u:'#'},
      {tp:'Exercício', lb:'Questões sobre clima e vegetação', u:'#'}
    ]
  },
  {
    i:'mat',
    t:'Matemática',
    p:'Profa. Franciele',
    d:'Álgebra e geometria analítica com exercícios resolvidos.',
    r:[
      {tp:'Exercícios', lb:'Equações e Inequações - resolvidas', u:'#'},
      {tp:'Guia', lb:'Técnicas de resolução rápida', u:'#'}
    ]
  },
  {
    i:'bio',
    t:'Biologia',
    p:'Prof. Massao',
    d:'Ecologia, citologia e genética.',
    r:[
      {tp:'Slides', lb:'Citologia - esquema prático', u:'#'},
      {tp:'Atividade', lb:'Experimento: observando células', u:'#'}
    ]
  },
  {
    i:'qui',
    t:'Química',
    p:'Prof. Robert',
    d:'Química geral, ligações químicas e estequiometria.',
    r:[
      {tp:'Tabela', lb:'Tabela periódica comentada', u:'#'},
      {tp:'Exercícios', lb:'Estequiometria - gabarito', u:'#'}
    ]
  },
  {
    i:'fis',
    t:'Física',
    p:'Prof. Israel',
    d:'Mecânica básica e termodinâmica.',
    r:[
      {tp:'Resumo', lb:'Leis de Newton - resumo', u:'#'},
      {tp:'Problemas', lb:'Exercícios de cinemática', u:'#'}
    ]
  },
  {
    i:'ing',
    t:'Inglês',
    p:'Prof. Thiago',
    d:'Conversação e compreensão de texto.',
    r:[
      {tp:'Áudio', lb:'Listening: rotina diária', u:'#'},
      {tp:'Lista', lb:'Phrasal verbs essenciais', u:'#'}
    ]
  },
  {
    i:'edf',
    t:'Educação Física',
    p:'Prof. Sérgio',
    d:'Treinos, saúde e jogos coletivos.',
    r:[
      {tp:'Ficha', lb:'Treino: resistência aeróbica', u:'#'},
      {tp:'Guia', lb:'Aquecimento e alongamento', u:'#'}
    ]
  },
  {
    i:'prt',
    t:'Português',
    p:'Prof. Tarik',
    d:'Ortografia, morfologia e redação.',
    r:[
      {tp:'Modelo', lb:'Modelo de redação - estrutura', u:'#'},
      {tp:'Exercícios', lb:'Interpretação de texto', u:'#'}
    ]
  }
];

const mG = document.getElementById('materialsGrid');
const bVM = document.getElementById('btnVerMaterias');
const bBM = document.getElementById('btnVoltarMaterias');

// --------- CHAT ---------
const cW = document.getElementById('ctBox');
const cN = document.getElementById('ctName');
const cL = document.getElementById('ctLog');
const cF = document.getElementById('ctForm');
const cT = document.getElementById('ctTxt');
const cX = document.getElementById('ctClose');

let cCur = null;          // email do contato atual
const cMap = {};          // email -> lista de msgs

// --------- UI DE PAPEL (ADMIN/ALUNO) ---------
function fnRU(){
  if(tAdm){
    tAdm.style.display = fnA() ? 'block' : 'none';
  }
  fnRT();
}

// --------- NAVEGAÇÃO ---------
if(nB.length){
  nB.forEach(btn => {
    btn.addEventListener('click', () => {
      const pId = btn.dataset.panel;
      if(!lg && pId !== 'login'){
        if(lM){
          lM.style.color = '#7a1e1e';
          lM.textContent = 'Faça login para acessar o painel.';
        }
        fnP('login');
        return;
      }
      fnP(pId);
    });
  });
}

// --------- LOGIN ---------
if(lF){
  lF.addEventListener('submit', e => {
    e.preventDefault();
    const eI = document.getElementById('email');
    const pI = document.getElementById('password');
    const em = eI.value.trim().toLowerCase();
    const pw = pI.value;

    if(lM) lM.textContent = '';

    if(!aE.includes(em)){
      if(lM){
        lM.style.color = '#7a1e1e';
        lM.textContent = 'Email não autorizado.';
      }
      return;
    }

    if(pw !== '1234'){
      if(lM){
        lM.style.color = '#7a1e1e';
        lM.textContent = 'Senha incorreta.';
      }
      return;
    }

    fnPf(em);
    localStorage.setItem('usuarioLogado', em);

    if(lM){
      lM.style.color = '#1a5f1a';
      lM.textContent = 'Login realizado com sucesso!';
    }

    fnRU();
    fnP('meuPerfil');
  });
}

// --------- LOGOUT ---------
if(lOut){
  lOut.addEventListener('click', () => {
    localStorage.removeItem('usuarioLogado');
    fnCl();
    const eI = document.getElementById('email');
    const pI = document.getElementById('password');
    if(eI) eI.value = '';
    if(pI) pI.value = '';
    if(lM) lM.textContent = '';
    fnRU();
    fnP('login');
  });
}

// --------- TAREFAS (render) ---------
function tgCls(s){
  if(!s) return 'geo';
  const v = s.toLowerCase();
  if(v.includes('hist')) return 'history';
  if(v.includes('mat')) return 'math';
  return 'geo';
}

function fnRT(){
  if(!tBoxP || !tBoxC) return;
  tBoxP.innerHTML = '';
  tBoxC.innerHTML = '';

  tL.forEach(t => {
    const cd = document.createElement('article');
    cd.className = 'activity-card';
    if(t.c) cd.classList.add('completed');
    cd.dataset.id = String(t.i);

    const tl = document.createElement('div');
    tl.className = 'activity-title';
    tl.textContent = t.t;

    const mt = document.createElement('div');
    mt.className = 'activity-meta';
    const spD = document.createElement('span');
    spD.textContent = 'Prazo: ' + t.p + ' • ';
    const tg = document.createElement('span');
    tg.className = 'tag ' + tgCls(t.s);
    tg.textContent = t.s;
    mt.appendChild(spD);
    mt.appendChild(tg);

    const ds = document.createElement('p');
    ds.textContent = t.d;

    cd.appendChild(tl);
    cd.appendChild(mt);
    cd.appendChild(ds);

    const bw = document.createElement('div');
    bw.className = 'act-btns';

    if(lg){
      const btT = document.createElement('button');
      btT.type = 'button';
      btT.className = 'btn btn-small t-toggle';
      btT.textContent = t.c ? 'Desfazer' : 'Concluir';
      bw.appendChild(btT);
    }

    if(fnA()){
      const btD = document.createElement('button');
      btD.type = 'button';
      btD.className = 'btn-sec btn-small t-del';
      btD.textContent = 'Remover';
      bw.appendChild(btD);
    }

    if(bw.children.length) cd.appendChild(bw);

    (t.c ? tBoxC : tBoxP).appendChild(cd);
  });
}

// Eventos de clique em tarefas (concluir / desconcluir / remover)
function fnTC(ev){
  const el = ev.target;
  const cd = el.closest('.activity-card');
  if(!cd) return;
  const id = parseInt(cd.dataset.id, 10);
  const ix = tL.findIndex(x => x.i === id);
  if(ix === -1) return;

  if(el.classList.contains('t-toggle')){
    if(!lg) return;
    tL[ix].c = !tL[ix].c;
    fnRT();
  }else if(el.classList.contains('t-del')){
    if(!fnA()) return;
    tL.splice(ix,1);
    fnRT();
  }
}

if(tBoxP){
  tBoxP.addEventListener('click', fnTC);
}
if(tBoxC){
  tBoxC.addEventListener('click', fnTC);
}

// Admin adiciona tarefas
if(tFm){
  tFm.addEventListener('submit', e => {
    e.preventDefault();
    if(!fnA()) return;

    const ti = tTi.value.trim();
    const pr = tPr.value.trim();
    const mt = tMtI.value.trim();
    const ds = tDs.value.trim();

    if(!ti || !pr || !mt || !ds) return;

    const id = Date.now();
    tL.push({
      i:id,
      t:ti,
      d:ds,
      p:pr,
      s:mt,
      c:false
    });

    tTi.value = '';
    tPr.value = '';
    tMtI.value = '';
    tDs.value = '';

    fnRT();
  });
}

// --------- MATERIAIS (render) ---------
function fnRM(){
  if(!mG) return;
  mG.innerHTML = '';

  mL.forEach(m => {
    const cd = document.createElement('div');
    cd.className = 'material-card';

    const tt = document.createElement('h4');
    tt.textContent = m.t + ' • ' + m.p;

    const ds = document.createElement('p');
    ds.className = 'material-meta';
    ds.textContent = m.d;

    const rs = document.createElement('div');
    rs.className = 'material-resources';

    m.r.forEach(r => {
      const a = document.createElement('a');
      a.href = r.u;
      a.textContent = `• [${r.tp}] ${r.lb}`;
      a.style.display = 'block';
      a.style.marginTop = '6px';
      rs.appendChild(a);
    });

    cd.appendChild(tt);
    cd.appendChild(ds);
    cd.appendChild(rs);

    mG.appendChild(cd);
  });
}

if(bVM){
  bVM.addEventListener('click', () => {
    if(!lg){
      if(lM){
        lM.style.color = '#7a1e1e';
        lM.textContent = 'Faça login para acessar o material.';
      }
      fnP('login');
      return;
    }
    fnRM();
    fnP('materiasTodos');
  });
}

if(bBM){
  bBM.addEventListener('click', () => {
    fnP('materias');
  });
}

// --------- CHAT ---------
function fnRC(){
  if(!cL || !cCur) return;
  cL.innerHTML = '';
  const ls = cMap[cCur] || [];
  ls.forEach(m => {
    const dv = document.createElement('div');
    dv.className = 'chat-msg me';
    dv.textContent = m.t;
    cL.appendChild(dv);
  });
  cL.scrollTop = cL.scrollHeight;
}

function fnOC(em, nm){
  if(!cW || !cN) return;
  cCur = em;
  cN.textContent = nm;
  if(!cMap[cCur]) cMap[cCur] = [];
  fnRC();
  cW.classList.add('open');
}

if(cX){
  cX.addEventListener('click', () => {
    if(cW) cW.classList.remove('open');
    cCur = null;
  });
}

if(cF){
  cF.addEventListener('submit', e => {
    e.preventDefault();
    if(!cCur) return;
    const tx = cT.value.trim();
    if(!tx) return;
    if(!cMap[cCur]) cMap[cCur] = [];
    cMap[cCur].push({t:tx});
    cT.value = '';
    fnRC();
  });
}

// Clique nos contatos
const mCt = document.querySelectorAll('.member');
if(mCt.length){
  mCt.forEach(mc => {
    mc.addEventListener('click', () => {
      if(!lg){
        if(lM){
          lM.style.color = '#7a1e1e';
          lM.textContent = 'Faça login para usar o chat.';
        }
        fnP('login');
        return;
      }
      const em = mc.dataset.email;
      const nm = mc.dataset.name;
      if(!em || em === cu) return; // não abre chat consigo mesmo
      fnOC(em,nm);
    });
  });
}

// --------- AUTO LOGIN ---------
(function(){
  const sv = localStorage.getItem('usuarioLogado');
  if(sv && aE.includes(sv)){
    fnPf(sv);
    fnRU();
    fnP('meuPerfil');
  }else{
    fnP('login');
  }
})();