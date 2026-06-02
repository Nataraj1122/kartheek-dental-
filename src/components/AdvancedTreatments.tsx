import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, Phone, MessageSquare, CalendarCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const services = [
  {
    id: 'implants',
    title: 'Dental Implants',
    shortDesc: 'Permanent, medical-grade replacements for missing teeth.',
    description: 'Dental implants are the most natural looking and feeling replacement for missing teeth. We use premium titanium implants that integrate with your jawbone to provide a permanent, unmovable foundation for crowns, bridges, or dentures.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop',
    benefits: ['Looks and feels like natural teeth', 'Prevents bone loss in the jaw', 'Lasts a lifetime with proper care', 'No restriction on eating'],
    procedure: 'The procedure is completely pain-free under local anesthesia. The titanium implant is precisely placed into the jawbone. After a healing period of a few months where the bone fuses with the implant, a custom-made crown is perfectly fitted on top.',
    faq: [
      { q: "Is the implant procedure painful?", a: "No, the procedure is completely painless as it is performed under local anesthesia. You may experience mild soreness for a few days after." },
      { q: "How long do dental implants last?", a: "With proper oral hygiene and regular dental check-ups, dental implants can last a lifetime." }
    ]
  },
  {
    id: 'rootcanal',
    title: 'Root Canal Treatment',
    shortDesc: 'Painless, single-visit rotary endodontics to save natural teeth.',
    description: 'We perform advanced rotary root canal treatments to relieve dental pain and save your natural tooth. Using modern anesthetics and precision equipment, we remove the infected pulp and seal the tooth in a single, comfortable visit.',
    image: 'https://images.unsplash.com/photo-1612349317150-e410f624c427?q=80&w=800&auto=format&fit=crop',
    benefits: ['Immediate pain relief', 'Saves your natural tooth structure', 'Painless single-visit procedure', 'Prevents spread of infection'],
    procedure: 'After numbing the area, a small opening is made to access the infected pulp. The pulp is carefully removed using rotary files, and the canals are cleaned, disinfected, and sealed. A crown is later placed to restore full strength.',
    faq: [
      { q: "Is a root canal painful?", a: "Modern root canals are virtually painless and feel similar to getting a routine filling." },
      { q: "Do I need a crown after a root canal?", a: "Yes, a crown is highly recommended to protect the tooth from fracturing after the nerve is removed." }
    ]
  },
  {
    id: 'smiledesign',
    title: 'Smile Designing',
    shortDesc: 'Custom cosmetic makeovers for a flawless aesthetic smile.',
    description: 'Smile designing is a bespoke cosmetic procedure tailored to your facial symmetry. We combine veneers, laminates, and teeth whitening to correct chips, gaps, and stains to give you a perfect, confident smile.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
    benefits: ['Boosts self-confidence instantly', 'Custom-designed for your face', 'Stain-resistant materials', 'Completely natural appearance'],
    procedure: 'We start with a digital smile scan to plan your new look. Depending on your needs, ultra-thin porcelain veneers are custom-crafted and bonded to the front of your teeth, reshaping your entire smile.',
    faq: [
      { q: "How long does smile designing take?", a: "Most cases are completed in just 2-3 visits over a couple of weeks." },
      { q: "Do veneers look fake?", a: "No, we use premium translucent porcelain that perfectly mimics natural tooth enamel." }
    ]
  },
  {
    id: 'fullmouth',
    title: 'Full Mouth Rehab',
    shortDesc: 'Complete restoration of dental health, function, and aesthetics.',
    description: 'For patients with severe dental issues, multiple missing teeth, or worn-down bites, full mouth rehabilitation restores optimal function and appearance. The treatment may combine implants, crowns, and orthodontics to rebuild your mouth comprehensively.',
    image: 'https://images.unsplash.com/photo-1598256989467-34c81a293f9c?q=80&w=800&auto=format&fit=crop',
    benefits: ['Restores full chewing capability', 'Eliminates chronic jaw pain', 'Rebuilds facial structure', 'Comprehensive oral health revival'],
    procedure: 'A comprehensive, phased treatment plan is created. It may involve periodontal therapy to ensure healthy gums, followed by the placement of implants or bridges, and finally, crowns to restore the bite alignment.',
    faq: [
      { q: "Am I a candidate for full mouth rehab?", a: "If you have numerous missing, broken, or heavily decayed teeth, you are likely a great candidate." },
      { q: "Is it done all at once?", a: "No, it is usually phased over several months to ensure maximum comfort and healing." }
    ]
  },
  {
    id: 'whitening',
    title: 'Teeth Whitening',
    shortDesc: 'Professional laser whitening for a bright, radiant smile.',
    description: 'Erase years of stains from coffee, tea, and tobacco with professional laser teeth whitening. Our advanced bleaching technology lightens teeth by several shades in just under an hour, safely and securely.',
    image: 'https://images.unsplash.com/photo-1554734867-bf3c00a49371?q=80&w=800&auto=format&fit=crop',
    benefits: ['Immediate, visible results in 1 hour', 'Safe for tooth enamel', 'Removes deep intrinsic stains', 'Enhances overall facial youthfulness'],
    procedure: 'A protective gel is applied to the gums, followed by a professional-grade whitening agent on the teeth. A specialized laser or LED light is used to activate the gel, rapidly breaking down deeply embedded stains.',
    faq: [
      { q: "Does teeth whitening cause sensitivity?", a: "You may experience mild, temporary sensitivity for a day, but the procedure is very safe." },
      { q: "How long do the results last?", a: "Results can last for years depending on your dietary habits and oral hygiene routine." }
    ]
  },
  {
    id: 'pediatric',
    title: 'Pediatric Dentistry',
    shortDesc: 'Gentle, friendly dental care specially designed for children.',
    description: 'We provide specialized dental care for infants, children, and teenagers in a fun, fear-free environment. From preventive fluoride treatments to advanced cavity care, we ensure your child grows up with a healthy smile.',
    image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800&auto=format&fit=crop',
    benefits: ['Fear-free, child-friendly environment', 'Focus on preventive care', 'Helps build lifelong healthy habits', 'Painless gentle treatments'],
    procedure: 'Our pediatric sessions focus on making the child comfortable first. We offer preventive sealants, fluoride varnishes, and gentle restorations. We use "tell-show-do" techniques to keep kids relaxed.',
    faq: [
      { q: "When should I schedule my child\'s first visit?", a: "The first dental visit should be by their first birthday or when the first tooth appears." },
      { q: "Are dental X-rays safe for kids?", a: "Yes, we use digital X-rays with extremely low radiation, making them completely safe." }
    ]
  },
  {
    id: 'crowns',
    title: 'Crowns & Bridges',
    shortDesc: 'Premium restorative solutions to fix damaged or missing teeth.',
    description: 'Restore damaged teeth or bridge the gap of missing ones with our high-strength Zirconia and E-max crowns. They are digitally designed to match the exact shade and shape of your natural teeth for a seamless fit.',
    image: 'https://images.unsplash.com/photo-1598256989417-640a359d9972?q=80&w=800&auto=format&fit=crop',
    benefits: ['Restores tooth strength flawlessly', 'Highly aesthetic metal-free options', 'Prevents shifting of adjacent teeth', 'Durable and long-lasting'],
    procedure: 'The damaged tooth is reshaped, and a digital impression is taken. A custom crown is milled and permanently cemented onto the tooth. For a bridge, the adjacent teeth are prepared to anchor the replacement tooth.',
    faq: [
      { q: "How long does a crown last?", a: "With good oral hygiene, a high-quality crown can last 10-15 years or more." },
      { q: "Will the crown look natural?", a: "Yes, our Zirconia and E-max crowns are highly translucent and perfectly mimic natural teeth." }
    ]
  },
  {
    id: 'extraction',
    title: 'Wisdom Tooth Extraction',
    shortDesc: 'Painless surgical removal of impacted wisdom teeth.',
    description: 'Impacted or infected wisdom teeth can cause severe pain and shifting of your bite. Our maxillofacial specialists perform safe, swift, and painless extractions to prevent further oral health complications.',
    image: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?q=80&w=800&auto=format&fit=crop',
    benefits: ['Prevents crowding of other teeth', 'Eliminates acute pain and infection', 'Performed by surgical specialists', 'Fast healing protocols'],
    procedure: 'The tooth and surrounding area are completely numbed. Depending on the impaction, a small incision may be made to extract the tooth gently. Sutures are sometimes placed to aid in rapid healing.',
    faq: [
      { q: "Is it necessary to remove wisdom teeth?", a: "Not always, but if they are impacted, causing pain, or pushing other teeth, extraction is necessary." },
      { q: "How many days will I need to recover?", a: "Most patients recover fully within 3 to 5 days." }
    ]
  },
  {
    id: 'ortho',
    title: 'Orthodontic Braces',
    shortDesc: 'Straighten misaligned teeth with modern braces & aligners.',
    description: 'Achieve a perfectly aligned smile with our modern orthodontic treatments. We offer traditional metal braces, aesthetic ceramic braces, and invisible clear aligners to correct crowding and spacing issues.',
    image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=800&auto=format&fit=crop',
    benefits: ['Improves facial profile and smile', 'Makes teeth easier to clean', 'Corrects bite issues (underbite/overbite)', 'Options for invisible treatment'],
    procedure: 'After a comprehensive scan, brackets are bonded to your teeth and connected with a wire, which gently guides teeth into position over time. For clear aligners, you wear a series of custom trays that gradually shift your teeth.',
    faq: [
      { q: "Am I too old for braces?", a: "No! Orthodontics can be successful at any age if your gums and bone are healthy." },
      { q: "Do clear aligners work as well as braces?", a: "Yes, for most mild to moderate alignment issues, clear aligners are highly effective." }
    ]
  },
  {
    id: 'surgery',
    title: 'Maxillofacial Surgery',
    shortDesc: 'Advanced surgical care for facial trauma, cysts, and jaw issues.',
    description: 'We provide specialized surgical interventions for complex conditions involving the jaw, face, and mouth. Our procedures range from treating facial trauma and jaw cysts to corrective jaw surgery for bite discrepancies.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop',
    benefits: ['Specialist-level surgical care', 'Corrects severe functional issues', 'Advanced pain management', 'Safe, hospital-grade protocols'],
    procedure: 'Procedures are meticulously planned using 3D CBCT scans. Surgeries are performed under local or general anesthesia depending on the complexity, ensuring complete patient safety and comfort throughout.',
    faq: [
      { q: "Is maxillofacial surgery safe?", a: "Yes, when performed by a qualified Maxillofacial Surgeon in a sterile environment, it is completely safe." },
      { q: "Do you treat jaw joint (TMJ) pain?", a: "Yes, we diagnose and treat TMJ disorders ranging from medication to surgical intervention." }
    ]
  }
];

