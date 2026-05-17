import { Plane, Hotel, Map, Globe, ShieldCheck, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    icon: Plane,
    title: 'Flight Bookings',
    desc: 'Seamless international and domestic flight arrangements at competitive tariffs.',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    icon: Hotel,
    title: 'Hotel Reservations',
    desc: 'Handpicked luxury stays and cozy budget-friendly accommodations tailored for you.',
    color: 'bg-orange-50 text-orange-600'
  },
  {
    icon: Map,
    title: 'Tour Packages',
    desc: 'Bespoke international tour packages with personalized attention to detail.',
    color: 'bg-green-50 text-green-600'
  },
  {
    icon: Globe,
    title: 'Visa Assistance',
    desc: 'Expert guidance for quick and hassle-free visa processing for all countries.',
    color: 'bg-purple-50 text-purple-600'
  }
];

const trusts = [
  { icon: ShieldCheck, title: 'Safe Travels', desc: 'Secure booking & full insurance' },
  { icon: HeartHandshake, title: 'Personalized', desc: 'Crafted just for you' },
  { icon: Globe, title: 'Global Reach', desc: 'Packages across 7 continents' }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sunset-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 inline-block">
              Elevating Every Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-canvas-blue mb-6 leading-tight">
              Our Premiere <br />
              Core Services.
            </h2>
            <p className="text-slate-600 text-lg mb-10 font-light leading-relaxed max-w-lg">
              At Port Canvas Trips, we believe every trip is a blank canvas. 
              Our suite of services ensures your masterpiece is painted with 
              precision, luxury, and care.
            </p>
            
            <div className="flex flex-wrap gap-8">
              {trusts.map((t) => (
                <div key={t.title} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-canvas-blue">
                    <t.icon className="w-5 h-5 text-sunset-gold" />
                    <span className="font-bold text-sm tracking-tight">{t.title}</span>
                  </div>
                  <span className="text-xs text-slate-400">{t.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-[2rem] border border-slate-100 hover:border-sunset-gold/20 hover:shadow-2xl hover:shadow-slate-200/50 transition-all group bg-white"
              >
                <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-display font-bold text-canvas-blue mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
