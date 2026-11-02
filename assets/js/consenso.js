/* Pizzeria da Lello Le Fornaci - gestione consenso cookie (02/11/2026)
   Conforme alle Linee guida cookie del Garante privacy (10/06/2021) e al GDPR:
   - di base il sito usa solo strumenti tecnici (questo file salva la scelta nel browser)
   - i contenuti esterni (es. Google Maps) si caricano SOLO dopo il consenso
   - "Rifiuta" e "Accetta" hanno lo stesso peso; la X chiude il banner e vale come rifiuto
   - la scelta dura 6 mesi, poi il banner viene riproposto
   - "Preferenze cookie" nel footer riapre il pannello in qualsiasi momento
   Per aggiungere un contenuto esterno: elemento con data-consent="esterni" e data-src="URL" (vedi la mappa in index.html). */
(function(){
'use strict';
var KEY='lello-consenso', VER=1, DURATA=1000*60*60*24*182; /* circa 6 mesi */

function leggi(){
  try{
    var c=JSON.parse(localStorage.getItem(KEY)||'null');
    if(!c || c.v!==VER || (Date.now()-c.t)>DURATA) return null;
    return c;
  }catch(_){ return null; }
}
function salva(esterni){
  var c={v:VER,t:Date.now(),esterni:!!esterni};
  try{ localStorage.setItem(KEY,JSON.stringify(c)); }catch(_){}
  applica(c); chiudi();
  return c;
}
function carica(el){
  if(el.getAttribute('data-loaded')) return;
  var src=el.getAttribute('data-src'); if(!src) return;
  var f=document.createElement('iframe');
  f.src=src; f.title=el.getAttribute('data-title')||'Contenuto esterno';
  f.loading='lazy'; f.referrerPolicy='no-referrer-when-downgrade'; f.setAttribute('allowfullscreen','');
  el.innerHTML=''; el.appendChild(f); el.setAttribute('data-loaded','1'); el.classList.add('is-loaded');
}
function applica(c){
  if(c && c.esterni) document.querySelectorAll('[data-consent="esterni"]').forEach(carica);
  try{ document.dispatchEvent(new CustomEvent('lello:consenso',{detail:c||{}})); }catch(_){}
}

/* ---------- Banner ---------- */
var box;
function costruisci(){
  if(box) return box;
  box=document.createElement('div');
  box.className='ck'; box.setAttribute('role','dialog'); box.setAttribute('aria-modal','false'); box.setAttribute('aria-labelledby','ck-t');
  box.innerHTML=
    '<button class="ck-x" type="button" aria-label="Chiudi e rifiuta i cookie non necessari" data-ck="no">&times;</button>'+
    '<p class="ck-t" id="ck-t">Cookie e contenuti esterni</p>'+
    '<p class="ck-d">Questo sito usa solo cookie tecnici necessari al funzionamento. Con il tuo consenso carichiamo anche contenuti esterni, come la mappa di Google Maps, che possono installare cookie di terze parti. Puoi cambiare idea quando vuoi da <b>Preferenze cookie</b> in fondo alla pagina. <a href="privacy.html#cookie">Leggi l\'informativa</a>.</p>'+
    '<div class="ck-opt" hidden>'+
      '<label class="ck-row"><input type="checkbox" checked disabled><span><b>Necessari</b><small>Servono al funzionamento del sito e a ricordare questa scelta. Sempre attivi.</small></span></label>'+
      '<label class="ck-row"><input type="checkbox" data-ck-est><span><b>Contenuti esterni</b><small>Google Maps (mappa del locale). Google riceve il tuo indirizzo IP e puo\' usare cookie propri.</small></span></label>'+
    '</div>'+
    '<div class="ck-btns">'+
      '<button class="ck-b" type="button" data-ck="no">Rifiuta</button>'+
      '<button class="ck-b" type="button" data-ck="pers">Personalizza</button>'+
      '<button class="ck-b ck-save" type="button" data-ck="salva" hidden>Salva le scelte</button>'+
      '<button class="ck-b" type="button" data-ck="si">Accetta tutti</button>'+
    '</div>';
  box.addEventListener('click',function(e){
    var b=e.target.closest('[data-ck]'); if(!b) return;
    var a=b.getAttribute('data-ck');
    if(a==='no') salva(false);
    else if(a==='si') salva(true);
    else if(a==='pers') personalizza(true);
    else if(a==='salva') salva(box.querySelector('[data-ck-est]').checked);
  });
  document.body.appendChild(box);
  return box;
}
function personalizza(on){
  var c=leggi();
  box.querySelector('[data-ck-est]').checked=!!(c && c.esterni);
  box.querySelector('.ck-opt').hidden=!on;
  box.querySelector('[data-ck="pers"]').hidden=on;
  box.querySelector('[data-ck="salva"]').hidden=!on;
}
function apri(dettagli){
  costruisci(); personalizza(!!dettagli);
  box.classList.add('is-on');
  try{ box.querySelector(dettagli?'[data-ck-est]':'[data-ck="si"]').focus({preventScroll:true}); }catch(_){}
}
function chiudi(){ if(box) box.classList.remove('is-on'); }

document.addEventListener('keydown',function(e){ if(e.key==='Escape' && box && box.classList.contains('is-on') && !leggi()) salva(false); });
document.addEventListener('click',function(e){
  var p=e.target.closest('[data-cookie-prefs]');
  if(p){ e.preventDefault(); apri(true); return; }
  var m=e.target.closest('[data-consent-load]');
  if(m){ e.preventDefault(); salva(true); }
});

window.LelloConsenso={ apri:apri, stato:leggi };

function avvia(){
  var c=leggi();
  if(c) applica(c); else apri(false);
}
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',avvia); else avvia();
})();
