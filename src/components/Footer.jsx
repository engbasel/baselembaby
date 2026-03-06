import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-[var(--color-border)]">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            className="font-display text-lg font-semibold"
          >
            <span className="text-[var(--color-accent)]">&gt;</span>
            <span className="text-[var(--color-text)]">Basel</span>
            <span className="text-[var(--color-text-muted)]">.dev</span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-[var(--color-text-muted)] text-center">
            © {currentYear} Basel Embaby. Built with React & Tailwind.
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
