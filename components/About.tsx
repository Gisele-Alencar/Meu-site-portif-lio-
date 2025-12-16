import React from 'react';
import { Users, Heart, Mic } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="w-full bg-dark/5 border-b border-dark/80">
      <div className="max-w-6xl mx-auto p-8 md:p-16 lg:p-24 flex flex-col justify-center items-center">
        
        <div className="max-w-4xl w-full">
           <div className="mb-12 text-left">
             <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase mb-2 text-outline-accent">
               Voluntariado
             </h2>
             <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase pl-0 md:pl-12">
               Tech
             </h2>
           </div>
          
          <p className="text-lg md:text-xl leading-relaxed text-dark/70 mb-12 font-serif italic text-center">
            "Minha atuação é contribuir com a criação de ideias para eventos, palestras, roda de conversa, organização do espaço e também participo da gestão das redes e da comunicação, enviando avisos, planejando conteúdos, criando postagens e contribuindo para manter a comunidade informada e ativa. Ampliando oportunidades para iniciantes e promovendo conexões."
          </p>
          
          {/* Cards de Atuação */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 text-left">
              
              <div className="bg-white border border-dark p-6 shadow-[4px_4px_0_0_rgba(129,89,36,1)] hover:translate-y-[-4px] transition-transform">
                  <Users className="w-8 h-8 text-accent mb-4" />
                  <h3 className="font-display text-xl mb-2">Organização</h3>
                  <p className="text-sm text-dark/70 font-medium">
                    Atuação na organização de eventos e meetups, aproximando iniciantes e profissionais da area. Contribuindo para que mais pessoas tenham oportunidades, conhecimento e conexões na área de tecnologia.
                  </p>
              </div>

              <div className="bg-white border border-dark p-6 shadow-[4px_4px_0_0_rgba(129,89,36,1)] hover:translate-y-[-4px] transition-transform">
                  <Heart className="w-8 h-8 text-accent mb-4" />
                  <h3 className="font-display text-xl mb-2">Network</h3>
                  <p className="text-sm text-dark/70 font-medium">
                    Compartilho ideias, experiências e conteúdos que fortalecem a troca dentro das comunidades. Com o aprendizado coletivo para abrir caminhos, gerar colaboração e apoiar o crescimento profissional de quem está começando.
                  </p>
              </div>

              <div className="bg-white border border-dark p-6 shadow-[4px_4px_0_0_rgba(129,89,36,1)] hover:translate-y-[-4px] transition-transform">
                  <Mic className="w-8 h-8 text-accent mb-4" />
                  <h3 className="font-display text-xl mb-2">Eventos</h3>
                  <p className="text-sm text-dark/70 font-medium">
                    Contribuo com ideias, planejamento e apoio na execução de eventos que fortalecem a comunidade tech. ajudando a criar encontros , roda de conversas com o intuito de compartilhar conhecimento e a tecnologia .
                  </p>
              </div>

          </div>
        </div>

      </div>
    </section>
  );
};