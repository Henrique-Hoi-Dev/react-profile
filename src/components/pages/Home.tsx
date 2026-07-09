import { useCallback, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import IntroOverlay from '../organisms/IntroOverlay';
import TechnologiesSection from '../organisms/TechnologiesSection';
import ExperienceTimeline from '../organisms/ExperienceTimeline';
import StatsSection from '../organisms/StatsSection';
import SocialLink from '../molecules/SocialLink';
import TerminalCard from '../molecules/TerminalCard';
import Typewriter from '../atoms/Typewriter';
import CurriculumButtons from '../molecules/CurriculumButtons';
import { personalInfo, summary } from '../../data/curriculum';
import avatarImage from '../../assets/avatar-1.jpg';

const INTRO_SEEN_KEY = 'hh-intro-seen';

const heroContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const heroItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

const Home = () => {
  const reduceMotion = useReducedMotion();
  const [showIntro, setShowIntro] = useState(
    () => !window.sessionStorage.getItem(INTRO_SEEN_KEY)
  );

  const finishIntro = useCallback(() => {
    window.sessionStorage.setItem(INTRO_SEEN_KEY, '1');
    setShowIntro(false);
  }, []);

  const introActive = showIntro && !reduceMotion;
  const heroState = introActive ? 'hidden' : 'visible';

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: 'linkedin',
      url: personalInfo.linkedin,
      color: 'text-blue-400',
    },
    {
      name: 'GitHub',
      icon: 'github',
      url: personalInfo.github,
      color: 'text-gray-400',
    },
    {
      name: 'Email',
      icon: 'email',
      url: `mailto:${personalInfo.email}`,
      color: 'text-red-400',
    },
    {
      name: 'WhatsApp',
      icon: 'whatsapp',
      url: personalInfo.whatsapp,
      color: 'text-green-400',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Henrique Hoinacki - Desenvolvedor Full Stack</title>
        <meta
          name="description"
          content="Portfólio pessoal de Henrique Hoinacki - Desenvolvedor Full Stack JavaScript"
        />
      </Helmet>

      <AnimatePresence>
        {introActive && <IntroOverlay key="intro" onFinish={finishIntro} />}
      </AnimatePresence>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center py-24 overflow-hidden">
          {/* Fundo: grid + aurora */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <div className="absolute inset-0 bg-grid" />
            <motion.div
              className="absolute -top-32 left-1/4 w-[32rem] h-[32rem] rounded-full bg-primary-500/15 blur-3xl"
              animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.1, 1] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute top-1/3 -right-32 w-[28rem] h-[28rem] rounded-full bg-indigo-500/10 blur-3xl"
              animate={{ opacity: [0.4, 0.8, 0.4], scale: [1.1, 1, 1.1] }}
              transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(11,16,32,0.8))]" />
          </div>

          <div className="relative w-full max-w-6xl mx-auto px-4 grid lg:grid-cols-[1.1fr,0.9fr] gap-14 lg:gap-16 items-center">
            {/* Coluna esquerda: apresentação */}
            <motion.div
              className="text-center lg:text-left"
              variants={heroContainer}
              initial="hidden"
              animate={heroState}
            >
              <motion.div
                variants={heroItem}
                className="flex items-center justify-center lg:justify-start gap-4 mb-8"
              >
                <div className="relative w-16 h-16 shrink-0">
                  <motion.div
                    className="absolute -inset-0.5 rounded-full bg-[conic-gradient(from_0deg,#38bdf8,#6366f1,#38bdf8)]"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    aria-hidden
                  />
                  <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-surface">
                    <img
                      src={avatarImage}
                      alt="Henrique Hoinacki"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-medium">
                  <span className="relative flex h-2 w-2" aria-hidden>
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  Disponível para novos projetos
                </span>
              </motion.div>

              <motion.h1
                variants={heroItem}
                className="font-display text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05] mb-6"
              >
                <span className="block text-white">Henrique</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-primary-400 to-indigo-400">
                  Hoinacki
                </span>
              </motion.h1>

              <motion.div
                variants={heroItem}
                className="text-lg md:text-xl text-primary-400 mb-6 min-h-[3.5rem] flex items-center justify-center lg:justify-start font-mono"
              >
                <Typewriter
                  strings={[
                    'Desenvolvedor Full Stack JavaScript',
                    'Integrações com AWS',
                    'Developer NodeJS | ReactJS | VueJS',
                    'PostgreSQL • MySQL • MongoDB',
                    'Clean Code & Test Driven Development',
                    'DevOps Engineer',
                  ]}
                  className="text-primary-400"
                  speed={50}
                  backSpeed={30}
                  backDelay={2000}
                  loop={true}
                />
              </motion.div>

              <motion.p
                variants={heroItem}
                className="text-gray-400 mb-8 flex items-center justify-center lg:justify-start gap-2"
              >
                <FaMapMarkerAlt className="text-primary-400" aria-hidden />
                {personalInfo.location}
              </motion.p>

              <motion.div
                variants={heroItem}
                className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10"
              >
                {socialLinks.map((link) => (
                  <SocialLink
                    key={link.name}
                    name={link.name}
                    icon={link.icon}
                    url={link.url}
                    color={link.color}
                  />
                ))}
              </motion.div>

              <motion.div variants={heroItem}>
                <CurriculumButtons className="lg:justify-start" />
              </motion.div>
            </motion.div>

            {/* Coluna direita: terminal */}
            <motion.div
              variants={heroContainer}
              initial="hidden"
              animate={heroState}
            >
              <motion.div variants={heroItem}>
                <TerminalCard />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <StatsSection />

        {/* About Section */}
        <section className="py-20">
          <motion.div
            className="max-w-4xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-sm text-primary-400 text-center mb-3">
              {'// sobre mim'}
            </p>
            <h2 className="section-title text-center block mb-12">
              {summary.title}
            </h2>

            <div className="card card-hover">
              <p className="text-lg text-gray-300 leading-relaxed">
                {summary.content}
              </p>
            </div>
          </motion.div>
        </section>

        {/* Experience Timeline */}
        <ExperienceTimeline />

        {/* Technologies Section */}
        <TechnologiesSection />
      </main>

      <Footer />
    </>
  );
};

export default Home;
