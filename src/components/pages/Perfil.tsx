import { Helmet } from 'react-helmet-async';
import { motion, type Variants } from 'framer-motion';
import {
  FaCheckCircle,
  FaEnvelope,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaPhone,
  FaUser,
} from 'react-icons/fa';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import CurriculumButtons from '../molecules/CurriculumButtons';
import {
  personalInfo,
  getAge,
  summary,
  experiences,
  projects,
  education,
  certifications,
  skills,
  differentials,
} from '../../data/curriculum';
import avatarImage from '../../assets/avatar-1.jpg';

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

interface SectionHeadingProps {
  kicker: string;
  title: string;
}

const SectionHeading = ({ kicker, title }: SectionHeadingProps) => (
  <div className="mb-8">
    <p className="font-mono text-sm text-primary-400 mb-2">{`// ${kicker}`}</p>
    <h3 className="section-title text-2xl md:text-3xl">{title}</h3>
  </div>
);

const Perfil = () => {
  const contactItems = [
    { icon: FaUser, label: `${personalInfo.nationality}, ${getAge()} anos` },
    { icon: FaMapMarkerAlt, label: personalInfo.location },
    { icon: FaEnvelope, label: personalInfo.email },
    { icon: FaPhone, label: personalInfo.phone },
  ];

  return (
    <>
      <Helmet>
        <title>Currículo - Henrique Hoinacki</title>
        <meta
          name="description"
          content="Currículo detalhado de Henrique Hoinacki - Experiências, projetos e habilidades técnicas"
        />
      </Helmet>

      <Header />

      <main className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          {/* Banner de perfil */}
          <motion.section
            className="relative overflow-hidden card p-8 md:p-10 mb-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden />
            <div
              className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary-500/10 blur-3xl pointer-events-none"
              aria-hidden
            />

            <div className="relative flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
              <motion.div variants={itemVariants} className="relative w-28 h-28 shrink-0">
                <motion.div
                  className="absolute -inset-1 rounded-full bg-[conic-gradient(from_0deg,#38bdf8,#6366f1,#38bdf8)]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  aria-hidden
                />
                <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-surface">
                  <img
                    src={avatarImage}
                    alt="Henrique Hoinacki"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <div className="flex-1">
                <motion.h1
                  variants={itemVariants}
                  className="font-display text-3xl md:text-4xl font-bold mb-2"
                >
                  <span className="text-white">Henrique </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-indigo-400">
                    Hoinacki
                  </span>
                </motion.h1>
                <motion.h2
                  variants={itemVariants}
                  className="text-lg text-primary-400 font-mono mb-5"
                >
                  {personalInfo.title}
                </motion.h2>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap justify-center md:justify-start gap-2 mb-7"
                >
                  {contactItems.map(({ icon: ItemIcon, label }) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm bg-white/5 border border-white/10 text-gray-300"
                    >
                      <ItemIcon className="text-primary-400 text-xs" aria-hidden />
                      {label}
                    </span>
                  ))}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <CurriculumButtons className="md:justify-start" />
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Resumo */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <SectionHeading kicker="sobre mim" title={summary.title} />
            <div className="card card-hover">
              <p className="text-gray-300 leading-relaxed">{summary.content}</p>
            </div>
          </motion.section>

          {/* Experiência - timeline lateral */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <SectionHeading kicker="carreira" title="Experiência Profissional" />
            </motion.div>

            <div className="relative">
              <div
                className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary-400/60 via-white/10 to-white/10"
                aria-hidden
              />
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.article
                    key={exp.company}
                    className="relative pl-10"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.05,
                      ease: 'easeOut',
                    }}
                    viewport={{ once: true, margin: '-60px' }}
                  >
                    <span
                      className="absolute left-0 top-7 w-4 h-4 rounded-full bg-surface border-2 border-primary-400 shadow-lg shadow-primary-900/40"
                      aria-hidden
                    />
                    <div className="card card-hover">
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                        <h4 className="text-xl font-semibold text-white">
                          {exp.position}
                        </h4>
                        <span className="font-mono text-xs text-primary-300 tracking-wide mt-1.5">
                          {exp.period}
                        </span>
                      </div>
                      <h5 className="text-gray-400 font-medium mb-4">
                        {exp.company}
                      </h5>
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-gray-300 leading-relaxed"
                          >
                            <span className="text-primary-400 mt-1" aria-hidden>
                              •
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="chip">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          {/* Projetos */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <SectionHeading kicker="projetos" title="Projetos Destacados" />
              <p className="text-gray-400 -mt-4 mb-8 font-mono text-sm">
                Principais projetos na Ília Digital
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.name}
                  className="card card-hover flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: (index % 2) * 0.08,
                    ease: 'easeOut',
                  }}
                  viewport={{ once: true, margin: '-40px' }}
                >
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {project.name}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-1">
                    {project.description.replace(/ na Ília Digital/g, '')}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Habilidades */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <SectionHeading kicker="stack" title="Habilidades Técnicas" />
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skillCategory, index) => (
                <motion.div
                  key={skillCategory.category}
                  className="card card-hover"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: (index % 2) * 0.08,
                    ease: 'easeOut',
                  }}
                  viewport={{ once: true, margin: '-40px' }}
                >
                  <h4 className="text-lg font-semibold text-white mb-4">
                    {skillCategory.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.skills.map((skill) => (
                      <span key={skill} className="chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Formação */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <SectionHeading kicker="formacao" title="Formação Acadêmica" />
            </motion.div>
            <div className="space-y-6">
              {education.map((edu) => (
                <motion.div
                  key={edu.institution}
                  className="card card-hover flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  viewport={{ once: true, margin: '-40px' }}
                >
                  <span
                    className="flex items-center justify-center w-12 h-12 shrink-0 rounded-xl bg-primary-500/10 border border-primary-500/20"
                    aria-hidden
                  >
                    <FaGraduationCap className="text-primary-400 text-xl" />
                  </span>
                  <div>
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                      <h4 className="text-lg font-semibold text-white">
                        {edu.course}
                      </h4>
                      <span className="font-mono text-xs text-primary-300 mt-1.5">
                        {edu.period}
                      </span>
                    </div>
                    <h5 className="text-gray-400 mb-2">{edu.institution}</h5>
                    {edu.description && (
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Certificações */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <SectionHeading kicker="certificacoes" title="Cursos e Certificações" />
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  className="card card-hover"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: (index % 3) * 0.06,
                    ease: 'easeOut',
                  }}
                  viewport={{ once: true, margin: '-40px' }}
                >
                  <h4 className="text-base font-semibold text-white mb-1">
                    {cert.name}
                  </h4>
                  <p className="text-gray-400 text-sm mb-3">{cert.institution}</p>
                  <span className="font-mono text-xs text-primary-300">
                    {cert.year}
                  </span>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-primary-400 hover:text-primary-300 text-sm mt-2"
                    >
                      Ver certificado →
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </section>

          {/* Diferenciais */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <SectionHeading kicker="diferenciais" title="Diferenciais" />
            <div className="card card-hover">
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {differentials.map((differential) => (
                  <li
                    key={differential}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <FaCheckCircle
                      className="text-primary-400 mt-1 shrink-0"
                      aria-hidden
                    />
                    <span>{differential}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Perfil;
