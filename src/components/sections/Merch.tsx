import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ShoppingBag, ArrowRight, Sparkles, Eye, Star } from 'lucide-react';

/* ─── Types ─── */
interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  tag?: string;
  description: string;
  image: string;
}

/* ─── Product Data ─── */
const products: Product[] = [
  {
    id: 1,
    name: 'Beauty & Bliss Tee',
    category: 'Apparel',
    price: '₦18,500',
    tag: 'New Drop',
    description: 'Premium cotton tee with signature Beauty & Bliss embroidery.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Korede Signature Hoodie',
    category: 'Apparel',
    price: '₦35,000',
    tag: 'Fan Favorite',
    description: 'Heavyweight fleece hoodie with gold-foil artist logo on chest.',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'AfroPop Tour Cap',
    category: 'Accessories',
    price: '₦12,000',
    description: 'Structured snapback cap with AfroPop embroidered crest.',
    image: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Mood & Melody Tote',
    category: 'Accessories',
    price: '₦9,500',
    tag: 'Limited',
    description: 'Canvas tote with hand-illustrated Mood & Melody artwork.',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Belloved Vinyl',
    category: 'Collectibles',
    price: '₦28,000',
    tag: 'Exclusive',
    description: 'Limited-press vinyl featuring the complete Belloved album.',
    image: 'https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Koreday Poster Edition',
    category: 'Collectibles',
    price: '₦7,500',
    tag: 'Limited',
    description: 'Archival-quality poster from the Koreday era visual campaign.',
    image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 7,
    name: 'Bello Streetwear Jacket',
    category: 'Apparel',
    price: '₦55,000',
    tag: 'Exclusive',
    description: 'Premium streetwear bomber with satin lining and woven patches.',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 8,
    name: 'Sound & Soul Wristband',
    category: 'Accessories',
    price: '₦4,500',
    tag: 'New Drop',
    description: 'Woven festival wristband with metallic thread accents.',
    image: 'https://images.unsplash.com/photo-1573455494060-c5595004fb6c?q=80&w=800&auto=format&fit=crop',
  },
];

const categories = ['All', 'Apparel', 'Accessories', 'Collectibles', 'Limited Edition'];

const tagStyles: Record<string, string> = {
  'New Drop': 'bg-accent-gold text-background',
  'Fan Favorite': 'bg-accent-champagne text-background',
  'Limited': 'bg-gradient-to-r from-accent-plum to-[#3d2a52] text-primary shimmer-badge',
  'Exclusive': 'bg-gradient-to-r from-accent-gold to-accent-champagne text-background shimmer-badge',
};

