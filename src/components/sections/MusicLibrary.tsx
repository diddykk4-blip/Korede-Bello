import { useState } from 'react';
import { motion } from 'framer-motion';
import { VideoModal } from '../ui/VideoModal';

const tracks = [
  { id: 1, title: 'Do Like That', year: '2016', cover: '/do-like-that.jpg', videoUrl: 'https://www.youtube.com/watch?v=hJBi780qFas' },
  { id: 2, title: 'GodWin', year: '2015', cover: '/godwin.jpg', videoUrl: 'https://www.youtube.com/watch?v=w14zUTXOhYE' },
  { id: 3, title: 'Mi Casa Su Casa', year: '2020', cover: '/mi-casa-su-casa.jpg', videoUrl: 'https://www.youtube.com/watch?v=dv1AClQrDeU' },
  { id: 4, title: 'Bella', year: '2022', cover: '/bella.jpg', videoUrl: 'https://www.youtube.com/watch?v=nbTEb9sh7Gc' },
];

export function MusicLibrary() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="music" className="py-24 md:py-32 bg-background relative border-y border-white/5">
      <VideoModal videoUrl={activeVideo} onClose={() => setActiveVideo(null)} />

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
            <a href="https://www.youtube.com/channel/UCVyLkguTbFz_u7aSE9jSXwQ" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold uppercase tracking-widest text-accent-gold hover:text-accent-champagne transition-colors">
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
              onClick={() => setActiveVideo(track.videoUrl)}
            >
              <div className="relative aspect-square overflow-hidden rounded-md mb-6">
                <img 
                  src={track.cover} 
                  alt={track.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-accent-gold uppercase tracking-widest text-sm font-bold border border-accent-gold px-6 py-2 rounded-full">
                    Play Video
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
