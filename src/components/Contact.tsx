import { motion } from 'motion/react';
import { Users, Globe, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import React from 'react';

export function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div className="bg-brand-bg min-h-screen pb-24">
      {/* Page Header */}
      <section className="py-24 bg-brand-green border-b border-brand-green-dark">
        <div className="max-w-4xl mx-auto px-12 text-center text-brand-bg">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-light italic mb-8"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-brand-bg/80 leading-relaxed text-lg max-w-2xl mx-auto font-light"
          >
            ANZCO Foods are premium New Zealand beef and lamb exporters.
            <br />
            Like more information or have a specific request?
            <br />
            Whatever your needs, talk them through with us.
          </motion.p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 -mt-12">
        <div className="max-w-7xl mx-auto px-12 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Users size={32} className="text-brand-green mb-6" />,
              title: "Livestock Reps",
              desc: "If you're a farmer and want to speak directly to our livestock reps.",
              action: "Meet our reps"
            },
            {
              icon: <Globe size={32} className="text-brand-green mb-6" />,
              title: "International Offices",
              desc: "If you're wanting to get in touch directly with one of our international offices you'll find them here.",
              action: "Contact our International Offices"
            },
            {
              icon: <MapPin size={32} className="text-brand-green mb-6" />,
              title: "New Zealand Sites & Offices",
              desc: "Get in touch with one of our New Zealand sites or offices.",
              action: "Contact our NZ sites and offices"
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 border border-brand-border text-center flex flex-col items-center hover:border-brand-green/50 transition-colors shadow-sm">
              {item.icon}
              <h3 className="font-display text-xl text-brand-charcoal mb-4">{item.title}</h3>
              <p className="text-brand-gray text-sm mb-8 flex-grow">{item.desc}</p>
              <button className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal border border-brand-charcoal px-6 py-3 hover:bg-brand-charcoal hover:text-white transition-colors w-full">
                {item.action}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-12">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl text-brand-charcoal font-light italic">Get in touch</h2>
          </div>

          <div className="bg-white p-8 md:p-12 border border-brand-border shadow-sm">
            {formState === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <CheckCircle2 size={64} className="text-brand-green mx-auto mb-6" />
                <h3 className="font-display text-2xl text-brand-charcoal mb-4">Message Sent Successfully</h3>
                <p className="text-brand-gray text-sm mb-8">
                  Thank you for reaching out to ANZCO Foods. We have received your enquiry and a member of our team will be in touch with you shortly.
                </p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="bg-brand-green text-white px-8 py-4 text-[10px] uppercase tracking-widest font-bold hover:bg-brand-green-dark transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-brand-gray mb-2">This is about... *</label>
                  <select required className="w-full border border-brand-border px-4 py-3 text-sm focus:outline-none focus:border-brand-green bg-white text-brand-charcoal">
                    <option value="">[please select one]</option>
                    <option value="Sales">Sales</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Careers">Careers</option>
                    <option value="Media">Media</option>
                    <option value="Sponsorship">Sponsorship</option>
                    <option value="Holiday Pay">Holiday Pay</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-brand-gray mb-2">First Name *</label>
                    <input type="text" required className="w-full border border-brand-border px-4 py-3 text-sm focus:outline-none focus:border-brand-green" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-brand-gray mb-2">Last Name</label>
                    <input type="text" className="w-full border border-brand-border px-4 py-3 text-sm focus:outline-none focus:border-brand-green" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-brand-gray mb-2">Email Address *</label>
                  <input type="email" required className="w-full border border-brand-border px-4 py-3 text-sm focus:outline-none focus:border-brand-green" />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-brand-gray mb-2">Contact Phone Number</label>
                  <input type="tel" className="w-full border border-brand-border px-4 py-3 text-sm focus:outline-none focus:border-brand-green" />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-brand-gray mb-2">Country</label>
                  <select className="w-full border border-brand-border px-4 py-3 text-sm focus:outline-none focus:border-brand-green bg-white text-brand-charcoal">
                    <option value=""></option>
                    <option value="nz">New Zealand</option>
                    <option value="au">Australia</option>
                    <option value="us">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="jp">Japan</option>
                    <option value="cn">China</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-brand-gray mb-2">Enquiry *</label>
                  <textarea required rows={5} className="w-full border border-brand-border px-4 py-3 text-sm focus:outline-none focus:border-brand-green resize-none"></textarea>
                </div>

                <div className="pt-4 border-t border-brand-border">
                  <p className="text-[10px] text-brand-gray leading-relaxed mb-6">
                    ANZCO Foods Privacy Policy: ANZCO Foods Limited and its subsidiaries comply with the laws and regulations in all countries in which it operates and undertake to maintain appropriate measures to safeguard the personal information the company collects and holds about individuals. By submitting your information in this form, you are giving ANZCO permission to retain your data for the purposes of contacting you.
                  </p>
                  <button 
                    type="submit" 
                    disabled={formState === 'submitting'}
                    className="w-full bg-brand-green text-white px-8 py-4 text-[10px] uppercase tracking-widest font-bold hover:bg-brand-green-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {formState === 'submitting' ? 'Submitting...' : 'Submit'} <Send size={14} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
