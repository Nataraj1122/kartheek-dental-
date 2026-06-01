import { Link } from 'react-router-dom';
import { Menu, Phone, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${scrolled ? 'glass-panel py-3' : 'bg-transparent py-4 md:py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          
          <Link to="/" className="flex flex-col relative z-[60]">
            <span className={`text-lg md:text-xl font-semibold tracking-tight transition-colors duration-300 ${scrolled || isOpen ? 'text-primary' : 'text-white'}`}>
              Kartheek's
            </span>
            <span className={`text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${scrolled || isOpen ? 'text-secondary' : 'text-white/80'}`}>
              Dental & Maxillofacial
            </span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-10">
            {['Services', 'Implants', 'Doctors', 'Gallery', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`/#${item.toLowerCase()}`} 
                className={`text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-100 ${scrolled ? 'text-[#334155] hover:text-primary opacity-80' : 'text-white hover:text-secondary opacity-90'}`}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <a href="tel:+919052311281" className={`flex items-center gap-2 text-sm font-semibold transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-white'}`}>
              <Phone size={16} />
              +91 90523 11281
            </a>
            <button className={`${scrolled ? 'bg-primary text-white hover:bg-primary-light' : 'bg-white text-primary hover:bg-gray-100'} transition-all px-7 py-2.5 rounded-full font-semibold text-sm shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:scale-105`}>
              Book Now
            </button>
          </div>

          <button className={`lg:hidden transition-colors relative z-[60] p-2 -mr-2 ${scrolled || isOpen ? 'text-primary' : 'text-white'}`} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 min-h-[100dvh] w-full bg-white/95 backdrop-blur-xl z-50 flex flex-col items-center justify-center gap-8"
          >
            {['Services', 'Implants', 'Doctors', 'Gallery', 'Contact'].map((item, i) => (
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 + 0.1 }}
                key={item} 
                href={`/#${item.toLowerCase()}`} 
                onClick={() => setIsOpen(false)} 
                className="text-3xl font-medium tracking-tight text-primary hover:text-secondary transition-colors"
               >
                {item}
              </motion.a>
             ))}
             <motion.button 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4 }}
               className="bg-primary text-white font-semibold py-4 w-64 rounded-full mt-8 text-lg"
             >
               Book Appointment
             </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
