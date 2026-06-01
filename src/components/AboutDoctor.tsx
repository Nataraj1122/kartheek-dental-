import { motion } from 'motion/react';
import { Phone, MessageSquare, CalendarCheck, UserRound, CheckCircle2 } from 'lucide-react';

export default function AboutDoctor() {
  return (
    <section id="doctors" className="py-12 md:py-20 bg-gray-50/50 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-secondary mb-3">Our Specialist</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary tracking-tight">Meet Your Specialist</h3>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[24px] shadow-[0_10px_40px_rgb(0,0,0,0.06)] border border-gray-100 overflow-hidden"
        >
          <div className="p-5 md:p-8">
            <div className="flex flex-row items-center md:items-start gap-4 md:gap-8 mb-4 md:mb-6">
              {/* Image Section */}
              <div className="shrink-0">
                <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] rounded-full sm:rounded-2xl overflow-hidden border border-gray-200 shadow-sm relative">
                   <img 
                      src="/a3fef4f389be3e97771b067e8ed10413.jpg" 
                      alt="Dr. Kartheek" 
                      className="w-full h-full object-cover object-top"
                   />
                </div>
              </div>
              
              {/* Basic Info */}
              <div className="flex flex-col justify-center flex-grow py-1 sm:py-2">
                <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 mb-0.5 sm:mb-1 leading-tight" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Dr. Kartheek
                </h4>
                <p className="text-[10px] sm:text-sm md:text-base text-slate-700 font-medium tracking-tight mb-0.5 leading-snug">
                  BDS, MDS (Oral & Maxillofacial Surgery)
                </p>
                <p className="text-[9px] sm:text-xs md:text-sm text-cyan-700 font-semibold tracking-wide uppercase leading-snug">
                  Chief Dental Surgeon
                </p>
                <div className="hidden sm:inline-flex mt-2 md:mt-4 items-center gap-1.5 text-[10px] md:text-xs text-blue-800 font-medium bg-blue-50 w-fit px-2.5 py-1 md:px-3 md:py-1.5 rounded-md">
                   <CheckCircle2 className="w-3 h-3 md:w-3.5 md:h-3.5" /> 10+ Years Experience
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-5 md:mb-8">
              <p className="text-[11px] sm:text-sm md:text-base text-slate-600 leading-relaxed font-light">
                Dr. Kartheek is an experienced Oral & Maxillofacial Surgeon dedicated to providing advanced, safe and patient-focused dental care. His expertise in dental implants, oral surgery and smile rehabilitation has helped hundreds of patients regain confidence in their smiles.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
              <a href="#booking" className="flex items-center justify-center gap-1.5 md:gap-2 bg-blue-600 text-white p-2.5 md:p-3 rounded-[10px] md:rounded-[12px] text-[10px] sm:text-xs md:text-sm font-medium hover:bg-blue-700 transition-all shadow-sm">
                <CalendarCheck strokeWidth={1.5} className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> <span>Book Appointment</span>
              </a>
              <a href="tel:+919052311281" className="flex items-center justify-center gap-1.5 md:gap-2 bg-slate-50 text-slate-800 border border-slate-200 p-2.5 md:p-3 rounded-[10px] md:rounded-[12px] text-[10px] sm:text-xs md:text-sm font-medium hover:bg-slate-100 transition-all">
                <Phone strokeWidth={1.5} className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> <span>Call Now</span>
              </a>
              <a href="https://wa.me/919052311281" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-1.5 md:gap-2 bg-slate-50 text-slate-800 border border-slate-200 p-2.5 md:p-3 rounded-[10px] md:rounded-[12px] text-[10px] sm:text-xs md:text-sm font-medium hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all">
                <MessageSquare strokeWidth={1.5} className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> <span>WhatsApp</span>
              </a>
              <button className="flex items-center justify-center gap-1.5 md:gap-2 bg-slate-50 text-slate-800 border border-slate-200 p-2.5 md:p-3 rounded-[10px] md:rounded-[12px] text-[10px] sm:text-xs md:text-sm font-medium hover:bg-slate-100 hover:text-cyan-600 transition-all">
                <UserRound strokeWidth={1.5} className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> <span>Full Profile</span>
              </button>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
