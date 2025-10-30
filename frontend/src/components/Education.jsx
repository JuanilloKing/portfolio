import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { education, certifications } from '../data/mock';

const Education = () => {
  return (
    <section id="formacion" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#00ff41] font-mono text-sm">04.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#e0e0e0]">
              Formación y Certificaciones
            </h2>
            <div className="flex-1 h-px bg-[#252525] ml-4"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="text-[#00ff41]" size={24} />
              <h3 className="text-xl font-bold text-[#e0e0e0] font-mono">Educación</h3>
            </div>

            <div className="space-y-4">
              {education.map((edu) => (
                <div 
                  key={edu.id}
                  className="bg-[#1a1a1a] border border-[#252525] rounded-lg p-6 hover:border-[#00ff41] transition-all duration-300 group"
                >
                  {/* Timeline dot */}
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-[#00ff41] rounded-full group-hover:scale-125 transition-transform"></div>
                      <div className="w-0.5 h-full bg-[#252525] mt-2"></div>
                    </div>
                    
                    <div className="flex-1 pb-2">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-[#e0e0e0] font-semibold leading-tight">
                          {edu.title}
                        </h4>
                      </div>
                      <p className="text-[#00d9ff] font-mono text-sm mb-1">{edu.institution}</p>
                      <div className="flex items-center gap-2 text-[#9ca3af] text-sm">
                        <Calendar size={14} />
                        <span className="font-mono">{edu.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Award className="text-[#00d9ff]" size={24} />
              <h3 className="text-xl font-bold text-[#e0e0e0] font-mono">Certificaciones</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <div 
                  key={cert.id}
                  className="bg-[#1a1a1a] border border-[#252525] rounded-lg p-5 hover:border-[#00d9ff] transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <div className="w-2 h-2 bg-[#00d9ff] rounded-full group-hover:scale-150 transition-transform"></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[#e0e0e0] font-semibold mb-1 leading-tight">
                        {cert.title}
                      </h4>
                      <p className="text-[#9ca3af] text-sm mb-1">{cert.issuer}</p>
                      <span className="text-[#00d9ff] text-xs font-mono">{cert.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info Card */}
            <div className="mt-6 bg-gradient-to-br from-[#1a1a1a] to-[#151515] border border-[#00ff41] rounded-lg p-6">
              <div className="font-mono text-sm space-y-2">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-[#00ff41] rounded-full animate-pulse"></div>
                  <span className="text-[#00ff41] font-semibold">Estado Actual</span>
                </div>
                <p className="text-[#e0e0e0]">
                  <span className="text-[#9ca3af]">$</span> status --verbose
                </p>
                <div className="mt-3 space-y-1 text-[#9ca3af]">
                  <p>✓ Disponibilidad: <span className="text-[#00ff41]">Completa</span></p>
                  <p>✓ Movilidad: <span className="text-[#00ff41]">Sí</span></p>
                  <p>✓ Carnet: <span className="text-[#00ff41]">Categoría B</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
