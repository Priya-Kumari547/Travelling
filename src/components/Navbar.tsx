import { useState, useEffect } from 'react';
import { Menu, X, Plane, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../assets/images/logo.jpg';

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'Destinations', href: '#destinations' },
  { name: 'Packages', href: '#packages' },
  { name: 'Services', href: '#services' },
  { name: 'About Us', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <img src={logo} alt="Port Canvas Trips Logo" className="w-12 h-12 object-contain rounded-lg" />
            </div>
            <div className="flex flex-col leading-none">
              <span className={`text-xl font-display font-bold ${scrolled ? 'text-canvas-blue' : 'text-white'}`}>
                Port Canvas
              </span>
              <span className={`text-[10px] tracking-widest uppercase font-medium ${scrolled ? 'text-sunset-gold' : 'text-sunset-gold/80'}`}>
                Trips
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium tracking-wide hover:text-sunset-gold transition-colors duration-200 ${
                  scrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
            <button className="bg-sunset-gold hover:bg-sunset-gold/90 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-sunset-gold/20 flex items-center gap-2">
              <Plane className="w-4 h-4" />
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${
                scrolled ? 'text-canvas-blue' : 'text-white'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-slate-700 hover:text-sunset-gold hover:bg-slate-50 rounded-xl transition-all"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <button className="w-full bg-canvas-blue text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2">
                  <Plane className="w-5 h-5" />
                  Plan Your Trip
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
