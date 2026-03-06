import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { name: 'Work', href: '#work' },
  { name: 'Experience', href: '#expertise' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

function getScrollOffset(navEl) {
  const navH = navEl?.getBoundingClientRect().height ?? 64;
  const topGap = 28;
  return Math.round(navH + topGap);
}

const Navbar = () => {
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#work');

  const sectionHrefs = useMemo(() => navLinks.map((l) => l.href), []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const sectionEls = sectionHrefs
      .map((href) => document.querySelector(href))
      .filter(Boolean);

    if (!sectionEls.length) return undefined;

    const offset = getScrollOffset(navRef.current);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActiveHref(`#${visible.target.id}`);
      },
      {
        root: null,
        rootMargin: `-${offset}px 0px -55% 0px`,
        threshold: [0.12, 0.18, 0.25],
      }
    );

    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionHrefs]);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (!el) return;

    const offset = getScrollOffset(navRef.current);
    const top = el.getBoundingClientRect().top + window.scrollY - offset;

    setActiveHref(href);
    window.scrollTo({ top, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -22, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 pt-4 md:pt-6"
      >
        <div className="container relative">
          <nav
            ref={navRef}
            className={[
              'pointer-events-auto',
              'grid grid-cols-[auto_1fr_auto] items-center',
              'h-12 md:h-14',
              'px-4 md:px-5',
              'rounded-full border transition-all duration-300',
              isScrolled
                ? 'bg-black/55 backdrop-blur-2xl border-white/14 shadow-[0_18px_45px_rgba(0,0,0,0.55)]'
                : 'bg-black/30 backdrop-blur-xl border-white/10 shadow-[0_14px_40px_rgba(0,0,0,0.40)]',
            ].join(' ')}
            aria-label="Primary"
          >
            {/* Logo */}
            <a
              href="#"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 font-display text-[15px] md:text-lg font-semibold tracking-[-0.03em] select-none"
              aria-label="Go to top"
            >
              <span className="text-[var(--color-accent)]">&gt;</span>
              <span className="text-[var(--color-text)]">Basel</span>
              <span className="text-[var(--color-text-muted)]">.dev</span>
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex justify-center">
              <div className="flex items-center gap-8 rounded-full p-1.5 border border-white/8 bg-white/4 backdrop-blur-xl">
                {navLinks.map((link) => {
                  const isActive = activeHref === link.href;
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      aria-current={isActive ? 'page' : undefined}
                      whileTap={{ scale: 0.98 }}
                      className={[
                        'relative rounded-xl px-[18px] py-2 text-[13px] font-medium tracking-[-0.01em] transition-colors duration-200',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/60',
                        isActive ? 'text-white' : 'text-white/70 hover:text-white',
                        'after:content-[\'\'] after:absolute after:left-5 after:right-5 after:bottom-1 after:h-px after:rounded-full after:bg-white/0 after:transition-colors after:duration-200',
                        isActive ? 'after:bg-white/0' : 'hover:after:bg-white/25',
                      ].join(' ')}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="navActivePill"
                          className="absolute inset-0 rounded-x0.5 bg-white/10 border border-white/10 shadow-[0_10px_24px_rgba(0,0,0,0.35)]"
                          transition={{ type: 'spring', stiffness: 480, damping: 40 }}
                          aria-hidden="true"
                        />
                      )}
                      <span className="relative">{link.name}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center justify-end gap-2">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="hidden md:inline-flex btn btn-primary rounded-full px-5 shadow-[0_10px_30px_rgba(139,92,246,0.25)]"
              >
                Get in Touch
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                className="md:hidden w-10 h-10 flex items-center justify-center text-[var(--color-text)] rounded-full hover:bg-white/5 transition-colors"
                onClick={() => setIsMobileMenuOpen((v) => !v)}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            />

            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-[88px] left-4 right-4 z-50 md:hidden"
            >
              <div className="rounded-3xl border border-white/10 bg-[var(--color-surface)] shadow-[0_28px_70px_rgba(0,0,0,0.65)] overflow-hidden">
                <nav className="p-3 flex flex-col gap-2" aria-label="Mobile">
                  {navLinks.map((link, index) => {
                    const isActive = activeHref === link.href;
                    return (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => scrollToSection(e, link.href)}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.045 }}
                        className={[
                          'flex items-center justify-between gap-4 px-5 py-4 rounded-2xl transition-colors',
                          isActive
                            ? 'bg-white/6 text-[var(--color-text)]'
                            : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-hover)]',
                        ].join(' ')}
                      >
                        <span className="flex items-center gap-4">
                          <span className="text-[var(--color-accent)] text-xs font-semibold tabular-nums">
                            0{index + 1}
                          </span>
                          <span className="text-[15px] font-semibold">{link.name}</span>
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-white/40" />
                      </motion.a>
                    );
                  })}
                </nav>

                <div className="p-3 pt-0">
                  <a
                    href="#contact"
                    onClick={(e) => scrollToSection(e, '#contact')}
                    className="flex items-center justify-center w-full py-4 rounded-2xl text-[15px] font-semibold bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] transition-colors"
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