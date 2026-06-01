export default function Statistics() {
  const stats = [
    { value: "5000+", label: "Happy Patients" },
    { value: "1000+", label: "Dental Implants" },
    { value: "3000+", label: "Root Canal Treatments" },
    { value: "10+", label: "Years of Excellence" },
  ];

  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center px-4">
              <div className="text-4xl md:text-5xl font-display font-bold mb-2">{stat.value}</div>
              <div className="text-primary-container-on font-medium text-sm md:text-base uppercase tracking-widest text-[#a1bbff]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
