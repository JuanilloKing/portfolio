import React from 'react';
import { User, Briefcase, Heart, Users } from 'lucide-react';
import { personalInfo } from '../data/mock';

const About = () => {
  return (
    <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#00ff41] font-mono text-sm">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#e0e0e0]">
              Sobre Mí
            </h2>
            <div className="flex-1 h-px bg-[#252525] ml-4"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-[#1a1a1a] border border-[#252525] rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <User className="text-[#00ff41]" size={20} />
                <span className="font-mono text-[#00d9ff] text-sm">console.log(aboutMe)</span>
              </div>
              <p className="text-[#9ca3af] leading-relaxed">
                {personalInfo.about}
              </p>
            </div>

            {/* Qualities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#1a1a1a] border border-[#252525] rounded-lg p-5 hover:border-[#00ff41] transition-colors group">
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase className="text-[#00ff41] group-hover:scale-110 transition-transform" size={20} />
                  <h3 className="font-mono text-[#e0e0e0] text-sm">Profesionalidad</h3>
                </div>
                <p className="text-[#9ca3af] text-sm">Compromiso con la calidad y cumplimiento de objetivos</p>
              </div>

              <div className="bg-[#1a1a1a] border border-[#252525] rounded-lg p-5 hover:border-[#00d9ff] transition-colors group">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="text-[#00d9ff] group-hover:scale-110 transition-transform" size={20} />
                  <h3 className="font-mono text-[#e0e0e0] text-sm">Trabajo en Equipo</h3>
                </div>
                <p className="text-[#9ca3af] text-sm">Colaboración efectiva y comunicación clara</p>
              </div>

              <div className="bg-[#1a1a1a] border border-[#252525] rounded-lg p-5 hover:border-[#00ff41] transition-colors group">
                <div className="flex items-center gap-3 mb-2">
                  <Heart className="text-[#ff3366] group-hover:scale-110 transition-transform" size={20} />
                  <h3 className="font-mono text-[#e0e0e0] text-sm">Actitud Positiva</h3>
                </div>
                <p className="text-[#9ca3af] text-sm">Motivación constante y energía positiva</p>
              </div>

              <div className="bg-[#1a1a1a] border border-[#252525] rounded-lg p-5 hover:border-[#00d9ff] transition-colors group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-5 h-5 text-[#00d9ff] group-hover:scale-110 transition-transform flex items-center justify-center font-bold">
                    ∞
                  </div>
                  <h3 className="font-mono text-[#e0e0e0] text-sm">Aprendizaje Continuo</h3>
                </div>
                <p className="text-[#9ca3af] text-sm">Siempre buscando mejorar y crecer</p>
              </div>
            </div>
          </div>

          {/* Stats/Info Card */}
          <div className="space-y-6">
            <div className="bg-[#1a1a1a] border border-[#252525] rounded-lg p-6">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#252525]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <span className="text-[#9ca3af] text-xs font-mono ml-2">stats.json</span>
              </div>

              {/* Stats */}
              <div className="space-y-4 font-mono text-sm">
                <div>
                  <span className="text-[#9ca3af]">{'{'}</span>
                </div>
                <div className="ml-4">
                  <span className="text-[#50fa7b]">"edad"</span>
                  <span className="text-[#ff79c6]">:</span>{' '}
                  <span className="text-[#bd93f9]">23</span>
                  <span className="text-[#e0e0e0]">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-[#50fa7b]">"ubicacion"</span>
                  <span className="text-[#ff79c6]">:</span>{' '}
                  <span className="text-[#f1fa8c]">"{personalInfo.location}"</span>
                  <span className="text-[#e0e0e0]">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-[#50fa7b]">"idiomas"</span>
                  <span className="text-[#ff79c6]">:</span>{' '}
                  <span className="text-[#e0e0e0]">[</span>
                  <span className="text-[#f1fa8c]">"Español (Nativo)"</span>
                  <span className="text-[#e0e0e0]">,</span>{' '}
                  <span className="text-[#f1fa8c]">"Inglés (B1)"</span>
                  <span className="text-[#e0e0e0]">],</span>
                </div>
                <div className="ml-4">
                  <span className="text-[#50fa7b]">"carnet_conducir"</span>
                  <span className="text-[#ff79c6]">:</span>{' '}
                  <span className="text-[#bd93f9]">true</span>
                  <span className="text-[#e0e0e0]">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-[#50fa7b]">"disponibilidad"</span>
                  <span className="text-[#ff79c6]">:</span>{' '}
                  <span className="text-[#f1fa8c]">"Completa"</span>
                  <span className="text-[#e0e0e0]">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-[#50fa7b]">"movilidad_geografica"</span>
                  <span className="text-[#ff79c6]">:</span>{' '}
                  <span className="text-[#bd93f9]">true</span>
                </div>
                <div>
                  <span className="text-[#9ca3af]">{'}'}</span>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#151515] border border-[#00ff41] rounded-lg p-6">
              <div className="text-[#00ff41] text-4xl mb-2 font-mono">"</div>
              <p className="text-[#e0e0e0] italic mb-2">
                "Make it correct, make it clear, make it concise, make it fast. In that order. " Autor:Wes Dyer
              </p>
              <div className="text-[#00ff41] text-4xl text-right font-mono">"</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
