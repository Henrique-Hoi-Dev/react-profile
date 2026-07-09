import { FaFilePdf, FaGlobe } from 'react-icons/fa';

interface CurriculumButtonsProps {
  className?: string;
}

const CurriculumButtons = ({ className = '' }: CurriculumButtonsProps) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Henrique_Hoinacki_CV.pdf';
    link.download = 'Henrique-Hoinacki-Curriculo.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={`flex flex-col sm:flex-row gap-4 justify-center items-center w-full ${className}`}
    >
      <button
        onClick={handleDownload}
        className="btn-primary"
        aria-label="Download do currículo em formato PDF"
        title="Download do currículo em formato PDF"
      >
        <FaFilePdf className="mr-2" aria-hidden />
        Baixar Currículo em PDF
      </button>

      <a
        href="/curriculo"
        className="btn-secondary"
        aria-label="Visualizar currículo em página estruturada"
        title="Visualizar currículo em página estruturada"
      >
        <FaGlobe className="mr-2" aria-hidden />
        Ver Currículo em Página Web
      </a>
    </div>
  );
};

export default CurriculumButtons;
