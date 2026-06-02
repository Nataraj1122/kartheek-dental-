import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full pt-10 pb-6 md:pt-16 md:pb-8 bg-[#0a192f] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 mb-8 md:mb-12">
        
        {/* Section 1: Logo & Description */}
        <div className="lg:col-span-4 space-y-3">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.jpg" alt="Kartheek's Dental & Maxillofacial" className="h-10 w-auto object-contain bg-white rounded-md p-1" />
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-semibold tracking-tight text-white line-clamp-1" style={{ fontFamily: "Poppins, sans-serif" }}>Kartheek's</span>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-[#22D3EE] line-clamp-1">Dental & Maxillofacial</span>
            </div>
          </Link>
          <p className="text-xs md:text-sm text-gray-300 font-light leading-relaxed max-w-sm">
            Kartheek's Dental & Maxillofacial provides advanced, safe and patient-focused dental care in Kadapa.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div className="lg:col-span-4">
          <h4 className="text-[10px] md:text-xs uppercase tracking-widest font-semibold text-gray-400 mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>Quick Links</h4>
          <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
             <a href="/" className="text-xs md:text-sm text-gray-300 hover:text-[#22D3EE] transition-colors flex items-center gap-1.5"><span className="w-1 h-1 bg-[#22D3EE] rounded-full opacity-50"></span>Home</a>
             <a href="/#services" className="text-xs md:text-sm text-gray-300 hover:text-[#22D3EE] transition-colors flex items-center gap-1.5"><span className="w-1 h-1 bg-[#22D3EE] rounded-full opacity-50"></span>Dental Implants</a>
             <a href="/#about" className="text-xs md:text-sm text-gray-300 hover:text-[#22D3EE] transition-colors flex items-center gap-1.5"><span className="w-1 h-1 bg-[#22D3EE] rounded-full opacity-50"></span>About Us</a>
             <a href="/#services" className="text-xs md:text-sm text-gray-300 hover:text-[#22D3EE] transition-colors flex items-center gap-1.5"><span className="w-1 h-1 bg-[#22D3EE] rounded-full opacity-50"></span>Smile Designing</a>
             <a href="/#services" className="text-xs md:text-sm text-gray-300 hover:text-[#22D3EE] transition-colors flex items-center gap-1.5"><span className="w-1 h-1 bg-[#22D3EE] rounded-full opacity-50"></span>Services</a>
             <a href="/#services" className="text-xs md:text-sm text-gray-300 hover:text-[#22D3EE] transition-colors flex items-center gap-1.5"><span className="w-1 h-1 bg-[#22D3EE] rounded-full opacity-50"></span>Oral Surgery</a>
             <a href="/#contact" className="text-xs md:text-sm text-gray-300 hover:text-[#22D3EE] transition-colors flex items-center gap-1.5"><span className="w-1 h-1 bg-[#22D3EE] rounded-full opacity-50"></span>Contact</a>
             <a href="/#gallery" className="text-xs md:text-sm text-gray-300 hover:text-[#22D3EE] transition-colors flex items-center gap-1.5"><span className="w-1 h-1 bg-[#22D3EE] rounded-full opacity-50"></span>Gallery</a>
          </div>
        </div>

        {/* Section 3: Contact Info as Compact Cards */}
        <div className="lg:col-span-4 flex flex-col gap-2.5">
          <h4 className="text-[10px] md:text-xs uppercase tracking-widest font-semibold text-gray-400 mb-1.5" style={{ fontFamily: "Poppins, sans-serif" }}>Contact Information</h4>
          
          <div className="flex gap-3 items-center bg-white/5 p-2.5 md:p-3 rounded-lg border border-white/5 hover:border-[#22D3EE]/30 hover:bg-white/10 transition-colors group">
            <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#22D3EE] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-[11px] md:text-xs text-gray-300 font-light leading-snug">Balakrishna Complex, 4/30, Opp Women's College, Kadapa, AP 516001</span>
          </div>

          <a href="tel:+919052311281" className="flex gap-3 items-center bg-white/5 p-2.5 md:p-3 rounded-lg border border-white/5 hover:border-[#22D3EE]/30 hover:bg-white/10 transition-colors group">
            <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#22D3EE] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-[11px] md:text-xs text-gray-300 font-light">+91 90523 11281</span>
          </a>

          <a href="mailto:info@kartheeksdental.com" className="flex gap-3 items-center bg-white/5 p-2.5 md:p-3 rounded-lg border border-white/5 hover:border-[#22D3EE]/30 hover:bg-white/10 transition-colors group">
            <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#22D3EE] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-[11px] md:text-xs text-gray-300 font-light truncate">info@kartheeksdental.com</span>
          </a>

          <div className="flex gap-3 items-center bg-white/5 p-2.5 md:p-3 rounded-lg border border-white/5 hover:border-[#22D3EE]/30 hover:bg-white/10 transition-colors group">
            <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#22D3EE] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-[11px] md:text-xs text-gray-300 font-light">Mon-Sat: 10AM - 8PM | Sun: Appointment</span>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-5 text-center md:text-left">
          
          {/* Section 4: Social Icons */}
          <div className="flex gap-3">
             <a href="https://wa.me/919052311281" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#22D3EE] hover:text-[#0a192f] hover:border-[#22D3EE] transition-all shadow-sm" aria-label="WhatsApp">
                {/* SVG for WhatsApp icon */}
                <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-4 h-4 md:w-4.5 md:h-4.5">
                  <path d="M12.01 2.014c-5.508 0-9.982 4.474-9.982 9.982 0 1.956.543 3.842 1.545 5.513L2.01 22.014l4.63-1.523a9.92 9.92 0 005.37 1.548c5.498 0 9.972-4.474 9.972-9.982 0-5.508-4.474-9.982-9.972-9.982zM12.01 19.98c-1.637 0-3.238-.432-4.66-1.258l-.334-.195-3.466 1.14.928-3.376-.217-.341a7.925 7.925 0 01-1.256-4.321c0-4.382 3.565-7.947 7.947-7.947 4.382 0 7.947 3.565 7.947 7.947 0 4.382-3.565 7.947-7.947 7.947zm4.35-5.945c-.24-.12-1.41-.692-1.62-.772-.21-.08-.36-.12-.51.12-.15.24-.61.772-.75.922-.14.15-.29.17-.53.05-.24-.12-1.01-.368-1.92-1.18-.7-.618-1.18-1.382-1.32-1.622-.14-.24-.015-.37.105-.48.11-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.51-1.22-.7-1.68-.19-.44-.38-.38-.51-.38h-.44c-.15 0-.39.06-.6.3-.21.24-.81.79-.81 1.93 0 1.14.83 2.24.95 2.4.12.16 1.63 2.49 3.96 3.49.56.24 1 .38 1.34.49.56.17 1.07.15 1.47.09.45-.06 1.41-.57 1.61-1.13.2-.56.2-1.04.14-1.13-.06-.09-.21-.14-.45-.26z" />
                </svg>
             </a>
             <a href="#" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#22D3EE] hover:text-[#0a192f] hover:border-[#22D3EE] transition-all shadow-sm" aria-label="Instagram">
                <Instagram className="w-4 h-4 md:w-4.5 md:h-4.5" />
             </a>
             <a href="#" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#22D3EE] hover:text-[#0a192f] hover:border-[#22D3EE] transition-all shadow-sm" aria-label="Facebook">
                <Facebook className="w-4 h-4 md:w-4.5 md:h-4.5" />
             </a>
             <a href="https://maps.google.com/?q=Kartheek's+Dental+Kadapa" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#22D3EE] hover:text-[#0a192f] hover:border-[#22D3EE] transition-all shadow-sm" aria-label="Google Maps">
                <MapPin className="w-4 h-4 md:w-4.5 md:h-4.5" />
             </a>
          </div>
          
          {/* Section 5: Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-center md:items-end gap-1.5 md:gap-4 text-[#8b9bb4]">
            <span className="text-[10px] md:text-xs">© {new Date().getFullYear()} Kartheek's Dental & Maxillofacial. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
