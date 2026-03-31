import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';

export default function Hero() {
  const handleViewProjects = (e) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/exterior-1.jpeg"
          alt="3D Architectural Visualization"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/60 via-dark-950/40 to-dark-950/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block font-mono text-xs tracking-[0.3em] uppercase text-white/60 border border-white/20 rounded-full px-5 py-2 backdrop-blur-sm">
            3D Architectural Visualizer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter leading-[0.85] mb-8"
        >
          SHAMNA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          Transforming architectural concepts into breathtaking visual experiences.
          Specializing in photorealistic interior & exterior renders that bring spaces to life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={handleViewProjects}
            className="group inline-flex items-center gap-3 px-10 py-4 bg-white text-dark-900 font-medium text-sm tracking-wide rounded-full transition-all duration-300 hover:bg-accent-400 hover:text-white hover:shadow-2xl hover:shadow-accent-400/30 hover:-translate-y-0.5"
            id="cta-view-projects"
          >
            View Projects
            <HiArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-10 py-4 border border-white/30 text-white font-medium text-sm tracking-wide rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/50 hover:-translate-y-0.5 backdrop-blur-sm"
            id="cta-contact"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-xs font-mono tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-2 bg-white/60 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-white/15" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-white/15" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-white/15" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-white/15" />
    </section>
  );
}
