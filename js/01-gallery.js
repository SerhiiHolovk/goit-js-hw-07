import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery')

function createGalleryItem({ preview, original, description }) {
  return `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="Image ${description}"
    />
  </a>
</li>
  `;
}

// Функція для створення всієї розмітки галереї
function createGalleryMarkup(items) {
  return items.map(createGalleryItem).join('');
}
gallery.innerHTML = createGalleryMarkup(galleryItems);

gallery.addEventListener('click', handlerGalleryClick);

function handlerGalleryClick(event) {
  event.preventDefault()
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(
    `<img width = "1366" height = "768" src = "${event.target.dataset.source}"\>`);
  instance.show();
  window.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
   }
  });
}