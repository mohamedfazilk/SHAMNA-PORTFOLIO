import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight, HiX } from 'react-icons/hi';

export default function Lightbox({ images, currentIndex, setCurrentIndex, onClose }) {
  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length, setCurrentIndex]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length, setCurrentIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, goNext, goPrev]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="lightbox-overlay"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
        onClick={onClose}
        aria-label="Close lightbox"
        id="lightbox-close"
      >
        <HiX className="w-6 h-6" />
      </button>

      {/* Counter */}
      <div className="absolute top-6 left-6 z-10 text-white/60 font-mono text-sm">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Navigation */}
      {images.length > 1 && (
        <>
          <button
            className="absolute left-4 md:left-8 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous image"
            id="lightbox-prev"
          >
            <HiChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-4 md:right-8 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Next image"
            id="lightbox-next"
          >
            <HiChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="max-w-[90vw] max-h-[85vh] relative"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={images[currentIndex]}
            alt={`Gallery image ${currentIndex + 1}`}
            className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
          />
        </motion.div>
      </AnimatePresence>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(index);
              }}
              className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                index === currentIndex
                  ? 'border-white scale-110'
                  : 'border-white/30 opacity-50 hover:opacity-80'
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </motion.div>
  );
}
