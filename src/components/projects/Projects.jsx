import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: 'Lighthouse Hospitality Management & Booking System',
    subtitle: 'Full-Stack Hospitality Platform',
    description:
      'End-to-end web platform to manage property units, reservations, and guest bookings with an analytics dashboard for revenue, properties, bookings, and users, plus FCM-powered notifications and mobile integration.',
    tags: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Flutter'],
    images: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    ],
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
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80',
    ],
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
    images: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=80',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    ],
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
    images: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      'https://images.unsplash.com/photo-1556740734-754f4ba87364?w=800&q=80',
      'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&q=80',
    ],
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
    images: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
      'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&q=80',
      'https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=800&q=80',
    ],
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
    images: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80',
      'https://images.unsplash.com/photo-1515488142435-05e8381dc3d6?w=800&q=80',
      'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800&q=80',
    ],
    year: '2022',
    category: 'Mobile App',
    links: { live: 'https://strongerkiddos.com/', github: '#' },
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
            Real client and personal projects built with Flutter, React, Next.js, and modern backend tools.
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
