import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Moon, Sun, ChevronDown } from 'lucide-react';

const App = () => {
  const [isDark, setIsDark] = useState(false);
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
                src="./src/assets/dp.jpeg"
                alt="Abhiram Vadlapatla" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className={`text-5xl font-bold mb-4 ${isDark ? 'text-white' : 
              'bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600'}`}>
              Abhiram Vadlapatla
            </h1>
            <h2 className={`text-2xl mb-6 ${baseStyles.secondaryText}`}>AI Engineer & Full Stack Developer</h2>
            <p className={`max-w-2xl text-lg leading-relaxed ${baseStyles.secondaryText}`}>
              Crafting AI-driven solutions with expertise in Generative AI and ML Ops. 
              Passionate about building impactful applications that merge cutting-edge AI with robust engineering.
            </p>
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
                  onClick={() => window.open('./src/assets/SDE Resume Final Dec 2025.pdf')}
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
                title: 'EpicDiffusion Playground',
                subtitle: 'Text to Video Generation App',
                description: [
                  'Created innovative text-to-video pipeline with I2VGen and Stable Diffusion XL',
                  'Enhanced model pipeline achieving CLIP score improvement from 0.21 to 0.26'
                ],
                link: 'https://disml2024.github.io/disml-workshop-2024/assets/6_978291_86361703_Spring23_598Final_Proj_Report.pdf',
                tags: ['React', 'PyTorch', 'Diffusers']
              },
              {
                title: 'Video Spotlight',
                subtitle: 'Semantic Search in Videos',
                description: [
                  'Built React video player with AI-powered search achieving 0.5ms latency',
                  'Optimized video AI models with 4x size reduction through quantization'
                ],
                link: 'https://github.com/abhiramvad/video-search-ui?tab=readme-ov-file',
                tags: ['BERT', 'React', 'TensorFlow']
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
                role: 'Senior Software Engineer',
                period: 'Jul 2022 - Dec 2023',
                achievements: [
                  'Built IAM knowledge bot with React, Socket IO, Flask, and GPT-3.5',
                  'Developed high-performance JS analytics library for client-side observability',
                  'Created real-time analytics pipeline processing 2GB data hourly'
                ]
              },
              {
                company: 'Philips Healthcare',
                role: 'Senior Software Engineer',
                period: 'Apr 2020 - Jun 2022',
                achievements: [
                  'Increased user engagement by 50% with real-time chatbot implementation',
                  'Led code quality initiatives achieving 100% test coverage',
                  'Reduced deployment times by 50% through database optimization'
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
                title: 'AI & Machine Learning',
                skills: ['PyTorch', 'Diffusers', 'Transformers', 'LangChain', 'CoreML', 'RASA NLP'],
                colorClass: isDark ? 'bg-purple-900 text-purple-300' : 'bg-purple-50 text-purple-600'
              },
              {
                title: 'Languages',
                skills: ['Python', 'TypeScript', 'Java', 'C++'],
                colorClass: isDark ? 'bg-blue-900 text-blue-300' : 'bg-blue-50 text-blue-600'
              },
              {
                title: 'Frontend',
                skills: ['React', 'Angular', 'TypeScript', 'Tailwind'],
                colorClass: isDark ? 'bg-green-900 text-green-300' : 'bg-green-50 text-green-600'
              },
              {
                title: 'Backend & Cloud',
                skills: ['Flask', 'Django', 'AWS', 'Kubernetes'],
                colorClass: isDark ? 'bg-orange-900 text-orange-300' : 'bg-orange-50 text-orange-600'
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