import { Helmet } from 'react-helmet-async';
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaArrowLeft,
} from 'react-icons/fa';
import {
  personalInfo,
  getAge,
  summary,
  experiences,
  projects,
  education,
  certifications,
  skills,
} from '../../data/curriculum';

const printStyles = `
  @media print {
    @page {
      size: A4;
      margin: 14mm 12mm;
    }
    body {
      background: #fff !important;
    }
    .no-print {
      display: none !important;
    }
    a {
      color: inherit;
    }
  }
`;

const styleDoc = {
  fontFamily: 'Calibri, Arial, sans-serif',
  color: '#222',
  background: '#fff',
  maxWidth: 800,
  margin: '0 auto',
  padding: 32,
  fontSize: 15,
  lineHeight: 1.5,
};

const Curriculo = () => {
  return (
    <>
      <Helmet>
        <title>Currículo - Henrique Hoinacki</title>
        <meta
          name="description"
          content="Currículo profissional de Henrique Hoinacki - Desenvolvedor Backend"
        />
      </Helmet>
      <style>{printStyles}</style>
      <div style={{ background: '#fff', minHeight: '100vh' }}>
      <div style={styleDoc}>
        {/* Cabeçalho */}
        <div
          style={{
            borderBottom: '1px solid #bbb',
            paddingBottom: 8,
            marginBottom: 16,
          }}
        >
          <h1
            style={{
              fontSize: 28,
              margin: 0,
              fontWeight: 'bold',
              letterSpacing: 1,
            }}
          >
            HENRIQUE HOINACKI
          </h1>
          <div
            style={{
              fontSize: 15,
              marginTop: 4,
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <span
              style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}
            >
              <FaPhone style={{ color: '#c23a2b' }} /> {personalInfo.phone}
            </span>
            <span
              style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}
            >
              <FaEnvelope style={{ color: '#c23a2b' }} /> {personalInfo.email}
            </span>
            <span
              style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}
            >
              <FaMapMarkerAlt style={{ color: '#eab308' }} />{' '}
              {personalInfo.location}
            </span>
          </div>
          <div
            style={{
              fontSize: 15,
              marginTop: 4,
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <span
              style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}
            >
              <FaLinkedin style={{ color: '#0072b1' }} />
              <a
                href={personalInfo.linkedin}
                style={{
                  color: '#0072b1',
                  textDecoration: 'none',
                  marginRight: 8,
                }}
              >
                LinkedIn
              </a>
            </span>
            <span
              style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}
            >
              <FaGithub style={{ color: '#222' }} />
              <a
                href={personalInfo.github}
                style={{ color: '#222', textDecoration: 'none' }}
              >
                GitHub
              </a>
            </span>
          </div>
          <div style={{ fontSize: 14, marginTop: 8, color: '#444' }}>
            {personalInfo.nationality}, {getAge()} anos,{' '}
            {personalInfo.maritalStatus}. Idiomas: {personalInfo.languages}.
          </div>
        </div>

        {/* Resumo */}
        <h2
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            margin: '24px 0 8px 0',
            letterSpacing: 1,
            textTransform: 'uppercase',
          }}
        >
          RESUMO PROFISSIONAL
        </h2>
        <p style={{ margin: 0 }}>{summary.content}</p>
        <hr style={{ margin: '24px 0' }} />

        {/* Experiência */}
        <h2
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            margin: '24px 0 8px 0',
            letterSpacing: 1,
            textTransform: 'uppercase',
          }}
        >
          EXPERIÊNCIA PROFISSIONAL
        </h2>
        {experiences.map((exp, idx) => (
          <div key={exp.company + idx} style={{ marginBottom: 16 }}>
            <strong>
              {exp.position} | {exp.company}
            </strong>{' '}
            <span style={{ color: '#666' }}>{exp.period}</span>
            <br />
            <ul style={{ margin: '4px 0 0 20px' }}>
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
            {exp.technologies && (
              <div style={{ fontSize: 13, color: '#444', marginTop: 2 }}>
                <span style={{ fontWeight: 500 }}>Tecnologias:</span>{' '}
                {exp.technologies.join(', ')}
              </div>
            )}
          </div>
        ))}
        <hr style={{ margin: '24px 0' }} />

        {/* Projetos */}
        <h2
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            margin: '24px 0 8px 0',
            letterSpacing: 1,
            textTransform: 'uppercase',
          }}
        >
          PROJETOS DESTACADOS
        </h2>
        <div style={{ fontSize: 15, color: '#444', marginBottom: 16 }}>
          <em>Principais projetos na Ília Digital:</em>
        </div>
        {projects.map((project, idx) => (
          <div key={project.name + idx} style={{ marginBottom: 16 }}>
            <strong>{project.name}</strong>
            <br />
            <span style={{ fontSize: 15 }}>
              {project.description
                .replace(/ na Ília Digital/g, '')
                .replace(/ na Ília Digital/g, '')}
            </span>
            <div style={{ fontSize: 13, color: '#444', marginTop: 2 }}>
              <span style={{ fontWeight: 500 }}>Tecnologias:</span>{' '}
              {project.technologies.join(', ')}
            </div>
          </div>
        ))}
        <hr style={{ margin: '24px 0' }} />

        {/* Habilidades */}
        <h2
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            margin: '24px 0 8px 0',
            letterSpacing: 1,
            textTransform: 'uppercase',
          }}
        >
          HABILIDADES TÉCNICAS
        </h2>
        <ul style={{ margin: '4px 0 16px 20px' }}>
          {skills.map((cat) => (
            <li key={cat.category} style={{ marginBottom: 2 }}>
              <strong>{cat.category}:</strong> {cat.skills.join(', ')}
            </li>
          ))}
        </ul>
        <hr style={{ margin: '24px 0' }} />

        {/* Educação */}
        <h2
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            margin: '24px 0 8px 0',
            letterSpacing: 1,
            textTransform: 'uppercase',
          }}
        >
          EDUCAÇÃO
        </h2>
        {education.map((edu, idx) => (
          <div key={edu.institution + idx} style={{ marginBottom: 12 }}>
            <strong>{edu.course}</strong>{' '}
            <span style={{ color: '#666' }}>{edu.period}</span>
            <br />
            <span style={{ color: '#444' }}>{edu.institution}</span>
            {edu.description && (
              <div style={{ fontSize: 14 }}>{edu.description}</div>
            )}
          </div>
        ))}
        <hr style={{ margin: '24px 0' }} />

        {/* Certificações */}
        <h2
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            margin: '24px 0 8px 0',
            letterSpacing: 1,
            textTransform: 'uppercase',
          }}
        >
          CERTIFICAÇÕES
        </h2>
        <ul style={{ margin: '4px 0 16px 20px' }}>
          {certifications.map((cert, idx) => (
            <li key={cert.name + idx}>
              <strong>{cert.name}</strong> - {cert.institution}{' '}
              <span style={{ color: '#666' }}>{cert.year}</span>
            </li>
          ))}
        </ul>
        <hr style={{ margin: '24px 0' }} />

        {/* Botão Voltar */}
        <div className="no-print" style={{ marginTop: 24 }}>
          <a
            href="/"
            style={{
              color: '#0072b1',
              textDecoration: 'none',
              fontSize: 15,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <FaArrowLeft style={{ marginRight: 4, verticalAlign: 'middle' }} />{' '}
            Voltar ao Site
          </a>
        </div>
        <div
          style={{
            fontSize: 13,
            color: '#888',
            marginTop: 24,
            textAlign: 'center',
          }}
        >
          © {new Date().getFullYear()} Henrique Hoinacki. Todos os direitos
          reservados.
        </div>
      </div>
      </div>
    </>
  );
};

export default Curriculo;
