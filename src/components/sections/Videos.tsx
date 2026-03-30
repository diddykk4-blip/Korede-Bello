import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, X } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  label: string;
  featured?: boolean;
}

const videos: Video[] = [
  {
    id: 'AmZLxRy1ic8',
    title: 'Korede Bello – Not Romantic',
    label: 'Official Music Video',
    featured: true,
  },
  {
    id: 'hJBi780qFas',
    title: 'Korede Bello – Do Like That',
    label: 'Official Music Video',
  },
  {
    id: 'w14zUTXOhYE',
    title: 'Korede Bello – GodWin',
    label: 'Official Music Video',
  },
  {
    id: 'UXyUMMMETsA',
    title: 'Korede Bello ft. Tiwa Savage – Romantic',
    label: 'Official Music Video',
  },
];

const YT_CHANNEL = 'https://www.youtube.com/channel/UCVyLkguTbFz_u7aSE9jSXwQ';

function ytThumb(id: string, quality: 'maxresdefault' | 'hqdefault' = 'hqdefault') {
  return `https://img.youtube.com/vi/${id}/${quality}.jpg`;
}

export function Videos() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const featured = videos[0];
  const grid = videos.slice(1);

  return (
    <section id="videos" className="py-24 md:py-32 bg-surface-light">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">Visuals</h2>
          <p className="text-primary/60 font-light text-lg max-w-2xl mx-auto">
            Sound &amp; Soul
          </p>
        </motion.div>

        {/* Featured Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 group cursor-pointer shadow-2xl"
          onClick={() => setActiveId(featured.id)}
        >
          <div className="absolute inset-0 bg-accent-champagne/10 mix-blend-overlay z-10" />
          <img
            src={ytThumb(featured.id, 'maxresdefault')}
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = ytThumb(featured.id, 'hqdefault'); }}
            alt={featured.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-all duration-500 z-20 flex items-center justify-center">
            <PlayCircle size={80} strokeWidth={1} className="text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background to-transparent z-30">
            <p className="text-accent-gold uppercase tracking-widest text-xs font-bold mb-2">{featured.label}</p>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white">{featured.title}</h3>
          </div>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {grid.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setActiveId(video.id)}
            >
              <div className="relative aspect-video rounded-md overflow-hidden mb-4">
                <img
                  src={ytThumb(video.id, 'hqdefault')}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%]"
                />
                <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <PlayCircle size={48} strokeWidth={1.5} className="text-white drop-shadow-lg" />
                </div>
              </div>
              <p className="text-accent-gold uppercase tracking-widest text-[10px] font-bold mb-1">{video.label}</p>
              <h4 className="text-base font-display font-medium text-primary group-hover:text-accent-champagne transition-colors leading-snug">
                {video.title}
              </h4>
            </motion.div>
          ))}
        </div>

        {/* Subscribe Button */}
        <div className="mt-16 text-center">
          <a
            href={YT_CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-b border-accent-gold text-accent-gold pb-1 font-semibold uppercase tracking-widest text-sm hover:text-primary hover:border-primary transition-colors"
          >
            Subscribe on YouTube
          </a>
        </div>
      </div>

      {/* ── Modal Player ── */}
      <AnimatePresence>
        {activeId && (
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-sm px-4"
            onClick={() => setActiveId(null)}
          >
            <motion.div
              key="modal-content"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)]"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${activeId}?autoplay=1&rel=0`}
                title="Korede Bello – Music Video"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                className="w-full h-full border-0"
              />
              <button
                onClick={() => setActiveId(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black/90 text-white rounded-full p-2 transition-colors"
                aria-label="Close video"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
