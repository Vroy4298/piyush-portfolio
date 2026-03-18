import { useState, useEffect } from 'react';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-lg bg-[var(--bg-primary)]/80 shadow-sm border-b border-[var(--border-color)]' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        <a href="#" className="text-2xl font-mono font-bold text-accent tracking-tighter">
          &lt;PA /&gt;
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map(link => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-[var(--text-secondary)] hover:text-accent transition-colors">
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-[var(--bg-secondary)] text-[var(--text-primary)] transition-colors"
            aria-label="Toggle theme"
          >
            {darkMode ? <BsSunFill size={18} /> : <BsMoonFill size={18} />}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-[var(--bg-secondary)] text-[var(--text-primary)] transition-colors"
          >
            {darkMode ? <BsSunFill size={18} /> : <BsMoonFill size={18} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-[var(--text-primary)] p-2">
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-[var(--bg-primary)] shadow-lg border-b border-[var(--border-color)] md:hidden flex flex-col items-center py-6 gap-6"
          >
            {NAV_LINKS.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-[var(--text-secondary)] hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
