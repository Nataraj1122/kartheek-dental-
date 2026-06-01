import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

// Mock data for detailing pages
const serviceDetails: Record<string, any> = {
  'dental-implants': {
    title: 'Dental Implants',
    description: 'Permanent, natural-looking replacements for missing teeth using medical-grade titanium posts.',
    benefits: ['Looks and functions like natural teeth', 'Prevents bone loss', 'Durable and long-lasting', 'Restores bite force'],
    overview: 'Dental implants are the standard of care for missing teeth. They are surgically placed into the jawbone, acting as artificial roots to support crowns, bridges, or dentures. Unlike traditional options, they do not require altering adjacent healthy teeth and provide a permanent foundation.',
    image: 'https://images.unsplash.com/photo-1598256989467-34c81a293f9c?q=80&w=2070&auto=format&fit=crop'
  },
  'root-canal': {
    title: 'Root Canal Treatment',
    description: 'Painless, single-visit endodontic therapy using the latest rotary files and apex locators.',
    benefits: ['Saves the natural tooth', 'Relieves severe toothache', 'Prevents spread of infection', 'Highly successful procedure'],
    overview: 'When the innermost part of the tooth (the pulp) becomes infected, a root canal is necessary to save the tooth. We utilize modern anesthesia and motorized equipment to ensure the procedure is virtually painless and highly efficient, often completed in a single visit.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop'
  }
};

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  
  // Fallback content if service not fully defined in mock
  const service = id && serviceDetails[id] ? serviceDetails[id] : {
    title: id?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    description: 'Advanced dental treatment tailored to your specific needs.',
    benefits: ['State-of-the-art approach', 'Personalized care', 'Long term results', 'Painless experience'],
    overview: 'We provide specialized care focusing on aesthetics, function, and overall oral health. Contact us for a detailed consultation.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop'
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <div className="bg-primary pt-12 pb-24 text-center px-6">
        <Link to="/#services" className="inline-flex items-center text-white/70 hover:text-white mb-8 font-medium">
          <ArrowLeft size={20} className="mr-2" /> Back to Services
        </Link>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          {service.title}
        </h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">
          {service.description}
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-12 relative z-10 grid md:grid-cols-3 gap-12 pb-24">
        {/* Main Content */}
        <div className="md:col-span-2 bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-outline-variant/30">
          <img src={service.image} alt={service.title} className="w-full h-[300px] object-cover rounded-2xl mb-8" />
          
          <h2 className="text-3xl font-bold text-primary mb-4">Overview</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
            {service.overview}
          </p>

          <h2 className="text-3xl font-bold text-primary mb-4">Key Benefits</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {service.benefits.map((bg: string, i: number) => (
              <div key={i} className="flex items-start gap-3 bg-surface-container-low p-4 rounded-xl">
                 <CheckCircle2 className="text-secondary shrink-0 mt-0.5" size={20} />
                 <span className="font-medium text-primary">{bg}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-surface-container-low rounded-3xl p-8 border border-outline-variant/20 shadow-md">
            <h3 className="text-2xl font-bold text-primary mb-4">Book a Consultation</h3>
            <p className="text-on-surface-variant mb-6">Schedule an appointment with our specialists to discuss your treatment options.</p>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-outline-variant/50 focus:outline-none focus:ring-2 focus:ring-secondary/50" />
              <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-outline-variant/50 focus:outline-none focus:ring-2 focus:ring-secondary/50" />
              <button type="button" className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary-container transition-colors shadow-[0_5px_15px_rgba(0,49,120,0.2)]">
                Request Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
