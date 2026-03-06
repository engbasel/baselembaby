import { motion } from 'framer-motion';
import { ArrowRight, Download, MapPin } from 'lucide-react';

// Tech stack data
const techStack = [
  { name: 'Flutter', color: '#02569B' },
  { name: 'React', color: '#61DAFB' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Python', color: '#3776AB' },
  { name: 'Supabase', color: '#3ECF8E' },
  { name: 'Firebase', color: '#FFCA28' },
  { name: 'PostgreSQL', color: '#4169E1' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'GraphQL', color: '#E10098' },
  { name: 'n8n', color: '#EA4B71' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'REST APIs', color: '#6BA539' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const HeroBento = () => {
  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      const offset = 100;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-32 pb-14 md:pt-36 md:pb-18 lg:pt-40">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

          {/* Main Content - Left Side */}
          <div className="lg:col-span-7 flex flex-col justify-center">
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
                UI/UX Designer & Senior Front-End Engineer crafting high-performance{' '}
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
                  onClick={scrollToWork}
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
          </div>

          {/* Bento Grid - Right Side */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 md:gap-5 mt-8 lg:mt-0">

            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="col-span-2 card-shell bento-glow relative h-72 md:h-80"
            >
              <div className="absolute inset-0 bg-[radial-gradient(650px_circle_at_30%_25%,rgba(139,92,246,0.22),transparent_45%),radial-gradient(700px_circle_at_85%_80%,rgba(34,211,238,0.14),transparent_45%)] opacity-90" />
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/basel.png"
                  alt="Basel Embaby"
                  className="w-full h-full object-cover object-[55%_72%] scale-[1.08] opacity-95 img-mask-bottom drop-shadow-[0_26px_60px_rgba(0,0,0,0.6)]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/8 to-transparent z-10" />
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <div className="inline-flex max-w-[92%] sm:max-w-[78%] flex-col gap-1 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl px-4 py-3">
                  <p className="text-[11px] text-white/65 tracking-[0.14em] uppercase">
                    Basel Embaby
                  </p>
                  <h2 className="font-display text-[18px] sm:text-xl font-semibold text-white tracking-[-0.03em] leading-tight">
                    UI/UX Designer · Front-End Engineer
                  </h2>
                </div>
              </div>
            </motion.div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="card flex flex-col justify-center items-center text-center bento-glow"
            >
              <span className="font-display text-3xl font-semibold text-[var(--color-accent)]">
                50K+
              </span>
              <span className="text-sm text-[var(--color-text-secondary)] mt-1">
                Users Served
              </span>
            </motion.div>

            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="card flex flex-col justify-center items-center text-center"
            >
              <span className="font-display text-3xl font-semibold text-[var(--color-text)]">
                5+
              </span>
              <span className="text-sm text-[var(--color-text-secondary)] mt-1">
                Years Exp.
              </span>
            </motion.div>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="col-span-2 card flex items-center justify-between"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-[var(--color-text)]">Egypt</p>
                  <p className="text-xs text-[var(--color-text-muted)]">Working Globally</p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="w-2 h-2 rounded-full bg-[var(--color-success)]" />
                <span className="text-xs text-[var(--color-text-secondary)]">Available</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 md:mt-14 pt-7 md:pt-8 border-t border-white/10"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <span className="text-[11px] font-medium text-[var(--color-text-muted)] uppercase tracking-[0.18em] shrink-0">
              Tech Stack
            </span>
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
              {techStack.map((tech) => (
                <span
                  key={tech.name}
                  style={{ '--tech': tech.color }}
                  className="tag tag-mini tech-pill group cursor-default shrink-0"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full mr-2 bg-white/25 transition-colors duration-200 group-hover:bg-[var(--tech)]"
                  />
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBento;
