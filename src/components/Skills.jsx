import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiCube, HiSparkles, HiEye, HiLightBulb, HiDesktopComputer, HiColorSwatch, HiPhotograph } from 'react-icons/hi';

const skills = [
  {
    name: 'Lumion',
    description: 'Real-time rendering & visualization',
    icon: HiSparkles,
    color: 'from-amber-400 to-orange-500',
    level: 95,
  },
  {
    name: 'SketchUp',
    description: '3D modeling & design',
    icon: HiCube,
    color: 'from-blue-400 to-indigo-500',
    level: 90,
  },
  {
    name: 'V-Ray',
    description: 'Photorealistic rendering',
    icon: HiEye,
    color: 'from-violet-400 to-purple-500',
    level: 88,
  },
  {
    name: '3ds Max',
    description: '3D modeling & animation',
    icon: HiDesktopComputer,
    color: 'from-teal-400 to-cyan-500',
    level: 85,
  },
  {
    name: 'Revit',
    description: 'BIM & architectural design',
    icon: HiLightBulb,
    color: 'from-emerald-400 to-green-500',
    level: 82,
  },
  {
    name: 'AutoCAD',
    description: '2D/3D drafting & design',
    icon: HiColorSwatch,
    color: 'from-red-400 to-rose-500',
    level: 90,
  },
  {
    name: 'Photoshop',
    description: 'Post-processing & enhancement',
    icon: HiPhotograph,
    color: 'from-sky-400 to-blue-600',
    level: 88,
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding section-spacing relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-400/5 dark:bg-accent-400/3 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-label">Expertise</span>
          <div className="w-12 h-0.5 bg-accent-400 mt-4 mb-6" />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-lg text-dark-900 dark:text-white"
          >
            Tools & <span className="italic text-gradient">Skills</span>
          </motion.h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group glass-card p-6 hover:shadow-xl hover:shadow-dark-900/5 dark:hover:shadow-black/20 transition-all duration-500 hover:-translate-y-2 cursor-default"
                id={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-display text-lg font-semibold text-dark-900 dark:text-white mb-1">
                  {skill.name}
                </h3>
                <p className="text-sm text-dark-400 dark:text-dark-500 mb-4">
                  {skill.description}
                </p>

                {/* Progress bar */}
                <div className="relative">
                  <div className="w-full h-1.5 bg-dark-100 dark:bg-dark-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.2, delay: 0.5 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    />
                  </div>
                  <span className="absolute -top-6 right-0 text-xs font-mono text-dark-400 dark:text-dark-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    {skill.level}%
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