export default function AdvancedTreatments() {
  const [activeModal, setActiveModal] = useState<typeof services[0] | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const centerPosition = container.scrollLeft + container.clientWidth / 2;
    
    const children = Array.from(container.children) as HTMLElement[];
    let closestIndex = 0;
    let minDistance = Infinity;

    const cards = children.filter(child => child.hasAttribute('data-service-card'));
    cards.forEach((card, index) => {
      const cardElement = card as HTMLElement;
      const cardCenter = cardElement.offsetLeft + cardElement.clientWidth / 2;
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
    const cards = (Array.from(scrollRef.current.children) as HTMLElement[]).filter(child => child.hasAttribute('data-service-card'));
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
    if (activeIndex < services.length - 1) {
      scrollToCard(activeIndex + 1);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, []);

  return (
    <section id="services" className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-4">
          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-blue-600 mb-3">Our Dental Services</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight" style={{ fontFamily: "Poppins, sans-serif" }}>
              Advanced Dental Treatments
            </h3>
            <p className="text-sm md:text-lg text-slate-600 font-medium tracking-wide mt-2">
              For Healthy & Beautiful Smiles
            </p>
          </div>
          <div className="hidden md:flex gap-3">
            <button onClick={scrollLeft} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-50 hover:border-blue-200 hover:text-blue-600 transition-all shadow-sm" aria-label="Scroll left">
              <ChevronLeft size={24} />
            </button>
            <button onClick={scrollRight} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-50 hover:border-blue-200 hover:text-blue-600 transition-all shadow-sm" aria-label="Scroll right">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

      </div>
      
      {/* Horizontal Carousel */}
      <div className="w-full mx-auto relative pb-12">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex items-center overflow-x-auto gap-4 md:gap-6 pb-12 pt-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden w-full relative"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {/* Spacer for proper centering of first item */}
            <div className="shrink-0 pointer-events-none w-[calc(50vw-106px)] sm:w-[calc(50vw-126px)] md:w-[calc(50vw-154px)] lg:w-[calc(50vw-164px)]" />
            
            {services.map((item, idx) => {
              const isActive = activeIndex === idx;
              
              return (
                <div 
                  key={item.id}
                  data-service-card="true"
                  className={`snap-center shrink-0 w-[180px] sm:w-[220px] md:w-[260px] lg:w-[280px] transition-all duration-500 ease-out 
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
                    className={`relative w-full h-[260px] sm:h-[320px] md:h-[380px] rounded-[16px] md:rounded-[20px] overflow-hidden cursor-pointer group shadow-[0_8px_30px_rgb(0,0,0,0.06)] bg-slate-100 ${isActive ? 'ring-1 ring-blue-500/20 ring-offset-2 ring-offset-white shadow-[0_12px_40px_rgb(0,0,0,0.12)]' : ''}`}
                  >
                    <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent transition-opacity duration-300"></div>
                    
                    <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 flex flex-col justify-end">
                      <h4 className={`text-white font-semibold transition-all duration-300 ${isActive ? 'text-base md:text-xl mb-1' : 'text-sm md:text-base mb-0'}`} style={{ fontFamily: "Poppins, sans-serif" }}>{item.title}</h4>
                      <div className={`overflow-hidden transition-all duration-300 ${isActive ? 'max-h-24 opacity-100 mb-3 md:mb-5' : 'max-h-0 opacity-0 mb-0'}`}>
                        <p className="text-white/90 text-[10px] md:text-xs line-clamp-2 font-medium tracking-wide mt-1">{item.shortDesc}</p>
                      </div>
                      <button className={`text-white text-[10px] md:text-xs font-medium flex items-center gap-1.5 w-fit bg-white/20 hover:bg-white text-white hover:text-blue-600 px-3 md:px-4 py-1.5 md:py-2 rounded-full backdrop-blur-md transition-all duration-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none absolute bottom-0'}`}>
                        View Details <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Spacer for proper centering of last item */}
            <div className="shrink-0 pointer-events-none w-[calc(50vw-106px)] sm:w-[calc(50vw-126px)] md:w-[calc(50vw-154px)] lg:w-[calc(50vw-164px)]" />
          </div>
      </div>

      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              onClick={() => setActiveModal(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full h-full md:h-auto md:max-w-4xl bg-white md:rounded-[24px] overflow-hidden shadow-2xl flex flex-col max-h-[100vh] md:max-h-[85vh]"
            >
              <button 
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
              
              <div className="w-full h-32 md:h-48 shrink-0 relative">
                 <img src={activeModal.image} alt={activeModal.title} className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                 <div className="absolute bottom-4 left-5 md:left-8">
                   <h3 className="text-xl md:text-2xl font-semibold text-white mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>{activeModal.title}</h3>
                 </div>
              </div>

              <div className="p-5 md:p-8 overflow-y-auto bg-slate-50">
                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                  
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-slate-900 mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>Overview</h4>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                        {activeModal.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-slate-900 mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>Treatment Procedure</h4>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed p-3 md:p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
                        {activeModal.procedure}
                      </p>
                    </div>
                    
                    <div className="md:hidden">
                      <h4 className="text-base font-semibold text-slate-900 mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>Key Benefits</h4>
                      <ul className="space-y-2">
                        {activeModal.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" strokeWidth={1.5} />
                            <span className="pt-0.5">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-slate-900 mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>Patient FAQs</h4>
                      <div className="space-y-2">
                        {activeModal.faq.map((f, i) => (
                          <div key={i} className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                            <h5 className="font-medium text-slate-900 text-xs md:text-sm mb-1">{f.q}</h5>
                            <p className="text-xs text-slate-600 leading-relaxed">{f.a}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-1 space-y-5">
                    <div className="hidden md:block bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                      <h4 className="text-base font-semibold text-slate-900 mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>Key Benefits</h4>
                      <ul className="space-y-3">
                        {activeModal.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" strokeWidth={1.5} />
                            <span className="pt-0.5">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-blue-600 rounded-xl p-5 text-white shadow-md sticky top-5">
                      <h4 className="text-base font-semibold mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>Book Consultation</h4>
                      <p className="text-blue-100 text-xs mb-4">Take the first step towards a healthier smile.</p>
                      
                      <div className="space-y-2">
                        <a href="#booking" onClick={() => setActiveModal(null)} className="w-full flex items-center justify-center gap-2 bg-white text-blue-600 py-2.5 rounded-lg text-xs font-medium hover:bg-blue-50 transition-colors">
                          <CalendarCheck className="w-3.5 h-3.5" /> Book Appt
                        </a>
                        <a href="tel:+919052311281" className="w-full flex items-center justify-center gap-2 bg-blue-700 text-white py-2.5 rounded-lg text-xs font-medium hover:bg-blue-800 transition-colors">
                          <Phone className="w-3.5 h-3.5" /> Call Now
                        </a>
                        <a href="https://wa.me/919052311281" target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-2.5 rounded-lg text-xs font-medium hover:bg-[#20bd5a] transition-colors mt-1">
                          <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

