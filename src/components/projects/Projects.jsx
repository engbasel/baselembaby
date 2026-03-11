import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: -1,
    title: 'ARLO — Premium Modern Apparel',
    subtitle: 'Luxury E-commerce Store',
    description:
      'A high-end e-commerce destination for premium menswear. Features a minimalist, luxury design, exclusive collection drops, and a seamless shopping experience tailored for the sophisticated modern man.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Luxury UI'],
    images: [
      '/projects/ARLO/1.png',
      '/projects/ARLO/2.png',
      '/projects/ARLO/3.png',
    ],
    year: '2025',
    category: 'Web App',
    links: { live: 'https://www.arlostores.com/', github: '#' },
  },
  {
    id: 0,
    title: 'Yolo — Your Smart Travel Companion',
    subtitle: 'All-in-One Tourism & Rewards Platform',
    description:
      'The first application in Egypt that integrates top tour programs, safaris, hotels, and restaurants with a unique rewards and points system. A comprehensive solution for all your travel needs in Egypt.',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Rewards System'],
    images: [
      '/projects/yolo/1.png',
      '/projects/yolo/2.png',
      '/projects/yolo/3.png',
      '/projects/yolo/4.png',
    ],
    year: '2024',
    category: 'Mobile App',
    links: { live: '#', github: '#' },
  },
  {
    id: 1,
    title: 'Lighthouse Hospitality Management & Booking System',
    subtitle: 'Full-Stack Hospitality Platform',
    description:
      'End-to-end web platform to manage property units, reservations, and guest bookings with an analytics dashboard for revenue, properties, bookings, and users, plus FCM-powered notifications and mobile integration.',
    tags: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Flutter'],
    images: [
      '/projects/lightHouse/1.png',
      '/projects/lightHouse/2.png',
      '/projects/lightHouse/3.png',
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
      '/projects/misfive/1.png',
      '/projects/misfive/2.png',
      '/projects/misfive/3.png',
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
      '/projects/MenuHub/1.png',
      '/projects/MenuHub/2.png',
      '/projects/MenuHub/3.png',
      '/projects/MenuHub/4.png',
      '/projects/MenuHub/5.png',
    ],
    year: '2024',
    category: 'Web App',
    links: { live: 'https://menu-hub-phi.vercel.app', github: 'https://github.com/engbasel/menuHUB' },
  },
  {
    id: 5,
    title: 'Almaseyah Web Application',
    subtitle: 'Web Store & ERP',
    description:
      'Flutter web application for a home appliances store with an integrated ERP system to manage products, inventory, and store operations from a centralized admin dashboard.',
    tags: ['Flutter Web', 'Firebase Auth', 'Cloud Firestore', 'Vercel'],
    images: [
      '/projects/Almaseyah/1.png',
      '/projects/Almaseyah/2.png',
      '/projects/Almaseyah/3.png',
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
      '/projects/STRONGERkIDDOS/1.png',
      '/projects/STRONGERkIDDOS/2.png',
      '/projects/STRONGERkIDDOS/3.png',
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
