import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image / Parallax Container */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-[#0a0a0a]"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1516280440502-6997b165b5d2?q=80&w=2600&auto=format&fit=crop')`,
          backgroundPosition: '50% 30%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20 mix-blend-multiply" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center md:items-start text-center md:text-left mt-20">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="uppercase tracking-[0.3em] text-accent-champagne text-sm font-semibold mb-4"
        >
          Korede Bello
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary tracking-tight leading-tight mb-6"
        >
          Beauty, Bliss,<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-accent-champagne">
            Sound, Soul.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-primary/80 max-w-xl text-lg md:text-xl font-light mb-10"
        >
          An immersive journey into the heart of modern Afrobeats. 
          Experience the art, the rhythm, and the stories behind the sound.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a href="#music" className="group relative px-8 py-4 bg-accent-gold text-background rounded-full font-bold uppercase tracking-widest text-sm hover:bg-accent-champagne transition-all flex items-center gap-3 shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)]">
            <span className="relative z-10 flex items-center gap-2">
              <Play size={16} className="fill-background" /> Listen Now
            </span>
          </a>
          
          <a href="#about" className="px-8 py-4 border border-primary/20 hover:border-accent-gold text-primary rounded-full font-medium uppercase tracking-widest text-sm transition-all hover:text-accent-gold glass-panel">
            Explore World
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-primary/50">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
}
