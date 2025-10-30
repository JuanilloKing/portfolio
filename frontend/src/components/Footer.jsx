import React from 'react';
import { Github, Mail, Linkedin, MapPin, Phone, FileDown } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-[#0a0a0a] border-t border-[#252525] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-[#00ff41] font-mono mb-3">{'<ES />'}</h3>
            <p className="text-[#9ca3af] text-sm mb-4">
              Desarrollador Web Full Stack apasionado por crear soluciones tecnológicas innovadoras.
            </p>
            <div className="flex gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9ca3af] hover:text-[#00ff41] transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9ca3af] hover:text-[#00ff41] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-[#9ca3af] hover:text-[#00ff41] transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#e0e0e0] font-mono font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-sm">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-[#9ca3af] hover:text-[#00ff41] transition-colors"
              >
                <Mail size={16} />
                <span>{personalInfo.email}</span>
              </a>
              <div className="flex items-center gap-2 text-[#9ca3af]">
                <Phone size={16} />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-[#9ca3af]">
                <MapPin size={16} />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h4 className="text-[#e0e0e0] font-mono font-semibold mb-4">Acción Rápida</h4>
            <div className="space-y-3">
              <a
                href={personalInfo.cvUrl}
                download
                className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-[#00ff41] text-[#00ff41] rounded hover:bg-[#00ff41] hover:text-[#0a0a0a] transition-all font-mono text-sm w-fit"
              >
                <FileDown size={16} />
                Descargar CV
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-[#252525] text-[#e0e0e0] rounded hover:border-[#00ff41] hover:text-[#00ff41] transition-all font-mono text-sm w-fit"
              >
                <Github size={16} />
                Ver GitHub
              </a>
            </div>

            {/* Status Badge */}
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-2 bg-[#151515] border border-[#00ff41] rounded">
              <div className="w-2 h-2 bg-[#00ff41] rounded-full animate-pulse"></div>
              <span className="text-[#00ff41] text-xs font-mono">Disponible para trabajar</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#252525] my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#9ca3af] text-sm font-mono">
            <span className="text-[#00ff41]">©</span> {currentYear} Eduardo Sumariva Salgado. Todos los derechos reservados.
          </p>
          <p className="text-[#9ca3af] text-xs font-mono">
            Desarrollado con <span className="text-[#ff3366]">♥</span> usando React
          </p>
        </div>

        {/* ASCII Art (optional decorative element) */}
        <div className="mt-8 text-center">
          <pre className="text-[#252525] text-xs font-mono inline-block">
{`
   ____    ____ 
  / __/__ / __/
 / _// _ \\_\ \  
/___/\___/___/  
`}
          </pre>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
