// Function to download CV
function downloadCV() {
    const cvUrl = "images/basel-Embaby-CV.pdf";
    const fileName = "Basel_Embaby_CV.pdf";

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
});
