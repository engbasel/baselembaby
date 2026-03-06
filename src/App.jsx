import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroBento from './components/HeroBento';
import Projects from './components/Projects';
import Expertise from './components/Expertise';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AllProjects from './pages/AllProjects';

function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Navbar />
      <main>
        <HeroBento />
        <Projects />
        <Expertise />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  useEffect(() => {
    document.title = 'Basel Embaby - Senior Software Engineer';
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
