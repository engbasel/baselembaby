import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!project.images || project.images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(timer);
  }, [project.images]);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0.95, 1, 1, 0.98]);

  return (
    <motion.article
      ref={cardRef}
      style={{ opacity, scale }}
      className="group"
    >
      <div className="card-shell bento-glow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Image Section */}
          <motion.div
            style={{ y }}
            className={`relative h-72 lg:h-96 lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : ''} overflow-hidden`}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={project.images[currentImageIndex]}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
            </AnimatePresence>
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-transparent to-transparent opacity-60 lg:opacity-0" />

            {/* Pagination Dots */}
            <div className="absolute bottom-4 right-4 flex gap-1.5 z-10">
              {project.images.map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === currentImageIndex ? 'bg-white w-4' : 'bg-white/40'
                    }`}
                />
              ))}
            </div>

            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute top-4 left-4"
            >
              <span className="px-3 py-1.5 text-xs font-medium bg-black/50 backdrop-blur-sm text-white rounded-full">
                {project.category}
              </span>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <div className={`lg:col-span-5 p-8 lg:p-10 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
            {/* Meta info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="text-xs font-semibold text-[var(--color-accent)]">
                {project.year}
              </span>
              <span className="w-8 h-px bg-[var(--color-border)]" />
              <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider">
                {project.subtitle}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display text-3xl lg:text-4xl font-semibold text-[var(--color-text)] mb-4 group-hover:text-[var(--color-accent)] transition-colors duration-300"
            >
              {project.title}
            </motion.h3>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-[15px] text-[var(--color-text-secondary)] mb-6 leading-relaxed"
            >
              {project.description}
            </motion.p>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {project.tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  className="tag"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4"
            >
              <motion.a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary group/btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink className="w-4 h-4" />
                View Project
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </motion.a>
              <motion.a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4" />
                Code
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;

