// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Cache DOM elements
    const menuBtn = document.querySelector('.menu-btn');
    const drawerNav = document.querySelector('.drawer-nav');
    const overlay = document.querySelector('.overlay');
    const drawerLinks = document.querySelectorAll('.drawer-nav a');
    const header = document.querySelector('header');
    
    // Return early if required elements don't exist
    if (!menuBtn || !drawerNav || !overlay || !header) return;
    
    // Add shadow to header on scroll
    let lastScroll = 0;
    const headerHeight = header.offsetHeight;
    
    // Toggle mobile menu
    function toggleMenu() {
        const isOpening = !drawerNav.classList.contains('open');
        
        // Toggle classes
        drawerNav.classList.toggle('open', isOpening);
        overlay.classList.toggle('active', isOpening);
        document.body.style.overflow = isOpening ? 'hidden' : '';
        
        // Toggle menu icon between bars and times
        const icon = menuBtn.querySelector('i');
        if (isOpening) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }
    
    // Close menu when clicking on overlay
    function handleOverlayClick(e) {
        if (e.target === overlay && drawerNav.classList.contains('open')) {
            toggleMenu();
        }
    }
    
    // Close menu when clicking on a link
    function handleLinkClick() {
        if (window.innerWidth <= 992) {
            toggleMenu();
        }
    }
    
    // Handle window resize
    let resizeTimeout;
    function handleResize() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            if (window.innerWidth > 992 && drawerNav.classList.contains('open')) {
                toggleMenu();
            }
        }, 100);
    }
    
    // Handle scroll for header shadow
    function handleScroll() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > headerHeight) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    }
    
    // Set active link in navigation
    function setActiveLink() {
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const hash = window.location.hash || '';
        const navLinks = document.querySelectorAll('.navigation a, .drawer-nav a');
        
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            if (!linkHref) return;
            
            const linkPath = linkHref.split('/').pop();
            const linkHash = linkHref.split('#')[1] || '';
            
            // Remove active class from all links
            link.classList.remove('nav-active');
            
            // Add active class to current page link
            if ((linkPath === currentPath || 
                (currentPath === '' && linkPath === 'index.html') ||
                (currentPath === 'index.html' && linkPath === '')) ||
                (hash && linkHash === hash.split('#').pop())) {
                link.classList.add('nav-active');
            }
        });
    }
    
    // Event Listeners
    menuBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', handleOverlayClick);
    
    drawerLinks.forEach(link => {
        link.addEventListener('click', handleLinkClick);
    });
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    // Initialize
    setActiveLink();
    handleScroll(); // Set initial scroll state
});
        if (linkPath === currentPath || 
            (currentPath === '' && linkPath === 'index.html') ||
            (currentPath === 'index.html' && linkPath === '')) {
            link.classList.add('nav-active');
        }

// Run when page loads
document.addEventListener('DOMContentLoaded', () => {
    setActiveLink();
});
