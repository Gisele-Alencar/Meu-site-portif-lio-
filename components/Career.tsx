import React from 'react';
import { CareerMoment } from '../types';

const moments: CareerMoment[] = [
  {
    id: 1,
    title: 'BootCamp Coren CE',
    year: '2025',
    description: 'Participação e premiação em desafios de inovação tecnológica.',
    imageUrl: 'https://i.postimg.cc/Wp8SQCpJ/Grid-Art-20251121-030425239-(1).jpg',
  },
  {
    id: 2,
    title: 'Roda de conversa PyLadies',
    year: '2025',
    description: 'Incentivo e compartilhamento de experiências em tecnologia.',
    imageUrl: 'https://i.postimg.cc/3xvXJchS/Grid-Art-20251121-031254073.jpg',
  },
  {
    id: 3,
    title: 'Evento Bando de Mulher',
    year: '2025',
    description: 'Dedicado ao público feminino, atuei como voluntária no setor de credenciamento.',
    imageUrl: 'https://i.postimg.cc/PxRJDdzZ/Grid-Art-20251121-025250231.jpg',
  },
  {
    id: 4,
    title: 'Tutorial Flask',
    year: '2025',
    description: 'Momento de networking e aprendizado.',
    imageUrl: 'https://i.postimg.cc/XvT7NsVh/1000127315.jpg',
  },
  {
    id: 5,
    title: 'Flask do Básico até a API',
    year: '2025',
    description: 'Tutorial de como usar esse microframework para desenvolvimento web e API.',
    imageUrl: 'https://i.postimg.cc/BbhwBwwZ/MYXJ-20251120215308482-save.jpg',
  },
  {
    id: 6,
    title: 'Innovation Horizon',
    year: '2025',
    description: 'Evento voltado para conexão, inovação e tendências para empresas e startups.',
    imageUrl: 'https://i.postimg.cc/8CjW7XLm/Grid-Art-20251121-030719906-(1).jpg',
  },
  {
    id: 7,
    title: 'GameJam',
    year: '2025',
    description: 'Imersão de 48h para desenvolvimento de jogos.',
    imageUrl: 'https://i.postimg.cc/v8WnxVxq/Grid-Art-20251121-025834971.jpg',
  },
  {
    id: 8,
    title: 'Siará Tech Summit',
    year: '2025',
    description: 'Participação e networking no evento de empreendedorismo.',
    imageUrl: 'https://i.postimg.cc/GmYnbd5b/Grid-Art-20251121-041254199.jpg',
  },
  {
    id: 9,
    title: 'Siará Tech Summit',
    year: '2025',
    description: 'Auxiliando na captação de novos clientes para a Startup.',
    imageUrl: 'https://i.postimg.cc/7ZDrPp8R/Grid-Art-20251121-041437955.jpg',
  },
  {
    id: 10,
    title: 'International Space Apps Challenge',
    year: '2025',
    description: 'Hackathon anual global para desenvolver soluções de problemas que há na Terra e no espaço.',
    imageUrl: 'https://i.postimg.cc/NfBdKYF7/Grid-Art-20251121-041814741.jpg',
  },
  {
    id: 11,
    title: 'Feira do Conhecimento',
    year: '2025',
    description: 'Evento de encontros de tecnologia, criatividade e educação do Ceará.',
    imageUrl: 'https://i.postimg.cc/kMznC1gW/Grid-Art-20251121-041645080.jpg',
  },
  {
    id: 12,
    title: 'Cocoa Heads Fortaleza',
    year: '2025',
    description: 'Voltado para o ecossistema de desenvolvimento da Apple.',
    imageUrl: 'https://i.postimg.cc/rF7CSkFm/Grid-Art-20251121-025533625-(1).jpg',
  },
];

export const Career: React.FC = () => {
  // Duplicate the array to create a seamless infinite loop
  const carouselItems = [...moments, ...moments];

  return (
    <section id="career" className="py-16 md:py-24 border-b border-dark/80 bg-bg overflow-hidden">
      
      {/* Section Header */}
      <div className="container mx-auto px-8 md:px-16 mb-12">
        <h2 className="font-display text-5xl md:text-6xl uppercase mb-2 text-outline-accent">
          Momento
        </h2>
        <h2 className="font-display text-5xl md:text-6xl uppercase pl-0 md:pl-12">
          Carreira
        </h2>
        <p className="mt-4 text-dark/60 max-w-lg md:pl-12 text-sm font-bold tracking-wider uppercase">
          Uma linha do tempo visual da minha jornada
        </p>
      </div>

      {/* Infinite Carousel Track */}
      <div className="relative w-full flex overflow-hidden py-4">
        {/* The moving container */}
        <div className="flex animate-scroll gap-8 md:gap-12 px-8">
          {carouselItems.map((moment, index) => (
            <div 
              key={`${moment.id}-${index}`} 
              className="flex-shrink-0 w-[280px] md:w-[320px] group cursor-default"
            >
              {/* Image Card */}
              <div className="border border-dark bg-white p-2 mb-4 shadow-[8px_8px_0_0_rgba(26,26,26,1)] group-hover:translate-y-[-4px] group-hover:shadow-[12px_12px_0_0_rgba(129,89,36,1)] transition-all duration-300">
                <div className="aspect-[5/4] relative overflow-hidden border border-dark/20 bg-dark/5">
                  <img 
                    src={moment.imageUrl} 
                    onError={(e) => {
                      // Fallback caso a imagem ainda falhe
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(moment.title)}&background=815924&color=fff&size=512`;
                    }}
                    alt={moment.title} 
                    className="w-full h-full object-cover transition-all duration-500"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="px-2">
                <div className="flex justify-between items-baseline gap-2 mb-2">
                  <h3 className="font-display text-lg uppercase leading-tight group-hover:text-accent transition-colors">
                    {moment.title}
                  </h3>
                  <span className="font-bold text-accent text-lg shrink-0">
                    {moment.year}
                  </span>
                </div>
                <p className="text-xs text-dark/70 font-medium leading-relaxed border-l-2 border-accent/30 pl-2">
                  {moment.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};