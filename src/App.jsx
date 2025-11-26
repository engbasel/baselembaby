import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Freelance from './components/Freelance';
import Certifications from './components/Certifications';
import Languages from './components/Languages';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  useEffect(() => {
    // Set document title
    document.title = 'Basel Embaby - Mobile App Developer';

    // Add Font Awesome
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Freelance />
      <Certifications />
      <Languages />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
