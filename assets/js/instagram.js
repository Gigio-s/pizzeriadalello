/* Pizzeria da Lello - sezione Instagram (aggiornato 02/11/2026)
   COME FUNZIONA
   - In index.html (sezione #instagram) ci sono 6 riquadri con i reel piu' visti del profilo @lefornacidalello.
     I video sono clip di 8 secondi, senza audio, salvate nel sito (assets/video/reel/CODICE.mp4 + anteprima .webp):
     il sito non contatta Instagram, quindi non serve il consenso cookie.
   - Questo file fa partire ogni video (muto, in loop) solo quando il riquadro e' visibile e lo mette in pausa
     quando esce dallo schermo. Chi ha attivato "riduci movimento" nel sistema vede solo l'anteprima.
   - Il clic su un riquadro apre il reel originale su Instagram.
   - Per cambiare un reel: nuova clip in assets/video/reel/ e codice del reel (dal link instagram.com/reel/CODICE)
     nel riquadro corrispondente di index.html. */
(function(){
'use strict';
var box=document.querySelector('[data-ig]'); if(!box) return;
var video=[].slice.call(box.querySelectorAll('video[data-src]')); if(!video.length) return;
var fermo=window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
if(fermo) return;

function avvia(v){
  if(!v.getAttribute('src')){ v.src=v.getAttribute('data-src'); v.preload='auto'; }
  var p=v.play(); if(p && p.catch) p.catch(function(){});
  v.parentNode.classList.add('is-playing');
}
function ferma(v){ if(!v.paused) v.pause(); }

if(!('IntersectionObserver' in window)){ video.forEach(avvia); return; }
var visibili=[];
var io=new IntersectionObserver(function(voci){
  voci.forEach(function(e){
    var i=visibili.indexOf(e.target);
    if(e.isIntersecting){ if(i<0) visibili.push(e.target); avvia(e.target); }
    else { if(i>-1) visibili.splice(i,1); ferma(e.target); }
  });
},{rootMargin:'150px 0px',threshold:0.15});
video.forEach(function(v){ io.observe(v); });
document.addEventListener('visibilitychange',function(){
  if(document.hidden) video.forEach(ferma); else visibili.forEach(avvia);
});
})();
