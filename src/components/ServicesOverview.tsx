import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const services = [
  { id: 'dental-implants', title: 'Dental Implants', desc: 'Permanent replacement for missing teeth with natural look and feel.' },
  { id: 'root-canal', title: 'Root Canal Treatment', desc: 'Painless endodontic therapy to save infected or damaged teeth.' },
  { id: 'smile-designing', title: 'Smile Designing', desc: 'Customized cosmetic treatments for your perfect smile.' },
  { id: 'orthodontics', title: 'Orthodontics & Braces', desc: 'Correct misaligned teeth for better aesthetics and function.' },
  { id: 'maxillofacial-surgery', title: 'Maxillofacial Surgery', desc: 'Complex surgical procedures for face, jaw, and mouth.' },
  { id: 'teeth-whitening', title: 'Teeth Whitening', desc: 'Professional bleaching for a brighter, radiant smile.' }
];

export default function ServicesOverview() {
  return (
    <section id="services" className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider inline-block">Our Treatments</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary">Comprehensive Dental Care</h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">From routine checkups to complex surgeries, we offer a full spectrum of dental and maxillofacial services.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <Link key={svc.id} to={`/services/${svc.id}`}>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-outline-variant/20 h-full group flex flex-col"
              >
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">{svc.title}</h3>
                  <p className="text-on-surface-variant mb-6">{svc.desc}</p>
                </div>
                <div className="flex items-center text-secondary font-semibold mt-auto">
                  View Details <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
