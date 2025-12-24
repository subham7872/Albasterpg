
import React, { useEffect, useState } from 'react';
import { 
  Phone, 
  Menu, 
  X, 
  Check, 
  ArrowRight, 
  Instagram, 
  Facebook, 
  Mail,
  MapPin,
  Star,
  Quote,
  // Fix missing icon imports
  Clock,
  Zap
} from 'lucide-react';
import { 
  PHONE_NUMBER, 
  SERVICES, 
  TESTIMONIALS, 
  PORTFOLIO, 
  TRUST_BADGES, 
  getIcon 
} from './constants';
import { LeadForm } from './components/LeadForm';
import { AIAssistant } from './components/AIAssistant';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Sticky Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="bg-brand-navy p-2 rounded-lg">
              <Check className="text-white w-6 h-6 stroke-[3px]" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold tracking-tighter leading-none ${isScrolled ? 'text-brand-navy' : 'text-slate-900'}`}>
                ALABASTER'S
              </span>
              <span className={`text-xs font-bold tracking-[0.2em] text-brand-brick leading-none`}>
                HANDYMAN
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-slate-700">
            {['About', 'Services', 'Projects', 'Pricing', 'FAQ'].map(item => (
              <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="hover:text-brand-brick transition-colors">
                {item}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`} className="flex items-center gap-2 text-brand-navy font-bold hover:text-brand-brick">
              <Phone size={18} />
              {PHONE_NUMBER}
            </a>
            <button 
              onClick={() => scrollTo('contact-section')}
              className="bg-brand-navy text-white px-6 py-2.5 rounded-full font-bold hover:bg-brand-brick transition-all shadow-lg hover:shadow-xl"
            >
              Get a Quote
            </button>
          </div>

          <button className="md:hidden text-slate-900" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={32} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white p-8 animate-in slide-in-from-right duration-300">
          <div className="flex justify-between items-center mb-12">
            <span className="font-bold text-2xl tracking-tighter">ALABASTER'S</span>
            <button onClick={() => setIsMobileMenuOpen(false)}><X size={32} /></button>
          </div>
          <div className="flex flex-col gap-8 text-2xl font-bold">
            {['About', 'Services', 'Projects', 'Pricing', 'FAQ'].map(item => (
              <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="text-left border-b border-slate-100 pb-4">
                {item}
              </button>
            ))}
            <a href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`} className="text-brand-brick flex items-center gap-2 pt-4">
              <Phone /> {PHONE_NUMBER}
            </a>
            <button 
              onClick={() => scrollTo('contact-section')}
              className="bg-brand-navy text-white py-4 rounded-xl text-center"
            >
              Free Quote
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-40 overflow-hidden bg-brand-cream">
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <img 
            src="https://picsum.photos/id/445/1200/1600" 
            alt="Handyman at work" 
            className="w-full h-full object-cover"
            style={{ clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
          />
          <div className="absolute inset-0 bg-brand-navy/10" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="lg:max-w-xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-12 h-px bg-brand-brick"></span>
              <span className="text-brand-brick font-bold uppercase tracking-widest text-sm">Alabaster, Alabama's Finest</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold font-serif leading-[1.1] mb-8 text-slate-900">
              Trusted Home Repair <br className="hidden sm:block" />
              <span className="italic text-brand-navy font-normal">& Services</span> — Built on Heart.
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              We treat every home like our own. From small fixes to complete room updates, we bring Southern hospitality and expert craftsmanship to every job.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollTo('contact-section')}
                className="bg-brand-navy text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-brick transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl"
              >
                Get a Free Quote <ArrowRight />
              </button>
              <a 
                href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`}
                className="bg-white text-brand-navy px-10 py-5 rounded-full font-bold text-lg border-2 border-brand-navy/10 hover:border-brand-navy transition-all flex items-center justify-center gap-2"
              >
                <Phone /> {PHONE_NUMBER}
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://picsum.photos/id/${i+50}/100/100`} className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Happy client" />
                ))}
              </div>
              <p className="text-sm font-medium text-slate-600">
                <span className="text-brand-navy font-bold">500+ Happy Locals</span> in Alabaster
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-12 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {TRUST_BADGES.map((badge, idx) => (
            <div key={idx} className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-brand-cream flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-all">
                <badge.icon size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 leading-none mb-1">{badge.label}</h4>
                <p className="text-xs text-slate-500 uppercase tracking-wider">{badge.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-brand-warm">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/id/342/800/1000" className="w-full h-full object-cover" alt="Founder" />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl max-w-xs border border-brand-cream hidden sm:block">
              <Quote className="text-brand-brick mb-4" />
              <p className="text-slate-700 italic mb-4">"We don't just fix houses, we serve neighbors. That's the Alabaster way."</p>
              <div className="font-bold">- Mike, Founder</div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold font-serif mb-6 text-brand-navy">Hometown Service, <br />Hometown Heart.</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Founded by Mike Alabaster (yes, the name is a coincidence!), we started with a simple toolbox and a desire to help our neighbors. We grew into a team because we realized folks were tired of corporate contractors who show up late and charge hidden fees.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our mission is simple: treat every home with the respect it deserves. We're your local partners in keeping your home safe, functional, and beautiful.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                "Licensed & Insured",
                "Community Rooted",
                "100% On-Time Record",
                "Expert Craftsmanship"
              ].map(item => (
                <div key={item} className="flex items-center gap-3 font-bold text-slate-800">
                  <div className="bg-green-100 p-1 rounded-full"><Check size={14} className="text-green-600" /></div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AIAssistant />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-bold font-serif text-brand-navy mb-4">Quality Work, Guaranteed</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            No job is too big or too small. We specialize in the tasks that keep your home running smoothly.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map(service => (
            <div key={service.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-brand-cream text-brand-brick flex items-center justify-center mb-6">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">{service.description}</p>
              <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Starting At</span>
                  <span className="text-xl font-bold text-brand-navy">{service.startingPrice}</span>
                </div>
                <button 
                  onClick={() => scrollTo('contact-section')}
                  className="bg-brand-navy/5 text-brand-navy px-4 py-2 rounded-lg font-bold text-sm hover:bg-brand-navy hover:text-white transition-all"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Gallery */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl font-bold font-serif text-brand-navy mb-4">Our Craftsmanship</h2>
            <p className="text-slate-600 text-lg">Real projects for real neighbors in Alabaster.</p>
          </div>
          <button className="text-brand-navy font-bold border-b-2 border-brand-navy hover:text-brand-brick hover:border-brand-brick transition-all">View Full Portfolio</button>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO.map(project => (
            <div key={project.id} className="group relative rounded-2xl overflow-hidden aspect-square cursor-pointer">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                <span className="text-brand-brick font-bold text-xs uppercase tracking-widest mb-1">{project.category}</span>
                <h4 className="text-white font-bold">{project.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-brand-navy text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold font-serif mb-6">Clear, Honest Pricing</h2>
              <p className="text-blue-100 text-lg mb-10 leading-relaxed">
                We don't play games with your budget. We provide transparent estimates upfront so you can make informed decisions about your home repairs.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="bg-brand-brick p-3 rounded-xl h-fit">
                    <Clock className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Hourly Service</h4>
                    <p className="text-blue-200 text-sm mb-3">Best for "To-Do List" visits with multiple small tasks.</p>
                    <span className="text-2xl font-bold">$85 <span className="text-sm font-normal text-blue-300">/ hour (2hr min)</span></span>
                  </div>
                </div>

                <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="bg-green-600 p-3 rounded-xl h-fit">
                    <Zap className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Flat-Rate Projects</h4>
                    <p className="text-blue-200 text-sm mb-3">Best for specific tasks like installation or remodeling.</p>
                    <span className="text-2xl font-bold">Custom Quotes</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-10 text-slate-900 shadow-2xl">
              <div className="inline-block px-3 py-1 bg-brand-brick/10 text-brand-brick rounded-full text-xs font-bold tracking-widest uppercase mb-6">Limited Time Offer</div>
              <h3 className="text-2xl font-bold mb-4 font-serif">Spring Refresh Promo</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Book a 4-hour "Half-Day Refresh" and get <span className="font-bold text-brand-navy">15% OFF</span> labor plus a free inspection of your HVAC filters and smoke detectors.
              </p>
              <ul className="space-y-4 mb-10">
                {['Free Estimates', 'No Travel Fees within Alabaster', 'Senior & Veteran Discounts', 'Satisfaction Guaranteed'].map(item => (
                  <li key={item} className="flex items-center gap-3 font-medium">
                    <div className="bg-brand-navy p-1 rounded-full"><Check size={12} className="text-white" /></div>
                    {item}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => scrollTo('contact-section')}
                className="w-full bg-brand-navy text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-brick transition-all shadow-lg"
              >
                Claim This Offer
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-brand-warm">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif text-brand-navy mb-4">Your Questions, Answered</h2>
            <p className="text-slate-600 text-lg">Everything you need to know about working with us.</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "How do quotes work?", a: "Most small jobs can be quoted over the phone or via text with photos. For larger projects, we'll visit your home for a detailed inspection and provide a written estimate." },
              { q: "Are you insured?", a: "Yes, we are fully licensed and carry comprehensive general liability insurance for your peace of mind." },
              { q: "What is your coverage area?", a: "We primarily serve Alabaster, Pelham, Helena, and Saginaw. If you're slightly further out, give us a call—we might still be able to help!" },
              { q: "Do you offer a warranty?", a: "Absolutely. We stand by our craftsmanship with a 1-year warranty on all labor. If something isn't right, we'll fix it." }
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm">
                <summary className="p-6 flex items-center justify-between cursor-pointer font-bold text-slate-900 list-none">
                  {faq.q}
                  <span className="transition-transform group-open:rotate-180"><ChevronRight /></span>
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-24 bg-brand-cream border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-bold font-serif text-brand-navy mb-6">Let's Get Started</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Ready to cross those items off your to-do list? Fill out our form or call us directly. We're ready to help.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-brand-navy text-white flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Call or Text</h4>
                  <p className="text-slate-600">Mon - Fri, 8am - 6pm</p>
                  <a href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`} className="text-xl font-bold text-brand-brick hover:underline">{PHONE_NUMBER}</a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-brand-navy text-white flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Service Area</h4>
                  <p className="text-slate-600">Based in Alabaster, serving Shelby County</p>
                </div>
              </div>

              <div className="pt-8 flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-navy hover:border-brand-navy transition-all">
                  <Facebook />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-navy hover:border-brand-navy transition-all">
                  <Instagram />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-navy hover:border-brand-navy transition-all">
                  <Mail />
                </a>
              </div>
            </div>
          </div>

          <div>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pb-16 border-b border-white/10">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-brand-brick p-2 rounded-lg">
                  <Check className="text-white w-6 h-6 stroke-[3px]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tighter leading-none">ALABASTER'S</span>
                  <span className="text-xs font-bold tracking-[0.2em] text-brand-brick leading-none uppercase">Handyman</span>
                </div>
              </div>
              <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
                Your reliable, local choice for high-quality home repairs. Built on heart and expert craftsmanship in Alabaster, AL.
              </p>
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-sm uppercase tracking-widest text-slate-500 mb-2">Subscribe to our newsletter</h4>
                <div className="flex gap-2">
                  <input type="email" placeholder="Your email" className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg flex-1 outline-none focus:bg-white/10" />
                  <button className="bg-brand-brick px-4 py-2 rounded-lg font-bold hover:bg-white hover:text-slate-900 transition-all">Join</button>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-slate-500 uppercase tracking-widest text-sm">Quick Links</h4>
              <ul className="space-y-4 text-slate-400">
                {['About Us', 'Our Services', 'Recent Work', 'Pricing Guide', 'FAQs', 'Contact'].map(item => (
                  <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-slate-500 uppercase tracking-widest text-sm">Services</h4>
              <ul className="space-y-4 text-slate-400">
                {SERVICES.slice(0, 5).map(service => (
                  <li key={service.id}><a href="#" className="hover:text-white transition-colors">{service.title}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Alabaster's Handyman Service. All Rights Reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button (Mobile) */}
      <div className="md:hidden fixed bottom-6 right-6 z-40">
        <a 
          href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`}
          className="w-16 h-16 bg-brand-brick text-white rounded-full flex items-center justify-center shadow-2xl animate-bounce"
        >
          <Phone size={28} />
        </a>
      </div>
    </div>
  );
};

const ChevronRight: React.FC<{className?: string}> = ({className}) => (
  <svg className={`w-5 h-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export default App;