/* ─── Component ─── */
export function Merch() {
  const [activeCategory, setActiveCategory] = useState('All');
  const heroRef = useRef<HTMLDivElement>(null);

  /* subtle parallax on featured drop hero card */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : activeCategory === 'Limited Edition'
        ? products.filter((p) => p.tag === 'Limited' || p.tag === 'Exclusive')
        : products.filter((p) => p.category === activeCategory);

  return (
    <section
      id="merch"
      className="py-24 md:py-36 bg-background relative overflow-hidden border-t border-white/5"
    >
      {/* ─── Ambient Background Glows ─── */}
      <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] bg-accent-gold/[0.04] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/6 w-[500px] h-[500px] bg-accent-plum/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-40" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* ═══════════════════════════════════════════
            SECTION HEADER
        ═══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 text-accent-gold uppercase tracking-[0.35em] text-xs font-bold mb-5">
            <ShoppingBag size={14} strokeWidth={2.5} /> Official Merch
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary mb-6 leading-[1.1]">
            Shop the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-accent-champagne">
              Collection
            </span>
          </h2>

          <p className="text-primary/55 font-light text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Wear the sound. Own the moment. Official pieces inspired by the music, the mood, and the movement.
          </p>

          {/* decorative gold divider */}
          <div className="flex items-center justify-center gap-3">
            <span className="block w-12 h-px bg-gradient-to-r from-transparent to-accent-gold/60" />
            <Star size={10} className="text-accent-gold/60 fill-accent-gold/60" />
            <span className="block w-12 h-px bg-gradient-to-l from-transparent to-accent-gold/60" />
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════
            FEATURED DROP HERO CARD
        ═══════════════════════════════════════════ */}
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl overflow-hidden mb-20 group cursor-pointer ring-1 ring-white/[0.06]"
        >
          {/* background image with parallax */}
          <motion.div className="absolute inset-0 z-0" style={{ scale: heroScale }}>
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=2000&auto=format&fit=crop"
              alt="Koreday Collection"
              className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.03]"
            />
          </motion.div>

          {/* gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20 z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent z-[1]" />

          {/* gold accent line at top */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/40 to-transparent z-[2]" />

          <div className="relative z-10 p-10 md:p-16 lg:p-20 flex flex-col justify-center min-h-[320px] md:min-h-[420px] max-w-xl">
            {/* availability badge */}
            <div className="inline-flex items-center gap-2 mb-5 w-fit">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-gold opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-gold" />
              </span>
              <span className="text-accent-gold text-xs font-bold uppercase tracking-[0.25em]">
                Available Now
              </span>
            </div>

            <div className="inline-flex items-center gap-2 text-accent-champagne/80 text-xs font-bold uppercase tracking-[0.25em] mb-4">
              <Sparkles size={14} /> Limited Drop
            </div>

            <h3 className="text-3xl md:text-5xl font-display font-bold text-primary mb-5 leading-tight">
              Koreday{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-accent-champagne">
                Collection
              </span>
            </h3>

            <p className="text-primary/65 font-light mb-10 max-w-md text-base md:text-lg leading-relaxed">
              A capsule collection celebrating the "Koreday" era — streetwear meets Afrobeats, designed for those who feel the music.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-3 px-9 py-4 bg-accent-gold text-background rounded-full font-bold uppercase tracking-widest text-sm w-fit
                hover:bg-accent-champagne transition-all duration-300
                shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(212,175,55,0.55)]
                group/btn"
            >
              Explore Drop{' '}
              <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
            </a>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════
            CATEGORY FILTER TABS
        ═══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-16 overflow-x-auto scrollbar-hide"
        >
          <div className="inline-flex gap-2 md:gap-3 p-1.5 rounded-full bg-surface/60 backdrop-blur-sm border border-white/[0.04]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 md:px-7 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-semibold uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${
                  activeCategory === cat
                    ? 'text-background'
                    : 'text-primary/50 hover:text-primary/80'
                }`}
              >
                {/* animated pill background */}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="merch-tab-pill"
                    className="absolute inset-0 bg-accent-gold rounded-full shadow-[0_0_20px_rgba(212,175,55,0.35)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════
            PRODUCT GRID
        ═══════════════════════════════════════════ */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group cursor-pointer"
              >
                {/* card wrapper */}
                <div className="rounded-xl overflow-hidden bg-surface/40 backdrop-blur-sm border border-white/[0.04] transition-all duration-500 hover:border-accent-gold/20 hover:-translate-y-1 hover:product-glow">
                  {/* image container */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                    {/* Quick View button */}
                    <div className="absolute inset-x-0 bottom-0 flex justify-center pb-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                      <span className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary/95 text-background rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-accent-gold transition-colors duration-300 backdrop-blur-sm shadow-lg">
                        <Eye size={13} strokeWidth={2.5} /> Quick View
                      </span>
                    </div>

                    {/* tag badge */}
                    {product.tag && (
                      <div
                        className={`absolute top-3 left-3 md:top-4 md:left-4 px-3 md:px-4 py-1 md:py-1.5 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest ${tagStyles[product.tag] || 'bg-surface text-primary'}`}
                      >
                        {product.tag}
                      </div>
                    )}

                    {/* inner glow on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none shadow-[inset_0_-80px_60px_-30px_rgba(212,175,55,0.1)]" />
                  </div>

                  {/* product info */}
                  <div className="p-4 md:p-5">
                    <h4 className="text-sm md:text-base font-display font-semibold text-primary mb-1.5 group-hover:text-accent-gold transition-colors duration-300 leading-snug">
                      {product.name}
                    </h4>
                    <p className="text-primary/35 text-[10px] md:text-xs uppercase tracking-widest mb-3">
                      {product.category}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-accent-champagne font-semibold text-sm md:text-base tracking-wide">
                        {product.price}
                      </p>
                      <span className="text-primary/30 group-hover:text-accent-gold/70 transition-colors duration-300">
                        <ShoppingBag size={15} />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* ═══════════════════════════════════════════
            BOTTOM CTA
        ═══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 md:mt-24 text-center"
        >
          {/* decorative divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="block w-16 h-px bg-gradient-to-r from-transparent to-white/10" />
            <span className="text-primary/25 text-[10px] uppercase tracking-[0.3em] font-light">
              Every piece tells a story
            </span>
            <span className="block w-16 h-px bg-gradient-to-l from-transparent to-white/10" />
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-3 px-10 py-4 border border-white/10 hover:border-accent-gold text-primary hover:text-accent-gold rounded-full transition-all duration-300 text-sm font-bold uppercase tracking-widest glass-panel
              hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]
              group/cta"
          >
            View Full Store{' '}
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover/cta:translate-x-1"
            />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
