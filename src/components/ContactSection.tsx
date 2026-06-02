import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, ChevronDown } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 md:py-20 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="max-w-3xl mx-auto">
          
          {/* Info & Map */}
          <div className="space-y-8 md:space-y-12">
            <div>
              <h2 className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold text-secondary mb-2 md:mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>Location & Hours</h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-primary tracking-tight mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>Get In Touch</h3>
              <p className="text-sm md:text-base text-gray-500 font-light leading-relaxed">Experience a higher standard of dental care. We are conveniently located in the heart of Kadapa.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-secondary shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm md:text-base font-medium text-primary mb-1">Address</h4>
                    <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed mb-2">
                      Balakrishna Complex, 4/30,<br/>
                      Opposite Women's College,<br/>
                      Maria Puram, Nagarajupeta,<br/>
                      Kadapa, AP 516001
                    </p>
                    <a href="https://maps.google.com/?q=Kartheek's+Dental+Kadapa" target="_blank" rel="noopener noreferrer" className="text-xs text-secondary font-medium hover:underline inline-flex items-center gap-1">Get Directions <ChevronDown className="w-3 h-3 -rotate-90" /></a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-secondary shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm md:text-base font-medium text-primary mb-1">Hours</h4>
                    <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed">Mon-Sat: 10AM - 8PM<br/>Sun: By Appointment</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-secondary shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm md:text-base font-medium text-primary mb-1">Contact</h4>
                    <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed mb-2">+91 90523 11281</p>
                    <div className="flex items-center gap-2">
                      <a href="tel:+919052311281" className="text-[10px] md:text-xs font-medium bg-primary text-white px-3 py-1.5 rounded-full hover:bg-primary/90 transition-colors">Call Now</a>
                      <a href="https://wa.me/919052311281" target="_blank" rel="noopener noreferrer" className="text-[10px] md:text-xs font-medium bg-green-500 text-white px-3 py-1.5 rounded-full hover:bg-green-600 transition-colors">WhatsApp</a>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-secondary shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm md:text-base font-medium text-primary mb-1">Email</h4>
                    <a href="mailto:info@kartheeksdental.com" className="text-xs md:text-sm text-gray-500 font-light hover:text-secondary transition-colors truncate block">info@kartheeksdental.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro Map */}
            <div className="h-48 md:h-64 bg-gray-100 rounded-2xl overflow-hidden shadow-inner border border-gray-200">
              <iframe 
                src="https://maps.google.com/maps?q=Balakrishna+Complex,+4/30,+Opposite+Women's+College,+Maria+Puram,+Nagarajupeta,+Kadapa,+Annamayya,+Andhra+Pradesh+516001&t=h&z=16&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
                title="Kartheek's Dental Map"
                className="w-full h-full object-cover"
              ></iframe>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4">
               <span className="text-xs md:text-sm font-medium text-primary">Follow Us:</span>
               <a href="#" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-secondary hover:border-secondary transition-colors"><Facebook size={14} /></a>
               <a href="#" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-secondary hover:border-secondary transition-colors"><Instagram size={14} /></a>
               <a href="#" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-secondary hover:border-secondary transition-colors"><Twitter size={14} /></a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
