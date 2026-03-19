import { motion } from 'framer-motion';
import { Play, Disc, ExternalLink } from 'lucide-react';

export function FeaturedRelease() {
  return (
    <section id="featured" className="py-24 md:py-32 bg-surface-light relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="group relative max-w-lg mx-auto md:mx-0 w-full aspect-square"
          >
            <div className="absolute inset-0 bg-accent-gold/20 blur-3xl rounded-full transform group-hover:scale-110 transition-transform duration-700" />
            <img 
              src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1200" 
              alt="Latest Release" 
              className="relative w-full h-full object-cover rounded-md shadow-2xl z-10 
                         transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-center justify-center rounded-md">
              <button className="w-20 h-20 bg-accent-gold/90 rounded-full flex items-center justify-center text-background hover:scale-110 transition-transform">
                <Play size={32} className="ml-2" />
              </button>
            </div>
          </motion.div>

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
              Koreday
            </h2>
            
            <p className="text-primary/70 text-lg font-light leading-relaxed mb-10 max-w-xl">
              The new album "Koreday" explores themes of joy, resilience, and personal evolution. A vibrant blend of contemporary Afrobeats, R&B, and soulful melodies that bring light to the dancefloor.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {['Spotify', 'Apple Music', 'YouTube', 'Boomplay'].map((platform) => (
                <a 
                  key={platform}
                  href="#" 
                  className="px-6 py-3 border border-white/10 hover:border-accent-gold hover:text-accent-gold rounded-full transition-all text-sm font-medium flex items-center gap-2 glass-panel"
                >
                  {platform} <ExternalLink size={14} />
                </a>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
