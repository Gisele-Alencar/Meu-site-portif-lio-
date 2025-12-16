import React from 'react';
import { Project } from '../types';
import { ExternalLink } from 'lucide-react';

const projects: Project[] = [
  {
    id: 1,
    title: "Prototipo Aplicativo Veterinario",
    category: "UX/UI Design",
    description: "Com foco em facilitar o agendamento de consultas e o acompanhamento da saúde dos pets. O design foi pensado para ser simples e intuitivo.",
    type: 'image',
    // URL limpa extraída do antigo embed
    linkUrl: "https://www.figma.com/design/CKAEvSKPfk8KfE6YpDpCaw/Projetos?node-id=12-2",
    // Placeholder visual já que não é mais um iframe
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
  },
  {
    id: 2,
    title: "Tela Login",
    category: "Mobile UI",
    description: "Protótipo de interface móvel (Onboarding e Login) com paleta de cores primárias azul-água. O design utiliza a mascote 'Giba' para reforçar a identidade.",
    type: 'image',
    linkUrl: "https://www.figma.com/design/CKAEvSKPfk8KfE6YpDpCaw/Projetos?node-id=0-1",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
  },
  {
    id: 3,
    title: "Landing Page - perfil",
    category: "Figma Sites",
    description: "Desenvolvida no Figma sites versão mobile, utilizando frames e prototipagem para montar as páginas e simular a navegação. O Figma Sites foi usado para publicar o projeto como um site interativo, sem precisar programar.",
    type: 'image',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    linkUrl: "https://portifolio-giialencar.figma.site/"
  },
  {
    id: 4,
    title: "Negócios – Landing Page",
    category: "Web Development",
    description: "Desenvolvido em HTML, com foco em apresentar um projeto de análise de negócios. O site inclui um link para formulário, permitindo que usuários enviem informações ou simulem um contato profissional.",
    type: 'image',
    imageUrl: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    linkUrl: "https://gisele-alencar.github.io/business-analysis/"
  },
  {
    id: 5,
    title: "ConLibras Wireframes",
    category: "UX Flow",
    description: "Wireframes de uma futura aplicação web, detalhando o fluxo de telas para uma plataforma de Libras.",
    type: 'image',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    linkUrl: "https://www.figma.com/design/kMLQPyyZQFmuUGOK8G3hw2/ConLibras?m=auto&t=0URASM3b5AmV2aV7-6"
  }
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="p-8 md:p-16 border-b border-dark/80">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
           <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">Portfolio</span>
           <h2 className="font-display text-5xl text-outline">
             My <br/>
             <span className="text-accent text-outline-none">Work</span>
           </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project) => (
          <div key={project.id} className="group flex flex-col h-full">
            
            {/* Card Container */}
            <div className="border border-dark bg-white p-2 mb-6 relative shadow-[8px_8px_0_0_rgba(0,0,0,0.1)] hover:shadow-[8px_8px_0_0_rgba(129,89,36,1)] transition-shadow duration-300">
              
              <div className="aspect-video w-full overflow-hidden border border-dark/20 bg-dark/5 relative">
                {/* All items are now treated as links/images for better stability */}
                <a 
                  href={project.linkUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block w-full h-full relative group-hover:bg-dark/5 transition-colors"
                >
                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors z-10 flex flex-col gap-2 items-center justify-center text-center p-4">
                      <div className="opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 flex flex-col items-center">
                        <ExternalLink className="text-accent w-10 h-10 drop-shadow-md mb-2" />
                        <span className="bg-white/90 text-accent font-bold uppercase text-xs tracking-wider py-1 px-3 rounded-full border border-accent shadow-sm">
                          Abrir protótipo no Figma
                        </span>
                      </div>
                    </div>
                    
                    <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className={`w-full h-full ${(project.imageUrl?.includes('logo') || project.imageUrl?.includes('icon') || project.imageUrl?.includes('svg')) ? 'object-contain p-16 bg-gray-50' : 'object-cover'}`}
                  />
                </a>
              </div>

            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <a href={project.linkUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors group">
                  <h3 className="font-display text-2xl uppercase group-hover:underline decoration-2 underline-offset-4">{project.title}</h3>
                </a>
                
                <a href={project.linkUrl} target="_blank" rel="noopener noreferrer" className="text-dark/40 hover:text-accent transition-colors">
                  <ExternalLink size={24} />
                </a>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">{project.category}</span>
              <p className="text-dark/70 leading-relaxed font-medium text-sm flex-grow border-l-2 border-dark/20 pl-4">
                {project.description}
              </p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};