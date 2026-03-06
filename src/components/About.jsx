import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const stats = [
  { value: '5+', label: 'Years' },
  { value: '50+', label: 'Projects' },
  { value: '30+', label: 'Clients' },
];

const storyChapters = [
  {
    title: 'The Beginning',
    text: "My journey started with a deep curiosity about how digital products are built. I spent countless nights exploring the inner workings of apps, which evolved into a lifelong passion for crafting high-quality software.",
    image: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=600&q=80',
    accent: 'Software Engineering'
  },
  {
    title: 'Deep Specialization',
    text: "I chose to specialize in Flutter for powerful mobile experiences and React for modern web apps. My focus is on creating seamless interfaces that feel intuitive and responsive across all devices.",
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80',
    accent: 'Flutter & React'
  },
  {
    title: 'Building for Scale',
    text: "With 5+ years of experience, I've learned that clean code is not just a preference—it's a necessity. I build maintainable architectures that allow products to grow from MVPs to enterprise-level platforms.",
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80',
    accent: 'Maintainable Code'
  },
  {
    title: 'Impactful Products',
    text: "I've had the privilege of working on 50+ projects for over 30 global clients. Each project taught me how to balance technical excellence with business goals to deliver real value to users.",
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
    accent: 'Client Success'
  },
  {
    title: 'Always Evolving',
    text: "Technology never stands still, and neither do I. I'm constantly exploring open-source contributions and new languages to stay at the cutting edge of the industry. Ready for the next big challenge.",
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',
    accent: 'Continuous Learning'
  }
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll stories every 5 seconds for better readability
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % storyChapters.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <div className="relative">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label"
            >
              About Me
            </motion.span>

            <div className="min-h-[350px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="section-title mb-6">
                    {storyChapters[currentIndex].title}
                  </h2>

                  <div className="space-y-5 text-[var(--color-text-secondary)] leading-relaxed text-lg">
                    <p>
                      {storyChapters[currentIndex].text.split(storyChapters[currentIndex].accent).map((part, i, arr) => (
                        <span key={i}>
                          {part}
                          {i < arr.length - 1 && (
                            <span className="text-[var(--color-accent)] font-medium">
                              {storyChapters[currentIndex].accent}
                            </span>
                          )}
                        </span>
                      ))}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex gap-10 mt-10"
              >
                {stats.map((stat, index) => (
                  <div key={stat.label}>
                    <span className="font-display text-4xl font-semibold text-[var(--color-accent)]">
                      {stat.value}
                    </span>
                    <p className="text-sm text-[var(--color-text-muted)] mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right - Auto-scrolling Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-[var(--color-surface)] relative shadow-2xl border border-[var(--color-border)]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={storyChapters[currentIndex].image}
                  alt={storyChapters[currentIndex].title}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1, rotate: 2 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.95, rotate: -2 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />
              </AnimatePresence>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/40 via-transparent to-transparent" />
            </div>

            {/* Image indicators */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
              {storyChapters.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${index === currentIndex
                      ? 'bg-[var(--color-accent)] w-10'
                      : 'bg-[var(--color-border)] w-4 hover:bg-[var(--color-accent)]/50'
                    }`}
                  aria-label={`Go to chapter ${index + 1}`}
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
