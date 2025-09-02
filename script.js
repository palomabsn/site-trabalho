// Seleciona elementos
const mobileMenu = document.getElementById('mobileMenu');
const menu = document.getElementById('menu');

// Toggle menu mobile
mobileMenu.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// Smooth Scroll para links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        // Fecha o menu se estiver aberto
        if (menu.classList.contains('show')) {
            menu.classList.remove('show');
        }

        // Scroll suave
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});