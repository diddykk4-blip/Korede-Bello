import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Sparkles } from 'lucide-react';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    dobDay: '',
    dobMonth: '',
  });

  // Handle Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log('Subscribing:', formData);
    setIsSubscribed(true);
    
    // Auto-close after success message
    setTimeout(() => {
      onClose();
      // Reset state for next time (though it won't show again this session)
      setTimeout(() => setIsSubscribed(false), 500);
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Container */}
          <motion.div
            className="relative z-10 w-full max-w-lg overflow-hidden bg-accent-champagne backdrop-blur-2xl rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/50"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-black/40 hover:text-black transition-colors z-20"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            <div className="p-8 md:p-12">
              <AnimatePresence mode="wait">
                {!isSubscribed ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="relative"
                  >
                    <div className="inline-flex items-center gap-2 text-accent-gold uppercase tracking-[0.2em] text-[10px] font-bold mb-4">
                      <Sparkles size={12} /> Exclusive Access
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-black mb-4 leading-tight">
                      Join the <span className="text-accent-gold underline decoration-accent-gold/20">Inner Circle</span>
                    </h2>
                    
                    <p className="text-black/70 font-light text-sm mb-8 leading-relaxed">
                      Get exclusive access to pre-sale tour tickets, unreleased music previews, and private events.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <input
                            type="text"
                            placeholder="First Name"
                            required
                            className="w-full bg-black/5 border border-black/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-accent-gold/50 transition-colors placeholder:text-black/30 text-black"
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          />
                        </div>
                        <div className="space-y-1">
                          <input
                            type="email"
                            placeholder="Email Address"
                            required
                            className="w-full bg-black/5 border border-black/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-accent-gold/50 transition-colors placeholder:text-black/30 text-black"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest text-black/40 ml-1 mb-1 block font-bold">Date of Birth</label>
                        <div className="grid grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder="Day (DD)"
                            maxLength={2}
                            required
                            className="w-full bg-black/5 border border-black/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-accent-gold/50 transition-colors placeholder:text-black/30 text-black"
                            value={formData.dobDay}
                            onChange={(e) => setFormData({ ...formData, dobDay: e.target.value.replace(/\D/g, '') })}
                          />
                          <input
                            type="text"
                            placeholder="Month (MM)"
                            maxLength={2}
                            required
                            className="w-full bg-black/5 border border-black/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-accent-gold/50 transition-colors placeholder:text-black/30 text-black"
                            value={formData.dobMonth}
                            onChange={(e) => setFormData({ ...formData, dobMonth: e.target.value.replace(/\D/g, '') })}
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-black text-white hover:bg-neutral-800 transition-all py-4 rounded-xl font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 group mt-4 overflow-hidden relative shadow-lg"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          Subscribe <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </span>
                        <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 opacity-5" />
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Sparkles className="text-accent-gold" size={40} />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-black mb-4">You're In!</h2>
                    <p className="text-black/70 font-light">
                      Welcome to the Inner Circle. <br /> Check your email for your first exclusive update.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Decorative bottom glow */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent opacity-50" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
