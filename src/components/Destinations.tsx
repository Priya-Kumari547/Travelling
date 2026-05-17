import { ArrowRight, Star, Clock } from 'lucide-react';
import { motion } from 'motion/react';

const featured = [
  {
    name: 'Kerala',
    tag: 'Peaceful',
    img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=1200',
    gridClass: 'md:col-span-2 md:row-span-2',
    rating: 4.9,
    time: '5 Days'
  },
  {
    name: 'Ladakh',
    tag: 'Adventure',
    img: 'https://images.unsplash.com/photo-1544085311-11a028465b03?auto=format&fit=crop&q=80&w=800',
    gridClass: 'md:col-span-1 md:row-span-1',
    rating: 4.8,
    time: '7 Days'
  },
  {
    name: 'Bali',
    tag: 'Exotic',
    img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800',
    gridClass: 'md:col-span-1 md:row-span-1',
    rating: 5.0,
    time: '6 Days'
  }
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-sunset-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 inline-block">
              Top Picks 2026
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-canvas-blue leading-tight shadow-slate-200">
              Explore Our Featured <br />
              Top Destinations.
            </h2>
          </div>
          <button className="flex items-center gap-2 group text-canvas-blue font-bold text-sm tracking-wide">
            View All Destinations
            <div className="w-10 h-10 rounded-full border border-canvas-blue/20 flex items-center justify-center group-hover:bg-canvas-blue group-hover:text-white transition-all">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 min-h-[600px]">
          {featured.map((dest, idx) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`relative overflow-hidden rounded-[2.5rem] group cursor-pointer ${dest.gridClass}`}
            >
              <img 
                src={dest.img} 
                alt={dest.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-canvas-blue/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              
              <div className="absolute top-6 left-6">
                <span className="glass px-4 py-1.5 rounded-full text-white text-xs font-bold tracking-widest uppercase border-white/30 backdrop-blur-md">
                  {dest.tag}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-3xl font-display font-bold text-white mb-2">{dest.name}</h3>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5 text-white/90 text-sm">
                        <Clock className="w-4 h-4 text-sunset-gold" />
                        {dest.time}
                      </div>
                      <div className="flex items-center gap-1.5 text-white/90 text-sm">
                        <Star className="w-4 h-4 text-sunset-gold fill-sunset-gold" />
                        {dest.rating}
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowRight className="w-6 h-6 text-canvas-blue" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
