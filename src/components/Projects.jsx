import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

const exteriorProjects = Array.from({ length: 8 }, (_, i) => ({
  id: `ext-${i + 1}`,
  title: `Exterior Visualization ${i + 1}`,
  category: 'Exterior',
  description: 'Modern exterior architectural visualization showcasing unique design elements and natural integration.',
  thumbnail: `/images/exterior-${i + 1}.jpeg`,
  images: [`/images/exterior-${i + 1}.jpeg`],
}));

const interiorProjects = Array.from({ length: 12 }, (_, i) => ({
  id: `int-${i + 1}`,
  title: `Interior Space ${i + 1}`,
  category: 'Interior',
  description: 'Premium interior visualization highlighting ambient lighting, materials, and spatial planning.',
  thumbnail: `/images/interior-${i + 1}.jpeg`,
  images: [`/images/interior-${i + 1}.jpeg`],
}));

// Interleave to create a varied masonry-like grid
const projects = [];
const maxLen = Math.max(exteriorProjects.length, interiorProjects.length);
for (let i = 0; i < maxLen; i++) {
  if (exteriorProjects[i]) projects.push(exteriorProjects[i]);
  if (interiorProjects[i]) projects.push(interiorProjects[i]);
}

const categories = ['All', 'Interior', 'Exterior'];

export default function Projects({ openLightbox }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding section-spacing relative overflow-hidden bg-white dark:bg-dark-900/50">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-400/5 dark:bg-accent-400/3 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-label block mb-4"
            >
              Featured Work
            </motion.span>
            <div className="w-12 h-0.5 bg-accent-400 mb-6" />
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="heading-lg text-dark-900 dark:text-white"
            >
              Selected <span className="italic text-gradient">Projects</span>
            </motion.h2>
          </div>

          {/* Category filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                  ? 'bg-dark-900 dark:bg-white text-white dark:text-dark-900 shadow-lg'
                  : 'bg-dark-900/5 dark:bg-white/10 text-dark-500 dark:text-dark-400 hover:bg-dark-900/10 dark:hover:bg-white/20'
                  }`}
                id={`filter-${cat.toLowerCase()}`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group cursor-pointer ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                onClick={() => openLightbox(project.images)}
                id={`project-card-${project.id}`}
              >
                <div className="relative overflow-hidden rounded-2xl glass-card">
                  <div className={`relative overflow-hidden ${index === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-dark-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-white/90 dark:bg-dark-900/90 backdrop-blur-sm text-xs font-mono tracking-wider uppercase rounded-full text-dark-700 dark:text-dark-200">
                        {project.category}
                      </span>
                    </div>

                    {/* Hover content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <h3 className="text-xl font-display font-semibold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-white/70 mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="inline-flex items-center gap-2 text-sm font-medium text-white/90 group-hover:text-accent-400 transition-colors">
                        View Gallery
                        <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
