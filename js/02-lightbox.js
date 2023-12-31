import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery')

const galleryImages = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="Image ${description}" />
   </a>
 </li>`).join('');

gallery.insertAdjacentHTML('beforeend', galleryImages);

console.log(gallery);

let lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});