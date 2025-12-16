import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const navItems = [
    { label: 'My Work', href: '#portfolio' },
    { label: 'Voluntariado', href: '#about' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Carreira', href: '#career' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // Calcula a posição subtraindo a altura aproximada do header fixo (80px)
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-bg border-b border-dark/80">
      <div className="flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
        {/* Logo Area */}
        <div className="font-display text-xl md:text-2xl tracking-tighter uppercase border-r border-dark/80 h-full flex items-center pr-8">
          Gisele
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-end items-center h-full">
          <ul className="flex h-full">
            {navItems.map((item) => (
              <li key={item.label} className="h-full">
                <a
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="h-full flex items-center px-6 hover:bg-accent hover:text-white transition-colors duration-300 text-sm font-medium uppercase tracking-wide border-l border-dark/80 cursor-pointer"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="h-full">
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, '#contact')}
                className="h-full flex items-center px-8 bg-accent text-white font-bold uppercase tracking-wide hover:bg-dark transition-colors duration-300 border-l border-dark/80 shadow-[inset_0_0_0_0_rgba(0,0,0,0)] hover:shadow-[inset_4px_4px_0_0_rgba(0,0,0,0.2)] cursor-pointer"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center border-l border-dark/80 h-full pl-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-accent hover:text-white transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-dark/80 bg-bg">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.label} className="border-b border-dark/20">
                <a
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="block py-4 px-6 text-sm font-bold uppercase hover:bg-accent hover:text-white transition-colors cursor-pointer"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, '#contact')}
                className="block py-4 px-6 text-sm font-bold uppercase bg-accent text-white hover:bg-dark transition-colors cursor-pointer"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};