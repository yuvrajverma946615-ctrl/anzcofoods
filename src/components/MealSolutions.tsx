import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';

interface MealSolutionsProps {
  setCurrentPage: (page: string) => void;
}

export function MealSolutions({ setCurrentPage }: MealSolutionsProps) {
  return (
    <div className="bg-brand-bg min-h-screen pb-24">
      {/* Page Header */}
      <section className="relative py-24 bg-brand-green border-b border-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1920&auto=format&fit=crop"
            alt="ANZCO Foods Meal Solutions"
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
            Meal Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-brand-bg/80 leading-relaxed text-sm max-w-2xl mx-auto"
          >
            Convenient, delicious, and high-quality meal solutions made from premium New Zealand beef and lamb. Perfect for food service and retail customers globally.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-brand-charcoal font-light italic mb-8">
              Quality you can taste, convenience you need
            </h2>
            <div className="space-y-6 text-brand-gray text-sm leading-relaxed mb-8">
              <p>
                Our meal solutions offer the perfect balance of convenience and exceptional taste. We take our premium New Zealand beef and lamb and transform them into delicious, ready-to-cook or heat-and-eat products.
              </p>
              <p>
                Whether it's our famous Angel Bay burger patties or our value-added product range, we ensure consistent quality, flavour, and safety in every bite.
              </p>
            </div>
            
            <ul className="space-y-4 mb-10">
              {[
                "Made from premium New Zealand beef and lamb",
                "Consistent quality and portion control",
                "Convenient preparation for food service and retail",
                "Strict food safety and quality standards"
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
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop" 
              alt="Burger" 
              className="w-full h-64 object-cover"
              referrerPolicy="no-referrer"
            />
            <img 
              src="https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=800&auto=format&fit=crop" 
              alt="Meatballs" 
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
            <h2 className="font-display text-4xl text-brand-green font-light italic mb-6">Our Meal Solution Brands</h2>
            <p className="text-brand-gray text-sm">
              Discover our range of value-added products and convenient meal solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border border-brand-border flex flex-col items-center text-center hover:border-brand-green/50 transition-colors">
              <img src="/brands/angel-bay.webp" alt="Angel Bay" className="h-32 object-contain mb-6" />
              <h3 className="font-display text-2xl text-brand-charcoal mb-3">Angel Bay</h3>
              <p className="text-brand-gray text-xs leading-relaxed">Delicious, homestyle beef and lamb burger patties, meatballs, and bites. Perfect for food service and retail.</p>
            </div>
            <div className="bg-white p-8 border border-brand-border flex flex-col items-center text-center hover:border-brand-green/50 transition-colors">
              <img src="/brands/burger-patties.webp" alt="ANZCO Foods Burger Patties" className="h-32 object-contain mb-6" />
              <h3 className="font-display text-2xl text-brand-charcoal mb-3">ANZCO Foods Burger Patties</h3>
              <p className="text-brand-gray text-xs leading-relaxed">Premium 100% beef burger patties delivering authentic flavour and juicy texture for a superior burger experience.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
