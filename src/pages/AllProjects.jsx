import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowUpRight, ArrowLeft } from 'lucide-react';

const allProjects = [
  {
    id: 1,
    title: 'Lighthouse Hospitality Management & Booking System',
    subtitle: 'Full-Stack Hospitality Platform',
    description:
      'End-to-end web platform to manage property units, reservations, and guest bookings with an analytics dashboard for revenue, properties, bookings, and users, plus FCM-powered notifications and mobile integration.',
    tags: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Flutter'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    year: '2024',
    category: 'Full-Stack Web App',
    links: { live: 'https://light-house-web-dashboard.vercel.app', github: 'https://github.com/engbasel/Light-House-web-dashboard' },
  },
  {
    id: 2,
    title: 'Misfivie — Luxury Fashion E-commerce',
    subtitle: 'Luxury Fashion Store',
    description:
      'Bilingual (AR/EN) fashion e-commerce platform with full admin dashboard for products, orders, customers, automated post-purchase emails, Google OAuth2, and integrated Bosta shipping workflow.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Appwrite', 'Nodemailer', 'n8n'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    year: '2024',
    category: 'Web App',
    links: { live: 'https://mis-five5.vercel.app', github: 'https://github.com/engbasel/mis-five5' },
  },
  {
    id: 3,
    title: 'MenuHub — Online Restaurant Menu & Ordering',
    subtitle: 'Restaurant Menu Platform',
    description:
      'Digital menu and ordering platform where restaurants manage menus, receive customer orders via WhatsApp, and track them through an admin dashboard backed by a self-hosted backend.',
    tags: ['React', 'Supabase', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=80',
    year: '2024',
    category: 'Web App',
    links: { live: 'https://menu-hub-phi.vercel.app', github: 'https://github.com/engbasel/menuHUB' },
  },
  {
    id: 4,
    title: 'Shemyra Family Store — E-commerce Platform',
    subtitle: 'Family Store Online Shop',
    description:
      'E-commerce web app with full shopping flow including product catalog, secure cart, user auth, responsive UI, real-time inventory, payments, and an admin dashboard.',
    tags: ['JavaScript', 'React.js', 'Node.js', 'Appwrite', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    year: '2023',
    category: 'Web App',
    links: { live: 'https://shemyra-family-store.vercel.app/', github: '#' },
  },
  {
    id: 5,
    title: 'Almaseyah Web Application',
    subtitle: 'Web Store & ERP',
    description:
      'Flutter web application for a home appliances store with an integrated ERP system to manage products, inventory, and store operations from a centralized admin dashboard.',
    tags: ['Flutter Web', 'Firebase Auth', 'Cloud Firestore', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
    year: '2023',
    category: 'Web App',
    links: { live: 'https://almaseyah.vercel.app', github: '#' },
  },
  {
    id: 6,
    title: 'Stronger Kiddos — Child Development App',
    subtitle: 'Child Development Mobile App',
    description:
      'Cross-platform Flutter app that helps parents follow developmental programs, track child progress, and access educational content with offline-first caching and advanced navigation.',
    tags: ['Flutter', 'Dart', 'BLoC', 'GoRouter', 'Drift (SQLite)', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80',
    year: '2022',
    category: 'Mobile App',
    links: { live: 'https://strongerkiddos.com/', github: '#' },
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
              target="_blank"
              rel="noopener noreferrer"
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
              target="_blank"
              rel="noopener noreferrer"
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
