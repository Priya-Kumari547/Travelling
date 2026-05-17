import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
import { motion } from 'motion/react';

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-sunset-gold/5 blur-[100px] rounded-full"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-white rounded-[3rem] shadow-2xl shadow-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Contact Info */}
            <div className="bg-canvas-blue p-12 md:p-16 text-white relative h-full flex flex-col justify-between">
              <div className="z-10">
                <span className="text-sunset-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 inline-block">
                  Let's Connect
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                  Your Journey Starts <br />
                  With a Single Step.
                </h2>
                <p className="text-white/60 font-light mb-12 max-w-sm">
                  Ready to paint your memories? Get in touch with our travel 
                  architects and let us design your perfect getaway.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-sunset-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm tracking-wide mb-1">Our Studio</h4>
                      <p className="text-white/40 text-sm font-light">510B, 1B, Street 6, Govind Puri, Kalkaji, New Delhi - 110019</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-sunset-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm tracking-wide mb-1">Email Us</h4>
                      <p className="text-white/40 text-sm font-light">portcanvastrips@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-sunset-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm tracking-wide mb-1">Call Booking</h4>
                      <p className="text-white/40 text-sm font-light">+91 96439 56105</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex items-center gap-6 z-10">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sunset-gold transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sunset-gold transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sunset-gold transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>

              {/* Decorative circle */}
              <div className="absolute top-1/2 left-0 -translate-x-1/2 w-64 h-64 border border-white/5 rounded-full pointer-events-none"></div>
            </div>

            {/* Form */}
            <div className="p-12 md:p-16">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest pl-1">Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Your Full Name"
                      className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sunset-gold/20 focus:border-sunset-gold transition-all text-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest pl-1">Contact Number</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sunset-gold/20 focus:border-sunset-gold transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest pl-1">Email Id</label>
                    <input 
                      required
                      type="email" 
                      placeholder="email@example.com"
                      className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sunset-gold/20 focus:border-sunset-gold transition-all text-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest pl-1">Destination</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Where do you want to go?"
                      className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sunset-gold/20 focus:border-sunset-gold transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest pl-1">Travel Date</label>
                    <input 
                      required
                      type="date" 
                      className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sunset-gold/20 focus:border-sunset-gold transition-all text-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest pl-1">No. of Nights</label>
                    <input 
                      required
                      type="number" 
                      min="1"
                      placeholder="e.g. 5"
                      className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sunset-gold/20 focus:border-sunset-gold transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest pl-1">No. of Adults</label>
                    <input 
                      required
                      type="number" 
                      min="1"
                      placeholder="e.g. 2"
                      className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sunset-gold/20 focus:border-sunset-gold transition-all text-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest pl-1 text-wrap">No. of Childrens <span className="text-[8px] opacity-70">{"{Age Limit 01 to 12 yr.}"}</span></label>
                    <input 
                      type="number" 
                      min="0"
                      placeholder="e.g. 1"
                      className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sunset-gold/20 focus:border-sunset-gold transition-all text-sm"
                    />
                  </div>
                </div>

                <button 
                  disabled={submitted}
                  className={`w-full py-5 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 shadow-xl ${
                    submitted 
                    ? 'bg-green-500 text-white shadow-green-500/20' 
                    : 'bg-sunset-gold text-white hover:bg-orange-600 shadow-sunset-gold/20'
                  }`}
                >
                  {submitted ? (
                    <>
                      <ShieldCheck className="w-5 h-5" />
                      Inquiry Sent to portcanvastrips@gmail.com
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send My Inquiry
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShieldCheck(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    );
}
