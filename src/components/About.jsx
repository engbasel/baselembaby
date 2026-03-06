import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const stats = [
  { value: '5+', label: 'Years' },
  { value: '50+', label: 'Projects' },
  { value: '30+', label: 'Clients' },
];

const images = [
  {
    url: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=600&q=80',
    alt: 'Working on code',
  },
  {
    url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80',
    alt: 'Coding on laptop',
  },
  {
    url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80',
    alt: 'Programming monitor',
  },
  {
    url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
    alt: 'Code on screen',
  },
  {
    url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',
    alt: 'Developer workspace',
  },
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="section-label"
            >
              About
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="section-title mb-6"
            >
              The Story So Far
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-5 text-[var(--color-text-secondary)] leading-relaxed"
            >
              <p>
                I'm a{' '}
                <span className="text-[var(--color-text)] font-medium">Senior Software Engineer</span>{' '}
                with 5+ years of experience building digital products. My journey started with curiosity about how apps work and evolved into a passion for crafting them.
              </p>
              <p>
                I specialize in{' '}
                <span className="text-[var(--color-accent)]">Flutter</span> for cross-platform mobile and{' '}
                <span className="text-[var(--color-accent)]">React</span> for web applications. I focus on writing clean, maintainable code that scales.
              </p>
              <p>
                When not coding, I explore new technologies and contribute to open-source projects. Always open to new challenges.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex gap-10 mt-10"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <span className="font-display text-4xl font-semibold text-[var(--color-accent)]">
                    {stat.value}
                  </span>
                  <p className="text-sm text-[var(--color-text-muted)] mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Auto-scrolling Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--color-surface)] relative">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex].url}
                  alt={images[currentIndex].alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
              </AnimatePresence>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Image indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-white w-6'
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>

            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 w-40 h-40 rounded-2xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 -z-10"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -top-4 -left-4 w-24 h-24 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] -z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
