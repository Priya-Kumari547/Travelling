import { Search, MapPin, Calendar, Wallet } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background Video Holder (Capability) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=2000" 
          alt="Travel Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-canvas-blue/80 via-canvas-blue/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-sunset-gold/20 backdrop-blur-sm border border-sunset-gold/30 text-sunset-gold text-sm font-semibold mb-6">
              Voted #1 Travel Agency 2026
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
              Painting Memories <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunset-gold to-orange-400">
                On Every Canvas.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl font-light leading-relaxed">
              Explore the world with Port Canvas Trips. From luxury escapes to 
              customized holiday trips, we curate experiences that last a lifetime.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-2 md:p-3 rounded-2xl md:rounded-[2rem] flex flex-col md:flex-row items-center gap-2 max-w-4xl"
          >
            <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="px-4 py-3 flex items-center gap-3">
                <MapPin className="text-sunset-gold w-5 h-5 flex-shrink-0" />
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase font-bold text-white/50 tracking-wider">Destination</label>
                  <input 
                    type="text" 
                    placeholder="Where to?" 
                    className="bg-transparent text-white placeholder-white/40 border-none focus:ring-0 text-sm font-medium w-full p-0"
                  />
                </div>
              </div>
              <div className="px-4 py-3 flex items-center gap-3">
                <Calendar className="text-sunset-gold w-5 h-5 flex-shrink-0" />
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase font-bold text-white/50 tracking-wider">Dates</label>
                  <input 
                    type="text" 
                    placeholder="dd/mm/yyyy" 
                    className="bg-transparent text-white placeholder-white/40 border-none focus:ring-0 text-sm font-medium w-full p-0"
                  />
                </div>
              </div>
              <div className="px-4 py-3 flex items-center gap-3">
                <Wallet className="text-sunset-gold w-5 h-5 flex-shrink-0" />
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase font-bold text-white/50 tracking-wider">Budget</label>
                  <select className="bg-transparent text-white border-none focus:ring-0 text-sm font-medium w-full p-0 appearance-none cursor-pointer">
                    <option className="text-black">Budget Seekers</option>
                    <option className="text-black">Standard</option>
                    <option className="text-black">Luxury Mode</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="w-full md:w-auto bg-sunset-gold hover:bg-sunset-gold/90 text-white p-4 md:p-5 rounded-xl md:rounded-[1.5rem] transition-all flex items-center justify-center gap-2 font-bold shadow-xl shadow-sunset-gold/20">
              <Search className="w-5 h-5" />
              <span className="md:hidden lg:inline">Find Packages</span>
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase font-bold text-white/40 tracking-[0.2em]">Explore</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-0.5 h-12 bg-gradient-to-b from-sunset-gold to-transparent"
        />
      </div>
    </section>
  );
}
