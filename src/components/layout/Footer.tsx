import { Instagram, Youtube, Facebook, Mail } from 'lucide-react';
import { XIcon } from '../ui/XIcon';

const socialLinks = [
  { Icon: Instagram, href: 'https://www.instagram.com/koredebello?igsh=MTgwNGxsenlrMWcydA==', label: 'Instagram' },
  { Icon: Facebook, href: 'https://www.facebook.com/share/17RDYJ22KG/?mibextid=wwXIfr', label: 'Facebook' },
  { Icon: Youtube, href: 'https://www.youtube.com/channel/UCVyLkguTbFz_u7aSE9jSXwQ', label: 'YouTube' },
  { Icon: XIcon, href: 'https://x.com/koredebello', label: 'X' },
];

export function Footer() {
  return (
    <footer className="bg-background pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-display font-bold text-primary mb-4 uppercase tracking-widest">
              Korede Bello
            </h2>
            <p className="text-primary/60 max-w-sm mb-8 font-light leading-relaxed">
              Official artist platform. Explore the music, live experiences, and creative universe.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-primary/50 hover:text-accent-gold transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-accent-champagne mb-6">Explore</h3>
            <ul className="space-y-4">
              {['Home', 'Music', 'Videos', 'Tour', 'Gallery'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-primary/70 hover:text-primary transition-colors font-light">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-accent-champagne mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="#contact" className="text-primary/70 hover:text-primary transition-colors font-light flex items-center gap-2">
                  <Mail size={16} /> Bookings
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary/70 hover:text-primary transition-colors font-light flex items-center gap-2">
                  <Mail size={16} /> Press
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-primary/40 text-xs font-light tracking-wide">
          <p>© {new Date().getFullYear()} Korede Bello. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
