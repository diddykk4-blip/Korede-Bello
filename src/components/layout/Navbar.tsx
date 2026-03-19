import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Music', href: '#music' },
  { name: 'Videos', href: '#videos' },
  { name: 'About', href: '#about' },
  { name: 'Tour', href: '#tour' },
  { name: 'Gallery', href: '#gallery' },
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
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo / Brand */}
        <a href="#home" className="text-2xl font-display font-bold text-primary tracking-widest uppercase">
          Korede Bello
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-primary/80 hover:text-accent-gold transition-colors tracking-wide uppercase"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#music"
            className="px-6 py-2 rounded-full border border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-background transition-colors text-sm font-medium tracking-wide uppercase text-glow"
          >
            Listen Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-primary hover:text-accent-gold transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/5 shadow-2xl md:hidden overflow-hidden">
          <div className="flex flex-col px-6 py-8 space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-display text-primary hover:text-accent-gold transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#music"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 px-6 py-3 rounded-full bg-accent-gold text-background text-center text-sm font-bold tracking-widest uppercase"
            >
              Listen Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
