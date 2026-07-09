import { motion } from 'framer-motion';
import Icon from '../atoms/Icon';

interface SocialLinkProps {
  name: string;
  icon: string;
  url: string;
  color?: string;
}

const SocialLink = ({
  name,
  icon,
  url,
  color = 'text-gray-400',
}: SocialLinkProps) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center space-x-2 min-h-[44px] px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-colors duration-200 ${color}`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
    >
      <Icon name={icon} className="text-xl" />
      <span className="font-medium">{name}</span>
    </motion.a>
  );
};

export default SocialLink;
