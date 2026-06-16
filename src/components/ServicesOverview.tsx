import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Activity, Sparkles, Layers, Shield, Sun } from 'lucide-react';

const services = [
  { 
    id: 'dental-implants', 
    title: 'Dental Implants', 
    desc: 'Permanent replacement for missing teeth with natural look and feel.',
    image: '/949abfb7-fa3b-40e1-a5a9-4aec1922dbfd.png'
  },
  { 
    id: 'root-canal', 
    title: 'Root Canal Treatment', 
    desc: 'Painless endodontic therapy to save infected or damaged teeth.',
    image: '/569d2b1ef48469774cad871718731b05.jpg'
  },
  { 
    id: 'smile-designing', 
    title: 'Smile Designing', 
    desc: 'Customized cosmetic treatments for your perfect smile.',
    image: '/887d3589-8791-454a-8775-7513e4f87883.png'
  },
  { 
    id: 'orthodontics', 
    title: 'Orthodontics & Braces', 
    desc: 'Correct misaligned teeth for better aesthetics and function.',
    image: '/690520eac20a2b372e3cfac08f6eb156.jpg'
  },
  { 
    id: 'maxillofacial-surgery', 
    title: 'Maxillofacial Surgery', 
    desc: 'Complex surgical procedures for face, jaw, and mouth.',
    image: '/19e7ebe98109338faf0d9bbde6840b78.jpg'
  },
  { 
    id: 'teeth-whitening', 
    title: 'Teeth Whitening', 
    desc: 'Professional bleaching for a brighter, radiant smile.',
    image: '/7f8ea0a58821aba25f76043998a7cf7b.jpg'
  },
  { 
    id: 'pediatric-dentistry', 
    title: 'Pediatric Dentistry', 
    desc: 'Gentle, friendly dental care specially designed for children.',
    image: '/20fc79b8984f8bc86b1eaf7bd66f431c.jpg'
  },
  { 
    id: 'full-mouth-rehab', 
    title: 'Full Mouth Rehab', 
    desc: 'Complete restoration of dental health, function, and aesthetics.',
    image: '/7ff76640c8d19f235078c8fb63020990.jpg'
  },
  { 
    id: 'crowns-bridges', 
    title: 'Crowns & Bridges', 
    desc: 'High-strength restorative solutions to fix damaged or missing teeth.',
    image: '/84bcc53e1d13727579ef37e8c88e25d4.jpg'
  },
  { 
    id: 'wisdom-extraction', 
    title: 'Wisdom Tooth Extraction', 
    desc: 'Painless surgical removal of impacted or infected wisdom teeth.',
    image: '/09df071c08c3235712cd33bc08c61a2b.jpg'
  }
];

export default function ServicesOverview() {
  return (
    <section id="overview" className="py-24 bg-surface-container-low">
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
                  <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {svc.image ? (
                      <img src={svc.image} alt={svc.title} className="w-10 h-10 object-contain" />
                    ) : (
                      svc.icon && <svc.icon size={28} className="group-hover:scale-110 transition-transform" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary transition-colors">{svc.title}</h3>
                  <p className="text-on-surface-variant mb-6 text-sm">{svc.desc}</p>
                </div>
                <div className="flex items-center text-secondary font-semibold mt-auto text-sm">
                  View Details <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
