import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Fintech Pro',
    subtitle: 'Mobile Banking App',
    description: 'A secure banking application serving 50k+ users with biometric authentication and real-time transaction sync.',
    tags: ['Flutter', 'Bloc', 'Clean Architecture'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    year: '2024',
    category: 'Mobile App',
    links: { live: '#', github: '#' },
  },
  {
    id: 2,
    title: 'Analytics OS',
    subtitle: 'Enterprise Dashboard',
    description: 'Scalable admin dashboard for data visualization, reducing client reporting time by 40%.',
    tags: ['React', 'TypeScript', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    year: '2024',
    category: 'Web App',
    links: { live: '#', github: '#' },
  },
  {
    id: 3,
    title: 'HealthTrack',
    subtitle: 'Wellness Companion',
    description: 'Health tracking app with AI-powered insights and wearable device integration.',
    tags: ['Flutter', 'Firebase', 'ML Kit'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=80',
    year: '2023',
    category: 'Mobile App',
    links: { live: '#', github: '#' },
  },
  {
    id: 4,
    title: 'E-Commerce Platform',
    subtitle: 'Online Store',
    description: 'Full-featured e-commerce solution with payment integration and inventory management.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    year: '2023',
    category: 'Web App',
    links: { live: '#', github: '#' },
  },
];

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
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
            <motion.img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-transparent to-transparent opacity-60 lg:opacity-0" />

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

const Projects = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="section-header text-center lg:text-left"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-label"
          >
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="section-title"
          >
            Selected Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="section-subtitle"
          >
            Projects that showcase my expertise in mobile and web development.
          </motion.p>
        </motion.div>

        {/* Projects List with large spacing */}
        <div className="space-y-16 lg:space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 text-center"
        >
          <Link to="/projects">
            <motion.span
              className="inline-flex items-center gap-2 btn btn-outline btn-lg group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              See All My Work
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
