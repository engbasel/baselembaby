// Shared config and data for the hero section
export const techStack = [
  { name: 'Flutter', color: '#02569B' },
  { name: 'React', color: '#61DAFB' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Python', color: '#3776AB' },
  { name: 'Supabase', color: '#3ECF8E' },
  { name: 'Firebase', color: '#FFCA28' },
  { name: 'PostgreSQL', color: '#4169E1' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'GraphQL', color: '#E10098' },
  { name: 'n8n', color: '#EA4B71' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'REST APIs', color: '#6BA539' },
];

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

