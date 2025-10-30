import React from 'react';
import { Code2, Database, Layers, Wrench } from 'lucide-react';
import { skills } from '../data/mock';

// Objeto para mapear el nombre de la habilidad con la URL de su badge de Shields.io
const skillBadges = {
  // Backend
  PHP: 'https://img.shields.io/badge/-PHP-777BB4?style=for-the-badge&logo=php&logoColor=white',
  Java: 'https://img.shields.io/badge/-Java-007396?style=for-the-badge&logo=openjdk&logoColor=white',
  Python: 'https://img.shields.io/badge/-Python-3776AB?style=for-the-badge&logo=python&logoColor=white',
  Kotlin: 'https://img.shields.io/badge/-Kotlin-0095D5?style=for-the-badge&logo=kotlin&logoColor=white',
  Dart: 'https://img.shields.io/badge/-Dart-0175C2?style=for-the-badge&logo=dart&logoColor=white',
  
  PostgreSQL: 'https://img.shields.io/badge/-PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white',
  MySQL: 'https://img.shields.io/badge/-MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white',
  
  Laravel: 'https://img.shields.io/badge/-Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white',
  Inertia: 'https://img.shields.io/badge/-Inertia.js-9545ff?style=for-the-badge&logo=inertia&logoColor=white',
  FastAPI: 'https://img.shields.io/badge/-FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white',
  Flutter: 'https://img.shields.io/badge/-Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white',

  Figma: 'https://img.shields.io/badge/-Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white',
  Git: 'https://img.shields.io/badge/-Git-F05032?style=for-the-badge&logo=git&logoColor=white',
  
  'HTML/CSS': 'https://img.shields.io/badge/-HTML5%2FCSS3-E34F26?style=for-the-badge&logo=html5&logoColor=white',
  JavaScript: 'https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
};

const Skills = () => {
  const categoryIcons = {
    frontend: <Code2 className="text-[#00ff41]" size={20} />,
    backend: <Code2 className="text-[#00d9ff]" size={20} />,
    database: <Database className="text-[#ff3366]" size={20} />,
    framework: <Layers className="text-[#f1fa8c]" size={20} />,
    tools: <Wrench className="text-[#bd93f9]" size={20} />
  };

  const categories = {
    frontend: skills.filter(s => s.category === 'frontend'),
    backend: skills.filter(s => s.category === 'backend'),
    database: skills.filter(s => s.category === 'database'),
    framework: skills.filter(s => s.category === 'framework'),
    tools: skills.filter(s => s.category === 'tools')
  };

  const categoryNames = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Base de Datos',
    framework: 'Frameworks',
    tools: 'Herramientas'
  };

  return (
    <section id="habilidades" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#00ff41] font-mono text-sm">02.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#e0e0e0]">
              Habilidades Técnicas
            </h2>
            <div className="flex-1 h-px bg-[#252525] ml-4"></div>
          </div>
          <p className="text-[#9ca3af] font-mono text-sm mt-2">
            // Stack tecnológico y herramientas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(categories).map(([category, categorySkills]) => (
            categorySkills.length > 0 && (
              <div 
                key={category}
                className="bg-[#1a1a1a] border border-[#252525] rounded-lg p-6 hover:border-[#00ff41] transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-[#252525]">
                  {categoryIcons[category]}
                  <h3 className="font-mono text-[#e0e0e0] font-semibold">
                    {categoryNames[category]}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    skillBadges[skill.name] ? (
                      <img
                        key={skill.name}
                        src={skillBadges[skill.name]}
                        alt={skill.name}
                        className="transition-all duration-300 cursor-default"
                      />
                    ) : (
                      <span
                        key={skill.name}
                        className="px-3 py-1.5 bg-[#252525] text-[#e0e0e0] rounded font-mono text-sm"
                      >
                        {skill.name}
                      </span>
                    )
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;