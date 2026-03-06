import { motion } from 'framer-motion';
import { Smartphone, Globe, Server, Database, Palette, Zap } from 'lucide-react';

const services = [
  {
    number: '01',
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native-feel iOS & Android apps from one Flutter codebase.',
    skills: ['Flutter', 'Dart', 'Bloc', 'Clean Architecture'],
    color: '#02569B',
  },
  {
    number: '02',
    icon: Globe,
    title: 'Web Development',
    description: 'Modern React apps with crisp UI and great performance.',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind'],
    color: '#61DAFB',
  },
  {
    number: '03',
    icon: Server,
    title: 'Backend & APIs',
    description: 'Scalable APIs, auth, and integrations that ship reliably.',
    skills: ['Node.js', 'Firebase', 'GraphQL', 'REST'],
    color: '#339933',
  },
  {
    number: '04',
    icon: Database,
    title: 'Database Design',
    description: 'Clean data modeling for speed, clarity, and scale.',
    skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Firestore'],
    color: '#4479A1',
  },
  {
    number: '05',
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Design systems, polish, and motion that feel premium.',
    skills: ['Figma', 'Prototyping', 'Design Systems', 'Animation'],
    color: '#F24E1E',
  },
  {
    number: '06',
    icon: Zap,
    title: 'Performance',
    description: 'Profiling and optimizations for a faster user experience.',
    skills: ['Optimization', 'Caching', 'Lazy Loading', 'Profiling'],
    color: '#FFD700',
  },
];

const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <div className="card group bento-glow">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.03]"
            style={{ boxShadow: `0 0 0 1px ${service.color}22 inset` }}
          >
            <Icon className="w-[22px] h-[22px]" style={{ color: service.color }} />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-[var(--color-text)] tracking-[-0.02em]">
              {service.title}
            </h3>
            <p className="text-[15px] text-[var(--color-text-secondary)] leading-relaxed mt-1">
              {service.description}
            </p>
          </div>
        </div>

        <span className="text-xs font-semibold text-white/25 tracking-[0.2em]">
          {service.number}
        </span>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {service.skills.map((skill) => (
          <span key={skill} className="tag text-xs">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Expertise = () => {
  return (
    <section id="expertise" className="section">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-label"
          >
            Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="section-title"
          >
            What I Do
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="section-subtitle"
          >
            Specialized in building high-quality digital products that scale.
          </motion.p>
        </motion.div>
      </div>

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
