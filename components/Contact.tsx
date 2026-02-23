import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="w-full bg-pink-400/70 backdrop-blur-xl border-b border-black/20"
    >
      <div className="max-w-4xl mx-auto p-8 md:p-16 lg:p-24 text-center">
        <h2 className="font-display text-5xl md:text-6xl uppercase mb-8 text-black">
          Entre em <br />
          <span className="text-pink-600">contato</span>
        </h2>

        <p className="mb-12 text-black/80 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
          Tenho projetos abertos para novos desafios. Se você tem uma ideia incrível, vamos conversar.
        </p>

        {/* Botões de contato */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          
          <a
            href="mailto:unigisele@gmail.com"
            className="flex items-center gap-3 px-8 py-4 border-12 border-pink-580 text-black font-display text-lg uppercase hover:bg-pink-600 hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5" />
            Email
          </a>

          <a
            href="https://wa.me/5585992563910"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 border-2 border-pink-600 text-black font-display text-lg uppercase hover:bg-pink-600 hover:text-white transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>

        </div>
      </div>
    </section>
  );
};
