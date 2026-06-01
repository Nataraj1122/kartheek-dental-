import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function ImplantsShowcase() {
  return (
    <section className="py-12 md:py-20 bg-[#0a192f] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          <div className="order-2 lg:order-1">
             <h2 className="text-secondary font-semibold tracking-wider uppercase text-[10px] sm:text-xs md:text-sm mb-3 md:mb-4">Signature Procedure</h2>
             <h3 className="text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tighter mb-6 md:mb-8 leading-[1.1]">The Gold Standard<br/>in Implantology.</h3>
             <p className="text-base sm:text-lg md:text-xl text-gray-400 font-light mb-8 md:mb-10 leading-relaxed">
               Reclaim your confidence with advanced titanium implants. Engineered for permanence, offering unparalleled aesthetic and functional restoration that mimics natural teeth.
             </p>
             
             <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10">
               {['Lifetime durability and strength', 'Prevents jawbone deterioration', 'Restores 100% natural chewing force', 'Flawless aesthetic integration'].map((item, i) => (
                 <li key={i} className="flex items-center gap-3 text-gray-300 font-light text-sm md:text-lg">
                   <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                     <Check className="w-3 h-3 md:w-[14px] md:h-[14px] text-secondary" />
                   </div>
                   {item}
                 </li>
               ))}
             </ul>

             <button className="bg-white text-primary px-6 py-3.5 md:px-8 md:py-4 w-full sm:w-auto rounded-full font-medium shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all text-base md:text-lg">
               Consult an Implant Specialist
             </button>
          </div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
             whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
             className="order-1 lg:order-2 px-4 sm:px-0"
          >
             {/* We use an abstract glassmorphic card representation of an implant tech display */}
             <div className="relative aspect-square md:aspect-[4/5] w-full max-w-sm md:max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/40 to-transparent rounded-[2rem] md:rounded-[3rem] blur-xl opacity-50"></div>
                <div className="glass-panel-dark w-full h-full rounded-[2rem] md:rounded-[3rem] border border-white/20 p-6 md:p-8 flex flex-col justify-end relative z-10 overflow-hidden shadow-[0_0_50px_rgba(0,180,216,0.15)]">
                   <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay" alt="Tech" />
                   <div className="relative z-20">
                     <div className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-secondary/50 text-secondary text-xs md:text-sm font-medium mb-3 md:mb-4 backdrop-blur-md bg-secondary/10">3D Precision Mapping</div>
                     <div className="text-2xl md:text-3xl font-light text-white leading-tight">Guided Implant Surgery for maximum safety.</div>
                   </div>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
