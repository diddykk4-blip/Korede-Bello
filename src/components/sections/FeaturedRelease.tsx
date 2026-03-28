import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Disc, ExternalLink } from 'lucide-react';
import { VideoModal } from '../ui/VideoModal';

const YOUTUBE_URL = 'https://www.youtube.com/watch?v=IEDg4vqlNk8';

const streamingLinks = [
  { name: 'Apple Music', href: 'https://music.apple.com/us/album/not-romantic-single/1882082008' },
  { name: 'Spotify', href: 'https://open.spotify.com/album/3B3E7rXcfBBpIivWkMR9uG' },
  { name: 'Audiomack', href: 'https://audiomack.com/koredebello_/song/not-romantic' },
  { name: 'YouTube', href: YOUTUBE_URL },
];

export function FeaturedRelease() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="featured" className="py-24 md:py-32 bg-surface-light relative overflow-hidden">
      <VideoModal videoUrl={activeVideo} onClose={() => setActiveVideo(null)} />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Album Art */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="group relative max-w-lg mx-auto md:mx-0 w-full aspect-square cursor-pointer"
            onClick={() => setActiveVideo(YOUTUBE_URL)}
          >
            <div className="absolute inset-0 bg-accent-gold/20 blur-3xl rounded-full transform group-hover:scale-110 transition-transform duration-700" />
            <img 
              src="/not-romantic.png" 
              alt="Not Romantic – Korede Bello" 
              className="relative w-full h-full object-cover rounded-md shadow-2xl z-10 
                         transition-transform duration-700 group-hover:scale-[1.02]"
            />
            {/* Centered play overlay */}
            <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-center justify-center rounded-md">
              <span className="w-20 h-20 bg-accent-gold/90 rounded-full flex items-center justify-center text-background hover:scale-110 transition-transform">
                <Play size={32} className="ml-1.5" />
              </span>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 text-accent-champagne mb-6 uppercase tracking-widest text-xs font-semibold">
              <Disc size={16} /> Latest Release
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-6 leading-tight">
              Not Romantic
            </h2>
            
            <p className="text-primary/70 text-lg font-light leading-relaxed mb-10 max-w-xl">
              Korede Bello returns with his captivating new single, "Not Romantic." Opening with a playful nod to the stereotype that Nigerian men aren't romantic, this smooth Afropop and R&B track dives into the realities of modern love, shattered expectations, and honest confessions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {streamingLinks.map(({ name, href }) => (
                <a 
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-white/10 hover:border-accent-gold hover:text-accent-gold rounded-full transition-all text-sm font-medium flex items-center gap-2 glass-panel"
                >
                  {name} <ExternalLink size={14} />
                </a>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
