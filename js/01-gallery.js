import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const markup = galleryItems.map(({ preview, original, description }) =>
    `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </div>`).join("");

galleryContainer.insertAdjacentHTML('beforeend', markup);
// console.log(markup); 

galleryContainer.addEventListener('click', onclick);

function onclick(evt) {
    evt.preventDefault();
    modalImg(evt); 
}

function modalImg(evt) {
    const instance =  basicLightbox.create(
        `<img src="${evt.target.dataset.source}" width="800" height="600">`
    ).show()   

}

// document.querySelector('div.gallery').onclick = () => {

// 	basicLightbox.create(`
// 		<img width="1400" height="900" scr="">
// 	`).show()