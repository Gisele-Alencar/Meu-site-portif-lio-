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
    description: 'Hackathon anual global para desenvolver soluções.',
    imageUrl: 'https://i.postimg.cc/NfBdKYF7/Grid-Art-20251121-041814741.jpg',
  },
  {
    id: 11,
    title: 'Feira do Conhecimento',
    year: '2025',
    description: 'Evento de tecnologia, criatividade e educação.',
    imageUrl: 'https://i.postimg.cc/kMznC1gW/Grid-Art-20251121-041645080.jpg',
  },
  {
    id: 12,
    title: 'Cocoa Heads Fortaleza',
    year: '2025',
    description: 'Ecossistema de desenvolvimento Apple.',
    imageUrl: 'https://i.postimg.cc/rF7CSkFm/Grid-Art-20251121-025533625-(1).jpg',
  },
];

export const Career: React.FC = () => {
  const carouselItems = [...moments, ...moments];

  return (
    <section
      id="career"
      className="py-16 md:py-24 border-b border-white/10 bg-black/80 backdrop-blur-xl overflow-hidden"
    >
      {/* Header */}
      <div className="container mx-auto px-8 md:px-16 mb-12">
        <h2 className="font-display text-5xl md:text-6xl uppercase mb-2 text-transparent stroke-white">
          Momento
        </h2>
        <h2 className="font-display text-5xl md:text-6xl uppercase text-white md:pl-12">
          Carreira
        </h2>
        <p className="mt-4 text-white/60 max-w-lg md:pl-12 text-sm font-bold tracking-wider uppercase">
          Uma linha do tempo visual da minha jornada
        </p>
      </div>

      {/* Carousel */}
      <div className="relative w-full flex overflow-hidden py-6">
        <div className="<div className="flex w-max animate-scroll gap-8 md:gap-12 px-8">
          {carouselItems.map((moment, index) => (
            <div
              key={`${moment.id}-${index}`}
              className="flex-shrink-0 w-[280px] md:w-[320px] group"
            >
              {/* Card */}
              <div className="bg-black/50 backdrop-blur-xl border border-white/10 p-2 mb-4 rounded-xl
                group-hover:-translate-y-2 transition-all duration-300
                group-hover:border-pink-400/60
                group-hover:shadow-[0_0_25px_rgba(236,72,153,0.35)]"
              >
                <div className="aspect-[5/4] overflow-hidden rounded-lg">
                  <img
                    src={moment.imageUrl}
                    alt={moment.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="px-2">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-display text-lg uppercase text-white group-hover:text-pink-400 transition-colors">
                    {moment.title}
                  </h3>
                  <span className="font-bold text-pink-400 text-lg">
                    {moment.year}
                  </span>
                </div>
                <p className="text-xs text-white/70 leading-relaxed border-l-2 border-pink-400/40 pl-2">
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
