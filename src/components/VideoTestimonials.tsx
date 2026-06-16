import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const successStories = [
  { 
    name: 'Clinical Case #1024', 
    treatment: 'Full Mouth Restoration',
    result: 'Complete functional and aesthetic rehabilitation with precision-guided implants.',
    imageBefore: '/ad36670a0e5cd2dbc182f42184bd5185.jpg',
    imageAfter: '/ad36670a0e5cd2dbc182f42184bd5185.jpg',
    isComposite: true
  },
  { 
    name: 'Clinical Case #0892', 
    treatment: 'Smile Designing',
    result: 'Achieved optimal facial symmetry and shade correction using ultra-thin porcelain veneers.',
    imageBefore: '/142ec4eb93cfb7fe908d5eb8c3adf647.jpg',
    imageAfter: '/142ec4eb93cfb7fe908d5eb8c3adf647.jpg',
    isComposite: true
  },
  { 
    name: 'Clinical Case #1204', 
    treatment: 'Cosmetic Veneers',
    result: 'Total aesthetic transformation with high-translucency porcelain veneers for a vibrant smile.',
    imageBefore: '/0d34a50e0ff9247f75e38d0e882c8b2e.jpg',
    imageAfter: '/0d34a50e0ff9247f75e38d0e882c8b2e.jpg',
    isComposite: true
  },
];

export default function VideoTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    
    const cardWidth = container.clientWidth >= 1024 ? container.clientWidth / 3 : container.clientWidth >= 768 ? container.clientWidth / 2 : container.clientWidth / 1.2;
    const scrollPosition = container.scrollLeft;
    const index = Math.round(scrollPosition / cardWidth);
    
    if (index !== activeIndex && index >= 0 && index < successStories.length) {
      setActiveIndex(index);
    }
  };

  const scrollToCard = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    
    const cardWidth = container.clientWidth >= 1024 ? container.clientWidth / 3 : container.clientWidth >= 768 ? container.clientWidth / 2 : container.clientWidth / 1.2;
    
    container.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
    
    setActiveIndex(index);
  };

  useEffect(() => {
    const handleResize = () => {
       scrollToCard(activeIndex);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = activeIndex + 1;
      if (nextIndex >= successStories.length) {
         nextIndex = 0;
      }
      scrollToCard(nextIndex);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="py-12 md:py-20 bg-surface md:bg-surface-dim overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4">
           <div>
             <h2 className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold text-secondary mb-2 md:mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>Clinical Results</h2>
             <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-primary tracking-tight" style={{ fontFamily: "Poppins, sans-serif" }}>Before & After</h3>
           </div>
           
           <div className="hidden md:flex items-center gap-3">
             <button 
                onClick={() => scrollToCard(Math.max(0, activeIndex - 1))}
                className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-primary hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm"
                aria-label="Previous story"
             >
               <ChevronLeft className="w-5 h-5" />
             </button>
             <button 
                onClick={() => scrollToCard(Math.min(successStories.length - 1, activeIndex + 1))}
                className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-primary hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm"
                aria-label="Next story"
             >
               <ChevronRight className="w-5 h-5" />
             </button>
           </div>
        </div>

        <div className="-mx-4 md:mx-0 px-4 md:px-0">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto gap-4 md:gap-6 pb-6 snap-x snap-mandatory flex-nowrap"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            <style>{`.flex-nowrap::-webkit-scrollbar { display: none; }`}</style>
            
            {successStories.map((story, idx) => (
              <div 
                key={idx}
                className="snap-start shrink-0 w-[calc(100vw/1.2)] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] pb-4"
              >
                 <motion.div 
                   initial={{ opacity: 0, y: 15 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: idx * 0.1 }}
                   className="bg-white rounded-[16px] md:rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.06)] border border-gray-100 group h-full flex flex-col"
                 >
                    {/* Before/After Split */}
                    <div className="flex h-[180px] sm:h-[220px] w-full relative shrink-0">
                       <div className="w-1/2 h-full relative border-r border-white/50 overflow-hidden">
                          <img 
                            src={story.imageBefore} 
                            alt="Before" 
                            className={`w-full h-full object-cover ${story.isComposite ? 'object-left' : ''}`} 
                          />
                          <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm text-white text-[9px] pt-0.5 pb-0.5 px-2 font-medium tracking-wider uppercase rounded-sm">Before</div>
                       </div>
                       <div className="w-1/2 h-full relative overflow-hidden">
                          <img 
                            src={story.imageAfter} 
                            alt="After" 
                            className={`w-full h-full object-cover ${story.isComposite ? 'object-right' : ''}`} 
                          />
                          <div className="absolute top-2 right-2 bg-secondary/80 backdrop-blur-sm text-white text-[9px] pt-0.5 pb-0.5 px-2 font-medium tracking-wider uppercase rounded-sm">After</div>
                       </div>
                    </div>
                    
                    <div className="p-4 md:p-5 flex flex-col flex-grow">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-sm md:text-base font-semibold text-gray-900" style={{ fontFamily: "Poppins, sans-serif" }}>{story.name}</h4>
                        <span className="text-[10px] md:text-xs font-semibold text-secondary bg-secondary/10 px-2 py-0.5 rounded-md">{story.treatment}</span>
                      </div>
                      <p className="text-[11px] md:text-sm text-gray-600 mt-1 line-clamp-2">{story.result}</p>
                    </div>
                 </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-2 md:mt-4">
           {Array.from({ length: successStories.length }).map((_, idx) => {
              const isActive = (idx === activeIndex) || (idx === successStories.length - 1 && activeIndex >= successStories.length - 1);
              return (
                <button
                  key={idx}
                  onClick={() => scrollToCard(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${isActive ? 'bg-secondary w-6 md:w-8' : 'bg-gray-200 hover:bg-gray-300'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              );
           })}
        </div>
      </div>
    </section>
  );
}
