import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="bg-surface-light py-24 md:py-32 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Fan Community / Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-10 md:p-14 rounded-2xl bg-gradient-to-b from-surface to-background border border-white/5 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-accent-gold/20 transition-colors duration-700" />
            
            <h3 className="text-3xl font-display font-bold text-primary mb-4 relative z-10">Join the Inner Circle</h3>
            <p className="text-primary/60 font-light mb-10 relative z-10 max-w-md">
              Get exclusive access to pre-sale tour tickets, unreleased music previews, and private events.
            </p>
            
            <form className="relative z-10 font-sans">
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="bg-background/50 border border-white/10 rounded-lg px-6 py-4 text-primary placeholder-primary/40 focus:outline-none focus:border-accent-gold/50 transition-colors w-full"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-background/50 border border-white/10 rounded-lg px-6 py-4 text-primary placeholder-primary/40 focus:outline-none focus:border-accent-gold/50 transition-colors w-full"
                />
              </div>
              <button className="w-full bg-primary text-background font-bold uppercase tracking-widest text-sm py-4 rounded-lg hover:bg-accent-gold transition-colors flex items-center justify-center gap-2">
                Subscribe <ArrowRight size={16} />
              </button>
            </form>
          </motion.div>

          {/* Bookings & Contact blocks */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center gap-8"
          >
            <div>
              <h2 className="text-4xl font-display font-bold text-primary mb-2">Bookings</h2>
              <p className="text-primary/60 font-light mb-8 max-w-md">
                For commercial inquiries, features, and event bookings worldwide.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-6 p-6 rounded-xl border border-white/5 bg-background/50 hover:border-white/10 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-accent-gold group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-primary/50 font-bold mb-1">Global Bookings</h4>
                  <a href="mailto:koredebello@caspertainment.agency" className="text-xl font-display text-primary hover:text-accent-gold transition-colors block break-all">
                    koredebello@caspertainment.agency
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
