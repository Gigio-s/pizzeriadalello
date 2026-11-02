/* Pizzeria da Lello - sezione Instagram con gli ultimi post (02/11/2026)
   COME FUNZIONA
   - FEED_URL vuoto: si vedono 6 foto del locale (in locale) che portano al profilo Instagram
   - FEED_URL compilato (feed JSON di Behold.so collegato a @lefornacidalello): dopo il consenso ai
     "contenuti esterni" (banner cookie) la griglia mostra in automatico gli ultimi 6 post, aggiornati
     ogni volta che il locale pubblica. Senza consenso resta la griglia di foto con il pulsante per caricarli.
   - Il feed e le immagini arrivano da un servizio esterno: per questo passano dal consenso (privacy). */
(function(){
'use strict';
var FEED_URL = '';            /* es. 'https://feeds.behold.so/XXXXXXXXXXXX' */
var PROFILO = 'https://www.instagram.com/lefornacidalello/';
var QUANTI = 6;

var box=document.querySelector('[data-ig]'); if(!box) return;
var grid=box.querySelector('.ig-grid'), nota=box.querySelector('.ig-consent');

function esc(t){ return String(t||'').replace(/[&<>"]/g,function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
function corta(t,n){ t=String(t||'').replace(/\s+/g,' ').trim(); return t.length>n ? t.slice(0,n-1)+'…' : t; }

function mostra(posts){
  var html=posts.slice(0,QUANTI).map(function(p){
    var img=(p.sizes&&p.sizes.medium&&p.sizes.medium.mediaUrl)||p.thumbnailUrl||p.mediaUrl;
    if(!img) return '';
    var video=/VIDEO|REEL/i.test(p.mediaType||'');
    var testo=corta(p.prunedCaption||p.caption,90);
    return '<a class="ig-it" href="'+esc(p.permalink||PROFILO)+'" target="_blank" rel="noopener">'+
      '<img src="'+esc(img)+'" alt="'+esc(testo||'Post Instagram di Pizzeria da Lello')+'" loading="lazy">'+
      (video?'<span class="ig-play" aria-hidden="true"></span>':'')+
      (testo?'<span class="ig-cap">'+esc(testo)+'</span>':'')+'</a>';
  }).join('');
  if(html){ grid.innerHTML=html; box.classList.add('is-live'); if(nota) nota.hidden=true; }
}
function carica(){
  if(!FEED_URL || box.getAttribute('data-loaded')) return;
  box.setAttribute('data-loaded','1');
  fetch(FEED_URL,{cache:'no-cache'}).then(function(r){ return r.json(); }).then(function(d){
    var posts=Array.isArray(d)?d:(d.posts||d.data||[]);
    if(posts.length) mostra(posts);
  }).catch(function(){ box.removeAttribute('data-loaded'); });
}
function consenso(){ var c=window.LelloConsenso&&window.LelloConsenso.stato(); return !!(c&&c.esterni); }

if(!FEED_URL){ if(nota) nota.hidden=true; return; }
if(consenso()) carica(); else if(nota) nota.hidden=false;
document.addEventListener('lello:consenso',function(e){ if(e.detail&&e.detail.esterni) carica(); });
})();
