import { motion, type Variants } from 'framer-motion';
import { getAge } from '../../data/curriculum';

const bodyVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.5 } },
};

const lineVariants: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

interface CodeLineProps {
  number: number;
  children: React.ReactNode;
  indent?: boolean;
}

const CodeLine = ({ number, children, indent = false }: CodeLineProps) => (
  <motion.div variants={lineVariants} className="flex">
    <span className="w-7 shrink-0 select-none text-right pr-3 text-gray-600">
      {number}
    </span>
    <span className={indent ? 'pl-5' : ''}>{children}</span>
  </motion.div>
);

const TerminalCard = () => {
  const str = (value: string) => (
    <span className="text-emerald-300">'{value}'</span>
  );

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0d1424]/90 backdrop-blur-md shadow-2xl shadow-primary-900/20 overflow-hidden text-left">
      {/* Barra de título */}
      <div className="relative flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
        <span className="w-3 h-3 rounded-full bg-red-400/80" aria-hidden />
        <span className="w-3 h-3 rounded-full bg-yellow-400/80" aria-hidden />
        <span className="w-3 h-3 rounded-full bg-green-400/80" aria-hidden />
        <span className="absolute inset-x-0 text-center font-mono text-xs text-gray-500 pointer-events-none">
          henrique.ts
        </span>
      </div>

      {/* Código */}
      <motion.div
        className="p-5 font-mono text-xs sm:text-sm leading-7 text-gray-300"
        variants={bodyVariants}
      >
        <CodeLine number={1}>
          <span className="text-violet-400">const</span>{' '}
          <span className="text-sky-300">dev</span> = {'{'}
        </CodeLine>
        <CodeLine number={2} indent>
          nome: {str('Henrique Hoinacki')},
        </CodeLine>
        <CodeLine number={3} indent>
          funcao: {str('Full Stack JavaScript')},
        </CodeLine>
        <CodeLine number={4} indent>
          idade: <span className="text-amber-300">{getAge()}</span>,
        </CodeLine>
        <CodeLine number={5} indent>
          stack: [{str('Node.js')}, {str('React')}, {str('Vue.js')}],
        </CodeLine>
        <CodeLine number={6} indent>
          foco: {str('Clean Code & TDD')},
        </CodeLine>
        <CodeLine number={7} indent>
          disponivel: <span className="text-amber-300">true</span>,
        </CodeLine>
        <CodeLine number={8}>{'};'}</CodeLine>
        <CodeLine number={9}>
          <span className="inline-block w-2.5 h-4 align-middle bg-primary-400 typed-cursor" />
        </CodeLine>
      </motion.div>
    </div>
  );
};

export default TerminalCard;
