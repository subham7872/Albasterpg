
import React from 'react';
import { 
  Home, 
  Hammer, 
  Paintbrush, 
  Droplet, 
  Wrench, 
  Zap, 
  Trees, 
  Settings,
  ShieldCheck,
  Clock,
  DollarSign,
  Heart
} from 'lucide-react';
import { Service, Testimonial, Project } from './types';

export const PHONE_NUMBER = "(205) 555-0123";
export const EMAIL = "hello@alabasterhandyman.com";
export const ADDRESS = "123 Main St, Alabaster, AL 35007";

export const SERVICES: Service[] = [
  {
    id: 'home-repairs',
    title: 'General Home Repairs',
    description: 'From fixing squeaky doors to patching holes, we handle the small stuff that matters.',
    icon: 'Hammer',
    startingPrice: '$75'
  },
  {
    id: 'remodels',
    title: 'Remodels & Upgrades',
    description: 'Kitchen backsplashes, bathroom refreshes, and modernizing your living spaces.',
    icon: 'Home',
    startingPrice: '$500'
  },
  {
    id: 'roof-floor',
    title: 'Roof & Floor Repair',
    description: 'Leak detection, shingle replacement, and expert flooring installation or repair.',
    icon: 'ShieldCheck',
    startingPrice: '$150'
  },
  {
    id: 'painting',
    title: 'Painting & Drywall',
    description: 'Flawless finishes for your walls. Interior, exterior, and detailed trim work.',
    icon: 'Paintbrush',
    startingPrice: '$200'
  },
  {
    id: 'fixture-install',
    title: 'Fixture & Installation',
    description: 'Ceiling fans, lighting, faucets, and smart home hardware installations.',
    icon: 'Zap',
    startingPrice: '$95'
  },
  {
    id: 'outdoor',
    title: 'Outdoor Repairs',
    description: 'Deck staining, fence repair, and exterior maintenance for your Alabama home.',
    icon: 'Trees',
    startingPrice: '$120'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah M.',
    text: "Alabaster's Handyman saved my weekend! They fixed my leaky faucet and replaced a ceiling fan in under two hours. Professional and kind.",
    stars: 5
  },
  {
    id: '2',
    name: 'James T.',
    text: "Honest pricing and quality work. It's hard to find someone you trust with your house keys, but these guys are the real deal.",
    stars: 5
  },
  {
    id: '3',
    name: 'Linda R.',
    text: "They did an amazing job on our kitchen remodel. The attention to detail was exactly what we were looking for in a local service.",
    stars: 5
  }
];

export const PORTFOLIO: Project[] = [
  { id: 'p1', title: 'Modern Kitchen Backsplash', category: 'Remodel', image: 'https://picsum.photos/id/10/800/600' },
  { id: 'p2', title: 'Hardwood Floor Restoration', category: 'Flooring', image: 'https://picsum.photos/id/20/800/600' },
  { id: 'p3', title: 'Custom Deck Stain', category: 'Outdoor', image: 'https://picsum.photos/id/42/800/600' },
  { id: 'p4', title: 'Smart Lighting Setup', category: 'Installation', image: 'https://picsum.photos/id/54/800/600' },
];

export const TRUST_BADGES = [
  { icon: Clock, label: 'On Time', sub: 'Reliable arrival' },
  { icon: Heart, label: 'Home-First', sub: 'We treat it like ours' },
  { icon: ShieldCheck, label: 'Quality Work', sub: 'Built to last' },
  { icon: DollarSign, label: 'Fair Pricing', sub: 'No hidden fees' },
];

export const getIcon = (name: string) => {
  switch (name) {
    case 'Hammer': return <Hammer className="w-6 h-6" />;
    case 'Home': return <Home className="w-6 h-6" />;
    case 'Paintbrush': return <Paintbrush className="w-6 h-6" />;
    case 'Droplet': return <Droplet className="w-6 h-6" />;
    case 'Wrench': return <Wrench className="w-6 h-6" />;
    case 'Zap': return <Zap className="w-6 h-6" />;
    case 'Trees': return <Trees className="w-6 h-6" />;
    case 'Settings': return <Settings className="w-6 h-6" />;
    case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
    default: return <Hammer className="w-6 h-6" />;
  }
};
