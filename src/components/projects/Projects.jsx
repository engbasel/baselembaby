import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ProjectCard from './ProjectCard';

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
