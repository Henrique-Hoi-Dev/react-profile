import { motion, useScroll } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const { scrollYProgress } = useScroll();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/perfil', label: 'Currículo' },
  ];

  return (
    <motion.header
      className="bg-surface/70 backdrop-blur-md border-b border-white/10 sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="font-mono text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-indigo-400"
          >
            {'<hh.dev />'}
          </Link>

          <nav className="flex items-center space-x-6">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative py-2 font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-primary-300'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-primary-400 to-indigo-400"
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Barra de progresso de scroll */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 origin-left bg-gradient-to-r from-primary-400 to-indigo-400"
        style={{ scaleX: scrollYProgress }}
        aria-hidden
      />
    </motion.header>
  );
};

export default Header;
