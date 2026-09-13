'use strict';
const gift = document.querySelector('#open-gift');
gift.addEventListener('click', event => {
  event.preventDefault();
  document.body.classList.add('gift-opened');
  document.querySelector('#ucapan').focus({preventScroll:true});
  window.scrollTo({top:0,behavior:'instant'});
});
const dialog = document.querySelector('#photo-dialog');
const photos = [...document.querySelectorAll('.photo-button')];
const cards = [...document.querySelectorAll('.memory-message')];
const viewerMessage = document.querySelector('#viewer-message');
const opened = new Set();
let current = 0;
let opener;
function markRead(index) {
  opened.add(index);
  photos[index].closest('figure').classList.add('message-read');
  document.querySelector('#memory-progress').textContent = opened.size === photos.length
    ? 'Tujuh pesan telah terbuka. Semoga semua doa baik ini menyertaimu, Ambar. ♡'
    : `${opened.size} dari ${photos.length} pesan telah kamu buka. Masih ada doa baik untukmu. ♡`;
}
cards.forEach((card,index) => card.addEventListener('toggle', () => { if(card.open) markRead(index); }));
function showPhoto(index) {
  current = (index + photos.length) % photos.length;
  const figure = photos[current].closest('figure');
  const img = photos[current].querySelector('img');
  const large = document.querySelector('#large-photo');
  large.src = img.src;
  large.alt = img.alt;
  document.querySelector('#photo-caption').textContent = figure.querySelector('.memory-caption').textContent;
  document.querySelector('#message-title').textContent = figure.querySelector('.memory-note h3').textContent;
  document.querySelector('#message-text').textContent = figure.querySelector('.memory-note p').textContent;
  viewerMessage.open = opened.has(current);
  document.querySelector('#photo-count').textContent = `${current + 1} / ${photos.length}`;
  dialog.scrollTop = 0;
}
viewerMessage.addEventListener('toggle', () => { if(viewerMessage.open && dialog.open) markRead(current); });
photos.forEach((button,index) => button.addEventListener('click', () => {
  opener = button;
  showPhoto(index);
  dialog.showModal();
  document.body.classList.add('modal-open');
}));
document.querySelector('.close-viewer').addEventListener('click', () => dialog.close());
document.querySelector('#prev-photo').addEventListener('click', () => showPhoto(current-1));
document.querySelector('#next-photo').addEventListener('click', () => showPhoto(current+1));
dialog.addEventListener('click', event => {
  if(event.target === dialog) {
    const r=dialog.getBoundingClientRect();
    if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();
  }
});
dialog.addEventListener('keydown', event => {
  if(event.key === 'ArrowLeft') {event.preventDefault();showPhoto(current-1);}
  if(event.key === 'ArrowRight') {event.preventDefault();showPhoto(current+1);}
});
dialog.addEventListener('close', () => {document.body.classList.remove('modal-open');opener?.focus();});
let touchStart = null;
const swipeArea = document.querySelector('.viewer-photo');
swipeArea.addEventListener('touchstart', event => {
  touchStart = event.touches.length === 1 ? {x:event.touches[0].clientX,y:event.touches[0].clientY} : null;
},{passive:true});
swipeArea.addEventListener('touchend', event => {
  if(touchStart && event.changedTouches.length){
    const dx=event.changedTouches[0].clientX-touchStart.x;
    const dy=event.changedTouches[0].clientY-touchStart.y;
    if(Math.abs(dx)>60 && Math.abs(dx)>Math.abs(dy)*1.5)showPhoto(current+(dx>0?-1:1));
  }
  touchStart=null;
},{passive:true});
swipeArea.addEventListener('touchcancel',()=>{touchStart=null;},{passive:true});
