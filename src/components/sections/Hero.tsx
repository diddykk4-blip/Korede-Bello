import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import SpotlightBackground from '../ui/spotlight-background';

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Studio Shoot Theme */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-black"
        style={{ 
          backgroundImage: `url('/hero-bg.jpg')`,
          backgroundPosition: 'center 40%' // adjusts focus slightly higher to the subject
        }}
      >
        {/* Dramatic Vignette / Studio Lighting */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,1) 85%, rgba(0,0,0,1) 100%)'
          }}
        />
        {/* Overall Darkening Overlay */}
        <div className="absolute inset-0 z-20 bg-black/30 mix-blend-multiply" />
      </div>

      {/* Gold cursor spotlight effect */}
      <SpotlightBackground />

      <div className="absolute inset-x-0 bottom-8 md:bottom-12 z-20 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center md:items-start text-center md:text-left">
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
          
          <a href="#tour" className="px-8 py-4 border border-primary/20 hover:border-accent-gold text-primary rounded-full font-medium uppercase tracking-widest text-sm transition-all hover:text-accent-gold glass-panel">
            Explore World
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-40 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-primary/50">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
}
