import React from 'react';
// Check icon removed as it was unused

export const Principles: React.FC = () => {
  const principles = [
    "O usuário é o limite.",
    "Bom design é um bom negócio.",
    "Menos, porém melhor.",
    "Consistência cria confiança."
  ];

  return (
    <section id="principles" className="grid grid-cols-1 md:grid-cols-2">
      
      {/* Content Side */}
      <div className="p-8 md:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-dark/80">
        <h2 className="font-display text-4xl md:text-5xl uppercase mb-12 text-outline-accent">
          Meus <br/> <span className="text-dark text-outline-none pl-8">Princípios</span>
        </h2>
        
        <ul className="space-y-6">
          {principles.map((text, idx) => (
            <li key={idx} className="flex items-center gap-4 group">
              <div className="w-8 h-8 flex items-center justify-center border border-dark/30 group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all">
                <span className="font-display text-sm">0{idx + 1}</span>
              </div>
              <span className="text-lg font-medium uppercase tracking-wide border-b border-transparent group-hover:border-accent transition-all pb-1">
                {text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Image Side */}
      <div className="relative h-96 md:h-auto overflow-hidden bg-dark">
        <img 
          src="https://picsum.photos/id/238/800/1200" 
          alt="Architecture Principle" 
          className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-500"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full h-full border-[1rem] border-bg/10"></div>
        </div>
      </div>
    </section>
  );
};