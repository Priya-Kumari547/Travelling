import { TravelPackage, Testimonial } from '../types';

export const travelPackages: TravelPackage[] = [
  {
    id: '1',
    title: 'Mystical Backwaters of Kerala',
    destination: 'Kerala, India',
    price: 45000,
    duration: '5 Days / 4 Nights',
    category: 'Relaxation',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800',
    description: 'Experience the serene houseboats and lush greenery of God\'s Own Country.'
  },
  {
    id: '2',
    title: 'High Altitudes of Ladakh',
    destination: 'Ladakh, India',
    price: 55000,
    duration: '7 Days / 6 Nights',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1544085311-11a028465b03?auto=format&fit=crop&q=80&w=800',
    description: 'A thrilling journey through the mountain passes and crystal clear lakes.'
  },
  {
    id: '3',
    title: 'Bali Luxury Escape',
    destination: 'Bali, Indonesia',
    price: 85000,
    duration: '6 Days / 5 Nights',
    category: 'Relaxation',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800',
    description: 'Unwind in private villas and explore the spiritual heart of Bali.'
  },
  {
    id: '4',
    title: 'Swiss Alps Expedition',
    destination: 'Switzerland',
    price: 155000,
    duration: '8 Days / 7 Nights',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&q=80&w=800',
    description: 'Panoramic train rides and snow-capped peaks await you.'
  },
  {
    id: '5',
    title: 'Singapore Family Fun',
    destination: 'Singapore',
    price: 75000,
    duration: '5 Days / 4 Nights',
    category: 'Family',
    image: 'https://images.unsplash.com/photo-1525625232240-550d24abc19c?auto=format&fit=crop&q=80&w=800',
    description: 'Universal Studios, Sentosa Island, and world-class shopping.'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Anjali Sharma',
    role: 'Frequent Traveler',
    content: 'Port Canvas Trips curated the most impeccable Kerala itinerary. The attention to detail was exceptional.',
    avatar: 'https://i.pravatar.cc/150?u=anjali'
  },
  {
    id: '2',
    name: 'Rahul Verma',
    role: 'Adventure Enthusiast',
    content: 'The Ladakh trip was life-changing. Everything from permits to guides was perfectly handled.',
    avatar: 'https://i.pravatar.cc/150?u=rahul'
  },
  {
    id: '3',
    name: 'Sarah Thompson',
    role: 'Luxury Seeker',
    content: 'Best international tour packages from India! Their Bali luxury escape was exactly what I needed.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  }
];
