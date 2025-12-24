
import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle, Upload } from 'lucide-react';

export const LeadForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    projectType: 'General Repair',
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log('Lead Captured:', formData);
    setSubmitted(true);
    // Mock lead storage
    const leads = JSON.parse(localStorage.getItem('handyman_leads') || '[]');
    leads.push({ ...formData, id: Date.now().toString(), timestamp: new Date().toISOString() });
    localStorage.setItem('handyman_leads', JSON.stringify(leads));
  };

  if (submitted) {
    return (
      <div className="text-center py-12 px-6 bg-white rounded-2xl shadow-xl border border-brand-cream animate-in fade-in zoom-in duration-500">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Quote Request Received!</h3>
        <p className="text-slate-600 mb-6">Thanks, {formData.name.split(' ')[0]}! We'll review your project and get back to you within 24 hours.</p>
        <button 
          onClick={() => { setSubmitted(false); setStep(1); }}
          className="bg-brand-navy text-white px-6 py-2 rounded-full font-semibold hover:bg-brand-brick transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-brand-cream overflow-hidden">
      <div className="bg-brand-navy p-6 text-white">
        <h3 className="text-xl font-bold">Get a Free Estimate</h3>
        <p className="text-blue-100 text-sm">Tell us about your project and we'll be in touch.</p>
        
        <div className="flex mt-6 gap-2">
          {[1, 2, 3].map(i => (
            <div key={i} className={`h-1 flex-1 rounded-full transition-colors ${i <= step ? 'bg-brand-brick' : 'bg-brand-navy/30'}`} />
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-8">
        {step === 1 && (
          <div className="space-y-4 animate-in slide-in-from-right duration-300">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
              <input 
                required
                type="text" 
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-navy focus:border-transparent outline-none"
                placeholder="John Doe"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
              <input 
                required
                type="email" 
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-navy focus:border-transparent outline-none"
                placeholder="john@example.com"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
              <input 
                required
                type="tel" 
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-navy focus:border-transparent outline-none"
                placeholder="(205) 555-0123"
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <button 
              type="button" 
              onClick={nextStep}
              className="w-full bg-brand-navy text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-brand-brick transition-colors"
            >
              Next Step <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4 animate-in slide-in-from-right duration-300">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Service Address</label>
              <input 
                required
                type="text" 
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-navy focus:border-transparent outline-none"
                placeholder="123 Alabama Ave, Alabaster"
                value={formData.address}
                onChange={e => setFormData({...formData, address: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Project Category</label>
              <select 
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-navy focus:border-transparent outline-none"
                value={formData.projectType}
                onChange={e => setFormData({...formData, projectType: e.target.value})}
              >
                <option>General Repair</option>
                <option>Remodel</option>
                <option>Painting</option>
                <option>Plumbing/Electrical</option>
                <option>Exterior/Outdoor</option>
              </select>
            </div>
            <div className="flex gap-4 pt-4">
              <button 
                type="button" 
                onClick={prevStep}
                className="flex-1 border border-slate-200 text-slate-600 py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" /> Back
              </button>
              <button 
                type="button" 
                onClick={nextStep}
                className="flex-1 bg-brand-navy text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-brand-brick transition-colors"
              >
                Next <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4 animate-in slide-in-from-right duration-300">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Describe the Issue</label>
              <textarea 
                required
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-navy focus:border-transparent outline-none h-32"
                placeholder="What needs fixing or building?"
                value={formData.description}
                onChange={e => setFormData({...formData, description: e.target.value})}
              />
            </div>
            <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center">
              <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <p className="text-xs text-slate-500">Upload photos of the project (Optional)</p>
              <input type="file" className="hidden" />
              <button type="button" className="mt-2 text-sm text-brand-navy font-bold hover:underline">Select Files</button>
            </div>
            <div className="flex gap-4 pt-4">
              <button 
                type="button" 
                onClick={prevStep}
                className="flex-1 border border-slate-200 text-slate-600 py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" /> Back
              </button>
              <button 
                type="submit" 
                className="flex-1 bg-green-600 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-green-700 transition-colors shadow-lg"
              >
                Get Quote
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};
