import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: "Is the implant procedure painful?", a: "Not at all. We utilize advanced local anesthesia and modern surgical techniques to ensure the procedure is entirely painless. Most patients report less discomfort than a standard tooth extraction." },
  { q: "How long do dental implants last?", a: "With proper oral hygiene and regular check-ups, high-quality titanium dental implants can last a lifetime." },
  { q: "Do you offer EMI or financing options?", a: "Yes, we believe premium healthcare should be accessible. We offer flexible payment plans and EMI options for extensive treatment procedures." },
  { q: "How many visits are required for Smile Designing?", a: "Typically, a complete smile design requires 2-3 visits. The first for consultation and digital planning, and subsequent visits for the placement of veneers or crowns." }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-8 md:py-16 bg-white overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary tracking-tight text-center mb-6 md:mb-10" style={{ fontFamily: "Poppins, sans-serif" }}>Frequently Asked Questions</h2>
        
        <div className="space-y-2 md:space-y-3">
          {faqs.map((faq, i) => (
             <div key={i} className="bg-white rounded-lg md:rounded-xl shadow-[0_2px_10px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden">
                <button 
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full px-4 py-3.5 md:px-6 md:py-4 text-left flex justify-between items-center focus:outline-none group hover:bg-gray-50/50 transition-colors"
                >
                  <span className={`text-sm md:text-base font-medium transition-colors pr-4 ${open === i ? 'text-secondary' : 'text-gray-800 group-hover:text-primary'}`}>{faq.q}</span>
                  <div className={`shrink-0 transition-transform duration-300 w-6 h-6 rounded-full flex items-center justify-center border ${open === i ? 'rotate-180 bg-secondary/10 border-secondary/20 text-secondary' : 'bg-gray-50 border-gray-200 text-gray-400 group-hover:border-gray-300 group-hover:text-gray-600'}`}>
                    <ChevronDown className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </div>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                       <div className="px-4 pb-4 md:px-6 md:pb-5 text-gray-500 font-light leading-relaxed text-xs md:text-sm border-t border-gray-50 mt-1 pt-3">
                         {faq.a}
                       </div>
                    </motion.div>
                  )}
                </AnimatePresence>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
