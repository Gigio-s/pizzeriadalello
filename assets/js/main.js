/* Pizzeria da Lello Le Fornaci - demo Studio Digital Italia
   Header e footer iniettati qui (funziona anche aprendo i file da disco). */
(function(){
'use strict';
var L = window.LELLO = window.LELLO || {};

/* Protezione anti-copia della demo: disattivata, ora e' il sito reale (02/11/2026). */
L.protect = false;
/* Strumenti sviluppatore (F12, Ctrl+Shift+I, tasto destro > Ispeziona) sbloccati per i test mobile.
   Rimettere false prima di mandare la demo al cliente. */
L.devtools = false;

L.info = {
  nome:'Pizzeria da Lello - Le Fornaci',
  tel:'0444 557751', telLink:'+390444557751',
  indirizzo:'Via Fornace, 19', citta:'36030 Costabissara (VI)',
  maps:'https://goo.gl/maps/xHmBJgUzRxz33J5g7',
  prenota:'https://www.octotable.com/book/restaurant/420578/welcome',
  ig:'https://www.instagram.com/lefornacidalello/',
  fb:'https://www.facebook.com/lefornacidalello',
  logo:'assets/img/sito/logo.png',
  societa:'Ugliano Raffaele & c. snc', piva:'02358710248',
  /* orari di apertura (da Google, 02/11/2026). Se cambiano, aggiornarli anche in index.html (sezione Dove siamo e dati strutturati) */
  orari:[['Lunedì','Chiuso'],['Martedì','Chiuso'],['Mercoledì','18:30 - 23:30'],['Giovedì','18:30 - 23:30'],['Venerdì','18:30 - 23:30'],['Sabato','18:30 - 23:30'],['Domenica','18:30 - 23:30']]
};

var I = {
  phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>',
  pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  ig:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
  fb:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
  menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9"/></svg>',
  cal:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  down:'<svg viewBox="0 0 24 24"><path d="M5 9l7 7 7-7"/></svg>'
};

function header(){
  var page=document.body.getAttribute('data-page')||'';
  var links=[['index.html','Home','home'],['menu.html','Menu','menu'],['index.html#storia','La storia',''],['index.html#prenota','Prenota',''],['index.html#dove','Dove siamo','']];
  var nav=links.map(function(l){ return '<a href="'+l[0]+'"'+(l[2]&&l[2]===page?' aria-current="page"':'')+'>'+l[1]+'</a>'; }).join('');
  return '<a class="skip" href="#main">Vai al contenuto</a>'+
  '<header class="hdr"><div class="wrap">'+
    '<a class="hdr-logo" href="index.html" aria-label="Pizzeria da Lello, torna alla home"><img src="assets/img/logo-lefornaci-dalello.png" alt="Le Fornaci da Lello" width="172" height="44"></a>'+
    '<nav class="nav" id="nav" aria-label="Menu principale">'+nav+'</nav>'+
    '<div class="hdr-cta">'+
      '<a class="ico-btn ig" href="'+L.info.ig+'" target="_blank" rel="noopener" aria-label="Seguici su Instagram @lefornacidalello">'+I.ig+'</a>'+
      '<a class="ico-btn" href="tel:'+L.info.telLink+'" aria-label="Chiama '+L.info.tel+'">'+I.phone+'</a>'+
      '<a class="btn btn-red" href="'+L.info.prenota+'" target="_blank" rel="noopener">Prenota</a>'+
      '<button class="burger" aria-label="Apri il menu" aria-controls="nav" aria-expanded="false"><span></span><span></span><span></span></button>'+
    '</div>'+
  '</div></header>';
}

function footer(){
  return '<footer class="ftr"><div class="wrap"><div class="ftr-grid">'+
    '<div><img class="ftr-logo" src="assets/img/logo-lello-chiaro-sm.webp" alt="Logo della Pizzeria da Lello Le Fornaci" width="120" height="138" loading="lazy">'+
      '<p style="margin-top:18px;max-width:300px;opacity:.85">La vera tradizione napoletana a Costabissara dal 1997. Migliore pizzeria di Vicenza 2024.</p>'+
      '<div class="social"><a class="ico-btn" href="'+L.info.ig+'" target="_blank" rel="noopener" aria-label="Instagram">'+I.ig+'</a><a class="ico-btn" href="'+L.info.fb+'" target="_blank" rel="noopener" aria-label="Facebook">'+I.fb+'</a></div></div>'+
    '<div><h5>Contatti</h5><ul>'+
      '<li>'+I.pin+'<a href="'+L.info.maps+'" target="_blank" rel="noopener">'+L.info.indirizzo+'<br>'+L.info.citta+'</a></li>'+
      '<li>'+I.phone+'<a href="tel:'+L.info.telLink+'">'+L.info.tel+'</a></li>'+
      '<li>'+I.ig+'<a href="'+L.info.ig+'" target="_blank" rel="noopener">@lefornacidalello</a></li></ul></div>'+
    '<div><h5>Orari</h5><ul class="ftr-orari"><li>'+I.clock+'<span>Mercoledì - domenica<br>18:30 - 23:30</span></li><li>'+I.clock+'<span>Lunedì e martedì<br>chiuso</span></li></ul>'+
      '<h5 style="margin-top:22px">Prenota</h5><ul>'+
      '<li>'+I.cal+'<a href="'+L.info.prenota+'" target="_blank" rel="noopener">Prenota online</a></li>'+
      '<li>'+I.phone+'<a href="tel:'+L.info.telLink+'">Oppure chiamaci</a></li></ul></div>'+
    '<div><h5>Esplora</h5><ul><li><a href="menu.html">Il menu completo</a></li><li><a href="menu.html#eccellenze">Eccellenze napoletane</a></li><li><a href="menu.html#calzoni">I calzoni</a></li><li><a href="index.html#storia">La nostra storia</a></li><li><a href="index.html#dove">Come arrivare</a></li></ul></div>'+
  '</div>'+
  '<div class="ftr-bot"><span>&copy; '+new Date().getFullYear()+' '+L.info.societa+' - P.IVA '+L.info.piva+'</span><span><a href="privacy.html">Privacy e cookie</a> - <a href="privacy.html#cookie" data-cookie-prefs>Preferenze cookie</a> - Sito realizzato da <a href="https://studiodigitalitalia.it" target="_blank" rel="noopener">Studio Digital Italia</a></span></div>'+
  '</div></footer>'+
  '<nav class="mbar" aria-label="Azioni rapide">'+
    '<a href="tel:'+L.info.telLink+'">'+I.phone+'Chiama</a>'+
    '<a href="menu.html">'+I.menu+'Menu</a>'+
    '<a class="go" href="'+L.info.prenota+'" target="_blank" rel="noopener">'+I.cal+'Prenota</a>'+
  '</nav>';
}

/* ---------- Menu completo (menu.html), stile del menu ufficiale ---------- */
function prezzo(v){ return typeof v==='number' ? v.toFixed(2).replace('.',',') : (v||''); }
function renderMenuUfficiale(host){
  var M=window.LELLO_MENU, P={};
  (window.LELLO_PIZZE||[]).forEach(function(p){ P[p.id]=p; });
  var nav='<nav class="mu-nav" aria-label="Sezioni del menu"><div class="mu-nav-in">'+M.map(function(g,i){
    return '<a href="#'+g.id+'" style="--c:'+g.col+'"'+(i===0?' aria-current="true"':'')+'>'+g.titolo+'</a>'; }).join('')+'</div></nav>';
  var top='<div class="mu-top"><img class="mu-firma" src="assets/img/logo-lello-sm.webp" srcset="assets/img/logo-lello-sm.webp 254w, assets/img/logo-lello.webp 508w" sizes="150px" alt="Logo della Pizzeria da Lello Le Fornaci" width="150" height="173">'+
    '<p class="mu-sub">Il menu <b>Le Fornaci</b></p>'+
    '<div class="mu-act"><a class="mu-pdf" href="assets/menu-pizzeria-da-lello.pdf" download>Scarica il menu in PDF</a></div>'+
    '<label class="mu-search"><span class="sr">Cerca nel menu</span><input type="search" placeholder="Cerca: burrata, friarielli, pistacchio..." autocomplete="off"></label></div>';
  var secs=M.map(function(g){
    var rows=g.voci.map(function(v){
      if(v[0]==='§') return '<h3 class="mu-sh">'+v[1]+'</h3>';
      var p=v[3]&&P[v[3]], key=(v[0]+' '+(v[2]||'')).toLowerCase().replace(/"/g,'');
      return '<div class="mu-it'+(p?' has-ph':'')+'" data-s="'+key+'">'+
        (p?'<button class="mu-ph" data-see="'+p.id+'" aria-label="Guarda '+v[0].replace(/"/g,'')+' nella ruota"><img src="'+(p.thumb||p.img)+'" alt="" loading="lazy" width="64" height="64"></button>':'')+
        '<div class="mu-tx"><b class="mu-n">'+v[0]+(window.lelloSurg?lelloSurg(v[0]):'')+'</b>'+(v[2]?'<span class="mu-d">'+v[2]+'</span>':'')+'</div>'+
        '<span class="mu-p">'+prezzo(v[1])+'</span></div>';
    }).join('');
    return '<section class="mu-sec" id="'+g.id+'" style="--c:'+g.col+';--ink:'+g.ink+'">'+
      '<h2 class="mu-band"'+(g.fg?' style="color:'+g.fg+'"':'')+'><span>'+g.t1+'</span> <b>'+g.t2+'</b></h2>'+
      (g.pill?'<p class="mu-pill">'+g.pill+'</p>':'')+(g.nota?'<p class="mu-note">'+g.nota+'</p>':'')+
      '<div class="mu-list">'+rows+'</div></section>';
  }).join('');
  var extra=(window.LELLO_EXTRA||[]).map(function(x){ return '<span>'+x+'</span>'; }).join('');
  host.innerHTML='<div class="mu">'+top+nav+secs+'<p class="mu-empty">Nessun piatto trovato. Prova con un altro ingrediente.</p>'+
    '<div class="mu-extra">'+extra+'</div><p class="mu-foot">Prezzi in euro, coperto escluso. Allergeni: chiedi al personale la tabella dei 14 allergeni.</p>'+
    '<img class="mu-logo" src="assets/img/lello-logo-scuro.png" alt="da Lello Le Fornaci" width="194" height="50"></div>';

  var links=host.querySelectorAll('.mu-nav a'), navIn=host.querySelector('.mu-nav-in');
  function setCur(id){ links.forEach(function(a){ var on=a.getAttribute('href')==='#'+id; if(on){ a.setAttribute('aria-current','true'); navIn.scrollTo({left:a.offsetLeft-16,behavior:'smooth'}); } else a.removeAttribute('aria-current'); }); }
  links.forEach(function(a){ a.addEventListener('click',function(e){ e.preventDefault(); var t=document.querySelector(a.getAttribute('href')); if(t){ t.scrollIntoView({behavior:'smooth'}); history.replaceState(null,'',a.getAttribute('href')); } }); });
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(en){ en.forEach(function(x){ if(x.isIntersecting) setCur(x.target.id); }); },{rootMargin:'-35% 0px -60% 0px'});
    host.querySelectorAll('.mu-sec').forEach(function(s){ io.observe(s); });
  }
  if(location.hash){ var t0=document.getElementById(location.hash.slice(1)); if(t0){ var go=function(){ t0.scrollIntoView({behavior:'instant'}); }; setTimeout(go,120); window.addEventListener('load',function(){ setTimeout(go,60); }); } }
  var inp=host.querySelector('.mu-search input'), empty=host.querySelector('.mu-empty');
  inp.addEventListener('input',function(){
    var q=inp.value.trim().toLowerCase(), any=false;
    host.querySelectorAll('.mu-sec').forEach(function(s){
      var vis=0; s.querySelectorAll('.mu-it').forEach(function(it){ var ok=!q||it.getAttribute('data-s').indexOf(q)>-1; it.classList.toggle('hide',!ok); if(ok) vis++; });
      s.querySelectorAll('.mu-sh,.mu-pill,.mu-note').forEach(function(h){ h.style.display=q?'none':''; });
      s.style.display=vis?'':'none'; if(vis) any=true;
    });
    empty.style.display=any?'none':'block';
  });
}

/* ---------- Menu "del sito": integrato nella pagina, come la prima versione della demo ---------- */
function renderMenuSito(host){
  var M=window.LELLO_MENU, P={};
  (window.LELLO_PIZZE||[]).forEach(function(p){ P[p.id]=p; });
  var euro=function(v){ return prezzo(v)+' €'; };
  var tabs='<div class="mtabs" role="tablist">'+M.map(function(g,i){ return '<button role="tab" aria-selected="'+(i===0)+'" data-g="'+g.id+'">'+g.titolo+'</button>'; }).join('')+'</div>';
  var search='<div class="msearch"><input type="search" placeholder="Cerca un ingrediente: burrata, friarielli, pistacchio..." aria-label="Cerca nel menu"></div>'+
    '<p class="mpdf"><a href="assets/menu-pizzeria-da-lello.pdf" download>Scarica il menu in PDF</a></p>';
  var groups=M.map(function(g){
    var note=(g.pill||g.nota||'');
    return '<section class="mgroup" id="'+g.id+'"><h2>'+g.titolo+'</h2><p class="note">'+note+'</p>'+
      '<div class="mlist">'+g.voci.map(function(v){
        if(v[0]==='§') return '<h3 class="msub">'+v[1]+'</h3>';
        var p=v[3]&&P[v[3]];
        return '<div class="mitem" data-s="'+(v[0]+' '+(v[2]||'')).toLowerCase().replace(/"/g,'')+'"><b>'+v[0]+(window.lelloSurg?lelloSurg(v[0]):'')+'</b><span class="pr">'+euro(v[1])+'</span>'+(v[2]?'<p>'+v[2]+'</p>':'')+
          (p?'<button class="see" data-see="'+p.id+'"><img src="'+(p.thumb||p.img)+'" alt="" loading="lazy">Guardala</button>':'')+'</div>';
      }).join('')+'</div></section>';
  }).join('');
  var extra=(window.LELLO_EXTRA||[]).map(function(x){ return '<span>'+x+'</span>'; }).join('');
  host.innerHTML='<div class="wrap msito">'+tabs+search+groups+'<p class="mempty">Nessun piatto trovato. Prova con un altro ingrediente.</p>'+
    '<div class="extras center" style="margin-top:20px">'+extra+'</div></div>';

  var btns=host.querySelectorAll('.mtabs button');
  btns.forEach(function(b){
    b.addEventListener('click',function(){ var t=document.getElementById(b.getAttribute('data-g')); if(t){ t.scrollIntoView({behavior:'smooth'}); history.replaceState(null,'','#'+t.id); } });
  });
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(en){ en.forEach(function(x){ if(x.isIntersecting){ var id=x.target.id; btns.forEach(function(b){ var on=b.getAttribute('data-g')===id; b.setAttribute('aria-selected',on); if(on) b.parentNode.scrollTo({left:b.offsetLeft-16,behavior:'smooth'}); }); } }); },{rootMargin:'-40% 0px -55% 0px'});
    host.querySelectorAll('.mgroup').forEach(function(s){ io.observe(s); });
  }
  var inp=host.querySelector('.msearch input'), empty=host.querySelector('.mempty');
  inp.addEventListener('input',function(){
    var q=inp.value.trim().toLowerCase(), any=false;
    host.querySelectorAll('.mgroup').forEach(function(s){
      var vis=0; s.querySelectorAll('.mitem').forEach(function(it){ var ok=!q||it.getAttribute('data-s').indexOf(q)>-1; it.classList.toggle('hide',!ok); if(ok) vis++; });
      s.querySelectorAll('.msub').forEach(function(h){ h.style.display=q?'none':''; });
      s.style.display=vis?'':'none'; if(vis) any=true;
    });
    empty.style.display=any?'none':'block';
  });
}

/* ---------- Pagina menu: due versioni (aggiornato 02/11/2026) ----------
   "sito" = menu integrato nella pagina, "ufficiale" = menu in stile cartaceo.
   Predefinito: integrato su computer, stile cartaceo su telefono (schermo fino a 980 px).
   Il selettore sopra il menu permette sempre di passare all'altra versione; si puo' forzare con menu.html?menu=sito o ?menu=ufficiale */
function renderMenu(){
  var host=document.getElementById('menu-app'); if(!host || !window.LELLO_MENU) return;
  var q=(location.search.match(/[?&]menu=(ufficiale|sito)/)||[])[1];
  var mobile=window.matchMedia('(max-width:980px)').matches;
  var stile=q||(mobile?'ufficiale':'sito');
  var sw=document.createElement('div');
  sw.className='mswitch'; sw.setAttribute('role','tablist'); sw.setAttribute('aria-label','Scegli come vedere il menu');
  sw.innerHTML='<button role="tab" data-st="sito">Menu del sito</button><button role="tab" data-st="ufficiale">Menu stampato</button>';
  host.parentNode.insertBefore(sw,host);
  function show(st){
    stile=st;
    sw.querySelectorAll('button').forEach(function(b){ b.setAttribute('aria-selected',b.getAttribute('data-st')===st); });
    host.parentNode.classList.toggle('is-sito',st==='sito');
    if(st==='sito') renderMenuSito(host); else renderMenuUfficiale(host);
  }
  sw.addEventListener('click',function(e){
    var b=e.target.closest('[data-st]'); if(!b || b.getAttribute('data-st')===stile) return;
    show(b.getAttribute('data-st'));
    sw.scrollIntoView({behavior:'smooth',block:'start'});
  });
  host.addEventListener('click',function(e){
    var b=e.target.closest('[data-see]'); if(!b) return;
    var w=document.querySelector('[data-wheel]'); if(!w||!w.wheel) return;
    /* ricorda il punto del menu per il pulsante "Torna al menu" */
    w.wheel.setReturn({el:b,row:b.closest('.mu-it,.mitem')||b,off:b.getBoundingClientRect().top});
    window.scrollTo({top:0,behavior:'smooth'});
    setTimeout(function(){ w.wheel.openId(b.getAttribute('data-see')); },450);
  });
  show(stile);
}

/* ---------- Reveal on scroll ---------- */
function reveal(){
  var els=document.querySelectorAll('.rv');
  if(!('IntersectionObserver' in window)){ els.forEach(function(e){e.classList.add('in');}); return; }
  var io=new IntersectionObserver(function(en){ en.forEach(function(x){ if(x.isIntersecting){ x.target.classList.add('in'); io.unobserve(x.target); } }); },{threshold:.12});
  els.forEach(function(e){ io.observe(e); });
}

/* ---------- Protezione demo (standard Be Digital) ---------- */
function protezioneDemo(){
  if(!L.protect) return;
  var stop=function(e){ e.preventDefault(); return false; };
  if(!L.devtools) document.addEventListener('contextmenu',stop);
  document.addEventListener('dragstart',function(e){ if(e.target.tagName==='IMG') e.preventDefault(); });
  document.addEventListener('copy',stop);
  document.addEventListener('selectstart',function(e){ if(!/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) e.preventDefault(); });
  if(!L.devtools) document.addEventListener('keydown',function(e){
    var k=(e.key||'').toLowerCase();
    if(e.key==='F12' || ((e.ctrlKey||e.metaKey) && (k==='u'||k==='s'||k==='p')) || ((e.ctrlKey||e.metaKey) && e.shiftKey && (k==='i'||k==='j'||k==='c'))){ e.preventDefault(); }
  });
  document.documentElement.style.userSelect='none';
  try{ console.log('%cDemo riservata Studio Digital Italia - riproduzione non autorizzata','font:600 13px sans-serif;color:#BF1E2E'); }catch(_){}
}

document.addEventListener('DOMContentLoaded',function(){
  var h=document.getElementById('site-header'); if(h) h.outerHTML=header();
  var f=document.getElementById('site-footer'); if(f) f.outerHTML=footer();
  var b=document.querySelector('.burger');
  if(b) b.addEventListener('click',function(){ var o=document.body.classList.toggle('nav-open'); document.documentElement.classList.toggle('nav-open',o); b.setAttribute('aria-expanded',o); b.setAttribute('aria-label',o?'Chiudi il menu':'Apri il menu'); });
  document.querySelectorAll('.nav a').forEach(function(a){ a.addEventListener('click',function(){ document.body.classList.remove('nav-open'); document.documentElement.classList.remove('nav-open'); }); });
  document.querySelectorAll('[data-icon]').forEach(function(el){ el.innerHTML=I[el.getAttribute('data-icon')]||''; });
  renderMenu(); reveal(); protezioneDemo();
});
})();

/* ---------- Caricamento col logo (04/11/2026) ----------
   A ogni apertura di pagina: resta almeno 1,5 secondi (cosi' intanto si caricano font e foto delle pizze),
   si chiude quando la pagina e' pronta e comunque entro 3 secondi. */
(function(){
  var sp=document.querySelector('.sp'); if(!sp) return;
  var root=document.documentElement, fatto=false;
  function chiudi(){
    if(fatto) return; fatto=true;
    var attesa=Math.max(0,1500-(window.performance&&performance.now?performance.now():1500));
    setTimeout(function(){
      sp.classList.add('out');
      setTimeout(function(){ if(sp.parentNode) sp.parentNode.removeChild(sp); root.classList.remove('sp-on'); },500);
    },attesa);
  }
  if(document.readyState==='complete') chiudi(); else window.addEventListener('load',chiudi);
  setTimeout(chiudi,3000);
})();
