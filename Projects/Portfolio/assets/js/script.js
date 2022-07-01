const btnMobile = document.getElementById('btn-mobile');


function toggleMenu(event) {
    if (event.type == 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    constactive = nav.classList.contains('active');
    event.cuurentTarget.setAttribute('aria-expanded', 'active');
    
}
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);