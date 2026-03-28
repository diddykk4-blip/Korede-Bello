import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Twitter, Youtube, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Music & Videos', href: '#music' },
  { name: 'Tour', href: '#tour' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Merch', href: '#merch' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center relative z-50">
        {/* Left: Menu Toggle & Socials */}
        <div className="flex-1 flex items-center justify-start gap-4 sm:gap-6 text-primary">
          <button
            className="hover:text-accent-gold transition-colors flex items-center gap-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            <span className="hidden md:inline-block text-sm font-medium uppercase tracking-widest mt-1">
              {mobileMenuOpen ? 'Close' : 'Menu'}
            </span>
          </button>
          
          <div className="hidden sm:flex items-center gap-4 border-l border-white/20 pl-4 sm:pl-6">
            <a href="https://www.instagram.com/koredebello?igsh=MTgwNGxsenlrMWcydA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent-gold hover:scale-110 transition-all"><Instagram size={20} /></a>
            <a href="https://x.com/koredebello" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-accent-gold hover:scale-110 transition-all"><Twitter size={20} /></a>
            <a href="https://youtu.be/8HgulLsRuDw?si=G0UNDhNmK8v9-l6M" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-accent-gold hover:scale-110 transition-all"><Youtube size={20} /></a>
            <a href="https://www.facebook.com/share/17RDYJ22KG/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-accent-gold hover:scale-110 transition-all"><Facebook size={20} /></a>
          </div>
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <a href="#home" className="flex items-center">
            <img src="/logo.png" alt="Korede Bello" className="h-12 w-auto object-contain brightness-0 invert hover:scale-105 transition-transform" />
          </a>
        </div>

        {/* Right: Listen Now */}
        <div className="flex-1 flex justify-end">
          <a
            href="https://onerpm.link/m3gavibrations"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex px-6 py-2 rounded-full border border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-background transition-all hover:scale-105 text-sm font-medium tracking-wide uppercase text-glow"
          >
            Listen Now
          </a>
        </div>
      </div>

      {/* Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, y: 0, backdropFilter: 'blur(24px)' }}
            exit={{ opacity: 0, y: -20, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-0 left-0 right-0 bg-background/60 border-b border-white/10 shadow-2xl overflow-hidden pt-24 pb-12 z-40"
          >
            <div className="container mx-auto px-6 md:px-12 flex flex-col space-y-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl md:text-5xl font-display text-primary hover:text-accent-gold transition-colors uppercase tracking-widest w-fit"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: navLinks.length * 0.08 }}
                className="pt-6 sm:hidden flex flex-col gap-6"
              >
                <a
                  href="https://onerpm.link/m3gavibrations"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-6 py-3 rounded-full bg-accent-gold text-background text-center text-sm font-bold tracking-widest uppercase w-max"
                >
                  Listen Now
                </a>
                
                <div className="flex items-center gap-6 text-primary mt-4">
                  <a href="https://www.instagram.com/koredebello?igsh=MTgwNGxsenlrMWcydA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent-gold transition-colors"><Instagram size={24} /></a>
                  <a href="https://x.com/koredebello" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-accent-gold transition-colors"><Twitter size={24} /></a>
                  <a href="https://youtu.be/8HgulLsRuDw?si=G0UNDhNmK8v9-l6M" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-accent-gold transition-colors"><Youtube size={24} /></a>
                  <a href="https://www.facebook.com/share/17RDYJ22KG/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-accent-gold transition-colors"><Facebook size={24} /></a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
