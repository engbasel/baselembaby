import { motion } from 'framer-motion';
import { techStack } from './heroConfig';

const HeroTechStack = () => {
  return (
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
  );
};

export default HeroTechStack;

