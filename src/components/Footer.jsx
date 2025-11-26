import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">BASEL EMBABY</h3>
            <p className="footer-description">
              Mobile App Developer specializing in Flutter, AI Integration, and IoT solutions
            </p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/basel-embaby-948671227/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://twitter.com/embaby_basel" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.facebook.com/basel.embaby.9/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://github.com/engbasel" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
              <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
              <li><a href="#freelance" onClick={(e) => { e.preventDefault(); scrollToSection('freelance'); }}>Freelance</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Flutter Development</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Web Development</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>AI Integration</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>IoT Solutions</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-contact">
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:basel.a.embaby@gmail.com">basel.a.embaby@gmail.com</a>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <a href="tel:+2001060417664">+20 01060417664</a>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Mansoura, Egypt</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Basel Embaby. All Rights Reserved.</p>
          <p className="footer-made-with">
            Made with <i className="fas fa-heart"></i> using React & Firebase
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
