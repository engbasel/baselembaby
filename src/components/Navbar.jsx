import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Work', href: '#work' },
  { name: 'Experience', href: '#expertise' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 pt-5 md:pt-8"
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <nav
            className={`grid grid-cols-[1fr_auto_1fr] items-center h-[58px] px-5 rounded-full border transition-all duration-500 ${
              isScrolled
                ? 'bg-black/60 backdrop-blur-2xl border-white/15 shadow-[0_20px_40px_rgba(0,0,0,0.4)]'
                : 'bg-black/20 backdrop-blur-md border-white/10 shadow-none'
            }`}
          >
            {/* Left: Logo Section */}
            <div className="flex justify-start">
              <a
                href="#"
                onClick={scrollToTop}
                className="flex items-center gap-1.5 font-display text-[16px] md:text-[18px] font-bold tracking-tight group"
              >
                <span className="text-purple-500 font-mono transition-transform group-hover:-translate-x-0.5">&gt;</span>
                <span className="text-white">Basel</span>
                <span className="text-white/40 font-light">.dev</span>
              </a>
            </div>

            {/* Center: Desktop Links In Separate Container */}
            <div className="hidden md:flex justify-center items-center">
              <div className="flex items-center gap-1.5 rounded-full p-1 border border-white/10 bg-white/5 backdrop-blur-xl">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="px-[18px] py-[7px] text-[13px] font-medium tracking-wide text-white/70 hover:text-white transition-all duration-300 rounded-full hover:bg-white/10"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Right: CTA Section */}
            <div className="flex justify-end items-center gap-4">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="hidden md:inline-flex items-center justify-center h-[42px] px-6 rounded-full bg-purple-600 text-white text-[13px] font-bold tracking-tight hover:bg-purple-500 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 shadow-[0_12px_24px_rgba(147,51,234,0.35)]"
              >
                Get in Touch
              </a>

              {/* Mobile Menu Icon */}
              <button
                className="md:hidden w-10 h-10 flex items-center justify-center text-white/80 hover:text-white rounded-full transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Backdrop & Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/90 backdrop-blur-md md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-24 left-6 right-6 z-50 md:hidden"
            >
              <div className="bg-[#0c0c0c] border border-white/10 rounded-[32px] p-4 shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden">
                <nav className="flex flex-col gap-10 py-1">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                      className="flex items-center gap-4 px-5 py-[14px] rounded-[20px] text-[15px] font-semibold text-white/60 hover:text-white hover:bg-white/5 transition-colors group"
                    >
                      <span className="text-purple-500/40 text-[11px] font-mono group-hover:text-purple-500 transition-colors">
                        0{index + 1}
                      </span>
                      {link.name}
                    </motion.a>
                  ))}
                </nav>
                <div className="mt-4 pt-4 border-t border-white/5">
                  <a
                    href="#contact"
                    onClick={(e) => scrollToSection(e, '#contact')}
                    className="flex items-center justify-center w-full h-[54px] rounded-[20px] text-[15px] font-bold bg-purple-600 text-white shadow-lg active:scale-95 transition-all"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;