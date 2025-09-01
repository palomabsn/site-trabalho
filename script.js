// Menu Mobile
const mobileMenu = document.getElementById('mobileMenu');
const menu = document.getElementById('menu').querySelector('ul');

mobileMenu.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// Fechar menu ao clicar em um link
menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
        menu.classList.remove('show');
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});