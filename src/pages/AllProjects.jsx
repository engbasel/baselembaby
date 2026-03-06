import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowUpRight, ArrowLeft } from 'lucide-react';

const allProjects = [
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
  {
    id: 5,
    title: 'TaskFlow',
    subtitle: 'Project Management',
    description: 'Collaborative project management tool with real-time updates and team analytics.',
    tags: ['React', 'GraphQL', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80',
    year: '2023',
    category: 'Web App',
    links: { live: '#', github: '#' },
  },
  {
    id: 6,
    title: 'FoodieApp',
    subtitle: 'Food Delivery',
    description: 'Food delivery app with real-time order tracking and restaurant management dashboard.',
    tags: ['Flutter', 'Firebase', 'Google Maps'],
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
    year: '2023',
    category: 'Mobile App',
    links: { live: '#', github: '#' },
  },
  {
    id: 7,
    title: 'CryptoWatch',
    subtitle: 'Portfolio Tracker',
    description: 'Cryptocurrency portfolio tracker with real-time price alerts and market analysis.',
    tags: ['React Native', 'Redux', 'WebSocket'],
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80',
    year: '2022',
    category: 'Mobile App',
    links: { live: '#', github: '#' },
  },
  {
    id: 8,
    title: 'LearnHub',
    subtitle: 'E-Learning Platform',
    description: 'Online learning platform with video courses, quizzes, and progress tracking.',
    tags: ['Next.js', 'Prisma', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
    year: '2022',
    category: 'Web App',
    links: { live: '#', github: '#' },
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="card-shell bento-glow">
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-transparent to-transparent opacity-60" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1.5 text-xs font-medium bg-black/50 backdrop-blur-sm text-white rounded-full">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Meta */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-semibold text-[var(--color-accent)]">
              {project.year}
            </span>
            <span className="w-6 h-px bg-[var(--color-border)]" />
            <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider">
              {project.subtitle}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-xl font-semibold text-[var(--color-text)] mb-2 tracking-[-0.02em] group-hover:text-[var(--color-accent)] transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-[var(--color-text-secondary)] text-[15px] mb-4 leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag) => (
              <span key={tag} className="tag text-xs">
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            <motion.a
              href={project.links.live}
              className="btn btn-primary text-sm group/btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              View
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </motion.a>
            <motion.a
              href={project.links.github}
              className="btn btn-ghost text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-3.5 h-3.5" />
              Code
            </motion.a>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const AllProjects = () => {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      {/* Header */}
      <header className="sticky top-0 z-50 glass">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="btn btn-ghost group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="section">
        <div className="container">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-header text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="section-label"
            >
              Portfolio
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="section-title"
            >
              All Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="section-subtitle mx-auto"
            >
              A complete collection of my work across mobile and web development.
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AllProjects;
