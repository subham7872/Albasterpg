
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  startingPrice: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  stars: number;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  projectType: string;
  description: string;
  timestamp: string;
}
