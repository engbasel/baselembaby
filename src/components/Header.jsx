import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/assets/images/Basel Ahmed Embaby Mobile Developer.pdf';
    link.download = 'Basel Ahmed Embaby Mobile Developer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <a href="#" className="logo">Basel Embaby</a>

          <nav className="nav-desktop">
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
            <a href="#freelance" onClick={(e) => { e.preventDefault(); scrollToSection('freelance'); }}>Freelance</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
          </nav>

          <button className="menu-icon" onClick={toggleMenu} aria-label="Toggle menu">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </header>

      {/* Side Menu Overlay */}
      <div
        className={`side-menu-overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={closeMenu}
      ></div>

      {/* Side Menu */}
      <div className={`side-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="side-menu-header">
          <h3>Menu</h3>
          <button className="close-menu" onClick={closeMenu} aria-label="Close menu">
            <i className="fas fa-times"></i>
          </button>
        </div>

        <nav className="side-menu-nav">
          <a href="#" className="side-menu-item" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
            <i className="fas fa-home"></i>
            <span>Home</span>
          </a>
          <a href="#services" className="side-menu-item" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>
            <i className="fas fa-cogs"></i>
            <span>Services</span>
          </a>
          <a href="#projects" className="side-menu-item" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
            <i className="fas fa-project-diagram"></i>
            <span>Projects</span>
          </a>
          <a href="#freelance" className="side-menu-item" onClick={(e) => { e.preventDefault(); scrollToSection('freelance'); }}>
            <i className="fas fa-laptop-code"></i>
            <span>Freelance</span>
          </a>
          <a href="#certifications" className="side-menu-item" onClick={(e) => { e.preventDefault(); scrollToSection('certifications'); }}>
            <i className="fas fa-award"></i>
            <span>Certifications</span>
          </a>
          <a href="#contact" className="side-menu-item" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
            <i className="fas fa-envelope"></i>
            <span>Contact</span>
          </a>
          <a href="#" className="side-menu-item" onClick={(e) => { e.preventDefault(); handleDownloadCV(); }}>
            <i className="fas fa-download"></i>
            <span>Download CV</span>
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
