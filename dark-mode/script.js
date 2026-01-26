
/********************************** dark mode icon simple click **********************************/

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


/********************************** dark mode icon simple click **********************************/


