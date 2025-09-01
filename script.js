// Menu Mobile
const mobileMenu = document.getElementById('mobileMenu');
const menu = document.getElementById('menu');

if (mobileMenu && menu) {
    // Alterna a classe show ao clicar no hambúrguer
    mobileMenu.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('show');
        mobileMenu.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Fecha o menu ao clicar em qualquer link
    menu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            menu.classList.remove('show');
            mobileMenu.setAttribute('aria-expanded', 'false');
        });
    });
}
