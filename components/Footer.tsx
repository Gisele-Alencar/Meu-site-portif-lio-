import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-bg p-8 md:p-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-display text-2xl uppercase mb-1">Gisele Alencar</h3>
          <p className="text-xs opacity-50 uppercase tracking-widest">© 2025 All rights reserved.</p>
        </div>
        
        <div className="flex gap-6">
          <a 
            href="https://github.com/Gisele-Alencar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
            title="GitHub"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://br.linkedin.com/in/giselealencar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
            title="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="https://www.instagram.com/giisele_al" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
            title="Instagram"
          >
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};