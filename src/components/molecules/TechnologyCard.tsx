import { motion } from 'framer-motion';
import Icon from '../atoms/Icon';

interface TechnologyCardProps {
  name: string;
  icon: string;
  description?: string;
}

const TechnologyCard = ({ name, icon, description }: TechnologyCardProps) => {
  return (
    <motion.div
      className="card card-hover flex flex-col items-center p-4 text-center h-full"
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      <Icon name={icon} className="text-4xl mb-3 text-primary-400" />
      <h3 className="font-semibold text-lg mb-2">{name}</h3>
      {description && (
        <p className="text-gray-400 text-sm font-mono">{description}</p>
      )}
    </motion.div>
  );
};

export default TechnologyCard;
