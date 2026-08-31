import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Our Brands' },
    { id: 'sustainability', label: 'Sustainability' },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="h-20 px-6 md:px-12 flex items-center justify-between border-b border-brand-border bg-brand-bg sticky top-0 z-50">
      <div 
        className="cursor-pointer flex items-center h-full py-4"
        onClick={() => handleNavClick('home')}
      >
        <img 
          src="/anzco-logo-blue.svg" 
          alt="ANZCO Foods Logo" 
          className="h-8 md:h-10"
        />
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8 text-xs uppercase tracking-widest font-bold">
        {navItems.map((item) => (
          <button 
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`transition-colors pb-1 border-b-2 ${currentPage === item.id ? 'text-brand-green border-brand-green' : 'text-brand-gray border-transparent hover:text-brand-green'}`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-brand-charcoal hover:text-brand-green">
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-brand-bg border-b border-brand-border shadow-xl py-6 px-6 flex flex-col space-y-6 md:hidden z-40"
          >
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-sm uppercase tracking-widest font-bold transition-colors pb-2 border-b border-brand-border/50 ${currentPage === item.id ? 'text-brand-green' : 'text-brand-charcoal hover:text-brand-green'}`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
