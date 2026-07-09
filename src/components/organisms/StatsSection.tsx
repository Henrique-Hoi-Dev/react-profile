import { useEffect, useRef } from 'react';
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import {
  getYearsAsDeveloper,
  projects,
  skills,
} from '../../data/curriculum';

interface StatProps {
  value: number;
  suffix?: string;
  label: string;
}

const AnimatedNumber = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 60, damping: 20 });
  const rounded = useTransform(spring, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const Stat = ({ value, suffix = '', label }: StatProps) => (
  <div className="flex flex-col items-center text-center px-6 py-4">
    <span className="font-mono text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-indigo-400">
      <AnimatedNumber value={value} />
      {suffix}
    </span>
    <span className="text-sm text-gray-400 mt-2">{label}</span>
  </div>
);

const StatsSection = () => {
  const totalSkills = skills.reduce((acc, cat) => acc + cat.skills.length, 0);

  const stats: StatProps[] = [
    { value: getYearsAsDeveloper(), suffix: '+', label: 'Anos como desenvolvedor' },
    { value: projects.length, label: 'Projetos destacados' },
    { value: totalSkills, suffix: '+', label: 'Tecnologias e ferramentas' },
  ];

  return (
    <section className="py-12">
      <motion.div
        className="max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="card grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {stats.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default StatsSection;
