import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';

export function Videos() {
  return (
    <section id="videos" className="py-24 md:py-32 bg-surface-light">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">Visuals</h2>
          <p className="text-primary/60 font-light text-lg max-w-2xl mx-auto">
            Cinematic storytelling and the visual translation of sound.
          </p>
        </motion.div>

        {/* Featured Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 group cursor-pointer shadow-2xl"
        >
          <div className="absolute inset-0 bg-accent-champagne/10 mix-blend-overlay z-10" />
          <img 
            src="https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?q=80&w=2000" 
            alt="Featured Music Video" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-all duration-500 z-20 flex items-center justify-center">
            <PlayCircle size={80} strokeWidth={1} className="text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background to-transparent z-30">
            <p className="text-accent-gold uppercase tracking-widest text-xs font-bold mb-2">Official Music Video</p>
            <h3 className="text-3xl font-display font-bold text-white">Bella</h3>
          </div>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-md overflow-hidden mb-4">
                <img 
                  src={`https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop&sig=${item}`} 
                  alt="Video Thumbnail" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%]"
                />
                <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <PlayCircle size={40} className="text-white" />
                </div>
              </div>
              <h4 className="text-lg font-display font-medium text-primary group-hover:text-accent-champagne transition-colors">Behind The Scenes Vol. {item}</h4>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="inline-block border-b border-accent-gold text-accent-gold pb-1 font-semibold uppercase tracking-widest text-sm hover:text-primary hover:border-primary transition-colors">
            Subscribe on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
