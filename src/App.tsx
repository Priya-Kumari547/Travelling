/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Destinations from './components/Destinations';
import Packages from './components/Packages';
import SmartItinerary from './components/SmartItinerary';
import Testimonials from './components/Testimonials';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';

/**
 * Port Canvas Trips - Official Website
 * Domain: www.pctrips.in
 * Focus: Premium curated travel experiences.
 */

export default function App() {
  useEffect(() => {
    // Basic SEO inject (simplified for demo)
    document.title = "Port Canvas Trips | Best International Tour Packages from India";
    const meta = document.createElement('meta');
    meta.name = "description";
    meta.content = "Port Canvas Trips offers customized holiday trips, luxury escapes, and expert visa assistance. Painting memories on every canvas.";
    document.head.appendChild(meta);

    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      {/* Structural Components */}
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Core Services Section */}
        <div id="about">
          <Services />
        </div>
        
        {/* Destination Gallery */}
        <Destinations />
        
        {/* Trip Planning/Itinerary */}
        <SmartItinerary />
        
        {/* Package Explorer with Filters */}
        <Packages />
        
        {/* Trust Signals */}
        <Testimonials />
        
        {/* Contact & Lead Gen */}
        <InquiryForm />
      </main>

      {/* Persistence/Footer */}
      <Footer />
      
      {/* Bottom Floating Action (Optional Mobile CTA) */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <button className="bg-sunset-gold text-white p-4 rounded-full shadow-2xl shadow-sunset-gold/40 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </button>
      </div>
    </div>
  );
}

