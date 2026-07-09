import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useSpring, type Variants } from 'framer-motion';
import { FaArrowRight, FaBriefcase } from 'react-icons/fa';
import { experiences } from '../../data/curriculum';

const DEV_EXPERIENCES_COUNT = 4;

const cardVariants = (fromLeft: boolean): Variants => ({
  hidden: { opacity: 0, x: fromLeft ? -32 : 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
});

const chipContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const chipVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
};

const ExperienceTimeline = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.75', 'end 0.6'],
  });
  const lineScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
  });

  const devExperiences = experiences.slice(0, DEV_EXPERIENCES_COUNT);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm text-primary-400 mb-3">
            {'// carreira'}
          </p>
          <h2 className="section-title">Trajetória</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Minha evolução como desenvolvedor — do backend ao full stack.
          </p>
        </motion.div>

        <div ref={sectionRef} className="relative">
          {/* Linha central que "desenha" com o scroll */}
          <div className="absolute left-5 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-white/10" />
          <motion.div
            className="absolute left-5 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 to-indigo-500 origin-top"
            style={{ scaleY: lineScale }}
          />

          <div className="space-y-12">
            {devExperiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={exp.company} className="relative flex">
                  {/* Marcador na linha */}
                  <motion.div
                    className="absolute left-5 md:left-1/2 -translate-x-1/2 top-6 z-10 w-10 h-10 rounded-full bg-surface border-2 border-primary-400 flex items-center justify-center shadow-lg shadow-primary-900/40"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    viewport={{ once: true, margin: '-80px' }}
                  >
                    <FaBriefcase className="text-primary-400 text-sm" aria-hidden />
                  </motion.div>

                  <motion.article
                    className={`card card-hover ml-14 md:ml-0 md:w-[calc(50%-3rem)] ${
                      isLeft ? 'md:mr-auto' : 'md:ml-auto'
                    }`}
                    variants={cardVariants(isLeft)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                  >
                    <span className="font-mono text-xs text-primary-300 tracking-wide">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold text-white mt-2">
                      {exp.position}
                    </h3>
                    <p className="text-gray-400 font-medium mb-3">
                      {exp.company}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {exp.description[0]}
                    </p>
                    <motion.div
                      className="flex flex-wrap gap-2"
                      variants={chipContainerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {exp.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          className="chip"
                          variants={chipVariants}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.article>
                </div>
              );
            })}
          </div>
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Link to="/perfil" className="btn-secondary group">
            Ver currículo completo
            <FaArrowRight
              className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
