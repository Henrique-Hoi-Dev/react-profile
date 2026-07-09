import { useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';

const INTRO_DURATION_MS = 1700;

const contentVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

interface IntroOverlayProps {
  onFinish: () => void;
}

const IntroOverlay = ({ onFinish }: IntroOverlayProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(onFinish, INTRO_DURATION_MS);
    return () => {
      document.body.style.overflow = '';
      clearTimeout(timer);
    };
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-surface"
      exit={{
        y: '-100%',
        transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
      }}
      aria-hidden
    >
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-6"
      >
        <motion.span
          variants={itemVariants}
          className="font-mono text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-indigo-400"
        >
          {'<hh.dev />'}
        </motion.span>

        <motion.div
          variants={itemVariants}
          className="w-44 h-0.5 rounded-full bg-white/10 overflow-hidden"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary-400 to-indigo-400 origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, delay: 0.3, ease: 'easeInOut' }}
          />
        </motion.div>

        <motion.span
          variants={itemVariants}
          className="font-mono text-xs text-gray-500 tracking-widest uppercase"
        >
          inicializando portfolio...
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default IntroOverlay;
