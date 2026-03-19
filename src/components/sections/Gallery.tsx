import { motion } from 'framer-motion';

export function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?q=80&w=800",
    "https://images.unsplash.com/photo-1520694478166-daaaaaecf488?q=80&w=800",
    "https://images.unsplash.com/photo-1493225457124-a1a2a5f5fec9?q=80&w=800",
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800"
  ];

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">Moments</h2>
          <p className="text-primary/60 font-light text-lg">Behind the scenes and cultural impact.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {images.map((src, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`relative overflow-hidden group rounded-md ${idx === 0 || idx === 3 ? 'md:col-span-2 aspect-[16/9]' : 'aspect-square'}`}
            >
              <img 
                src={src} 
                alt="Gallery moment" 
                className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
