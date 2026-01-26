// carrusel infinito a partir de una lista de imagenes
const carrusel = document.querySelector('.carrusel');
/* 
1720371418-google-one.webp
canva.webp
capcut.webp
channels4_profile.jpg
chatgpt-1.png
Combo-streaming-premium-bolivia.png
crunchyroll.webp
deezer-1.png
descarga (3).png
descarga (6).png
directv circulo.jpeg
Diseño sin título (2).png
Diseño sin título (3).png
Diseño sin título (6).png
Diseño sin título (9).png
disney-1.webp
drama box circulos.png
ecf324e0-7df6-41ea-a736-f3f47cacb909.png
Eset.webp
flujo-tv-logo-png_seeklogo-556291.png
freefire-1.png
GAMMA-cta.webp
images (2).jfif
images (4).jfif
images (5).jfif
images (6).jfif
mplay.webp
netflix circulo.jpeg
OJyklgusajix.jpg
perplexity-ai-logo-rounded-hd-free-png.png
prime.webp
redes-sociales.jpg
spotify.webp
turnitin.png
universal.webp
unnamed (1).png
unnamed-7.jpg
viki.png
youtube.webp
*/
let images = [
    '1720371418-google-one.webp',
    'canva.webp',
    'capcut.webp',
    'channels4_profile.jpg',
    'chatgpt-1.png',
    'Combo-streaming-premium-bolivia.png',
    'crunchyroll.webp',
    'deezer-1.png',
    'descarga (3).png',
    'descarga (6).png',
    'directv circulo.jpeg',
    'Diseño sin título (2).png',
    'Diseño sin título (3).png',
    'Diseño sin título (6).png',
    'Diseño sin título (9).png',
    'disney-1.webp',
    'drama box circulos.png',
    'ecf324e0-7df6-41ea-a736-f3f47cacb909.png',
    'Eset.webp',
    'flujo-tv-logo-png_seeklogo-556291.png',
    'freefire-1.png',
    'GAMMA-cta.webp',
    'images (2).jfif',
    'images (4).jfif',
    'images (5).jfif',
    'images (6).jfif',
    'mplay.webp',
    'netflix circulo.jpeg',
    'OJyklgusajix.jpg',
    'perplexity-ai-logo-rounded-hd-free-png.png',
    'prime.webp',
    'redes-sociales.jpg',
    'spotify.webp',
    'turnitin.png',
    'universal.webp',
    'unnamed (1).png',
    'unnamed-7.jpg',
    'viki.png',
    'youtube.webp'
];

// duplicar las imagenes para crear el efecto infinito
images = images.concat(images);

images.forEach(src => {
    let div = document.createElement('div');
    div.classList.add('rounded-circle', 'carrusel-image', 'flex-shrink-0', 'm-1', 'shadow-sm', 'overflow-hidden');
    const img = document.createElement('img');
    let dimension = '120px';
    div.style.width = dimension;
    div.style.height = dimension;
    img.classList.add('object-fit-cover', 'bg-black', 'img-fluid', 'rounded-circle');
    img.role = 'button';
    img.src = 'carrusel/images/' + src;;
    div.appendChild(img);
    carrusel.appendChild(div);
});


let scrollAmount = 0;
let animationPaused = false;
let animationFrameId;

function scrollCarrusel() {
    if (!animationPaused) {
        scrollAmount -= 2;
        if (scrollAmount <= 0) {
            scrollAmount = carrusel.scrollWidth / 2;
        }
        carrusel.scrollLeft = scrollAmount;
    }
    animationFrameId = requestAnimationFrame(scrollCarrusel);
}

carrusel.addEventListener('mouseenter', () => {
    animationPaused = true;
});

carrusel.addEventListener('mouseleave', () => {
    animationPaused = false;
});

scrollCarrusel();