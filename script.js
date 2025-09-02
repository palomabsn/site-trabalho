  // Menu Mobile
        const mobileMenu = document.getElementById('mobileMenu');
        const menu = document.getElementById('menu');
        
        mobileMenu.addEventListener('click', () => {
            menu.classList.toggle('show');
        });
        
        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                if (menu.classList.contains('show')) {
                    menu.classList.remove('show');
                }
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
