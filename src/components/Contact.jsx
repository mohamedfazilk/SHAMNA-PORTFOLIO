import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi';

const contactInfo = [
  {
    icon: HiPhone,
    label: 'Phone',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
  {
    icon: HiMail,
    label: 'Email',
    value: 'shamna.viz@email.com',
    href: 'mailto:shamna.viz@email.com',
  },
  {
    icon: HiLocationMarker,
    label: 'Location',
    value: 'Kerala, India',
    href: null,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding section-spacing relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-accent-400/5 dark:bg-accent-400/3 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-label block mb-4">Get in Touch</span>
          <div className="w-12 h-0.5 bg-accent-400 mx-auto mb-6" />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-lg text-dark-900 dark:text-white mb-4"
          >
            Let's <span className="italic text-gradient">Collaborate</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body max-w-lg mx-auto"
          >
            Have a project in mind? I'd love to help bring your architectural vision to life.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      className="group glass-card p-6 flex items-center gap-5 hover:shadow-xl hover:shadow-dark-900/5 dark:hover:shadow-black/20 transition-all duration-500 hover:-translate-y-1"
                      id={`contact-${info.label.toLowerCase()}`}
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center shadow-lg shadow-accent-400/20 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="text-label block mb-1">{info.label}</span>
                        <span className="text-dark-900 dark:text-white font-medium">{info.value}</span>
                      </div>
                    </a>
                  ) : (
                    <div className="glass-card p-6 flex items-center gap-5" id={`contact-${info.label.toLowerCase()}`}>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center shadow-lg shadow-accent-400/20">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="text-label block mb-1">{info.label}</span>
                        <span className="text-dark-900 dark:text-white font-medium">{info.value}</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6" id="contact-form">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="text-label block mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-dark-900/5 dark:bg-white/5 border border-dark-200/50 dark:border-dark-700/50 text-dark-900 dark:text-white placeholder-dark-400 dark:placeholder-dark-600 focus:outline-none focus:ring-2 focus:ring-accent-400/30 focus:border-accent-400 transition-all duration-300 font-body"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-label block mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-dark-900/5 dark:bg-white/5 border border-dark-200/50 dark:border-dark-700/50 text-dark-900 dark:text-white placeholder-dark-400 dark:placeholder-dark-600 focus:outline-none focus:ring-2 focus:ring-accent-400/30 focus:border-accent-400 transition-all duration-300 font-body"
                    placeholder="john@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="text-label block mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-dark-900/5 dark:bg-white/5 border border-dark-200/50 dark:border-dark-700/50 text-dark-900 dark:text-white placeholder-dark-400 dark:placeholder-dark-600 focus:outline-none focus:ring-2 focus:ring-accent-400/30 focus:border-accent-400 transition-all duration-300 font-body resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full justify-center group"
                id="contact-submit"
              >
                {submitted ? (
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Message Sent!
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message
                    <HiPaperAirplane className="w-4 h-4 rotate-90 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
