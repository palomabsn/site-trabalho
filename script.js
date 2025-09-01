const mobileMenu = document.getElementById('mobile-menu');
const menuTopo = document.getElementById('menu-topo');

mobileMenu.addEventListener('click', () => {
  menuTopo.classList.toggle('active');
});