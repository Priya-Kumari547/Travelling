import { Compass, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import logo from '../assets/images/logo.jpg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-shrink-0">
                <img src={logo} alt="Port Canvas Trips Logo" className="w-12 h-12 object-contain rounded-lg" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-display font-bold text-canvas-blue">
                  Port Canvas
                </span>
                <span className="text-[10px] tracking-widest uppercase font-medium text-sunset-gold">
                  Trips
                </span>
              </div>
            </div>
            <p className="text-slate-500 text-sm font-light leading-relaxed mb-8">
              Expert travel architects specializing in creating bespoke international 
              tour packages from India. We believe every journey is a masterpiece 
              waiting to be painted.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-slate-600">
                <Phone className="w-4 h-4 text-sunset-gold" />
                <span className="text-sm">+91 96439 56105</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <Mail className="w-4 h-4 text-sunset-gold" />
                <span className="text-sm">portcanvastrips@gmail.com</span>
              </div>
              <div className="flex items-start gap-3 text-slate-600">
                <MapPin className="w-4 h-4 text-sunset-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">510B, 1B, Street 6, Govind Puri, New Delhi - 110019</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-canvas-blue mb-6 uppercase tracking-widest text-xs">Explore</h4>
            <ul className="space-y-4">
              {['Domestic Packages', 'International Tours', 'Weekend Getaways', 'Honeymoon Specials', 'Adventure Trips'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-500 text-sm hover:text-sunset-gold transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-px bg-sunset-gold transition-all"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-canvas-blue mb-6 uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Contact Services', 'Privacy Policy', 'Terms & Conditions', 'Travel Blog'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-500 text-sm hover:text-sunset-gold transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-px bg-sunset-gold transition-all"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-canvas-blue mb-6 uppercase tracking-widest text-xs">Newsletter</h4>
            <p className="text-slate-400 text-xs mb-4">Get the latest travel deals and inspiration directly in your inbox.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-sunset-gold/20"
              />
              <button className="bg-canvas-blue text-white p-2.5 rounded-xl hover:bg-canvas-blue/90 transition-all">
                <Compass className="w-5 h-5" />
              </button>
            </div>
            
            <div className="mt-8 flex items-center gap-2 text-[10px] text-slate-400 uppercase font-bold tracking-widest">
              <ExternalLink className="w-3 h-3 text-sunset-gold" />
              www.pctrips.in
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-xs">
            © {currentYear} Port Canvas Trips. All rights reserved. 
            <span className="ml-4 font-bold text-canvas-blue/20">SEO: customized holiday trips</span>
          </p>
          <div className="flex items-center gap-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4 grayscale opacity-50" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 grayscale opacity-50" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6 grayscale opacity-50" />
          </div>
        </div>
      </div>
    </footer>
  );
}
