import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop', alt: 'Modern Equipment' },
    { src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop', alt: 'Clinic Interior' },
    { src: 'https://images.unsplash.com/photo-1598256989467-34c81a293f9c?q=80&w=2070&auto=format&fit=crop', alt: 'Treatment Room' },
  ];

  return (
    <section id="gallery" className="py-24 bg-surface-container-highest">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
             <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider inline-block mb-4">Gallery</span>
             <h2 className="text-4xl md:text-5xl font-bold text-primary">A Glimpse Into Excellence</h2>
          </div>
          <p className="text-on-surface-variant max-w-md">Experience our state-of-the-art facilities designed for comfort and precision.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="rounded-3xl overflow-hidden h-80 shadow-lg border border-outline-variant/20 relative group"
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-bold text-lg">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
