import './Hero.css';

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/assets/images/Basel Ahmed Embaby Mobile Developer.pdf';
    link.download = 'Basel Ahmed Embaby Mobile Developer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hello, I'm <br />
              <span className="hero-name">Basel Embaby</span>
            </h1>
            <h2 className="hero-subtitle">Mobile App Developer</h2>
            <p className="hero-description">
              Crafting innovative mobile solutions with Flutter, AI integration, and IoT technologies
            </p>

            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={scrollToProjects}>
                <i className="fas fa-briefcase"></i> View My Work
              </button>
              <button className="btn btn-secondary" onClick={handleDownloadCV}>
                <i className="fas fa-download"></i> Download CV
              </button>
            </div>

            <div className="social-icons">
              <a href="https://www.linkedin.com/in/basel-embaby-948671227/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/embaby_basel" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.facebook.com/basel.embaby.9/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://github.com/engbasel" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-circle"></div>
            <div className="hero-circle-2"></div>
            <div className="hero-emoji">👨‍💻</div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;
