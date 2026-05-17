import { Calendar, ChevronRight, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

const days = [
  {
    day: 1,
    title: 'Arrival & Welcome',
    desc: 'Pick up from Cochin International Airport, transfer to luxury houseboat, sunset tea on backwaters.',
    location: 'Fort Kochi'
  },
  {
    day: 2,
    title: 'Munnar Tea Gardens',
    desc: 'Drive to Munnar, visit Mattupetty Dam, tea museum tour, and local spice shopping.',
    location: 'Munnar'
  },
  {
    day: 3,
    title: 'Wildlife & Adventure',
    desc: 'Morning safari at Eravikulam National Park, elephant interaction, and traditional Kathakali performance.',
    location: 'Thekkady'
  },
  {
    day: 4,
    title: 'Coastal Serenity',
    desc: 'Transfer to Marari beach, holistic ayurvedic massage session, and beach dinner under stars.',
    location: 'Alappuzha'
  },
  {
    day: 5,
    title: 'Cultural Heritage',
    desc: 'Jewish Synagogue visit, Dutch Palace tour, and departure with memories.',
    location: 'Kochi'
  }
];

export default function SmartItinerary() {
  return (
    <section className="py-24 bg-canvas-blue overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-sunset-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sunset-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 inline-block">
            Smart Planner
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Sample 5-Day <span className="text-sunset-gold italic">Kerala Canvas.</span>
          </h2>
          <p className="text-white/60 font-light max-w-2xl mx-auto">
            Experience the perfect blend of leisure and discovery with our AI-optimized 
            travel flows, designed for modern explorers.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden sm:block"></div>

          <div className="space-y-12">
            {days.map((item, idx) => (
              <motion.div
                key={item.day}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`flex flex-col sm:flex-row items-center gap-8 ${
                  idx % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 w-full ${idx % 2 === 0 ? 'sm:text-right' : 'sm:text-left'}`}>
                  <div className={`p-8 glass rounded-[2rem] border-white/5 hover:border-sunset-gold/20 transition-all group`}>
                    <div className="flex items-center gap-3 mb-4 sm:hidden">
                       <span className="text-sunset-gold font-bold">DAY 0{item.day}</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-sunset-gold transition-colors">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-4">
                      {item.desc}
                    </p>
                    <div className={`flex items-center gap-2 text-xs font-semibold text-white/40 tracking-wider uppercase ${
                      idx % 2 === 0 ? 'sm:justify-end' : 'sm:justify-start'
                    }`}>
                      <MapPin className="w-3 h-3 text-sunset-gold" />
                      {item.location}
                    </div>
                  </div>
                </div>

                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-canvas-blue flex items-center justify-center text-canvas-blue font-display font-black text-xl shadow-xl shadow-black/20 group-hover:scale-110 transition-transform">
                    {item.day}
                  </div>
                </div>

                <div className="flex-1 hidden sm:block italic text-white/10 font-display text-4xl select-none">
                   Day {item.day} Highlight
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
            <button className="bg-white text-canvas-blue hover:bg-sunset-gold hover:text-white px-10 py-4 rounded-full font-bold transition-all shadow-xl shadow-black/20 flex items-center gap-3 mx-auto">
                <Calendar className="w-5 h-5" />
                Customize This Itinerary
                <ChevronRight className="w-4 h-4" />
            </button>
        </div>
      </div>
    </section>
  );
}
