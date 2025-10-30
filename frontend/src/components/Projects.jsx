import React from 'react';
import { ExternalLink, GitFork, Star, GitCommit } from 'lucide-react';
import { sortedGithubRepos } from '../data/mock';

const Projects = () => {
  // Primer proyecto destacado
  const featuredProject = sortedGithubRepos[0];
  // Resto de proyectos
  const otherProjects = sortedGithubRepos.slice(1);

  const getLanguageColor = (language) => {
    const colors = {
      'PHP': '#777BB4',
      'Python': '#3776AB',
      'Java': '#007396',
      'JavaScript': '#F7DF1E',
      'SQL': '#CC2927',
      'TypeScript': '#3178C6'
    };
    return colors[language] || '#00ff41';
  };

  return (
    <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#00ff41] font-mono text-sm">03.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#e0e0e0]">
              Proyectos GitHub
            </h2>
            <div className="flex-1 h-px bg-[#252525] ml-4"></div>
          </div>
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <div className="mb-8">
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#151515] border-2 border-[#00ff41] rounded-lg p-8 hover:shadow-2xl hover:shadow-[#00ff41]/20 transition-all duration-300 group">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="px-2 py-1 bg-[#00ff41]/10 border border-[#00ff41] rounded text-[#00ff41] text-xs font-mono">
                      DESTACADO
                    </div>
                    <div className="flex items-center gap-1 text-[#9ca3af] text-sm">
                      <GitCommit size={16} className="text-[#00ff41]" />
                      <span className="font-mono">{featuredProject.commits} commits</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#e0e0e0] group-hover:text-[#00ff41] transition-colors font-mono">
                    {featuredProject.name}
                  </h3>
                </div>
                <a
                  href={featuredProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#00ff41] text-[#0a0a0a] rounded hover:bg-[#00d9ff] transition-colors font-mono text-sm font-semibold"
                >
                  Ver en GitHub
                  <ExternalLink size={16} />
                </a>
              </div>

              <p className="text-[#9ca3af] mb-6 leading-relaxed">
                {featuredProject.description}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                {/* Language */}
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: getLanguageColor(featuredProject.language) }}
                  ></div>
                  <span className="text-[#e0e0e0] text-sm font-mono">{featuredProject.language}</span>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 text-[#9ca3af] text-sm">
                  <Star size={16} />
                  <span className="font-mono">{featuredProject.stars}</span>
                </div>

                {/* Forks */}
                <div className="flex items-center gap-1 text-[#9ca3af] text-sm">
                  <GitFork size={16} />
                  <span className="font-mono">{featuredProject.forks}</span>
                </div>

                {/* Topics */}
                <div className="flex flex-wrap gap-2 ml-auto">
                  {featuredProject.topics.map((topic, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-[#252525] text-[#00d9ff] rounded text-xs font-mono"
                    >
                      #{topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Projects Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-[#1a1a1a] border border-[#252525] rounded-lg p-6 hover:border-[#00ff41] hover:shadow-lg hover:shadow-[#00ff41]/10 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-2.5 h-2.5 rounded-full" 
                    style={{ backgroundColor: getLanguageColor(project.language) }}
                  ></div>
                  <h3 className="text-lg font-semibold text-[#e0e0e0] group-hover:text-[#00ff41] transition-colors font-mono">
                    {project.name}
                  </h3>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9ca3af] hover:text-[#00ff41] transition-colors"
                >
                  <ExternalLink size={18} />
                </a>
              </div>

              {/* Description */}
              <p className="text-[#9ca3af] text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Topics */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.topics.slice(0, 3).map((topic, index) => (
                  <span 
                    key={index}
                    className="px-2 py-0.5 bg-[#252525] text-[#00d9ff] rounded text-xs font-mono"
                  >
                    #{topic}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 pt-3 border-t border-[#252525]">
                <div className="flex items-center gap-1 text-[#9ca3af] text-sm">
                  <GitCommit size={14} className="text-[#00ff41]" />
                  <span className="font-mono">{project.commits}</span>
                </div>
                <div className="flex items-center gap-1 text-[#9ca3af] text-sm">
                  <Star size={14} />
                  <span className="font-mono">{project.stars}</span>
                </div>
                <div className="flex items-center gap-1 text-[#9ca3af] text-sm">
                  <GitFork size={14} />
                  <span className="font-mono">{project.forks}</span>
                </div>
                <span className="text-[#e0e0e0] text-xs font-mono ml-auto">{project.language}</span>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Profile CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/eduardosumariva"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] border border-[#00ff41] text-[#00ff41] rounded hover:bg-[#00ff41] hover:text-[#0a0a0a] transition-all font-mono text-sm font-semibold"
          >
            Ver todos los proyectos en GitHub
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
