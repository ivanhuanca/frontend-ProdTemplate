/********************************** ocultar logo al buscar **********************************/

let input = document.querySelector('input[type="search"]');
let logo = document.querySelector('[aria-current="page"]');

input.addEventListener('focus', () => {
    console.log('focus');
    logo.classList.add('d-none');
});
input.addEventListener('blur', () => {
    logo.classList.remove('d-none');
});

/********************************** ocultar logo al buscar **********************************/


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




/********************************** dark mode icon **********************************/

let html = document.documentElement;
let modeToggle = document.querySelector('.bd-mode-toggle button');
modeToggle.addEventListener('click', () => {
    let icon = modeToggle.querySelector('i');
    if (icon.classList.contains('bi-sun-fill')) {
        icon.classList.remove('bi-sun-fill');
        icon.classList.add('bi-moon-fill');
        modeToggle.classList.remove('btn-dark');
        modeToggle.classList.add('btn-light');
    } else {
        icon.classList.remove('bi-moon-fill');
        icon.classList.add('bi-sun-fill');
        modeToggle.classList.remove('btn-light');
        modeToggle.classList.add('btn-dark');
    }
    html.dataset.bsTheme = icon.classList.contains('bi-sun-fill') ? 'dark' : 'light';
});


/********************************** dark mode icon **********************************/








