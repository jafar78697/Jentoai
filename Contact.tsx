
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    scope: '',
    industry: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(import.meta.env.VITE_BOOKING_WEBHOOK_URL || 'https://n8n.jentoaiautomation.online/webhook-test/8043e91f-2572-4d66-ab6f-c67af2df978f', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          your_name: formData.name,
          industry_sector: formData.industry,
          work_email: formData.email,
          company: formData.company,
          scope: formData.scope,
          timestamp: new Date().toISOString(),
          source: 'Contact Form'
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Webhook submission failed');
        alert('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending to webhook:', error);
      alert('Network Error: Could not connect to the automation engine. Please check your internet or contact support.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-32 bg-slate-50 min-h-[600px] flex items-center justify-center">
        <div className="text-center animate-in fade-in zoom-in duration-700">
          <div className="w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-green-500/20">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 text-slate-900">Request Sent.</h2>
          <p className="text-slate-500 font-medium max-w-md mx-auto">Our lead architect will contact you regarding your project scope shortly. Confirmation sent to <b>{formData.email}</b>.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-32 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div className="reveal">
          <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Get in Touch</p>
          <h2 className="text-6xl font-black text-slate-900 uppercase leading-[0.9] tracking-tighter mb-8">Initiate Your <br /> <span className="text-blue-600">Transformation.</span></h2>
          <p className="text-xl text-slate-500 font-medium mb-12">Submit your details to start a conversation with our architecture team. We specialize in building autonomous nodes that scale with your vision.</p>

          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-slate-100 text-blue-600 font-black text-lg">@</div>
              <div>
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Direct Email</p>
                <a href="mailto:info@jentoai.com" className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors">info@jentoai.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-100 reveal delay-200">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 font-bold text-sm"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Industry</label>
                <input
                  type="text"
                  required
                  value={formData.industry}
                  onChange={e => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 font-bold text-sm"
                  placeholder="e.g. Real Estate"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Work Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 font-bold text-sm"
                placeholder="name@company.com"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-6 bg-blue-600 text-white rounded-[1.5rem] font-black uppercase tracking-widest text-xs shadow-xl shadow-blue-500/20 active:scale-95 disabled:opacity-50"
            >
              {loading ? 'Submitting...' : 'Start My Consultation'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
