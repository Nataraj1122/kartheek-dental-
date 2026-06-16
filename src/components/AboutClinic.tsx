import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function AboutClinic() {
  return (
    <section id="about" className="py-12 md:py-20 lg:pt-8 bg-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
          
          {/* Image Side */}
          <div className="relative order-2 lg:order-1 px-2 sm:px-0">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1 }}
               className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10"
             >
                <img src="/baaea448db9ac25b1c5b4aaa24c57c48.jpg" className="w-full h-full object-cover" alt="Clinic Interior" />
             </motion.div>
             <motion.div 
                initial={{ opacity: 0, x: 50, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute -bottom-6 -right-2 sm:-right-6 md:-bottom-10 md:-right-10 bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl shadow-xl w-48 md:w-64 z-20 border border-gray-100"
             >
                <div className="text-2xl md:text-4xl tracking-tighter font-light text-primary mb-1 md:mb-2">Modern</div>
                <div className="text-[10px] md:text-sm text-gray-500 uppercase tracking-widest font-semibold mb-2 md:mb-4">Infrastructure</div>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed hidden sm:block">State-of-the-art facilities providing the highest standard of safety and comfort.</p>
             </motion.div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
            >
              <h2 className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold text-secondary mb-3 md:mb-4">Trusted Dental Care in Kadapa</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium text-primary tracking-tight leading-[1.1] mb-6 md:mb-8">
                Healthy Smiles, Expert Care
              </h3>
              <p className="text-sm md:text-lg text-gray-600 font-light leading-relaxed mb-6 md:mb-10">
                Kartheek's Dental & Maxillofacial Centre provides advanced dental treatments with modern technology, experienced doctors, and patient-focused care. We are committed to delivering safe, comfortable, and affordable dental solutions for every family.
              </p>
              
              <button className="group flex items-center gap-3 text-primary font-semibold text-sm md:text-base hover:text-secondary transition-colors">
                <span className="border-b border-primary/30 group-hover:border-secondary pb-1 transition-colors">Discover Our Story</span>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-primary/20 flex items-center justify-center group-hover:border-secondary group-hover:bg-secondary/5 transition-all">
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform md:w-[18px] md:h-[18px]" />
                </div>
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
