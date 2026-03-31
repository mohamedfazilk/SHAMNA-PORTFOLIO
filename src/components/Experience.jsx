import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiBriefcase, HiOfficeBuilding, HiChevronRight } from 'react-icons/hi';

const experiences = [
  {
    role: 'Freelance 3D Visualizer',
    company: 'Self-Employed',
    period: '2024 – Present',
    description:
      'Delivering high-quality 3D architectural visualization services for residential and commercial projects. Working directly with architects, interior designers, and real estate developers to create photorealistic renders.',
    highlights: [
      'Completed 20+ freelance visualization projects',
      'Specialized in luxury residential interiors',
      'Developed efficient render workflows for fast turnarounds',
      'Built a strong client base through quality and reliability',
    ],
    icon: HiBriefcase,
    current: true,
  },
  {
    role: '3D Visualization Artist',
    company: 'd&E Global Consulting LLP',
    period: '2023 – 2024',
    description:
      'Produced architectural visualizations for MSME projects, collaborating with cross-functional teams to deliver compelling visual solutions for diverse architectural projects.',
    highlights: [
      'Worked on 30+ MSME architectural projects',
      'Created interior & exterior visualization renders',
      'Collaborated with architects and structural engineers',
      'Mastered multiple rendering software and techniques',
    ],
    icon: HiOfficeBuilding,
    current: false,
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="experience"
      className="section-padding section-spacing relative overflow-hidden bg-white dark:bg-dark-900/50"
    >
      <div ref={ref} className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-label">Journey</span>
          <div className="w-12 h-0.5 bg-accent-400 mt-4 mb-6" />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-lg text-dark-900 dark:text-white"
          >
            Work <span className="italic text-gradient">Experience</span>
          </motion.h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[23px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-dark-200 dark:bg-dark-700" />

          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 + index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-12 mb-16 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${
                      exp.current
                        ? 'bg-gradient-to-br from-accent-400 to-accent-600 shadow-accent-400/30'
                        : 'bg-dark-200 dark:bg-dark-700 shadow-dark-900/10'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${exp.current ? 'text-white' : 'text-dark-500 dark:text-dark-400'}`} />
                  </div>
                  {exp.current && (
                    <div className="absolute inset-0 rounded-full bg-accent-400/20 animate-ping" />
                  )}
                </div>

                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className="glass-card p-8 hover:shadow-xl hover:shadow-dark-900/5 dark:hover:shadow-black/20 transition-all duration-500 hover:-translate-y-1">
                    {/* Period badge */}
                    <div className={`flex items-center gap-2 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className="inline-block px-3 py-1 rounded-full bg-accent-400/10 text-accent-600 dark:text-accent-400 text-xs font-mono tracking-wider">
                        {exp.period}
                      </span>
                      {exp.current && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-400/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono">
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>

                    <h3 className="font-display text-xl font-semibold text-dark-900 dark:text-white mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-accent-500 mb-4">{exp.company}</p>
                    <p className="text-body text-sm mb-5">{exp.description}</p>

                    {/* Highlights */}
                    <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-left' : ''}`}>
                      {exp.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-sm text-dark-500 dark:text-dark-400"
                        >
                          <HiChevronRight className="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
