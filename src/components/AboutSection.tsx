import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Stethoscope, Heart, Sparkles } from 'lucide-react';

export default function AboutSection() {
  const reasons = [
    { icon: Stethoscope, title: "Experienced Specialists", text: "Highly qualified dental and maxillofacial experts." },
    { icon: Target, title: "Advanced Technology", text: "State-of-the-art diagnostic and surgical equipment." },
    { icon: Sparkles, title: "Painless Procedures", text: "Modern techniques ensuring a comfortable experience." },
    { icon: ShieldCheck, title: "Hygienic Facility", text: "Strict Class B autoclaving and sterilization protocols." },
    { icon: Heart, title: "Patient-Focused", text: "Personalized care plans tailored to your specific needs." },
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6">
            <span className="bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider inline-block">About Our Clinic</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Driven by Excellence in Kadapa.</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Kartheek's Dental & Maxillofacial Centre is dedicated to delivering world-class treatments through cutting-edge technology and evidence-based practices. We restore function, enhance aesthetics, and improve the quality of life for our community.
            </p>
          </div>
          
          <div className="relative">
             <div className="aspect-square md:aspect-auto md:h-[500px] rounded-3xl overflow-hidden shadow-xl">
                <img src="/baaea448db9ac25b1c5b4aaa24c57c48.jpg" className="w-full h-full object-cover" alt="Clinic Interior" />
             </div>
             <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-2xl max-w-xs hidden md:block border border-outline-variant/20">
                <p className="text-4xl font-bold text-secondary mb-2">10+</p>
                <p className="font-semibold text-primary">Years of Clinical Excellence</p>
             </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-primary mb-4">Why Choose Us</h3>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Uncompromising standards combined with compassionate care.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((Reason, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/30 hover:shadow-xl transition-all shadow-sm"
            >
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <Reason.icon size={28} className="text-secondary" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-3">{Reason.title}</h4>
              <p className="text-on-surface-variant">{Reason.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
