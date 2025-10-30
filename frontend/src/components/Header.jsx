import React, { useState } from 'react';
import { Menu, X, Github, Mail, FileDown } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#252525]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-[#00ff41] font-mono text-lg font-bold hover:text-[#00d9ff] transition-colors"
            >
              {'<ES />'}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('sobre-mi')}
              className="text-[#e0e0e0] hover:text-[#00ff41] transition-colors text-sm font-mono"
            >
              sobre_mi()
            </button>
            <button
              onClick={() => scrollToSection('habilidades')}
              className="text-[#e0e0e0] hover:text-[#00ff41] transition-colors text-sm font-mono"
            >
              habilidades[]
            </button>
            <button
              onClick={() => scrollToSection('proyectos')}
              className="text-[#e0e0e0] hover:text-[#00ff41] transition-colors text-sm font-mono"
            >
              proyectos.git
            </button>
            <button
              onClick={() => scrollToSection('formacion')}
              className="text-[#e0e0e0] hover:text-[#00ff41] transition-colors text-sm font-mono"
            >
              formacion{}
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-[#e0e0e0] hover:text-[#00ff41] transition-colors text-sm font-mono"
            >
              contacto()
            </button>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e0e0e0] hover:text-[#00ff41] transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.cvUrl}
              download
              className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-[#00ff41] text-[#00ff41] rounded hover:bg-[#00ff41] hover:text-[#0a0a0a] transition-all text-sm font-mono"
            >
              <FileDown size={16} />
              CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#e0e0e0] hover:text-[#00ff41] transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#252525]">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('sobre-mi')}
                className="text-[#e0e0e0] hover:text-[#00ff41] transition-colors text-sm font-mono text-left"
              >
                sobre_mi()
              </button>
              <button
                onClick={() => scrollToSection('habilidades')}
                className="text-[#e0e0e0] hover:text-[#00ff41] transition-colors text-sm font-mono text-left"
              >
                habilidades[]
              </button>
              <button
                onClick={() => scrollToSection('proyectos')}
                className="text-[#e0e0e0] hover:text-[#00ff41] transition-colors text-sm font-mono text-left"
              >
                proyectos.git
              </button>
              <button
                onClick={() => scrollToSection('formacion')}
                className="text-[#e0e0e0] hover:text-[#00ff41] transition-colors text-sm font-mono text-left"
              >
                formacion{}
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-[#e0e0e0] hover:text-[#00ff41] transition-colors text-sm font-mono text-left"
              >
                contacto()
              </button>
              <a
                href={personalInfo.cvUrl}
                download
                className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-[#00ff41] text-[#00ff41] rounded hover:bg-[#00ff41] hover:text-[#0a0a0a] transition-all text-sm font-mono w-fit"
              >
                <FileDown size={16} />
                Descargar CV
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
