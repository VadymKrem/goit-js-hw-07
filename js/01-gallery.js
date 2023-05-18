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

galleryCardsList.addEventListener('click', onGalleryCardsClick); 
// додавання слухача на галерею (список карток) при кліку з визовом функції

function onGalleryCardsClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains("gallery-card")) { return }
    // console.log(event.target);
    const modalWindowEl = createModalWindowLightBox(event.target);
    const instanceBasicLightbox = basicLightbox.create(modalWindowEl, {
        onShow: () => {
            window.addEventListener("keydown", onBtnEscCloseLightBox);
        },
        onClose: () => {
            window.removeEventListener("keydown", onBtnEscCloseLightBox);
        },
    });

    instanceBasicLightbox.show();
    
    function onBtnEscCloseLightBox(event) {
        if (event.code === "Escape") {
            instanceBasicLightbox.close();
        }
    }
}

function createModalWindowLightBox(element) {
  return ` <img
    src = "${element.dataset.source}" 
    alt = "${element.alt}">`;
}
