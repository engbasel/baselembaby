// Function to download CV
function downloadCV() {
    const cvUrl = "images/Basel Ahmed Embaby Mobile Developer.pdf";
    const fileName = "Basel Ahmed Embaby Mobile Developer.pdf";

    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Function to load HTML components
function loadComponent(containerId, componentPath) {
    fetch(componentPath)
        .then(response => response.text())
        .then(html => {
            document.getElementById(containerId).innerHTML = html;
        })
        .catch(error => {
            console.error(`Error loading ${componentPath}:`, error);
        });
}

// Function to handle contact form submission
function handleContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // You can replace this with your actual form submission logic
            // For now, we'll just open an email client with the form data
            
            const mailtoLink = `mailto:basel.a.embaby@gmail.com?subject=${encodeURIComponent(subject || 'Contact from Portfolio')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
            
            window.location.href = mailtoLink;
            
            // Reset form after submission
            contactForm.reset();
            
            // Show success message (you can enhance this with a proper notification)
            alert('Thank you for your message! I will get back to you soon.');
        });
    }
}

// Add event listener for when DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Existing code for loading components
    loadComponent('services-container', 'components/services.html');
    loadComponent('projects-container', 'components/projects.html');
    loadComponent('freelance-container', 'components/freelance.html');
    loadComponent('certifications-container', 'components/certifications.html');
    loadComponent('news-container', 'components/news.html');
    loadComponent('languages-container', 'components/languages.html');
    loadComponent('contact-container', 'components/contact.html');
    loadComponent('footer-container', 'components/footer.html');
    
    // Initialize contact form handler after a slight delay to ensure the form is loaded
    setTimeout(handleContactForm, 1000);

    // Menu functionality
    const menuIcon = document.querySelector('.menu-icon');
    const sideMenu = document.querySelector('.side-menu');
    const overlay = document.querySelector('.side-menu-overlay');
    const closeMenu = document.querySelector('.close-menu');

    // Function to open menu
    function openMenu() {
        sideMenu.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    }

    // Function to close menu
    function closeMenuHandler() {
        sideMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Event listeners
    menuIcon.addEventListener('click', openMenu);
    closeMenu.addEventListener('click', closeMenuHandler);
    overlay.addEventListener('click', closeMenuHandler);

    // Close menu when clicking on menu items
    const menuItems = document.querySelectorAll('.side-menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            if (!item.id === 'change-language') {
                closeMenuHandler();
            }
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sideMenu.classList.contains('active')) {
            closeMenuHandler();
        }
    });
});
