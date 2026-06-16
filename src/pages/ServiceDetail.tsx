import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

// Mock data for detailing pages
const serviceDetails: Record<string, any> = {
  'dental-implants': {
    title: 'Dental Implants',
    description: 'Permanent, natural-looking replacements for missing teeth using medical-grade titanium posts.',
    benefits: ['Looks and functions like natural teeth', 'Prevents bone loss', 'Durable and long-lasting', 'Restores bite force'],
    overview: 'Dental implants are the standard of care for missing teeth. They are surgically placed into the jawbone, acting as artificial roots to support crowns, bridges, or dentures. Unlike traditional options, they do not require altering adjacent healthy teeth and provide a permanent foundation.',
    image: '/949abfb7-fa3b-40e1-a5a9-4aec1922dbfd.png'
  },
  'root-canal': {
    title: 'Root Canal Treatment',
    description: 'Painless, single-visit endodontic therapy using the latest rotary files and apex locators.',
    benefits: ['Saves the natural tooth', 'Relieves severe toothache', 'Prevents spread of infection', 'Highly successful procedure'],
    overview: 'When the innermost part of the tooth (the pulp) becomes infected, a root canal is necessary to save the tooth. We utilize modern anesthesia and motorized equipment to ensure the procedure is virtually painless and highly efficient, often completed in a single visit.',
    image: '/569d2b1ef48469774cad871718731b05.jpg'
  },
  'smile-designing': {
    title: 'Smile Designing',
    description: 'Bespoke cosmetic transformations tailored to your unique facial features.',
    benefits: ['Perfect facial symmetry', 'Stain resistant results', 'Natural looking aesthetics', 'Minimal prep options'],
    overview: 'Smile designing involves a series of cosmetic procedures meant to improve your smile. We analyze your facial features and dental structure to create a custom plan that might include veneers, teeth whitening, and contouring for that perfect look.',
    image: '/887d3589-8791-454a-8775-7513e4f87883.png'
  },
  'teeth-whitening': {
    title: 'Teeth Whitening',
    description: 'Advanced professional whitening for a radiant, Hollywood smile in just one hour.',
    benefits: ['Up to 8 shades lighter', 'Safe for enamel', 'Long lasting results', 'Professional supervision'],
    overview: 'Our professional-grade whitening system uses advanced laser technology to remove deep-seated stains that store-bought products simply can\'t reach. It\'s fast, effective, and performed under expert supervision for the safest results.',
    image: '/7f8ea0a58821aba25f76043998a7cf7b.jpg'
  },
  'pediatric-dentistry': {
    title: 'Pediatric Dentistry',
    description: 'Specialized dental care for kids in a fun, fear-free environment.',
    benefits: ['Child friendly approach', 'Preventive care focus', 'Habit building', 'Painless techniques'],
    overview: 'We believe that early dental experiences shape a child\'s lifelong attitude towards oral health. Our clinic is designed to be welcoming and fun for children, offering everything from preventive sealants to gentle cavity treatments.',
    image: '/20fc79b8984f8bc86b1eaf7bd66f431c.jpg'
  },
  'full-mouth-rehab': {
    title: 'Full Mouth Rehab',
    description: 'Complete restorative transformation for total oral health and function.',
    benefits: ['Full bite restoration', 'Enhanced facial profile', 'Pain-free chewing', 'Long term health'],
    overview: 'Full mouth rehabilitation is a comprehensive treatment for those with multiple missing, worn, or damaged teeth. We combine various disciplines like implants, crowns, and periodontics to rebuild your smile from the ground up.',
    image: '/7ff76640c8d19f235078c8fb63020990.jpg'
  },
  'orthodontics': {
    title: 'Orthodontics & Braces',
    description: 'Advanced alignment solutions for a perfectly straight and healthy smile.',
    benefits: ['Improved facial aesthetics', 'Better bite function', 'Options for invisible braces', 'Easier oral hygiene'],
    overview: 'Orthodontic treatment corrects teeth that are crowded, crooked, or misaligned. We offer a variety of options including high-quality metallic braces, aesthetic ceramic braces, and modern clear aligners tailored to your lifestyle and needs.',
    image: '/690520eac20a2b372e3cfac08f6eb156.jpg'
  },
  'maxillofacial-surgery': {
    title: 'Maxillofacial Surgery',
    description: 'Specialized surgical care for the face, jaws, and mouth.',
    benefits: ['Corrective jaw surgery', 'Treatment for facial trauma', 'Removal of cysts and tumors', 'Expert specialist care'],
    overview: 'Maxillofacial surgery addresses complex conditions of the face and jaw. Our surgeons are experts in corrective jaw surgery, facial trauma reconstruction, and management of various oral pathologies, ensuring the highest standards of safety and care.',
    image: '/19e7ebe98109338faf0d9bbde6840b78.jpg'
  },
  'crowns-bridges': {
    title: 'Crowns & Bridges',
    description: 'Bespoke restorations to restore strength and aesthetics to your teeth.',
    benefits: ['Natural looks', 'Restores bite strength', 'Durable Zirconia', 'Seamless fit'],
    overview: 'Crowns and bridges are permanent prosthetic devices. A crown is used to entirely cover a damaged tooth, while a bridge replaces one or more missing teeth by spanning the space where the teeth are missing, anchored to natural teeth or implants.',
    image: '/84bcc53e1d13727579ef37e8c88e25d4.jpg'
  },
  'wisdom-extraction': {
    title: 'Wisdom Tooth Extraction',
    description: 'Expert surgical removal of problematic wisdom teeth.',
    benefits: ['Pain relief', 'Prevents infection', 'Protects other teeth', 'Swift recovery'],
    overview: 'Wisdom teeth often don\'t have enough room to emerge or grow normally. When they become impacted or cause pain, surgical extraction is necessary. Our specialists ensure a comfortable, painless procedure with advanced post-operative care for quick healing.',
    image: '/09df071c08c3235712cd33bc08c61a2b.jpg'
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
