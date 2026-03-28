import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { FeaturedRelease } from './components/sections/FeaturedRelease';
import { MusicLibrary } from './components/sections/MusicLibrary';
import { Videos } from './components/sections/Videos';
import { Tour } from './components/sections/Tour';
import { Gallery } from './components/sections/Gallery';
import { Merch } from './components/sections/Merch';
import { Contact } from './components/sections/Contact';

function App() {
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
        <Merch />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
