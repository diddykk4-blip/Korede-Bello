import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16 md:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="md:col-span-2 relative"
          >
            <div className="aspect-[3/4] rounded-t-full overflow-hidden border border-white/10 shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1506803682981-6e718a9df311?q=80&w=1000&auto=format&fit=crop" 
                alt="Korede Bello Portrait" 
                className="w-full h-full object-cover object-top grayscale-[50%] hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-3 md:pl-12 lg:pl-24"
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold text-primary mb-8 leading-tight">
              A voice that<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blush to-accent-gold">
                transcends borders.
              </span>
            </h2>
            
            <div className="space-y-6 text-primary/70 font-light text-lg leading-relaxed">
              <p>
                Korede Bello is an acclaimed Afrobeats singer and songwriter. Known for his captivating voice, magnetic charm, and emotionally resonant storytelling, he has consistently redefined the boundaries of contemporary African pop music.
              </p>
              <p>
                From his earliest breakthrough hits that became global anthems to his recent soulful explorations, his artistry is rooted in joy, resilience, and a deep connection to community.
              </p>
              <p>
                His music is not just sound—it's an experience. Blending traditional African rhythms with modern R&B, soul, and pop sensibilities, Korede creates timeless records that speak directly to the heart while moving the feet.
              </p>
            </div>
            
            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="text-3xl font-display font-bold text-primary">1B+</p>
                <p className="text-xs uppercase tracking-widest text-accent-gold mt-1">Global Streams</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <p className="text-3xl font-display font-bold text-primary">10+</p>
                <p className="text-xs uppercase tracking-widest text-accent-champagne mt-1">Years active</p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
