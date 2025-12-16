import React from 'react';
import { Palette, Database, Terminal } from 'lucide-react';
import { Skill } from '../types';

// Categorized skills based on the image tools provided
const skills: Skill[] = [
  {
    id: 1,
    title: 'Design',
    icon: <Palette className="w-8 h-8" />,
    description: 'Figma, Miro, Canva, Adobe. Criação de protótipos, Wireframe e Design visual.'
  },
  {
    id: 2,
    title: 'Dev & Programação',
    icon: <Terminal className="w-8 h-8" />,
    description: 'SQL, C, Python, HTML.  Desenvolvendo pequenos projetos, exercicios e lógica de programação.'
  },
  {
    id: 3,
    title: 'Dados',
    icon: <Database className="w-8 h-8" />,
    description: 'MySQL, Looker Studio. Criação de bancos de dados, Dashboard e visualização de métricas.'
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="border-b border-dark/80">
      {/* Header Section similar to Career */}
      <div className="p-8 md:p-16 border-b border-dark/80">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-5xl md:text-6xl uppercase mb-2 text-outline-accent">
            Hard
          </h2>
          <h2 className="font-display text-5xl md:text-6xl uppercase pl-0 md:pl-12">
            Skills
          </h2>
        </div>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-dark/80">
        {skills.map((skill) => (
          <div key={skill.id} className="p-8 md:p-12 group hover:bg-white transition-colors duration-300 flex flex-col items-start">
            <div className="mb-6 p-3 bg-bg border border-dark group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300 shadow-[4px_4px_0_0_rgba(26,26,26,1)]">
              {skill.icon}
            </div>
            <h3 className="font-display text-2xl uppercase mb-4 group-hover:translate-x-2 transition-transform">{skill.title}</h3>
            <p className="text-dark/70 leading-relaxed font-medium">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};