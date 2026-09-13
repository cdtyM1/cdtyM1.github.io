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
let current = 0;
let opener;
function showPhoto(index) {
  current = (index + photos.length) % photos.length;
  const img = photos[current].querySelector('img');
  const large = document.querySelector('#large-photo');
  large.src = img.src;
  large.alt = img.alt;
  document.querySelector('#photo-caption').textContent = photos[current].nextElementSibling.textContent;
  document.querySelector('#photo-count').textContent = `${current + 1} / ${photos.length}`;
}
photos.forEach((button,index) => button.addEventListener('click', () => {
  opener = button;
  showPhoto(index);
  dialog.showModal();
  document.body.classList.add('modal-open');
}));
document.querySelector('.close-viewer').addEventListener('click', () => dialog.close());
document.querySelector('#prev-photo').addEventListener('click', () => showPhoto(current-1));
document.querySelector('#next-photo').addEventListener('click', () => showPhoto(current+1));
dialog.addEventListener('click', event => {if(event.target === dialog) {const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('keydown', event => {
  if(event.key === 'ArrowLeft') {event.preventDefault();showPhoto(current-1);}
  if(event.key === 'ArrowRight') {event.preventDefault();showPhoto(current+1);}
});
dialog.addEventListener('close', () => {document.body.classList.remove('modal-open');opener?.focus();});
let touchStart = null;
dialog.addEventListener('touchstart', event => {touchStart=event.touches[0].clientX;},{passive:true});
dialog.addEventListener('touchend', event => {if(touchStart!==null){const diff=event.changedTouches[0].clientX-touchStart;if(Math.abs(diff)>60)showPhoto(current+(diff>0?-1:1));}touchStart=null;},{passive:true});
