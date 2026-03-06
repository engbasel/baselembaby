import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const HeroBentoGrid = () => {
  return (
    <>
      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="col-span-2 card-shell bento-glow relative h-72 md:h-80 p-10"
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
              Software Engineer
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
    </>
  );
};

export default HeroBentoGrid;

