import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

export default function BookingSection() {
  return (
    <section className="py-12 md:py-20 bg-surface-dim relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-secondary/5 rounded-full blur-[50px] md:blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 sm:p-10 md:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center text-center">
           <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-surface-dim flex items-center justify-center mb-6 md:mb-8">
             <Calendar className="text-primary w-6 h-6 md:w-7 md:h-7" />
           </div>
           <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium text-primary tracking-tight mb-3 md:mb-4">Request a Consultation</h3>
           <p className="text-base md:text-lg text-gray-500 font-light mb-8 md:mb-12 max-w-xl">Take the first step towards your perfect smile. Our specialists will craft a treatment plan tailored specifically for you.</p>

           <form className="w-full space-y-4 md:space-y-6">
             <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full bg-[#f8fafc] px-5 py-3.5 md:px-6 md:py-4 rounded-xl md:rounded-2xl border-none focus:ring-2 focus:ring-secondary/50 text-primary placeholder-gray-400 outline-none transition-all text-sm md:text-base"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full bg-[#f8fafc] px-5 py-3.5 md:px-6 md:py-4 rounded-xl md:rounded-2xl border-none focus:ring-2 focus:ring-secondary/50 text-primary placeholder-gray-400 outline-none transition-all text-sm md:text-base"
                />
             </div>
             <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <select defaultValue="" className="w-full bg-[#f8fafc] px-5 py-3.5 md:px-6 md:py-4 rounded-xl md:rounded-2xl border-none focus:ring-2 focus:ring-secondary/50 text-gray-400 outline-none transition-all appearance-none cursor-pointer text-sm md:text-base">
                  <option value="" disabled>Interested Treatment</option>
                  <option value="implants">Dental Implants</option>
                  <option value="surgery">Maxillofacial Surgery</option>
                  <option value="smile">Smile Designing</option>
                  <option value="general">General Consultation</option>
                </select>
                <input 
                  type="date" 
                  className="w-full bg-[#f8fafc] px-5 py-3.5 md:px-6 md:py-4 rounded-xl md:rounded-2xl border-none focus:ring-2 focus:ring-secondary/50 text-gray-400 outline-none transition-all text-sm md:text-base min-h-[52px]"
                />
             </div>
             <textarea 
                placeholder="Additional Notes or Questions" 
                rows={3}
                className="w-full bg-[#f8fafc] px-5 py-3.5 md:px-6 md:py-4 rounded-xl md:rounded-2xl border-none focus:ring-2 focus:ring-secondary/50 text-primary placeholder-gray-400 outline-none transition-all resize-none text-sm md:text-base"
             ></textarea>
             
             <button type="button" className="w-full md:w-auto px-8 md:px-12 py-4 md:py-5 bg-primary text-white rounded-full font-medium text-base md:text-lg hover:bg-primary-light transition-colors shadow-xl shadow-primary/20">
               Confirm Request
             </button>
           </form>
        </div>

      </div>
    </section>
  );
}
