import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';

const events = [
  { id: 1, date: 'Oct 14', venue: 'O2 Brixton Academy', city: 'London, UK', status: 'Sold Out' },
  { id: 2, date: 'Oct 21', venue: 'Afro Nation', city: 'Lagos, NG', status: 'Tickets' },
  { id: 3, date: 'Nov 05', venue: 'Olympia', city: 'Paris, FR', status: 'Tickets' },
  { id: 4, date: 'Nov 18', venue: 'Irving Plaza', city: 'New York, US', status: 'RSVP' }
];

export function Tour() {
  return (
    <section id="tour" className="py-24 md:py-32 bg-surface-light border-t border-white/5 relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent-gold/5 opacity-50 blur-3xl" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">Live Experience</h2>
            <p className="text-primary/60 font-light text-lg">Catch Korede Bello on tour.</p>
          </div>
          <a href="#" className="hidden md:inline-block border-b border-accent-gold text-accent-gold pb-1 font-semibold uppercase tracking-widest text-sm hover:text-primary hover:border-primary transition-colors">
            All Tour Dates
          </a>
        </motion.div>

        <div className="space-y-4">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 glass-panel rounded-xl hover:bg-surface transition-colors cursor-pointer border-transparent hover:border-white/10"
            >
              <div className="flex items-center gap-8 mb-4 md:mb-0 w-full md:w-1/3">
                <div className="flex flex-col text-center min-w-16">
                  <span className="text-accent-gold uppercase tracking-widest text-xs font-bold">{event.date.split(' ')[0]}</span>
                  <span className="text-3xl font-display font-bold text-primary">{event.date.split(' ')[1]}</span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-medium text-primary mb-1">{event.venue}</h3>
                  <div className="flex items-center text-primary/50 text-sm gap-1">
                    <MapPin size={14} /> {event.city}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between w-full md:w-auto md:gap-8">
                <button className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all w-full md:w-auto flex items-center justify-center gap-2 ${
                  event.status === 'Sold Out' 
                    ? 'bg-transparent border border-white/20 text-primary/40 cursor-not-allowed' 
                    : 'bg-primary text-background hover:bg-accent-gold hover:text-background'
                }`}>
                  {event.status} {event.status !== 'Sold Out' && <ArrowUpRight size={16} />}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
