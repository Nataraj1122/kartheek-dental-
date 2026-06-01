import { MessageSquare, Phone, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export default function Chatbot() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed right-4 bottom-4 md:right-8 md:bottom-8 flex flex-col gap-3 md:gap-4 z-40 items-end">
      
      <AnimatePresence>
        {expanded && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="flex flex-col gap-2 md:gap-3 mb-2"
          >
            <a href="https://wa.me/919052311281" target="_blank" rel="noreferrer" 
               className="w-12 h-12 md:w-14 md:h-14 bg-white text-green-600 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
              <MessageSquare className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            
            <a href="tel:+919052311281"
               className="w-14 h-14 md:w-14 md:h-14 bg-white text-primary rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
              <Phone className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setExpanded(!expanded)}
        className="w-14 h-14 md:w-16 md:h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(10,25,47,0.4)] hover:scale-105 transition-transform relative group"
        aria-label="Toggle contact options"
      >
        <Sparkles className="w-6 h-6 md:w-7 md:h-7" />
      </button>

    </div>
  );
}
