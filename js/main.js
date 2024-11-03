document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
    let isMenuOpen = false;

    menuIcon.addEventListener('click', function() {
        isMenuOpen = !isMenuOpen;
        
        // Toggle menu open/close
        if (isMenuOpen) {
            navLinks.classList.add('active');
            menuIcon.innerHTML = '<i class="fas fa-times"></i>'; // Change to X icon
        } else {
            navLinks.classList.remove('active');
            menuIcon.innerHTML = '<i class="fas fa-bars"></i>'; // Change back to bars icon
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navLinks.contains(event.target);
        const isClickOnMenuIcon = menuIcon.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnMenuIcon && isMenuOpen) {
            navLinks.classList.remove('active');
            menuIcon.innerHTML = '<i class="fas fa-bars"></i>';
            isMenuOpen = false;
        }
    });

    // Close menu when clicking on a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuIcon.innerHTML = '<i class="fas fa-bars"></i>';
            isMenuOpen = false;
        });
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && isMenuOpen) {
            navLinks.classList.remove('active');
            menuIcon.innerHTML = '<i class="fas fa-bars"></i>';
            isMenuOpen = false;
        }
    });
});
