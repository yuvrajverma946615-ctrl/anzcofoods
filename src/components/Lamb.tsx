import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';

interface LambProps {
  setCurrentPage: (page: string) => void;
}

export function Lamb({ setCurrentPage }: LambProps) {
  return (
    <div className="bg-brand-bg min-h-screen pb-24">
      {/* Page Header */}
      <section className="relative py-24 bg-brand-green border-b border-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/brands/anzco-lamb.webp"
            alt="ANZCO Foods New Zealand Lamb"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover mix-blend-overlay opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-12 text-center text-brand-bg">
          <button 
            onClick={() => setCurrentPage('products')}
            className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/70 hover:text-white transition-colors mb-6 flex items-center justify-center gap-2 mx-auto"
          >
            <ChevronRight size={14} className="rotate-180" /> Back to Brands
          </button>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-light italic mb-8"
          >
            Our Lamb Brands
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-brand-bg/80 leading-relaxed text-sm max-w-2xl mx-auto"
          >
            New Zealand lamb is globally renowned for its delicate flavour and tenderness. Pasture-raised in a natural environment, our lamb products deliver exceptional quality to customers worldwide.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-brand-charcoal font-light italic mb-8">
              Naturally raised for exceptional taste
            </h2>
            <div className="space-y-6 text-brand-gray text-sm leading-relaxed mb-8">
              <p>
                Our farmers take pride in raising lambs on extensive, lush pastures. This natural, free-range approach allows the animals to roam freely, resulting in lamb that is lean, finely textured, and packed with essential nutrients.
              </p>
              <p>
                We uphold the highest standards of animal welfare and traceability, ensuring that every cut we export is safe, pure, and of the highest quality. Our brands, including ANZCO Foods Lamb and Maimoa Lamb, represent the best of New Zealand.
              </p>
            </div>
            
            <ul className="space-y-4 mb-10">
              {[
                "100% grass-fed on New Zealand pastures",
                "Raised without the use of hormone growth promotants (HGPs)",
                "Fully traceable from farm to plate",
                "Halal processing options available"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-brand-charcoal">
                  <CheckCircle2 size={18} className="text-brand-green shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="bg-brand-green text-white px-8 py-4 text-[10px] uppercase tracking-widest font-bold hover:bg-brand-green-dark transition-colors inline-flex items-center gap-2">
              Contact Sales <ArrowRight size={14} />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="/brands/maimoa-lamb.webp" 
              alt="Raw lamb rack" 
              className="w-full h-64 object-cover"
              referrerPolicy="no-referrer"
            />
            <img 
              src="/brands/anzco-lamb.webp" 
              alt="Cooked lamb dish" 
              className="w-full h-64 object-cover mt-8"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="py-24 bg-brand-panel border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-12">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-display text-4xl text-brand-green font-light italic mb-6">Our Lamb Brands</h2>
            <p className="text-brand-gray text-sm">
              Explore our premium New Zealand lamb offerings.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border border-brand-border flex flex-col items-center text-center hover:border-brand-green/50 transition-colors">
              <img src="/brands/anzco-lamb.webp" alt="ANZCO Foods Lamb" className="h-32 object-contain mb-6" />
              <h3 className="font-display text-2xl text-brand-charcoal mb-3">ANZCO Foods Lamb</h3>
              <p className="text-brand-gray text-xs leading-relaxed">The finest New Zealand lamb, known for its delicate flavour, tenderness, and exceptional nutritional qualities.</p>
            </div>
            <div className="bg-white p-8 border border-brand-border flex flex-col items-center text-center hover:border-brand-green/50 transition-colors">
              <img src="/brands/maimoa-lamb.webp" alt="Maimoa Lamb" className="h-32 object-contain mb-6" />
              <h3 className="font-display text-2xl text-brand-charcoal mb-3">Maimoa Lamb</h3>
              <p className="text-brand-gray text-xs leading-relaxed">Maimoa means to cherish and care for. Our lamb is raised by farmers who share our respect for the land and animals.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
