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
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 md:pt-28 lg:pt-32">
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
    document.title = 'Basel Embaby - Software Engineer';
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
