import { useState, useMemo } from 'react';
import { travelPackages } from '../data/packages';
import { Filter, SortAsc, MapPin, Clock, Tag, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Packages() {
  const [filter, setFilter] = useState<'All' | 'Adventure' | 'Relaxation' | 'Family'>('All');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPackages = useMemo(() => {
    let result = [...travelPackages];
    
    if (filter !== 'All') {
      result = result.filter(p => p.category === filter);
    }
    
    if (searchQuery) {
      result = result.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.destination.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    result.sort((a, b) => {
      return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    });
    
    return result;
  }, [filter, sortOrder, searchQuery]);

  return (
    <section id="packages" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sunset-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 inline-block">
            Curated Experiences
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-canvas-blue mb-6">
            Trending Holiday <span className="text-sunset-gold italic">Packages.</span>
          </h2>
          <p className="text-slate-500 font-light max-w-2xl mx-auto">
            Discover our handpicked international and domestic tour packages designed 
            for the modern traveler.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {['All', 'Adventure', 'Relaxation', 'Family'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-6 py-2 rounded-full text-sm font-semibold border transition-all ${
                  filter === cat 
                  ? 'bg-canvas-blue text-white border-canvas-blue shadow-lg shadow-canvas-blue/20' 
                  : 'bg-white text-slate-600 border-slate-200 hover:border-sunset-gold ring-0'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 w-full lg:w-auto">
            <div className="relative flex-1 lg:w-64">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search destinations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sunset-gold/20 focus:border-sunset-gold transition-all text-sm"
                />
            </div>
            <button 
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="p-3 bg-white border border-slate-200 rounded-xl hover:border-sunset-gold transition-all flex items-center gap-2 text-slate-600 text-sm font-semibold"
            >
              <SortAsc className={`w-4 h-4 transition-transform ${sortOrder === 'desc' ? 'rotate-180' : ''}`} />
              {sortOrder === 'asc' ? 'Low to High' : 'High to Low'}
            </button>
          </div>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredPackages.map((pkg) => (
              <motion.div
                layout
                key={pkg.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-white text-[10px] font-bold uppercase tracking-widest backdrop-blur-md border-white/20">
                    {pkg.category}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-1.5 text-sunset-gold mb-3">
                    <MapPin className="w-3 h-3" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">{pkg.destination}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-canvas-blue mb-4 leading-tight group-hover:text-sunset-gold transition-colors">
                    {pkg.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-light leading-relaxed mb-6 line-clamp-2">
                    {pkg.description}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Starts from</span>
                        <div className="text-2xl font-display font-bold text-canvas-blue">
                          ₹{pkg.price.toLocaleString('en-IN')}
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
                      <Clock className="w-3.5 h-3.5 text-sunset-gold" />
                      {pkg.duration.split(' ')[0]} {pkg.duration.split(' ')[1]}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredPackages.length === 0 && (
          <div className="text-center py-20 bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200">
             <Filter className="w-12 h-12 text-slate-300 mx-auto mb-4" />
             <h3 className="text-lg font-display font-bold text-slate-600">No matching packages found</h3>
             <p className="text-slate-400 text-sm">Try adjusting your filters or search query.</p>
          </div>
        )}
      </div>
    </section>
  );
}
