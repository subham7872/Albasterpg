
import React, { useState } from 'react';
import { Sparkles, Send, Loader2, Bot } from 'lucide-react';
import { getAIProjectEstimate } from '../services/gemini';

export const AIAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleConsult = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const result = await getAIProjectEstimate(input);
    setResponse(result || null);
    setLoading(false);
  };

  return (
    <div className="bg-brand-navy text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Bot size={120} />
      </div>
      
      <div className="relative z-10 max-w-2xl">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-brand-brick px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">AI Expert Beta</span>
          <Sparkles className="w-5 h-5 text-yellow-400" />
        </div>
        
        <h2 className="text-3xl font-bold mb-4 font-serif">Instant AI Project Consultant</h2>
        <p className="text-blue-100 mb-8 text-lg">
          Not sure what your project needs? Ask our AI assistant for a rough breakdown of labor and materials before you book.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <input 
            type="text" 
            placeholder="e.g., 'How much to install a new kitchen faucet and fix a small leak?'"
            className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 focus:bg-white/20 focus:outline-none transition-all placeholder:text-blue-200"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleConsult()}
          />
          <button 
            disabled={loading}
            onClick={handleConsult}
            className="bg-white text-brand-navy px-8 py-4 rounded-xl font-bold hover:bg-brand-brick hover:text-white transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Send className="w-5 h-5" /> Analyze</>}
          </button>
        </div>

        {response && (
          <div className="mt-8 p-6 bg-white/5 border border-white/10 rounded-2xl animate-in fade-in slide-in-from-top duration-500 prose prose-invert max-w-none">
             <div className="whitespace-pre-wrap text-blue-50 leading-relaxed font-sans">
              {response}
             </div>
             <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
               <p className="text-xs text-blue-300 italic">This is an automated estimate. Final pricing determined after inspection.</p>
               <button 
                 onClick={() => {
                   document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                 }}
                 className="text-sm font-bold underline hover:text-brand-brick"
               >
                 Book Now
               </button>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};
