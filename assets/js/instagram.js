/* Pizzeria da Lello - sezione Instagram (aggiornato 02/11/2026)
   COME FUNZIONA
   - POSTS: elenco dei post da mostrare (codice del post preso dal link instagram.com/p/CODICE o /reel/CODICE).
     Senza consenso: le 6 foto del locale (in locale), ognuna porta al post corrispondente su Instagram.
     Con il consenso ai "contenuti esterni" (banner cookie): al posto delle foto compaiono i post veri
     (foto e video) con l'incorporamento ufficiale di Instagram, in una fila scorrevole.
     Per cambiare i post basta cambiare i codici qui sotto (massimo 6).
   - FEED_URL (feed JSON di Behold.so collegato a @lefornacidalello): se compilato ha la precedenza
     e mostra in automatico gli ultimi post, aggiornati ogni volta che il locale pubblica.
   - Instagram (Meta) riceve dati del visitatore: per questo i post si caricano solo dopo il consenso (privacy). */
(function(){
'use strict';
var FEED_URL = '';            /* es. 'https://feeds.behold.so/XXXXXXXXXXXX' */
var PROFILO = 'https://www.instagram.com/lefornacidalello/';
var QUANTI = 6;
/* tipo: 'reel' o 'p' (foto/carosello) */
var POSTS = [
  {tipo:'reel', codice:'DWontUSDWd0', testo:'Mortadella, burrata, pistacchio e scorza di limone'},
  {tipo:'reel', codice:'DRZ_4bxjS3i', testo:'La pizza fatta con amore e passione'},
  {tipo:'reel', codice:'DRm8yAvjaIL', testo:'Infornare con una sola mano'},
  {tipo:'reel', codice:'DfJ5f-9NaoQ', testo:'Pizza napoletana da Lello'},
  {tipo:'reel', codice:'DerowqNM8PB', testo:'La pala magica'},
  {tipo:'reel', codice:'DecMB8yMURr', testo:'La pizza Crocchè'}
];

var box=document.querySelector('[data-ig]'); if(!box) return;
var grid=box.querySelector('.ig-grid'), nota=box.querySelector('.ig-consent');

function esc(t){ return String(t||'').replace(/[&<>"]/g,function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
function corta(t,n){ t=String(t||'').replace(/\s+/g,' ').trim(); return t.length>n ? t.slice(0,n-1)+'…' : t; }
function link(p){ return 'https://www.instagram.com/'+(p.tipo==='reel'?'reel':'p')+'/'+p.codice+'/'; }
function consenso(){ var c=window.LelloConsenso&&window.LelloConsenso.stato(); return !!(c&&c.esterni); }

/* 1) senza consenso: le foto locali portano ai post */
var tiles=grid.querySelectorAll('.ig-it');
POSTS.slice(0,tiles.length).forEach(function(p,i){
  var a=tiles[i]; a.href=link(p);
  if(p.testo) a.setAttribute('aria-label','Apri su Instagram: '+p.testo);
  if(p.tipo==='reel' && !a.querySelector('.ig-play')) a.insertAdjacentHTML('beforeend','<span class="ig-play" aria-hidden="true"></span>');
});

/* 2) feed automatico Behold */
function mostraFeed(posts){
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

/* 3) post incorporati con il codice ufficiale di Instagram */
function mostraEmbed(){
  grid.classList.add('is-embed');
  grid.innerHTML=POSTS.slice(0,QUANTI).map(function(p){
    return '<div class="ig-emb"><blockquote class="instagram-media" data-instgrm-permalink="'+link(p)+'?utm_source=ig_embed" data-instgrm-version="14">'+
      '<a href="'+link(p)+'" target="_blank" rel="noopener">'+esc(p.testo||'Guarda il post su Instagram')+'</a></blockquote></div>';
  }).join('');
  box.classList.add('is-live'); if(nota) nota.hidden=true;
  if(window.instgrm&&window.instgrm.Embeds){ window.instgrm.Embeds.process(); return; }
  var s=document.createElement('script'); s.async=true; s.src='https://www.instagram.com/embed.js'; document.body.appendChild(s);
}

function carica(){
  if(box.getAttribute('data-loaded')) return;
  box.setAttribute('data-loaded','1');
  if(FEED_URL){
    fetch(FEED_URL,{cache:'no-cache'}).then(function(r){ return r.json(); }).then(function(d){
      var posts=Array.isArray(d)?d:(d.posts||d.data||[]);
      if(posts.length) mostraFeed(posts);
    }).catch(function(){ box.removeAttribute('data-loaded'); });
  } else if(POSTS.length){ mostraEmbed(); }
}

if(!FEED_URL && !POSTS.length){ if(nota) nota.hidden=true; return; }
if(consenso()) carica(); else if(nota) nota.hidden=false;
document.addEventListener('lello:consenso',function(e){ if(e.detail&&e.detail.esterni) carica(); });
})();
