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









