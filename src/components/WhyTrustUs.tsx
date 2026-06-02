import { motion, AnimatePresence } from 'motion/react';
import { Microscope, Shield, Sparkles, Users, HeartHandshake, IndianRupee, ArrowRight, X, ChevronRight, ChevronLeft } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const features = [
  {
    id: 'specialists',
    icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
    title: "Experienced Specialists",
    shortDesc: "Skilled dental experts with years of experience.",
    longDesc: "Our team consists of highly qualified dental surgeons and specialists dedicated to providing the highest standard of care. We continually update our skills to bring you the best treatments.",
    benefits: ["MDS qualified specialists", "Years of clinical experience", "Continuous medical education", "Compassionate patient care"],
    faq: [
      { q: "Are your doctors specialists?", a: "Yes, our team includes specialists in various fields like orthodontics and oral surgery." },
      { q: "How much experience do they have?", a: "Our lead specialists have over 10 years of clinical experience." }
    ]
  },
  {
    id: 'technology',
    icon: <Microscope className="w-5 h-5 md:w-6 md:h-6" />,
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop",
    title: "Advanced Technology",
    shortDesc: "3D CBCT Scanning, Digital X-rays & Modern Equipment.",
    longDesc: "We invest in the latest dental technology to ensure precise diagnoses and effective treatments. From 3D scanning to painless laser therapy, technology drives our clinical excellence.",
    benefits: ["High-precision 3D CBCT scans", "Low-radiation digital X-rays", "Laser-assisted dentistry", "Intraoral cameras"],
    faq: [
      { q: "Is the equipment safe?", a: "Absolutely. We use FDA-approved modern equipment with strict safety protocols." },
      { q: "Does advanced technology cost more?", a: "It improves efficiency, which sometimes reduces overall treatment times and costs." }
    ]
  },
  {
    id: 'painless',
    icon: <Sparkles className="w-5 h-5 md:w-6 md:h-6" />,
    image: "https://images.unsplash.com/photo-1598256989417-640a359d9972?q=80&w=800&auto=format&fit=crop",
    title: "Painless Treatments",
    shortDesc: "Comfortable, anxiety-free dental procedures.",
    longDesc: "Dental fear belongs in the past. We use modern anesthetics, sedation options, and minimally invasive techniques to ensure every visit is relaxing and pain-free.",
    benefits: ["Local anesthesia techniques", "Conscious sedation available", "Gentle handling", "Relaxing environment"],
    faq: [
      { q: "Will the injection hurt?", a: "We use topical numbing gels before any injection to minimize discomfort." },
      { q: "Do you offer sedation?", a: "Yes, we offer options for anxious patients to help them relax." }
    ]
  },
  {
    id: 'sterile',
    icon: <Shield className="w-5 h-5 md:w-6 md:h-6" />,
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800&auto=format&fit=crop",
    title: "100% Sterile Environment",
    shortDesc: "International sterilization and safety standards.",
    longDesc: "Your safety is our top priority. We follow strict international autoclaving protocols, ensuring a perfectly sterile environment and preventing any risk of cross-contamination.",
    benefits: ["Class-B Autoclaving", "Disposable materials where possible", "Strict surface disinfection", "UV sterilization chambers"],
    faq: [
      { q: "How do you clean your tools?", a: "We use a multi-step sterilization process ending in a Class-B autoclave." },
      { q: "Is the clinic safe from infections?", a: "Yes, our rigorous protocols ensure a highly sterile environment." }
    ]
  },
  {
    id: 'affordable',
    icon: <IndianRupee className="w-5 h-5 md:w-6 md:h-6" />,
    image: "https://images.unsplash.com/photo-1554734867-bf3c00a49371?q=80&w=800&auto=format&fit=crop",
    title: "Affordable Dental Care",
    shortDesc: "Quality treatment at reasonable pricing.",
    longDesc: "Exceptional dentistry shouldn't be out of reach. We provide transparent pricing, flexible payment options, and affordable care without compromising on quality.",
    benefits: ["Transparent cost estimates", "No hidden fees", "Flexible payment plans", "Value-driven care"],
    faq: [
      { q: "Can I get an estimate before treatment?", a: "Yes, we always provide a clear treatment plan with costs beforehand." },
      { q: "Do you accept EMI?", a: "We have multiple payment options, please ask our front desk." }
    ]
  },
  {
    id: 'trusted',
    icon: <HeartHandshake className="w-5 h-5 md:w-6 md:h-6" />,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
    title: "Trusted by Patients",
    shortDesc: "Positive reviews and patient satisfaction.",
    longDesc: "Our success is measured by the smiles of our patients. We are proud to have a high satisfaction rate and wonderful reviews from our community.",
    benefits: ["Hundreds of happy patients", "High Google ratings", "Personalized follow-ups", "Long-term relationships"],
    faq: [
      { q: "Can I read patient reviews?", a: "Yes, please check our Google reviews and testimonial section." },
      { q: "Do you treat children?", a: "Absolutely, we are a family-friendly clinic trusted by parents." }
    ]
  }
];

