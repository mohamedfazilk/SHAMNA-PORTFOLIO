import { motion } from 'framer-motion';
import { HiHeart } from 'react-icons/hi';
import { FaBehance, FaInstagram, FaLinkedinIn, FaDribbble } from 'react-icons/fa';

const socialLinks = [
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { icon: FaBehance, href: '#', label: 'Behance' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaDribbble, href: '#', label: 'Dribbble' },
];

export default function Footer() {
  return (
    <footer className="section-padding py-12 border-t border-dark-100 dark:border-dark-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#home" className="font-display text-2xl font-bold tracking-tight text-dark-900 dark:text-white">
              SHAMNA
            </a>
            <p className="text-sm text-dark-400 dark:text-dark-500 mt-1">
              3D Architectural Visualizer
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-dark-900/5 dark:bg-white/10 flex items-center justify-center text-dark-500 dark:text-dark-400 hover:bg-accent-400 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                  id={`social-${social.label.toLowerCase()}`}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-sm text-dark-400 dark:text-dark-500 flex items-center gap-1">
            © {new Date().getFullYear()} SHAMNA. Made with{' '}
            <HiHeart className="w-4 h-4 text-red-400 inline-block" />
          </p>
        </div>
      </div>
    </footer>
  );
}
