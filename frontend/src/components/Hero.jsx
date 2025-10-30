import React, { useState, useEffect } from 'react';
import { Github, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = personalInfo.role;
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="font-mono text-sm text-[#9ca3af]">
              <span className="text-[#00ff41]">eduardo@portfolio</span>:<span className="text-[#00d9ff]">~</span>$ whoami
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#e0e0e0] tracking-tight">
              {personalInfo.name.split(' ')[0]}
              <br />
              <span className="text-[#00ff41]">{personalInfo.name.split(' ')[1]}</span>
            </h1>

            <div className="h-12">
              <p className="text-xl md:text-2xl font-mono text-[#00d9ff]">
                {displayedText}
                {!isTypingComplete && <span className="animate-pulse">|</span>}
              </p>
            </div>

            <div className="flex items-center gap-2 text-[#9ca3af]">
              <MapPin size={18} className="text-[#00ff41]" />
              <span>{personalInfo.location}</span>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#00ff41] text-[#0a0a0a] rounded font-mono text-sm font-semibold hover:bg-[#00d9ff] transition-colors"
              >
                <Github size={18} />
                Ver GitHub
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] border border-[#252525] text-[#e0e0e0] rounded font-mono text-sm hover:border-[#00ff41] hover:text-[#00ff41] transition-all"
              >
                <Mail size={18} />
                Contactar
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="bg-[#1a1a1a] rounded-lg border border-[#252525] overflow-hidden shadow-2xl">
              <div className="bg-[#151515] px-4 py-3 border-b border-[#252525] flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <span className="text-[#9ca3af] text-xs font-mono ml-2">developer_profile.js</span>
              </div>
              
              {/* Code Content */}
              <div className="p-6 font-mono text-sm leading-relaxed">
                <div className="text-[#9ca3af]">// Perfil de desarrollador</div>
                <div className="mt-2">
                  <span className="text-[#ff79c6]">const</span>{' '}
                  <span className="text-[#e0e0e0]">developer</span>{' '}
                  <span className="text-[#ff79c6]">=</span>{' '}
                  <span className="text-[#e0e0e0]">{'{'}</span>
                </div>
                <div className="ml-4 mt-1">
                  <span className="text-[#50fa7b]">nombre</span>
                  <span className="text-[#ff79c6]">:</span>{' '}
                  <span className="text-[#f1fa8c]">"{personalInfo.name}"</span>
                  <span className="text-[#e0e0e0]">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-[#50fa7b]">rol</span>
                  <span className="text-[#ff79c6]">:</span>{' '}
                  <span className="text-[#f1fa8c]">"{personalInfo.role}"</span>
                  <span className="text-[#e0e0e0]">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-[#50fa7b]">ubicacion</span>
                  <span className="text-[#ff79c6]">:</span>{' '}
                  <span className="text-[#f1fa8c]">"{personalInfo.location}"</span>
                  <span className="text-[#e0e0e0]">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-[#50fa7b]">skills</span>
                  <span className="text-[#ff79c6]">:</span>{' '}
                  <span className="text-[#e0e0e0]">[</span>
                  <span className="text-[#f1fa8c]">"PHP"</span>
                  <span className="text-[#e0e0e0]">,</span>{' '}
                  <span className="text-[#f1fa8c]">"Java"</span>
                  <span className="text-[#e0e0e0]">,</span>{' '}
                  <span className="text-[#f1fa8c]">"Python"</span>
                  <span className="text-[#f1fa8c]">"PostgreSQL"</span>
                  <span className="text-[#e0e0e0]">,</span>{' '}
                  <span className="text-[#f1fa8c]">"JavaScript"</span>
                  <span className="text-[#e0e0e0]">],</span>
                </div>
                <div className="ml-4">
                  <span className="text-[#50fa7b]">disponible</span>
                  <span className="text-[#ff79c6]">:</span>{' '}
                  <span className="text-[#bd93f9]">true</span>
                  <span className="text-[#e0e0e0]">,</span>
                </div>
                <div>
                  <span className="text-[#e0e0e0]">{'}'}</span>
                  <span className="text-[#ff79c6]">;</span>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#00ff41] opacity-10 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#00d9ff] opacity-10 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
