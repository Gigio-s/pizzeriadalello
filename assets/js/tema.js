/* Pizzeria da Lello - grafica "Napoli illustrata" (scelta dal cliente, 08/11/2026)
   Colori, logo ricolorato e immagini di sfondo sono in assets/css/tema.css (html[data-tema="a"] nelle pagine).
   Questo file aggiunge solo le illustrazioni a linea ai bordi delle sezioni (assets/bg/*.svg)
   con una parallasse leggera solo da computer, disattivata per chi ha "riduci movimento". */
(function(){
'use strict';
var fermo=window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
/* su telefono le illustrazioni sono piccole e ferme: niente calcoli durante lo scorrimento */
var grande=!window.matchMedia || matchMedia('(min-width: 981px)').matches;

/* illustrazioni per sezione: [file, lato, alto %, colore (1 = rosso pomodoro, 2 = verde basilico)] */
var DECO={
  storia: [['forno','l',22,1],['basilico','r',60,2]],
  instagram:[['pala','r',18,1],['mozzarella','l',70,2]],
  prenota:[['maschera','l',30,1],['vesuvio','r',62,1]],
  dove:   [['vesuvio','r',20,1],['pomodorini','l',72,1]],
  faq:    [['basilico','l',18,2],['forno','r',66,1]],
  legal:  [['maschera','r',10,1],['basilico','l',55,2]]
};
var VEL=[0.10,-0.08,0.06];

function deco(sec,lista){
  if(!sec || sec.querySelector(':scope > .deco-box')) return;
  var box=document.createElement('div'); box.className='deco-box'; box.setAttribute('aria-hidden','true');
  lista.forEach(function(d,i){
    var s=document.createElement('span');
    s.className='deco deco-'+d[1]+' deco-c'+d[3];
    var u='url(assets/bg/'+d[0]+'.svg)'; s.style.webkitMaskImage=u; s.style.maskImage=u;
    s.style.top=d[2]+'%';
    s.setAttribute('data-v',VEL[i%VEL.length]);
    box.appendChild(s);
  });
  sec.insertBefore(box,sec.firstChild);
  sec.classList.add('has-deco');
}

function parallasse(){
  var el=[].slice.call(document.querySelectorAll('.deco')), att=false, vh=innerHeight;
  if(!el.length) return;
  function giro(){
    att=false;
    el.forEach(function(s){
      var r=s.parentNode.parentNode.getBoundingClientRect();
      if(r.bottom<-100 || r.top>vh+100) return;
      s.style.setProperty('--py',Math.round((r.top+r.height/2-vh/2)*parseFloat(s.getAttribute('data-v')))+'px');
    });
  }
  function chiedi(){ if(!att){ att=true; requestAnimationFrame(giro); } }
  addEventListener('scroll',chiedi,{passive:true});
  addEventListener('resize',function(){ vh=innerHeight; chiedi(); });
  giro();
}

function avvia(){
  ['storia','instagram','prenota','dove','faq'].forEach(function(id){ deco(document.getElementById(id),DECO[id]); });
  deco(document.querySelector('body[data-page="menu"] main > section.sec:last-of-type'),DECO.prenota);
  deco(document.querySelector('main.legal'),DECO.legal);
  if(!fermo && grande) parallasse();
}
/* parte dopo main.js, che disegna header e footer */
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',function(){ setTimeout(avvia,0); }); else setTimeout(avvia,0);
})();
