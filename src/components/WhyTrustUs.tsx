import { motion, AnimatePresence } from 'motion/react';
import { Star, Microscope, HeartHandshake, ShieldCheck, X } from 'lucide-react';
import { useRef, useState } from 'react';

const features = [
  {
    id: 'experience',
    icon: <Star className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />,
    title: "10+ Years Experience",
    shortDesc: "Trusted expertise in advanced dental care.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
    longDesc: "Our team consists of highly qualified dental surgeons and specialists dedicated to providing the highest standard of care. With over a decade of clinical experience, we continually update our skills to bring you the best treatments."
  },
  {
    id: 'technology',
    icon: <Microscope className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />,
    title: "Advanced Technology",
    shortDesc: "Modern equipment for precise treatment.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop",
    longDesc: "We invest in the latest dental technology to ensure precise diagnoses and effective treatments. From 3D scanning to painless laser therapy, technology drives our clinical excellence."
  },
  {
    id: 'personalized',
    icon: <HeartHandshake className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />,
    title: "Personalized Care",
    shortDesc: "Customized solutions for every patient.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
    longDesc: "We understand that every smile is unique. Our team takes the time to listen to your concerns and creates customized treatment plans that prioritize your long-term dental health and aesthetic goals."
  },
  {
    id: 'safe',
    icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />,
    title: "Safe & Painless Treatment",
    shortDesc: "Comfort-focused procedures procedures.",
    image: "https://images.unsplash.com/photo-1598256989417-640a359d9972?q=80&w=800&auto=format&fit=crop",
    longDesc: "Dental fear belongs in the past. We use modern anesthetics, rigorous sterilization protocols, and minimally invasive techniques to ensure every visit is relaxing, safe, and completely pain-free."
  }
];

export default function WhyTrustUs() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState<typeof features[0] | null>(null);

  return (
    <section className="pt-10 md:pt-16 pb-10 md:pb-16 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold text-secondary mb-3 pr-1 block" style={{ fontFamily: "Poppins, sans-serif" }}>
            WHY PATIENTS TRUST US
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary tracking-tight mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
            Excellence in Every Smile
          </h2>
          <p className="text-sm text-gray-500 font-light leading-relaxed">
            Advanced technology, experienced specialists, and patient-first care.
          </p>
        </div>

        {/* Carousel / Grid Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-4 md:gap-5 lg:gap-6 md:pb-0 md:overflow-visible [&::-webkit-scrollbar]:hidden"
          style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
          {features.map((feature, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              key={feature.id}
              className="snap-start shrink-0 w-[75%] pr-4 md:w-auto md:pr-0"
            >
              <div 
                onClick={() => setActiveFeature(feature)}
                className="cursor-pointer group h-full bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-6 hover:shadow-xl hover:border-[#22D3EE]/30 transition-all duration-300 flex flex-col justify-center min-h-[160px] hover:-translate-y-1"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-blue-50/50 text-[#22D3EE] flex items-center justify-center mb-4 md:mb-5 group-hover:scale-110 group-hover:bg-[#22D3EE]/10 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 tracking-tight group-hover:text-primary transition-colors" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">
                  {feature.shortDesc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeFeature && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
              onClick={() => setActiveFeature(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              <button 
                onClick={() => setActiveFeature(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-gray-800 hover:bg-white transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
              
              <div className="w-full h-48 sm:h-56 shrink-0 relative">
                 <img src={activeFeature.image} alt={activeFeature.title} className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                 <div className="absolute bottom-4 left-6 flex items-center gap-3">
                   <div className="bg-white/20 backdrop-blur-md p-2 rounded-lg text-white">
                     {activeFeature.icon}
                   </div>
                   <h3 className="text-xl sm:text-2xl font-semibold text-white" style={{ fontFamily: "Poppins, sans-serif" }}>{activeFeature.title}</h3>
                 </div>
              </div>

              <div className="p-6 md:p-8 overflow-y-auto">
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {activeFeature.longDesc}
                </p>
                <div className="flex justify-end">
                    <button onClick={() => setActiveFeature(null)} className="px-6 py-2 bg-gray-100 text-gray-700 font-medium rounded-full text-sm hover:bg-gray-200 transition-colors">
                      Close
                    </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
