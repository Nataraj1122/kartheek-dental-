import { Quote } from 'lucide-react';
import { motion } from 'motion/react';

export default function Testimonials() {
  const reviews = [
    { text: "Outstanding experience blended with excellence.", name: "Patient Review" },
    { text: "Clean and modern clinic with excellent care.", name: "Patient Review" },
    { text: "Friendly doctors and highly professional treatment.", name: "Patient Review" },
    { text: "Best place for dental care in Kadapa.", name: "Patient Review" }
  ];

  return (
    <section className="py-24 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider inline-block mb-4">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary">Patient Stories</h2>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
          {reviews.map((rev, idx) => (
            <motion.div 
              whileHover={{ y: -5 }}
              key={idx} 
              className="min-w-[300px] md:min-w-[400px] bg-white p-8 rounded-3xl shadow-sm border border-outline-variant/30 snap-center flex flex-col justify-between"
            >
              <div>
                <Quote className="text-secondary/20 mb-4" size={48} />
                <p className="text-xl font-medium text-primary leading-relaxed">"{rev.text}"</p>
              </div>
              <div className="mt-8 flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {"★★★★★"}
                </div>
                <span className="text-on-surface-variant font-medium ml-2">- {rev.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </section>
  );
}
