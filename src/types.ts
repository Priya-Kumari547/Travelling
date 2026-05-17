export interface TravelPackage {
  id: string;
  title: string;
  destination: string;
  price: number;
  duration: string;
  category: 'Adventure' | 'Relaxation' | 'Family';
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
