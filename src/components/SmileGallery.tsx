import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const cases = [
  { type: 'Smile Makeover', pre: 'Before', post: 'After', image: 'https://images.unsplash.com/photo-1598256989467-34c81a293f9c?q=80&w=2070&auto=format&fit=crop' },
  { type: 'Full Mouth Implants', pre: 'Before', post: 'After', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop' },
];

export default function SmileGallery() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-12 text-center">
        <h2 className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold text-secondary mb-3 md:mb-4">Clinical Outcomes</h2>
        <h3 className="text-4xl sm:text-5xl font-medium text-primary tracking-tight mb-8 md:mb-16">Smile Gallery</h3>
        
        <div className="relative max-w-5xl mx-auto aspect-[4/3] sm:aspect-[16/9] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl group border border-gray-100">
           <AnimatePresence mode="wait">
             <motion.div
               key={active}
               initial={{ opacity: 0, scale: 1.05 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.8 }}
               className="w-full h-full"
             >
                <img src={cases[active].image} alt="Case" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 md:top-6 md:left-6 glass-panel px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium text-primary shadow-sm">{cases[active].type}</div>
             </motion.div>
           </AnimatePresence>

           <div className="absolute inset-0 flex items-center justify-between p-2 sm:p-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
              <button 
                onClick={() => setActive(active === 0 ? cases.length-1 : active-1)} 
                className="glass-panel p-2 md:p-3 rounded-full hover:bg-white text-primary shadow-sm active:scale-95 transition-transform"
                aria-label="Previous image"
              >
                 <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button 
                onClick={() => setActive((active + 1) % cases.length)} 
                className="glass-panel p-2 md:p-3 rounded-full hover:bg-white text-primary shadow-sm active:scale-95 transition-transform"
                aria-label="Next image"
              >
                 <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
           </div>
        </div>
      </div>
    </section>
  );
}
