import { Trophy, Award } from 'lucide-react';

export default function DoctorProfiles() {
  return (
    <section id="doctors" className="py-24 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider inline-block mb-4">Meet The Experts</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary">Our Specialists</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Dr. Kartheek */}
          <div className="bg-surface-container-low rounded-3xl overflow-hidden shadow-lg border border-outline-variant/30 group">
            <div className="h-80 bg-surface-container-high overflow-hidden">
               <img src="/Screenshot%202026-06-16%20142755-1.png" alt="Dr. Kartheek" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold text-primary mb-2">Dr. Kartheek</h3>
              <p className="text-secondary font-semibold mb-6">Chief Dental & Maxillofacial Specialist</p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <Trophy className="text-on-surface-variant mt-1 shrink-0" size={20} />
                  <span className="text-on-surface-variant">Extensive experience in complex maxillofacial surgeries and full mouth rehabilitation.</span>
                </li>
                <li className="flex items-start gap-4">
                  <Award className="text-on-surface-variant mt-1 shrink-0" size={20} />
                  <span className="text-on-surface-variant">Renowned for precision dental implantology in Kadapa region.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Dr. Sravya */}
          <div className="bg-surface-container-low rounded-3xl overflow-hidden shadow-lg border border-outline-variant/30 group">
            <div className="h-80 bg-surface-container-high overflow-hidden">
               <img src="/Screenshot%202026-06-16%20142755-1.png" alt="Dr. Sravya" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold text-primary mb-2">Dr. Sravya</h3>
              <p className="text-secondary font-semibold mb-6">Dental Specialist</p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <Trophy className="text-on-surface-variant mt-1 shrink-0" size={20} />
                  <span className="text-on-surface-variant">Expertise in modern cosmetic dentistry and pain-free root canal therapies.</span>
                </li>
                <li className="flex items-start gap-4">
                  <Award className="text-on-surface-variant mt-1 shrink-0" size={20} />
                  <span className="text-on-surface-variant">Dedicated to personalized patient care and anxiety-free pediatric dentistry.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
