import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved === 'true') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', !darkMode);
  };

  const openLightbox = (images, index = 0) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="relative">
      {/* Scroll Progress Bar */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Projects openLightbox={openLightbox} />
      <Skills />
      <Experience />
      <Contact />
      <Footer />

      {lightboxOpen && (
        <Lightbox
          images={lightboxImages}
          currentIndex={lightboxIndex}
          setCurrentIndex={setLightboxIndex}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
}

export default App;
