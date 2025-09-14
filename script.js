function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon')
    }    else{
            menuMobile.classList.add('open');
        }   
}

document.querySelectorAll('.mobile-menu a').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.mobile-menu').classList.remove('open');
    });
});