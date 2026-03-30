import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { FeaturedRelease } from './components/sections/FeaturedRelease';
import { MusicLibrary } from './components/sections/MusicLibrary';
import { Videos } from './components/sections/Videos';
import { Tour } from './components/sections/Tour';
import { Gallery } from './components/sections/Gallery';
// import { Merch } from './components/sections/Merch';
import { Contact } from './components/sections/Contact';
import { NewsletterModal } from './components/ui/NewsletterModal';

function App() {
  const [showNewsletter, setShowNewsletter] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed or seen the modal in this session
    const seenThisSession = sessionStorage.getItem('kb_newsletter_seen');
    
    if (!seenThisSession) {
      const timer = setTimeout(() => {
        setShowNewsletter(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseNewsletter = () => {
    setShowNewsletter(false);
    sessionStorage.setItem('kb_newsletter_seen', 'true');
  };

  return (
    <div className="min-h-screen bg-background text-primary selection:bg-accent-gold selection:text-background font-sans overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <FeaturedRelease />
        <MusicLibrary />
        <Videos />
        <Tour />
        <Gallery />
        {/* <Merch /> */}
        <Contact />
      </main>
      
      <Footer />

      <NewsletterModal 
        isOpen={showNewsletter} 
        onClose={handleCloseNewsletter} 
      />
    </div>
  );
}

export default App;
