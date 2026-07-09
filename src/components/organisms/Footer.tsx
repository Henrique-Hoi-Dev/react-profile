import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { personalInfo } from '../../data/curriculum';

const links = [
  { name: 'LinkedIn', icon: FaLinkedin, url: personalInfo.linkedin },
  { name: 'GitHub', icon: FaGithub, url: personalInfo.github },
  { name: 'Email', icon: FaEnvelope, url: `mailto:${personalInfo.email}` },
  { name: 'WhatsApp', icon: FaWhatsapp, url: personalInfo.whatsapp },
];

const Footer = () => (
  <footer className="border-t border-white/10 py-10 mt-10">
    <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} {personalInfo.name}. Todos os direitos
        reservados.
      </p>
      <div className="flex items-center gap-2">
        {links.map(({ name, icon: LinkIcon, url }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            title={name}
            className="flex items-center justify-center w-11 h-11 rounded-xl text-gray-400 hover:text-primary-300 hover:bg-white/5 transition-colors duration-200"
          >
            <LinkIcon className="text-xl" aria-hidden />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
