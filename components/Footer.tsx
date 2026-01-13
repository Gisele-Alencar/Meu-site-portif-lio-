import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black/70 backdrop-blur-md text-white p-8 md:p-12 border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Nome e copyright */}
        <div className="text-center md:text-left">
          <h3 className="font-display text-2xl uppercase mb-1 text-white">
            Gisele Alencar
          </h3>
          <p className="text-xs text-white/60 uppercase tracking-widest">
            © 2025 All rights reserved.
          </p>
        </div>

        {/* Ícones sociais */}
        <div className="flex gap-6">
          <a
            href="https://github.com/Gisele-Alencar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-accent transition-colors"
            title="GitHub"
          >
            <Github size={24} />
          </a>

          <a
            href="https://br.linkedin.com/in/giselealencar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-accent transition-colors"
            title="LinkedIn"
          >
            <Linkedin size={24} />
          </a>

          <a
            href="https://www.instagram.com/giisele_al"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-accent transition-colors"
            title="Instagram"
          >
            <Instagram size={24} />
          </a>
        </div>

      </div>
    </footer>
  );
};
