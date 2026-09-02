import { motion } from 'motion/react';
import { Leaf, ShieldCheck, HeartHandshake, FileText, ExternalLink, Download } from 'lucide-react';

export function Sustainability() {
  const commitments = [
    {
      title: 'Our approach',
      description: "New Zealand's natural setting is ideal for raising top-quality beef and lamb, allowing animals to roam freely. Our commitment to their well-being is evident through careful treatment, ensuring happy, healthy lives.",
      icon: Leaf,
    },
    {
      title: 'Our committee',
      description: "ANZCO's Animal Welfare Committee ensures the highest level of care in our operations by overseeing policies, developing strategies, and regularly reviewing requirements.",
      icon: ShieldCheck,
    },
    {
      title: 'Our partnerships',
      description: "We collaborate with stakeholders across our supply chain, including farmers, transport operators, and regulatory bodies like the Ministry for Primary Industries, Beef + Lamb NZ, Dairy NZ, the New Zealand Meat Industry Association, and AgriZeroNZ.",
      icon: HeartHandshake,
    },
  ];

  const reports = ['2021 Report', '2022 Report', '2023 Report', '2024 Report', '2025 Report'];

  return (
    <div className="bg-brand-bg min-h-screen">
      {/* Page Header */}
      <section className="relative py-24 bg-brand-green border-b border-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1920&auto=format&fit=crop"
            alt="Sustainability and nature"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover mix-blend-overlay opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-12 text-center text-brand-bg">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-light italic mb-8"
          >
            Our commitments
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-brand-bg/80 leading-relaxed text-sm max-w-2xl mx-auto"
          >
            We aspire to be the preferred choice for our people, farmers, and customers, driven by our unwavering commitments to sustainability and welfare. Choose to partner with ANZCO Foods as we lead the way in fostering a business ethos that cherishes both the present and the future.
          </motion.p>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid md:grid-cols-3 gap-12">
            {commitments.map((item, idx) => (
              <div key={idx} className="bg-brand-panel border border-brand-border p-8 hover:bg-[#E8E4D9] transition-colors group">
                <div className="w-12 h-12 border border-brand-green bg-brand-bg text-brand-green flex items-center justify-center mb-8">
                  <item.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl text-brand-charcoal mb-4">{item.title}</h3>
                <p className="text-brand-gray text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elevating Sustainability */}
      <section className="py-24 bg-[#E8E4D9]">
        <div className="max-w-7xl mx-auto px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl text-brand-green font-light italic mb-6">
              Elevating sustainability beyond business
            </h2>
            <p className="text-brand-gray text-sm leading-relaxed mb-6">
              Our sustainability journey is about a way of working that meets current business needs without compromising the needs of future generations. At ANZCO Foods, we recognise the crucial role of safeguarding New Zealand's pristine environment. As dedicated members of the Climate Leaders Coalition and Sustainable Business Council, we actively contribute to the sustainable business landscape.
            </p>
            <p className="text-brand-gray text-sm leading-relaxed mb-8">
              ANZCO Foods is proud to be a founding investor in AgriZeroNZ – a pioneering public-private partnership between the New Zealand government and leading agribusinesses like ours. Together, we’re committed to empowering farmers to lower emissions without sacrificing productivity or profitability. AgriZeroNZ has set ambitious goals: a 30% reduction in biogenic methane and nitrous oxide emissions by 2030, progressing toward a ‘near-zero’ New Zealand by 2040.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-brand-green hover:text-brand-green-dark border-b border-brand-green pb-1 transition-colors">
              Learn more about AgriZeroNZ <ExternalLink size={14} />
            </a>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-brand-green/10 translate-x-4 -translate-y-4"></div>
             <img 
                src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=800&auto=format&fit=crop"
                alt="New Zealand Environment"
                referrerPolicy="no-referrer"
                className="relative z-10 w-full h-auto object-cover aspect-square shadow-lg"
              />
          </div>
        </div>
      </section>

      {/* Blockquote / Journey */}
      <section className="py-24 bg-brand-panel border-y border-brand-border text-center">
        <div className="max-w-3xl mx-auto px-12">
          <h3 className="font-display text-3xl md:text-4xl text-brand-green font-light italic leading-tight mb-8">
            "Our sustainability journey goes beyond meeting current business needs —it's a commitment to a way of working that safeguards the needs of future generations."
          </h3>
          <div className="h-1 w-12 bg-brand-green mx-auto opacity-40"></div>
        </div>
      </section>

      {/* Reports Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-12 text-center">
          <FileText size={32} className="text-brand-green mx-auto mb-6" strokeWidth={1} />
          <h2 className="font-display text-4xl text-brand-charcoal font-light italic mb-6">Climate Change & Sustainability Report</h2>
          <p className="text-brand-gray text-sm leading-relaxed mb-10 max-w-2xl mx-auto">
            ANZCO Foods is very early on in its sustainability journey. Our Climate Change and Sustainability Reports provide a picture of where we currently are. These reports not only serve as a benchmark but also empower us to establish measurable targets, aligning with our sustainability objectives.
          </p>
          
          <div className="bg-[#E8E4D9] p-8 inline-block text-left mb-12 border border-brand-border">
            <p className="text-[10px] uppercase tracking-widest font-bold text-brand-green mb-4">Download PDF:</p>
            <div className="flex flex-wrap gap-4 justify-center">
              {reports.map((report, idx) => (
                <a key={idx} href="#" className="text-xs font-semibold text-brand-charcoal hover:text-brand-green transition-colors underline underline-offset-4 decoration-brand-border hover:decoration-brand-green">
                  {report}
                </a>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-brand-border/50 text-center">
               <a href="https://issuu.com/anzco_foods/docs/anzco_foods_climate_change_and_sustainability_repo?fr=sMDkzNTgzNDU5MDU" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-brand-green text-brand-green px-8 py-3 text-[10px] uppercase tracking-widest font-bold hover:bg-brand-green hover:text-white transition-colors cursor-pointer bg-white">
                 <Download size={16} /> Interactive 2025 Report
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* Welfare & Safety */}
      <section className="py-24 bg-brand-green text-brand-bg">
        <div className="max-w-7xl mx-auto px-12">
           <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="font-display text-4xl font-light italic mb-6">Championing animal well-being</h2>
                <p className="text-brand-bg/80 text-sm leading-relaxed mb-6">
                  New Zealand's natural setting is ideal for raising the finest beef and lamb, allowing animals to roam freely. Our commitment to their well-being is evident through careful treatment, ensuring happy, healthy lives.
                </p>
                <p className="text-brand-bg/80 text-sm leading-relaxed mb-6">
                  At ANZCO Foods, we prioritise stringent adherence to national requirements for all our beef and lamb. Collaborating closely with the industry, we actively encourage our farmers to meet the criteria of the New Zealand Farm Assurance Programme. This comprehensive program focuses on integrity, traceability, biosecurity, sustainability, and animal welfare, ensuring a holistic approach to quality.
                </p>
                <blockquote className="border-l-2 border-brand-bg/30 pl-6 italic font-display text-white mt-8">
                  Our commitment isn't just about our identity; it's about our meticulous process. We are with you every step of the way, dedicating ourselves to crafting New Zealand's finest beef and lamb into products that our customers love and trust.
                </blockquote>
              </div>
              <div>
                 <h2 className="font-display text-4xl font-light italic mb-6">Workplace safety</h2>
                 <p className="text-brand-bg/80 text-sm leading-relaxed mb-6">
                    Being safe at work is an obligation we all have to each other, our families and ourselves.
                 </p>
                 <p className="text-brand-bg/80 text-sm leading-relaxed">
                    We are committed to providing a healthy and safe workplace environment with a strong health and safety culture. Our goal is to have everyone go home safely every day.
                 </p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
