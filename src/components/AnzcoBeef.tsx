import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';

interface AnzcoBeefProps {
  setCurrentPage: (page: string) => void;
}

export function AnzcoBeef({ setCurrentPage }: AnzcoBeefProps) {
  return (
    <div className="bg-brand-bg min-h-screen pb-24">
      {/* Page Header */}
      <section className="relative py-24 bg-brand-green border-b border-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/brands/anzco-beef.webp"
            alt="ANZCO Foods New Zealand Beef"
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
            ANZCO Foods New Zealand Beef
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-brand-bg/80 leading-relaxed text-sm max-w-2xl mx-auto"
          >
            New Zealand beef is famous around the world for its taste, texture and nutritional quality. Our lush green pastures, temperate climate and strong farming heritage ensures that when you pick ANZCO Foods New Zealand Beef, you're picking the best.
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
                Our farmers take pride in raising cattle on extensive, lush pastures. This natural, free-range approach allows the animals to roam freely, resulting in beef that is leaner, finely textured, and packed with essential nutrients.
              </p>
              <p>
                Grass-fed beef is known for its distinct flavour profile, richer in omega-3 fatty acids and vitamins compared to grain-fed alternatives. We uphold the highest standards of animal welfare and traceability, ensuring that every cut we export is safe, pure, and of the highest quality.
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
              src="/brands/newzeland-beef.jpg"
              alt="Raw beef steak"
              className="w-full h-64 object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="py-24 bg-brand-panel border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-12">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-display text-4xl text-brand-green font-light italic mb-6">Our Product Range</h2>
            <p className="text-brand-gray text-sm">
              We offer a comprehensive range of cuts to suit all culinary applications, from premium dining to everyday family meals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Tenderloin", desc: "The most tender cut of beef, perfect for premium steaks and roasting." },
              { name: "Ribeye", desc: "Rich and flavourful with excellent marbling, ideal for grilling or pan-frying." },
              { name: "Striploin", desc: "A classic cut known for its balance of tenderness and robust beef flavour." },
              { name: "Rump", desc: "A versatile, full-flavoured cut suitable for roasting, grilling, or stir-frying." },
              { name: "Brisket", desc: "Perfect for slow cooking, smoking, or braising to achieve melt-in-the-mouth texture." },
              { name: "Minced Beef", desc: "High-quality, versatile mince ideal for a wide variety of everyday dishes." }
            ].map((product, i) => (
              <div key={i} className="bg-white p-8 border border-brand-border hover:border-brand-green/50 transition-colors">
                <h3 className="font-display text-2xl text-brand-charcoal mb-3">{product.name}</h3>
                <p className="text-brand-gray text-xs leading-relaxed">{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
