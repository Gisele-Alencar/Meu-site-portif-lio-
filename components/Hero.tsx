import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // Calcula a posição subtraindo a altura aproximada do header fixo (80px)
      // Mesma lógica aplicada no Navbar.tsx para consistência
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-12 min-h-[80vh]">
      {/* Text Content */}
      <div className="md:col-span-7 lg:col-span-8 p-8 md:p-16 lg:p-24 flex flex-col justify-center relative border-b md:border-b-0 md:border-r border-dark/80">
        <div className="absolute top-4 left-4 md:top-8 md:left-8 text-xs font-bold tracking-widest uppercase opacity-50">
          Portfolio 2025
        </div>
        
        {/* Updated Name Structure */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-4">
          <span className="block text-accent">Gisele</span>
          <span className="block text-outline ml-0 md:ml-12">Alencar</span>
        </h1>

        <div className="mb-8 font-bold text-lg md:text-xl text-dark uppercase tracking-wide">
          Ux/Ui Designer • Data Analyst • Low Code
        </div>

        {/* Bio */}
        <p className="text-lg md:text-xl max-w-xl mb-8 leading-relaxed font-medium text-dark/80">
          Hey, sou a Gisele! Crio interfaces utilizando dados para entregar experiências mais intuitivas e eficientes aos usuários. Desenvolvo projetos acadêmicos e pessoais, criando protótipos funcionais para web e mobile — sempre pensando em como cada detalhe pode facilitar a vida de quem usa.
          <br /><br />
          Além disso, aplico Python para tornar processos mais inteligentes e dados mais estratégicos, potencializando a experiência do usuário e a eficiência das soluções que desenvolvo.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-12 text-sm font-bold uppercase tracking-wider text-dark/60">
             <div className="flex items-center gap-2">
               <span className="text-accent">★</span> Disponível
             </div>
             <div className="hidden sm:block">•</div>
             <div>Foco em UX & Dados</div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <a 
            href="#portfolio" 
            onClick={(e) => handleScroll(e, '#portfolio')}
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-bold uppercase tracking-wider border border-dark shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] transition-all cursor-pointer"
          >
            Ver meus trabalhos
          </a>
          
          <a 
            href="#about" 
            onClick={(e) => handleScroll(e, '#about')}
            className="group flex items-center gap-2 px-4 py-4 text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors cursor-pointer"
          >
            Voluntariado
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>

      {/* Image Side */}
      <div className="md:col-span-5 lg:col-span-4 relative bg-dark/5 overflow-hidden flex items-center justify-center p-8">
        {/* Reverted aspect ratio to 3:4 (standard portrait) */}
        <div className="w-full max-w-[340px] aspect-[3/4] relative border border-dark p-2 bg-white rotate-1 transition-transform hover:rotate-0 duration-500 shadow-[8px_8px_0_0_rgba(0,0,0,0.1)]">
          <div className="absolute top-0 left-0 w-full h-full border border-dark translate-x-1 translate-y-1 -z-10 bg-accent"></div>
          
          <img 
            src="https://i.postimg.cc/Gmrxp1LS/MYXJ-20251113084650110-save.jpg" 
            onError={(e) => {
              e.currentTarget.src = 'https://ui-avatars.com/api/?name=Gisele+Alencar&background=815924&color=fff&size=512&font-size=0.3';
            }}
            alt="Gisele Alencar" 
            className="w-full h-full object-cover contrast-100"
          />
        </div>
      </div>
    </section>
  );
};