export default function WhyTrustUs() {
  const [activeModal, setActiveModal] = useState<typeof features[0] | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const centerPosition = container.scrollLeft + container.clientWidth / 2;
    
    const children = Array.from(container.children) as HTMLElement[];
    let closestIndex = 0;
    let minDistance = Infinity;

    const cards = children.filter(child => child.hasAttribute('data-feature-card'));
    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const distance = Math.abs(cardCenter - centerPosition);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  const scrollToCard = (index: number) => {
    if (!scrollRef.current) return;
    const cards = (Array.from(scrollRef.current.children) as HTMLElement[]).filter(child => child.hasAttribute('data-feature-card'));
    if (cards[index]) {
      const card = cards[index] as HTMLElement;
      const scrollPosition = card.offsetLeft - scrollRef.current.clientWidth / 2 + card.clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (activeIndex > 0) {
      scrollToCard(activeIndex - 1);
    }
  };
  
  const scrollRight = () => {
    if (activeIndex < features.length - 1) {
      scrollToCard(activeIndex + 1);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, []);

  return (
    <section className="pt-12 md:pt-20 pb-4 md:pb-8 bg-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold text-secondary mb-2 md:mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>Why Choose Us</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-primary tracking-tight mb-3 md:mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>Exceptional Care, Advanced Technology</h3>
            <h4 className="text-sm md:text-base text-gray-500 font-light leading-relaxed">Trusted Dental Excellence for Every Smile</h4>
          </div>
          <div className="hidden md:flex gap-3">
            <button onClick={scrollLeft} className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-primary hover:bg-white hover:border-gray-300 hover:shadow-sm transition-all shadow-sm bg-white/50" aria-label="Scroll left">
              <ChevronLeft size={20} />
            </button>
            <button onClick={scrollRight} className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-primary hover:bg-white hover:border-gray-300 hover:shadow-sm transition-all shadow-sm bg-white/50" aria-label="Scroll right">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="w-full mx-auto relative pb-8">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex items-center overflow-x-auto gap-4 md:gap-6 pb-12 pt-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden w-full relative"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {/* Spacer for proper centering of first item */}
            <div className="shrink-0 pointer-events-none w-[calc(50vw-126px)] sm:w-[calc(50vw-156px)] md:w-[calc(50vw-184px)] lg:w-[calc(50vw-194px)]" />

            {features.map((item, idx) => {
              const isActive = activeIndex === idx;

              return (
                <div 
                  key={item.id}
                  data-feature-card="true"
                  className={`snap-center shrink-0 w-[220px] sm:w-[280px] md:w-[320px] lg:w-[340px] transition-all duration-500 ease-out 
                    ${isActive ? 'scale-105 sm:scale-110 opacity-100 blur-none z-10' : 'scale-90 sm:scale-95 opacity-50 blur-[1.5px] z-0 hover:opacity-80 hover:blur-[0.5px]'}`}
                >
                  <div
                    onClick={() => {
                        if (!isActive) {
                           scrollToCard(idx);
                        } else {
                           setActiveModal(item);
                        }
                    }}
                    className={`bg-white rounded-2xl shadow-sm border border-blue-100 p-4 md:p-6 flex flex-col h-[320px] sm:h-[400px] md:h-[460px] cursor-pointer group shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative ${isActive ? 'ring-1 ring-blue-500/20 ring-offset-2 ring-offset-white shadow-[0_12px_40px_rgb(0,0,0,0.12)]' : ''}`}
                  >
                    <div className="w-full h-32 sm:h-40 md:h-48 rounded-xl overflow-hidden mb-4 md:mb-5 shrink-0 relative">
                       <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="flex items-center gap-2.5 md:gap-3.5 mb-3 md:mb-4 text-teal-600">
                      <div className="bg-teal-50 p-2 md:p-3 rounded-lg shrink-0">
                        {item.icon}
                      </div>
                      <h4 className={`font-semibold text-gray-900 transition-all duration-300 ${isActive ? 'text-base md:text-xl' : 'text-sm md:text-lg'}`} style={{ fontFamily: "Poppins, sans-serif" }}>{item.title}</h4>
                    </div>
                    <div className={`overflow-hidden transition-all duration-300 flex-grow ${isActive ? 'max-h-24 md:max-h-32 opacity-100' : 'max-h-0 opacity-0 mb-0'}`}>
                        <p className="text-xs md:text-sm text-gray-600 line-clamp-3 md:line-clamp-4 leading-relaxed">{item.shortDesc}</p>
                    </div>
                    <button className={`text-primary font-medium text-xs md:text-sm flex items-center gap-1.5 md:gap-2 group-hover:text-teal-600 transition-colors mt-auto ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none absolute bottom-4 md:bottom-5'}`}>
                      Learn More <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}

            {/* Spacer for proper centering of last item */}
            <div className="shrink-0 pointer-events-none w-[calc(50vw-126px)] sm:w-[calc(50vw-156px)] md:w-[calc(50vw-184px)] lg:w-[calc(50vw-194px)]" />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
              onClick={() => setActiveModal(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              <button 
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 md:w-10 md:h-10 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-gray-800 hover:bg-white transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
              
              <div className="w-full h-48 sm:h-64 shrink-0 relative">
                 <img src={activeModal.image} alt={activeModal.title} className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                 <div className="absolute bottom-4 left-6 flex items-center gap-3">
                   <div className="bg-white/20 backdrop-blur-md p-2 rounded-lg text-white">
                     {activeModal.icon}
                   </div>
                   <h3 className="text-2xl sm:text-3xl font-semibold text-white">{activeModal.title}</h3>
                 </div>
              </div>

              <div className="p-6 md:p-8 overflow-y-auto">
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                  {activeModal.longDesc}
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-primary mb-4">Key Benefits</h4>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {activeModal.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <ArrowRight className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-primary mb-4">Frequently Asked Questions</h4>
                  <div className="space-y-4">
                    {activeModal.faq.map((f, i) => (
                      <div key={i} className="bg-blue-50/50 p-4 rounded-xl">
                        <h5 className="font-medium text-gray-900 text-sm mb-1">{f.q}</h5>
                        <p className="text-sm text-gray-600">{f.a}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <a href="#booking" onClick={() => setActiveModal(null)} className="block w-full bg-primary text-white text-center py-3.5 rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                  Book an Appointment
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
