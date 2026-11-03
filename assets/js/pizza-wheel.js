/* Ruota delle pizze - Pizzeria da Lello (demo Studio Digital Italia)
   Carosello orizzontale di pizze scontornate che ruotano in senso orario.
   Al click la pizza scivola a sinistra roteando e a destra escono gli ingredienti. */
(function(){
'use strict';

function euro(n){ return (typeof n==='number') ? n.toFixed(2).replace('.',',')+' €' : (n||'Prezzo da confermare'); }
function tbc(p){ return p.conferma ? '<em class="tbc">(nome da confermare)</em>' : ''; }
function reduced(){ return window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches; }

function Wheel(root){
  var self=this;
  this.root=root;
  this.all=(window.LELLO_PIZZE||[]).filter(function(p){ return !!p.img; });
  this.items=this.all;
  if(!this.items.length) return;
  this.filter='tutte'; this.q='';
  var all=this.all, groups=FILTRI.filter(function(f){ return f[0]==='tutte' || all.some(function(p){ return gruppo(p)===f[0]; }); });
  this.cur=-1; this.busy=false;

  root.insertAdjacentHTML('beforeend',
    '<div class="wh-search" role="search"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4.2-4.2"/></svg>'+
      '<input type="search" placeholder="Cerca pizza o ingrediente" aria-label="Cerca una pizza o un ingrediente" autocomplete="off" enterkeyhint="search">'+
      '<button class="wh-x" type="button" aria-label="Cancella la ricerca">&times;</button>'+
      '<ul class="wh-sugg" role="listbox" aria-label="Pizze trovate"></ul></div>'+
    '<div class="wh-filt" role="tablist" aria-label="Filtra le pizze">'+groups.map(function(f){
      var n=f[0]==='tutte'?all.length:all.filter(function(p){ return gruppo(p)===f[0]; }).length;
      return '<button role="tab" data-f="'+f[0]+'" aria-selected="'+(f[0]==='tutte')+'">'+f[1]+' <small>'+n+'</small></button>'; }).join('')+'</div>'+
    '<div class="wh-rail">'+
      '<button class="wh-arrow prev" aria-label="Pizze precedenti"><svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg></button>'+
      '<div class="wh-track" role="list"></div>'+
      '<button class="wh-arrow next" aria-label="Pizze successive"><svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg></button>'+
    '</div>'+
    '<div class="wh-stage" aria-hidden="true">'+
      '<div class="wh-left"><div class="wh-glow"></div><div class="wh-move"><div class="wh-spin"><img class="wh-img" alt=""></div></div></div>'+
      '<div class="wh-right" aria-live="polite">'+
        '<span class="wh-cat"></span><h2 class="wh-name"></h2><p class="wh-frz" hidden></p><em class="tbc wh-tbc">(nome da confermare)</em><p class="wh-frase"></p>'+
        '<ol class="wh-ing"></ol>'+
        '<div class="wh-foot"><span class="wh-price"></span><a class="btn btn-red" href="https://www.octotable.com/book/restaurant/420578/welcome" target="_blank" rel="noopener">Prenota</a><button class="btn wh-tomenu" type="button"><svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>Torna al menu</button></div>'+
      '</div>'+
      '<div class="wh-nav">'+
        '<button class="wh-back"><svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>Tutte le pizze</button>'+
        '<span class="wh-count"></span>'+
        '<span class="wh-pn"><button class="wh-p" aria-label="Pizza precedente"><svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg></button><button class="wh-n" aria-label="Pizza successiva"><svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg></button></span>'+
      '</div>'+
    '</div>');

  this.track=root.querySelector('.wh-track');
  this.stage=root.querySelector('.wh-stage');
  this.move=root.querySelector('.wh-move');
  this.img=root.querySelector('.wh-img');

  this.render();
  /* ricerca: filtra la ruota mentre scrivi e propone le pizze trovate */
  var inp=root.querySelector('.wh-search input'), sug=root.querySelector('.wh-sugg'), tmr;
  this.inp=inp; this.sug=sug;
  inp.addEventListener('input',function(){ clearTimeout(tmr); tmr=setTimeout(function(){ self.search(inp.value); },120); });
  inp.addEventListener('focus',function(){ if(self.q) self.suggest(); });
  inp.addEventListener('keydown',function(e){
    if(e.key==='Enter'){ e.preventDefault(); if(self.items.length){ var id=self.items[0].id; self.hideSugg(); inp.blur(); self.openId(id); } }
    if(e.key==='Escape'){ inp.value=''; self.search(''); }
    if(e.key==='ArrowDown'){ var f=sug.querySelector('button'); if(f){ e.preventDefault(); f.focus(); } }
  });
  root.querySelector('.wh-x').addEventListener('click',function(){ inp.value=''; self.search(''); inp.focus(); });
  sug.addEventListener('click',function(e){ var b=e.target.closest('[data-id]'); if(!b) return; self.hideSugg(); inp.blur(); self.openId(b.getAttribute('data-id')); });
  sug.addEventListener('keydown',function(e){
    var b=e.target.closest('button'); if(!b) return; var li=b.parentNode;
    if(e.key==='ArrowDown'&&li.nextSibling){ e.preventDefault(); li.nextSibling.querySelector('button').focus(); }
    if(e.key==='ArrowUp'){ e.preventDefault(); if(li.previousSibling) li.previousSibling.querySelector('button').focus(); else inp.focus(); }
    if(e.key==='Escape'){ self.hideSugg(); inp.focus(); }
  });
  document.addEventListener('click',function(e){ if(!e.target.closest('.wh-search')) self.hideSugg(); });
  [].forEach.call(root.querySelectorAll('.wh-filt button'),function(b){
    b.addEventListener('click',function(){ self.setFilter(b.getAttribute('data-f')); });
  });
  root.querySelector('.wh-arrow.prev').onclick=function(){ self.scrollBy(-1); };
  root.querySelector('.wh-arrow.next').onclick=function(){ self.scrollBy(1); };
  root.querySelector('.wh-back').onclick=function(){ self.close(); };
  root.querySelector('.wh-tomenu').onclick=function(){ self.backToMenu(); };
  root.querySelector('.wh-p').onclick=function(){ self.step(-1); };
  root.querySelector('.wh-n').onclick=function(){ self.step(1); };
  document.addEventListener('keydown',function(e){
    if(self.cur<0) return;
    if(e.key==='Escape') self.close();
    if(e.key==='ArrowRight') self.step(1);
    if(e.key==='ArrowLeft') self.step(-1);
  });

  this.drag();
  this.track.addEventListener('scroll',function(){ self.focusFx(); },{passive:true});
  window.addEventListener('resize',function(){ self.focusFx(); });
}

/* filtri della ruota: gruppo di ogni pizza */
var FILTRI=[['tutte','Tutte'],['classiche','Classiche'],['eccellenze','Eccellenze'],['calzoni','Calzoni'],['sottili','Sottili'],['altro','Altro']];
function gruppo(p){
  return {'Classiche napoletane':'classiche','Eccellenze napoletane':'eccellenze','Calzoni':'calzoni','Pizze sottili':'sottili'}[p.cat]||'altro';
}

/* disegna il carosello con le pizze del filtro attivo */
Wheel.prototype.render=function(){
  var self=this;
  if(!this.items.length){
    this.track.innerHTML='<p class="wh-none">Nessuna pizza trovata. Prova con un altro nome o ingrediente.</p>';
    this.btns=[]; return;
  }
  this.track.innerHTML=this.items.map(function(p,i){
    return '<button class="pz'+(p.forma==='calzone'?' is-calzone':'')+'" role="listitem" data-i="'+i+'" aria-label="'+p.nome+', '+euro(p.prezzo)+'. Scopri gli ingredienti">'+
      '<span class="pz-disc"><span class="pz-spin" style="animation-delay:-'+(i*3.7).toFixed(1)+'s"><img src="'+(p.sm||p.img)+'" alt="'+p.nome+'" width="420" height="420" loading="'+(i<5?'eager':'lazy')+'" decoding="async" draggable="false"></span></span>'+
      '<b>'+p.nome+'</b>'+tbc(p)+'<small>'+euro(p.prezzo)+'</small></button>';
  }).join('');
  this.btns=[].slice.call(this.track.querySelectorAll('.pz'));
  /* click / tap su una pizza (ignorato se era un trascinamento) */
  this.btns.forEach(function(b){
    b.addEventListener('click',function(e){ if(self.dragged){ e.preventDefault(); return; } self.open(+b.getAttribute('data-i')); });
  });
  setTimeout(function(){ self.center(Math.min(2,self.items.length-1),false); self.focusFx(); },60);
};
Wheel.prototype.setFilter=function(f){
  if(this.busy || this.cur>=0) return;
  this.filter=f;
  this.apply();
  [].forEach.call(this.root.querySelectorAll('.wh-filt button'),function(b){ b.setAttribute('aria-selected',b.getAttribute('data-f')===f); });
  this.render();
  if(this.q) this.suggest();
};
/* testo senza accenti e maiuscole, per trovare "toto" anche se e' "Totò" */
function norm(t){ return String(t||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/['".,]/g,' '); }
function testo(p){
  if(!p._t) p._t=norm([p.nome,p.cat,p.frase].concat((p.ing||[]).map(function(x){ return x.join(' '); })).join(' '));
  return p._t;
}
Wheel.prototype.apply=function(){
  var f=this.filter, words=norm(this.q).split(/\s+/).filter(Boolean);
  this.items=this.all.filter(function(p){
    if(f!=='tutte' && gruppo(p)!==f) return false;
    var t=testo(p); return words.every(function(w){ return t.indexOf(w)>-1; });
  });
};
Wheel.prototype.search=function(q){
  if(this.cur>=0) return;
  this.q=q.trim();
  this.root.classList.toggle('has-q',!!this.q);
  this.apply(); this.render(); this.suggest();
};
Wheel.prototype.suggest=function(){
  var sug=this.sug;
  if(!this.q){ this.hideSugg(); return; }
  var list=this.items.slice(0,6);
  sug.innerHTML=list.length?list.map(function(p){
      return '<li role="option"><button type="button" data-id="'+p.id+'"><img src="'+(p.thumb||p.img)+'" alt="" width="40" height="40"><span><b>'+p.nome+'</b><small>'+p.cat+'</small></span><em>'+euro(p.prezzo)+'</em></button></li>';
    }).join('')+(this.items.length>6?'<li class="more">e altre '+(this.items.length-6)+' nella ruota qui sotto</li>':'')
    :'<li class="more">Nessuna pizza trovata</li>';
  sug.classList.add('open');
};
Wheel.prototype.hideSugg=function(){ if(this.sug) this.sug.classList.remove('open'); };

/* trascinamento con il mouse (su touch lo scroll e' nativo) */
Wheel.prototype.drag=function(){
  var t=this.track, self=this, down=false, x0=0, s0=0;
  t.addEventListener('pointerdown',function(e){ if(e.pointerType!=='mouse') return; down=true; self.dragged=false; x0=e.clientX; s0=t.scrollLeft; t.classList.add('grab'); });
  window.addEventListener('pointermove',function(e){ if(!down) return; var dx=e.clientX-x0; if(Math.abs(dx)>6) self.dragged=true; t.scrollLeft=s0-dx; });
  window.addEventListener('pointerup',function(){ if(!down) return; down=false; t.classList.remove('grab'); setTimeout(function(){ self.dragged=false; },0); });
};

Wheel.prototype.scrollBy=function(dir){
  var w=this.btns[0].getBoundingClientRect().width;
  this.track.scrollBy({left:dir*w*2,behavior:'smooth'});
};
Wheel.prototype.center=function(i,smooth){
  var b=this.btns[i]; if(!b) return;
  var left=b.offsetLeft - (this.track.clientWidth - b.offsetWidth)/2;
  this.track.scrollTo({left:left,behavior:smooth===false?'auto':'smooth'});
};
/* la pizza al centro e' piu' grande, quelle ai lati si allontanano */
Wheel.prototype.focusFx=function(){
  var self=this; if(this.raf) return;
  this.raf=requestAnimationFrame(function(){
    self.raf=null;
    var r=self.track.getBoundingClientRect(), c=r.left+r.width/2;
    self.btns.forEach(function(b){
      var br=b.getBoundingClientRect(), d=Math.min(1,Math.abs((br.left+br.width/2)-c)/(r.width/2));
      b.style.setProperty('--f',(1-d).toFixed(3));
    });
  });
};

Wheel.prototype.fill=function(p,i){
  var r=this.root;
  r.querySelector('.wh-cat').textContent=p.cat;
  r.querySelector('.wh-name').textContent=p.nome;
  r.querySelector('.wh-tbc').style.display=p.conferma?'':'none';
  var fz=r.querySelector('.wh-frz'); if(fz){ fz.hidden=!p.surg; fz.innerHTML=p.surg?(window.LELLO_FRZ||'')+' Prodotto surgelato':''; }
  r.querySelector('.wh-frase').textContent=p.frase||'';
  r.querySelector('.wh-price').textContent=euro(p.prezzo);
  r.querySelector('.wh-price').classList.toggle('na',typeof p.prezzo!=='number');
  r.querySelector('.wh-count').textContent=(i+1)+' / '+this.items.length;
  var ol=r.querySelector('.wh-ing');
  ol.classList.remove('in');
  ol.innerHTML=p.ing.map(function(x,k){
    return '<li style="--k:'+k+'"><span class="dot"></span><b>'+x[0]+'</b>'+(x[1]?'<small>'+x[1]+'</small>':'')+'</li>';
  }).join('');
  this.img.src=p.img; this.img.alt=p.nome;
  this.stage.classList.toggle('is-calzone',p.forma==='calzone');
  void ol.offsetWidth; /* riavvia l'animazione */
  requestAnimationFrame(function(){ ol.classList.add('in'); });
};

/* APRI: la pizza vola dal carosello alla sinistra roteando */
Wheel.prototype.open=function(i){
  if(this.busy) return; this.busy=true;
  var self=this, p=this.items[i], src=this.btns[i].querySelector('.pz-disc').getBoundingClientRect();
  this.cur=i;
  this.root.classList.add('is-open');
  this.stage.setAttribute('aria-hidden','false');
  this.fill(p,i);
  var sec=this.root.closest('section'), mob=window.matchMedia('(max-width:980px)').matches;
  if(sec && mob) window.scrollTo({top:sec.getBoundingClientRect().top+window.pageYOffset,behavior:'auto'});
  else if(sec){
    /* desktop: la scheda aperta (pizza + ingredienti) si centra nello spazio visibile sotto l'header */
    var a=this.move.getBoundingClientRect(), b=this.root.querySelector('.wh-right').getBoundingClientRect();
    var hd=document.querySelector('.hdr'), h=hd?hd.offsetHeight:0, top=Math.min(a.top,b.top), bot=Math.max(a.bottom,b.bottom);
    var vis=window.innerHeight-h, y=(bot-top<=vis-24) ? window.pageYOffset+(top+bot)/2-(h+vis/2) : window.pageYOffset+top-h-12;
    y=Math.max(0,y);
    if(Math.abs(y-window.pageYOffset)>8) window.scrollTo({top:y,behavior:'smooth'});
  }
  var dst=this.move.getBoundingClientRect();
  var dx=(src.left+src.width/2)-(dst.left+dst.width/2), dy=(src.top+src.height/2)-(dst.top+dst.height/2), s=src.width/dst.width;
  if(reduced()){ this.busy=false; return; }
  var a=this.move.animate([
    {transform:'translate('+dx+'px,'+dy+'px) scale('+s+') rotate(0deg)'},
    {transform:'translate(0,0) scale(1) rotate(360deg)'}
  ],{duration:1050,easing:'cubic-bezier(.22,.8,.24,1)'});
  a.onfinish=function(){ self.busy=false; };
};

/* CHIUDI: la pizza torna al suo posto nel carosello */
Wheel.prototype.close=function(){
  if(this.cur<0 || this.busy) return; this.busy=true;
  var self=this, i=this.cur;
  this.center(i,false);
  var dst=this.btns[i].querySelector('.pz-disc').getBoundingClientRect(), src=this.move.getBoundingClientRect();
  var dx=(dst.left+dst.width/2)-(src.left+src.width/2), dy=(dst.top+dst.height/2)-(src.top+src.height/2), s=dst.width/src.width;
  this.root.querySelector('.wh-ing').classList.remove('in');
  function done(){
    self.root.classList.remove('is-open'); self.stage.setAttribute('aria-hidden','true');
    self.cur=-1; self.busy=false; self.focusFx(); self.setReturn(null);
    try{ self.btns[i].focus({preventScroll:true}); }catch(_){}
  }
  if(reduced() || dst.width<2){ /* mobile: il carosello e' nascosto, niente volo di ritorno */
    if(!reduced()){ var f=this.move.animate([{transform:'rotate(0) scale(1)',opacity:1},{transform:'rotate(-120deg) scale(.6)',opacity:0}],{duration:380,easing:'ease-in'}); f.onfinish=done; }
    else done();
    return;
  }
  this.root.classList.add('is-closing');
  var a=this.move.animate([
    {transform:'translate(0,0) scale(1) rotate(0deg)'},
    {transform:'translate('+dx+'px,'+dy+'px) scale('+s+') rotate(-300deg)'}
  ],{duration:750,easing:'cubic-bezier(.6,0,.3,1)'});
  a.onfinish=function(){ self.root.classList.remove('is-closing'); done(); };
};

/* AVANTI / INDIETRO: la pizza esce rotolando, la nuova entra */
Wheel.prototype.step=function(dir){
  if(this.busy || this.cur<0) return; this.busy=true;
  var self=this, n=(this.cur+dir+this.items.length)%this.items.length;
  var out=dir>0?'-60%':'60%', inn=dir>0?'60%':'-60%';
  this.root.querySelector('.wh-ing').classList.remove('in');
  var pre=new Image(); pre.src=this.items[n].img;
  if(reduced()){ this.cur=n; this.fill(this.items[n],n); this.center(n); this.busy=false; return; }
  var a=this.move.animate([
    {transform:'translateX(0) rotate(0deg)',opacity:1},
    {transform:'translateX('+out+') rotate('+(dir>0?-200:200)+'deg)',opacity:0}
  ],{duration:420,easing:'cubic-bezier(.5,0,.8,.4)'});
  a.onfinish=function(){
    self.cur=n; self.fill(self.items[n],n); self.center(n);
    var b=self.move.animate([
      {transform:'translateX('+inn+') rotate('+(dir>0?200:-200)+'deg)',opacity:0},
      {transform:'translateX(0) rotate(0deg)',opacity:1}
    ],{duration:620,easing:'cubic-bezier(.2,.8,.25,1)'});
    b.onfinish=function(){ self.busy=false; };
  };
};

/* TORNA AL MENU (02/11/2026): se la pizza e' stata aperta da "Guardala" nel menu,
   il pulsante "Torna al menu" chiude la scheda e riporta al punto del menu dove si era */
Wheel.prototype.setReturn=function(r){
  this.ret=r||null;
  this.root.classList.toggle('from-menu',!!r);
};
Wheel.prototype.backToMenu=function(){
  var r=this.ret, self=this;
  this.setReturn(null);
  this.root.querySelector('.wh-ing').classList.remove('in');
  this.root.classList.remove('is-open','is-closing'); this.stage.setAttribute('aria-hidden','true');
  if(this.cur>=0) this.center(this.cur,false);
  this.cur=-1; this.busy=false; this.focusFx();
  if(!r || !r.el || !document.body.contains(r.el)) return;
  var y=r.el.getBoundingClientRect().top+window.pageYOffset-r.off;
  window.scrollTo({top:Math.max(0,y),behavior:reduced()?'auto':'smooth'});
  var row=r.row||r.el;
  setTimeout(function(){
    row.classList.add('mu-flash');
    try{ r.el.focus({preventScroll:true}); }catch(_){}
    setTimeout(function(){ row.classList.remove('mu-flash'); },1800);
  },reduced()?0:500);
};

/* apre una pizza per id (usato dal menu completo) */
Wheel.prototype.openId=function(id){
  var i=-1; this.items.forEach(function(p,k){ if(p.id===id) i=k; });
  if(i<0 && this.cur<0 && (this.filter!=='tutte' || this.q)){
    this.q=''; if(this.inp) this.inp.value=''; this.root.classList.remove('has-q'); this.hideSugg();
    this.setFilter('tutte'); this.items.forEach(function(p,k){ if(p.id===id) i=k; });
  }
  if(i<0) return false;
  var self=this;
  if(this.cur>=0){ this.cur=i; this.fill(this.items[i],i); this.center(i); return true; }
  this.center(i,false);
  setTimeout(function(){ self.open(i); },30);
  return true;
};

window.LelloWheel=Wheel;
document.addEventListener('DOMContentLoaded',function(){
  document.querySelectorAll('[data-wheel]').forEach(function(el){ el.wheel=new Wheel(el); });
});
})();
