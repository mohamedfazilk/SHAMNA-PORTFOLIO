import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '3+', label: 'Years Experience' },
    { number: '30+', label: 'Happy Clients' },
    { number: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="about" className="section-padding section-spacing relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-400/5 dark:bg-accent-400/3 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-label">About Me</span>
          <div className="w-12 h-0.5 bg-accent-400 mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="heading-lg text-dark-900 dark:text-white mb-8"
            >
              Crafting Visual
              <span className="block text-gradient italic"> Stories</span>
              Through Architecture
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-5"
            >
              <p className="text-body">
                I'm a passionate 3D architectural visualizer with a keen eye for detail
                and aesthetics. My work bridges the gap between architectural concepts
                and photorealistic visual experiences, helping clients envision their
                dream spaces before they're built.
              </p>
              <p className="text-body">
                With expertise spanning both <strong className="text-dark-900 dark:text-white font-medium">interior</strong> and{' '}
                <strong className="text-dark-900 dark:text-white font-medium">exterior visualization</strong>,
                I specialize in creating immersive renders that capture the essence of
                each design—from the play of natural light to the texture of materials.
              </p>
              <p className="text-body">
                Having contributed to numerous MSME projects, I understand the importance
                of delivering visual solutions that not only look stunning but also
                communicate design intent with precision and clarity.
              </p>
            </motion.div>
          </div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="glass-card p-8 text-center group hover:shadow-xl hover:shadow-accent-400/5 transition-all duration-500 hover:-translate-y-1"
              >
                <span className="block text-4xl md:text-5xl font-display font-bold text-dark-900 dark:text-white mb-2 group-hover:text-gradient transition-all duration-300">
                  {stat.number}
                </span>
                <span className="text-label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
