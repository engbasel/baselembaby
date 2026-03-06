import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { fadeUp } from './heroConfig';

const HeroContent = ({ onViewWork }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="max-w-2xl"
    >
      {/* Badge */}
      <motion.div
        variants={fadeUp}
        custom={0}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-accent-muted)] border border-[var(--color-accent)]/20 mb-6"
      >
        <span className="w-2 h-2 rounded-full bg-[var(--color-success)] animate-pulse" />
        <span className="text-xs font-medium text-[var(--color-accent)]">
          Available for Projects
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        variants={fadeUp}
        custom={1}
        className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.98] tracking-[-0.05em] mb-6"
      >
        <span className="text-[var(--color-text)]">Building </span>
        <span className="text-gradient">Digital</span>
        <br />
        <span className="text-gradient">Products</span>
        <span className="text-[var(--color-text)]"> that</span>
        <br />
        <span className="text-[var(--color-text)]">Matter.</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={fadeUp}
        custom={2}
        className="text-[17px] text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-md"
      >
        UI/UX Designer & Front-End Engineer crafting high-performance{' '}
        <span className="text-[var(--color-text)]">Flutter</span> mobile apps and{' '}
        <span className="text-[var(--color-text)]">React</span> web experiences.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        variants={fadeUp}
        custom={3}
        className="flex flex-wrap gap-3"
      >
        <button
          onClick={onViewWork}
          className="btn btn-lg btn-primary group"
        >
          View My Work
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
        <a
          href="/assets/images/Basel Ahmed Embaby Mobile Developer.pdf"
          download
          className="btn btn-lg btn-outline"
        >
          <Download className="w-4 h-4" />
          Resume
        </a>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;

