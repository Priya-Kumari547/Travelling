import { testimonials } from '../data/packages';
import { Quote, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          <div className="lg:col-span-1">
            <span className="text-sunset-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 inline-block">
              Wall of Love
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-canvas-blue mb-8 leading-tight">
              Real Stories From <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-canvas-blue to-sunset-gold">
                Our Explorers.
              </span>
            </h2>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i} 
                    src={`https://i.pravatar.cc/100?u=${i}`} 
                    className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                    alt="User"
                  />
                ))}
              </div>
              <div className="text-sm font-medium text-slate-500">
                Join <span className="text-canvas-blue font-bold">2,500+</span> happy travelers
              </div>
            </div>
            
            <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 italic font-serif text-lg text-slate-600 relative">
               <Quote className="absolute -top-4 -left-4 w-10 h-10 text-sunset-gold opacity-20" />
               "We dont just sell tickets, we paint memories on the canvas of your life."
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((t, idx) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className={`p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 flex flex-col justify-between ${
                    idx === 1 ? 'md:translate-y-12' : ''
                  }`}
                >
                  <div>
                    <div className="flex gap-1 mb-6">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-4 h-4 text-sunset-gold fill-sunset-gold" />
                      ))}
                    </div>
                    <p className="text-slate-600 text-lg font-light leading-relaxed mb-8 italic">
                      "{t.content}"
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h4 className="font-display font-bold text-canvas-blue text-sm uppercase tracking-wider">{t.name}</h4>
                      <p className="text-xs text-sunset-gold font-medium uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
