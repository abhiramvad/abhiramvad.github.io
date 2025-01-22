import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Moon, Sun, ChevronDown } from 'lucide-react';

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('projects');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const baseStyles = {
    bg: isDark ? 'bg-gray-900' : 'bg-gray-50',
    text: isDark ? 'text-gray-100' : 'text-gray-800',
    secondaryText: isDark ? 'text-gray-300' : 'text-gray-600',
    cardBg: isDark ? 'bg-gray-800' : 'bg-white',
    cardHover: isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50',
    border: isDark ? 'border-gray-700' : 'border-gray-200',
  };

  return (
    <div className={`min-h-screen pb-2 ${baseStyles.bg} transition-colors duration-300`}>
      {/* Theme Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-6 right-6 p-3 rounded-full ${baseStyles.cardBg} shadow-lg z-50
          hover:scale-110 transition-transform duration-200`}
      >
        {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-blue-600" />}
      </button>

      {/* Hero Section */}
      <div className={`${isDark ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900' : 
        'bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50'} transition-colors duration-300`}>
        <div className=" mx-auto px-6 pt-20 pb-32">
          <div className="flex flex-col items-center text-center">
            <div className="w-40 h-40 mb-8 rounded-full overflow-hidden ring-4 ring-opacity-50 shadow-xl
              transform hover:scale-105 transition-transform duration-300
              ring-blue-500">
              <img 
                src="dp.jpeg"
                alt="Abhiram Vadlapatla" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className={`text-5xl font-bold mb-4 ${isDark ? 'text-white' : 
              'bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600'}`}>
              Abhiram Vadlapatla
            </h1>
            <h2 className={`text-2xl mb-6 ${baseStyles.secondaryText}`}>Senior Software Development Engineer</h2>
            <p className={`max-w-2xl text-lg leading-relaxed ${baseStyles.secondaryText}`}>Full stack software engineer with 5+ years of experience in building scalable web applications and Agentic AI-driven solutions to deliver impactful user experiences and accelerate business outcomes</p>
            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a href="https://github.com/abhiramvad" 
                 className={`p-2 ${baseStyles.secondaryText} hover:text-blue-500 
                   transform hover:scale-110 transition-all duration-200`}>
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/abhiram-vadlapatla" 
                 className={`p-2 ${baseStyles.secondaryText} hover:text-blue-500 
                   transform hover:scale-110 transition-all duration-200`}>
                <Linkedin size={24} />
              </a>
              <a href="mailto:v.abhiram97@gmail.com" 
                 className={`p-2 ${baseStyles.secondaryText} hover:text-blue-500 
                   transform hover:scale-110 transition-all duration-200`}>
                <Mail size={24} />
              </a>
            </div>

            {/* Resume Download Section */}
            <div className="mt-12 w-full max-w-2xl">
              <div className={`grid grid-cols-1 md:grid-cols-1 gap-4`}>
                <button 
                  onClick={() => window.open('SDE Resume Final May 2025.pdf')}
                  className={`${baseStyles.cardBg} p-4 rounded-xl shadow-md
                    hover:shadow-lg transform hover:-translate-y-1 
                    transition-all duration-300 group
                    ${isDark ? 'hover:bg-blue-900' : 'hover:bg-blue-50'}`}
                >
                  <div className="text-center">
                    <span className={`block font-semibold mb-2 ${baseStyles.text}
                      group-hover:text-blue-500 transition-colors`}>
                      Download Resume
                    </span>
                  </div>
                </button>
              </div>
            </div>

            <div className="mt-12 animate-bounce">
              <ChevronDown size={24} className={baseStyles.secondaryText} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto px-6 -mt-20">
        {/* Featured Projects */}
        <section id="projects" className={`mb-20 opacity-0 ${isVisible.projects ? 'animate-fadeIn' : ''}`}>
          <h3 className={`text-2xl font-bold mb-8 ${baseStyles.text}`}>Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Training a Custom GPT Model',
                subtitle: 'Python Data Science Stack Using GPT-2',
                description: [
                  'Fine-tuned a 124M-parameter GPT-2 model on curated Python datasets, achieving 56.06 perplexity.',
                  'Implemented custom loss functions and learning rate schedules prioritizing data science tokens.'
                ],
                link: '#',
                tags: ['Python', 'NLP', 'Machine Learning']
              },
              {
                title: 'Model Compression for Video Understanding',
                subtitle: 'Deploying AI on Edge Devices',
                description: [
                  'Optimized MobileNet and Timesformer models, achieving 4x size reduction through quantization.',
                  'Improved model deployment efficiency for cloud and on-device performance.'
                ],
                link: '#',
                tags: ['Video AI', 'Optimization', 'Edge Computing']
              },
              {
                title: 'Soul Machines Conversational AI',
                subtitle: 'AI-driven Conversational Agent',
                description: [
                  'Developed conversational AI for healthcare use, leveraging advanced NLP and soul machine technologies.',
                  'Integrated APIs to deliver personalized experiences with robust backend architecture.'
                ],
                link: 'https://ssa-soul-machines-dev.us-east.philips-healthsuite.com/access/g00dsl33p4all',
                tags: ['NLP', 'AI', 'Backend']
              },
              {
                title: 'Philips SmartSleep Analyzer',
                subtitle: 'Advanced Sleep Analysis Tool',
                description: [
                  'Developed data pipelines for user sleep pattern analysis.',
                  'Integrated ML models to offer personalized sleep insights.'
                ],
                link: 'https://www.smartsleep-analyzer.philips.com/',
                tags: ['Python', 'Flask', 'ML']
              }
            ].map((project, idx) => (
              <div key={idx} 
                className={`${baseStyles.cardBg} rounded-xl p-6 shadow-lg 
                  transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className={`text-xl font-semibold ${baseStyles.text}`}>{project.title}</h4>
                    <p className={baseStyles.secondaryText}>{project.subtitle}</p>
                  </div>
                  <a href={`${project.link}`} className="text-blue-500 hover:text-blue-400 transition-colors" target='_blank'>
                    <ExternalLink size={20} />
                  </a>
                </div>
                <ul className="space-y-2">
                  {project.description.map((desc, i) => (
                    <li key={i} className={`flex items-start gap-2 ${baseStyles.secondaryText}`}>
                      • {desc}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className={`px-3 py-1 rounded-full text-sm 
                      ${isDark ? 'bg-blue-900 text-blue-300' : 'bg-blue-50 text-blue-600'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className={`mb-20 opacity-0 ${isVisible.experience ? 'animate-fadeIn' : ''}`}>
          <h3 className={`text-2xl font-bold mb-8 ${baseStyles.text}`}>Experience</h3>
          <div className="space-y-12">
            {[
              {
                company: 'Goldman Sachs',
                role: 'Software Engineer 3 (Vice President)',
                period: 'Jul 2022 - Dec 2023',
                achievements: [
                  'Implemented IAM knowledge bot using React, Socket IO, Flask, Langchain, and GPT-3.5 LLM for 30% faster query resolution.',
                  'Accelerated go-live time to production from 1 week to 48 hours by facilitating instant thematic customizations with a React Drag and Drop live preview tool.',
                  'Achieved 100% data transparency and real-time analytics within a 1-minute window by implementing a data ingestion pipeline processing 2GB of data hourly.',
                  'Shipped a high-performance JS analytics library to production using web beacon API for client-side observability, boosting dev efficiency 1.5x.',
                  'Enhanced the security profile of the IAM platform by integrating ThreatMetrix into the Spring Boot server, achieving a 30% improvement in fraudulent login detection.',
                  'Keynote speaker at Goldman Sachs, sharing insights with 200 developers on Identity and Access Management.'
                ]
              },
              {
                company: 'Philips Healthcare',
                role: 'Software Engineer 3',
                period: 'Jan 2018 - Jun 2022',
                achievements: [
                  'Led development of conversational AI system (SmartSleep Analyzer) using RASA SDK and custom NLU/NLP models, achieving a 50% increase in user engagement.',
                  'Developed a custom website tracking system to process clickstream data, achieving an 80% growth in conversion rate.',
                  'Implemented database integration with Flask, SQLAlchemy, and Alembic, reducing deployment times by 50%.',
                  'Integrated New Relic with Flask app to support APM and latency metrics, achieving a 45% improvement in performance monitoring.',
                  'Improved API service adoption by 20% by designing an API monetization ecosystem and developer portal using Kong API gateway.',
                  'Reduced security and traffic control issues for REST APIs by 70% through rate-limiting plugins, CORS enforcers, and bot detection.'
                ]
              }
            ].map((exp, idx) => (
              <div key={idx} className="relative">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <h4 className={`text-xl font-semibold ${baseStyles.text}`}>{exp.company}</h4>
                    <p className={baseStyles.secondaryText}>{exp.role}</p>
                    <p className={`${baseStyles.secondaryText} opacity-75`}>{exp.period}</p>
                  </div>
                  <div className="md:w-2/3">
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className={`flex items-start gap-2 ${baseStyles.secondaryText}`}>
                          • {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className={`opacity-0 ${isVisible.skills ? 'animate-fadeIn' : ''}`}>
          <h3 className={`text-2xl font-bold mb-8 ${baseStyles.text}`}>Skills & Technologies</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Programming Languages',
                skills: ['Python', 'Java', 'Typescript', 'Javascript', 'Bash'],
                colorClass: isDark ? 'bg-purple-900 text-purple-300' : 'bg-purple-50 text-purple-600'
              },
              {
                title: 'Backend Frameworks/Libraries',
                skills: ['Flask', 'Spring Boot', 'Node.js', 'OAuth2.0', 'Langchain'],
                colorClass: isDark ? 'bg-blue-900 text-blue-300' : 'bg-blue-50 text-blue-600'
              },
              {
                title: 'UI Frameworks/Libraries',
                skills: ['React', 'Angular', 'NX', 'HTML', 'CSS', 'SCSS', 'Bootstrap', 'Webpack', 'Yarn', 'Copilot SDK'],
                colorClass: isDark ? 'bg-green-900 text-green-300' : 'bg-green-50 text-green-600'
              },
              {
                title: 'Databases',
                skills: ['SQL Server', 'Prometheus', 'Elasticsearch', 'MySQL', 'Postgres', 'BigQuery', 'SQLite'],
                colorClass: isDark ? 'bg-orange-900 text-orange-300' : 'bg-orange-50 text-orange-600'
              },
              {
                title: 'Cloud/SaaS',
                skills: ['Terraform', 'Cloudfoundry', 'AWS ECS', 'Docker', 'Kubernetes', 'Lambda', 'AWS Kinesis', 'Fluent Bit', 'NewRelic', 'Grafana', 'Langsmith'],
                colorClass: isDark ? 'bg-blue-900 text-blue-300' : 'bg-blue-50 text-blue-600'
              },
              {
                title: 'Protocols & Certifications',
                skills: ['REST', 'GraphQL', 'gRPC', 'WebSockets', 'SSE', 'SMTP', 'AWS Machine Learning Associate (2024)', 'Deep Learning Nanodegree (Udacity, 2021)'],
                colorClass: isDark ? 'bg-purple-900 text-purple-300' : 'bg-purple-50 text-purple-600'
              }
            ].map((category, idx) => (
              <div key={idx}>
                <h4 className={`text-lg font-semibold mb-4 ${baseStyles.text}`}>{category.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className={`px-3 py-1 rounded-full text-sm 
                      transform hover:scale-105 transition-transform duration-200 ${category.colorClass}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
