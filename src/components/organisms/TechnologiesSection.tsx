import { motion, type Variants } from 'framer-motion';
import TechnologyCard from '../molecules/TechnologyCard';

const gridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const TechnologiesSection = () => {
  const technologies = [
    { name: 'Node.js', icon: 'nodejs', description: 'Runtime JavaScript' },
    {
      name: 'TypeScript',
      icon: 'typescript',
      description: 'JavaScript tipado',
    },
    { name: 'PostgreSQL', icon: 'postgresql', description: 'Banco de dados' },
    { name: 'React', icon: 'react', description: 'Frontend framework' },
    { name: 'Vue.js', icon: 'vue', description: 'Frontend framework' },
    { name: 'HTML', icon: 'html', description: 'Markup language' },
    { name: 'CSS', icon: 'css', description: 'Estilização' },
    { name: 'AWS', icon: 'aws', description: 'Cloud computing' },
  ];

  return (
    <section className="py-16">
      <motion.div
        className="max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <p className="font-mono text-sm text-primary-400 text-center mb-3">
          {'// stack'}
        </p>
        <h2 className="section-title text-center block mb-12">Tecnologias</h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {technologies.map((tech) => (
            <motion.div key={tech.name} variants={itemVariants}>
              <TechnologyCard
                name={tech.name}
                icon={tech.icon}
                description={tech.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TechnologiesSection;
