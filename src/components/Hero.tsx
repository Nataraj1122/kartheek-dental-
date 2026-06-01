import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight, Phone, MessageSquare } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const mediaItems = [
  { type: 'image', src: "/a3fef4f389be3e97771b067e8ed10413.jpg" },
  { type: 'image', src: "/11d1146c3b223ced0a57e2dae5f1c13d.jpg" },
  { type: 'video', src: "/video.mp4" }
];

export default function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const nextSlide = () => setCurrentIdx((prev) => (prev + 1) % mediaItems.length);
  const prevSlide = () => setCurrentIdx((prev) => (prev === 0 ? mediaItems.length - 1 : prev - 1));

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const currentMedia = mediaItems[currentIdx];

    if (currentMedia.type === 'image') {
      timer = setTimeout(() => {
        nextSlide();
      }, 4000);
    } else if (currentMedia.type === 'video' && videoRef.current) {
      // For video, let the onEnded event handle the next slide
      videoRef.current.play().catch(error => {
        console.error("Video auto-play failed: ", error);
        // Fallback: move to next slide after 4 seconds
        timer = setTimeout(() => {
          nextSlide();
        }, 4000);
      });
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [currentIdx]);

  return (
    <section className="relative h-[100dvh] min-h-[650px] md:min-h-[800px] flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Media Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          {mediaItems[currentIdx].type === 'image' ? (
            <motion.img
              key={currentIdx}
              src={mediaItems[currentIdx].src}
              alt="Dental Clinic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <motion.video
              key={currentIdx}
              ref={videoRef}
              src={mediaItems[currentIdx].src}
              muted
              playsInline
              onEnded={nextSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/60 to-primary/90"></div>
      </div>
      
      {/* Slider Controls */}
      <div className="absolute z-20 top-1/2 -translate-y-1/2 left-4 md:left-8 hidden sm:flex">
         <button onClick={prevSlide} className="glass-panel p-2 md:p-3 rounded-full hover:bg-white text-white hover:text-primary transition-all backdrop-blur-md shadow-lg" aria-label="Previous slide">
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
         </button>
      </div>
      <div className="absolute z-20 top-1/2 -translate-y-1/2 right-4 md:right-8 hidden sm:flex">
         <button onClick={nextSlide} className="glass-panel p-2 md:p-3 rounded-full hover:bg-white text-white hover:text-primary transition-all backdrop-blur-md shadow-lg" aria-label="Next slide">
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
         </button>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full text-center mt-8 md:mt-16">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           className="max-w-5xl mx-auto"
        >
          <div className="absolute bottom-4 md:bottom-8 left-0 right-0 flex justify-center z-10">
            <span className="text-white/80 uppercase tracking-[0.2em] font-medium text-[10px] md:text-xs bg-black/30 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20">
              Smilee
            </span>
          </div>
        </motion.div>
      </div>

      {/* Slider Dots */}
      <div className="absolute z-20 bottom-8 md:bottom-12 left-0 right-0 flex justify-center gap-2 md:gap-3">
        {mediaItems.map((_, idx) => (
           <button 
             key={idx} 
             onClick={() => setCurrentIdx(idx)}
             className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${currentIdx === idx ? 'w-8 md:w-10 bg-white' : 'w-4 md:w-5 bg-white/40 hover:bg-white/60'}`}
             aria-label={`Go to slide ${idx + 1}`}
           />
        ))}
      </div>
    </section>
  )
}

