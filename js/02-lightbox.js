import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryCardsList = document.querySelector('.gallery'); 
console.log(galleryCardsList);

galleryCardsList.innerHTML = createMarkupGalleryCardsList(galleryItems);
// додавання розмітки галерії через функцію з аргументом обєкт

function createMarkupGalleryCardsList(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) =>
            `<li class="gallery-item">
        <a class="gallery-link" href="${original}">
            <img class="gallery-card"
             src="${preview}"
            data-source= "${original}"
            alt="${description}"
            />
        </a>
    </li>`)
    .join("");
}
// функція створює розмітку галереї карток через масив з даних обєкта

const lightbox = new SimpleLightbox('.gallery .gallery-item a', { 
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250
});

// підключення з документації лайтбокса, з options - вивід підпису, позиція, затримка 
