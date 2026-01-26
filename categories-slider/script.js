
/********************************** categories-list **********************************/

let categoriesList = document.querySelector('.categories-list');
let leftCategories = document.querySelector('.left-categories');
let rightCategories = document.querySelector('.right-categories');


// ocultar botones si no hay scroll
ocultarBotones();
categoriesList.addEventListener('scroll', () => {
    ocultarBotones();
});
// ejecutar al redimensionar la ventana
window.addEventListener('resize', () => {
    ocultarBotones();
});
function ocultarBotones() {
    if (categoriesList.scrollLeft === 0) {
        leftCategories.classList.add('d-none');
    } else {
        leftCategories.classList.remove('d-none');
    }
    if (categoriesList.scrollWidth - categoriesList.clientWidth === categoriesList.scrollLeft) {
        rightCategories.classList.add('d-none');
    } else {
        rightCategories.classList.remove('d-none');
    }
}

leftCategories.addEventListener('click', () => {
    categoriesList.scrollBy({
        left: -200,
        behavior: 'smooth'
    });
});

rightCategories.addEventListener('click', () => {
    categoriesList.scrollBy({
        left: 200,
        behavior: 'smooth'
    });
});

/********************************** categories-list **********************************/
