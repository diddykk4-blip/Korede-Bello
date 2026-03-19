import { motion } from 'framer-motion';

const tracks = [
  { id: 1, title: 'Do Like That', year: '2016', cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800' },
  { id: 2, title: 'Godwin', year: '2015', cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800' },
  { id: 3, title: 'Mi Casa Su Casa', year: '2020', cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800' },
  { id: 4, title: 'Bella', year: '2022', cover: 'https://images.unsplash.com/photo-1493225457124-a1a2a5f5fec9?q=80&w=800' },
];

export function MusicLibrary() {
  return (
    <section id="music" className="py-24 md:py-32 bg-background relative border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">Discography</h2>
            <p className="text-primary/60 font-light text-lg">Soundtracks for the soul.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 md:mt-0"
          >
            <a href="#" className="text-sm font-semibold uppercase tracking-widest text-accent-gold hover:text-accent-champagne transition-colors">
              View All Releases →
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tracks.map((track, index) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden rounded-md mb-6">
                <img 
                  src={track.cover} 
                  alt={track.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 blur-0"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-accent-gold uppercase tracking-widest text-sm font-bold border border-accent-gold px-6 py-2 rounded-full">
                    Play
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-1 group-hover:text-accent-gold transition-colors">{track.title}</h3>
              <p className="text-primary/50 text-sm">{track.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
