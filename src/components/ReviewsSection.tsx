import { motion } from 'motion/react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const reviews = [
  { 
    name: 'Ravi Teja', 
    treatment: 'Dental Implants',
    text: 'Dr. Kartheek’s expertise in implants is unmatched. The entire process was seamless and completely painless. Highly recommend for any advanced procedures.', 
    rating: 5,
    date: '2 weeks ago',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=faces'
  },
  { 
    name: 'Anitha S.', 
    treatment: 'Smile Makeover',
    text: 'The clinic feels like a premium lounge. Absolute hygiene is maintained and the staff are incredibly professional. Best dental experience in Kadapa.', 
    rating: 5,
    date: '1 month ago',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces'
  },
  { 
    name: 'Kiran Kumar', 
    treatment: 'Maxillofacial Surgery',
    text: 'I had a complex maxillofacial issue that other doctors couldn’t resolve. Dr. Kartheek diagnosed it perfectly. The surgery was successful and healing was fast.', 
    rating: 5,
    date: '2 months ago',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces'
  },
  { 
    name: 'Priya Reddy', 
    treatment: 'Root Canal',
    text: 'Very gentle and patient doctor. I was terrified of root canals, but he made sure I felt zero pain. Excellent post-treatment follow-up as well.', 
    rating: 5,
    date: '3 months ago',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces'
  },
  { 
    name: 'Dr. Ramesh Babu', 
    treatment: 'Full Mouth Rehabilitation',
    text: 'As a fellow medical professional, I can vouch for the clinical standards maintained here. State-of-the-art equipment and brilliant diagnostic skills.', 
    rating: 5,
    date: '4 months ago',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces'
  }
];

export default function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    
    // Find the closest card
    const cardWidth = container.clientWidth >= 1024 ? container.clientWidth / 3 : container.clientWidth >= 768 ? container.clientWidth / 2 : container.clientWidth / 1.2;
    const scrollPosition = container.scrollLeft;
    const index = Math.round(scrollPosition / cardWidth);
    
    if (index !== activeIndex && index >= 0 && index < reviews.length) {
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
      // On desktop, the max index we can scroll to show the last items perfectly may vary,
      // but wrapping around simply works using modulo
      if (nextIndex >= reviews.length) {
         nextIndex = 0;
      }
      scrollToCard(nextIndex);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4">
           <div>
             <h2 className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold text-secondary mb-2 md:mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>Patient Experiences</h2>
             <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-primary tracking-tight" style={{ fontFamily: "Poppins, sans-serif" }}>Google Reviews</h3>
           </div>
           
           <div className="hidden md:flex items-center gap-3">
             <button 
                onClick={() => scrollToCard(Math.max(0, activeIndex - 1))}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-primary hover:bg-gray-50 hover:border-gray-300 transition-colors"
                aria-label="Previous reviews"
             >
               <ChevronLeft className="w-5 h-5" />
             </button>
             <button 
                onClick={() => scrollToCard(Math.min(reviews.length - 1, activeIndex + 1))}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-primary hover:bg-gray-50 hover:border-gray-300 transition-colors"
                aria-label="Next reviews"
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
            {/* Inline style to hide webkit scrollbar */}
            <style>{`.flex-nowrap::-webkit-scrollbar { display: none; }`}</style>

            {reviews.map((rev, i) => (
               <div 
                 key={i}
                 className="snap-start shrink-0 w-[calc(100vw/1.2)] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] pb-4"
               >
                 <motion.div 
                   initial={{ opacity: 0, y: 10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.4, delay: i * 0.05 }}
                   className="bg-white p-5 md:p-6 rounded-[16px] md:rounded-[20px] shadow-[0_4px_20px_rgb(0,0,0,0.06)] border border-gray-100 flex flex-col h-full hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all cursor-pointer"
                 >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex gap-3 items-center">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg shrink-0 border border-blue-100">{rev.name.charAt(0)}</div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm md:text-base leading-tight" style={{ fontFamily: "Poppins, sans-serif" }}>{rev.name}</div>
                          <div className="text-[10px] md:text-xs text-gray-500 mt-0.5">{rev.date}</div>
                        </div>
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center shrink-0">
                         {/* Simple Google icon substitute */}
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                         </svg>
                      </div>
                    </div>
                    
                    <div className="flex gap-0.5 text-yellow-400 mb-2 md:mb-3">
                     {[...Array(rev.rating)].map((_, idx) => (
                       <Star key={idx} className="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" />
                     ))}
                     {[...Array(5-rev.rating)].map((_, idx) => (
                       <Star key={idx} className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-200" fill="currentColor" />
                     ))}
                    </div>

                    <div className="mb-3">
                      <span className="text-[10px] md:text-xs font-semibold text-secondary bg-secondary/10 px-2 py-1 rounded-md">{rev.treatment}</span>
                    </div>

                    <p className="text-[11px] md:text-sm text-gray-600 leading-relaxed italic flex-grow">"{rev.text}"</p>
                 </motion.div>
               </div>
            ))}
          </div>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-4 md:mt-8">
           {Array.from({ length: Math.ceil(reviews.length) }).map((_, idx) => {
              // Highlight the dot corresponding to active card, adjusting for view sizes
              // Let's just simply highlight by index
              const isActive = (idx === activeIndex) || (idx === reviews.length - 1 && activeIndex >= reviews.length - 1);
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
