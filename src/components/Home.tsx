import { motion } from 'motion/react';
import { ArrowRight, Globe, TrendingUp, Users, Leaf, CheckCircle2 } from 'lucide-react';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

export function Home({ setCurrentPage }: HomeProps) {
  return (
    <div className="bg-brand-bg min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-brand-charcoal">
          <iframe
            src="https://player.vimeo.com/video/652204701?muted=1&autoplay=1&loop=1&background=1&app_id=122963"
            allow="autoplay; fullscreen; picture-in-picture"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] opacity-80"
            title="ANZCO Foods Background Video"
          />
          <div className="absolute inset-0 bg-brand-charcoal/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-white"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-7xl font-light italic mb-8 leading-tight drop-shadow-lg"
            >
              Bringing New Zealand's finest to the world.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl font-light drop-shadow-md"
            >
              We procure, process and market New Zealand's finest beef and lamb to the world, creating nutrition and health solutions that enhance lives.
            </motion.p>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onClick={() => setCurrentPage('products')}
              className="inline-flex items-center gap-4 bg-brand-green text-white px-8 py-4 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-brand-green-dark transition-colors group shadow-xl"
            >
              Explore Our Products
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-brand-charcoal text-white py-16 border-b-4 border-brand-green">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-white/10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="text-4xl md:text-5xl font-display text-brand-green mb-2">$1.7B</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/70 font-bold">Annual Sales</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="text-4xl md:text-5xl font-display text-brand-green mb-2">3,000+</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/70 font-bold">Employees Worldwide</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="text-4xl md:text-5xl font-display text-brand-green mb-2">80+</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/70 font-bold">Export Countries</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <div className="text-4xl md:text-5xl font-display text-brand-green mb-2">100%</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/70 font-bold">New Zealand Raised</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 border-b border-brand-border bg-white">
        <div className="max-w-7xl mx-auto px-12 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-brand-green font-light italic mb-8 leading-tight">
              A commitment to excellence, from pasture to plate.
            </h2>
            <div className="space-y-6 text-brand-gray text-sm leading-relaxed">
              <p>
                ANZCO Foods is one of New Zealand's largest exporters, with sales of $1.7 billion and 3,000 employees worldwide. A multinational company, we are dedicated to bringing the finest New Zealand beef and lamb to the world.
              </p>
              <p>
                Our commitment starts on the farm and carries through to our state-of-the-art processing facilities, ensuring that every product meets the highest standards of food safety, quality, and animal welfare.
              </p>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-auto md:h-[600px]">
            <div className="absolute inset-0 bg-brand-green/10 translate-x-6 translate-y-6"></div>
            <img 
              src="https://plus.unsplash.com/premium_photo-1668616816953-a02cd1a44027?q=80&w=800&auto=format&fit=crop"
              alt="Quality Beef"
              referrerPolicy="no-referrer"
              className="relative z-10 w-full h-full object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Global Reach / Core Values */}
      <section className="py-24 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-brand-charcoal font-light italic mb-6">Our Guiding Principles</h2>
            <p className="text-brand-gray text-sm leading-relaxed">
              We are driven by a singular purpose: to deliver nutrition and health solutions that enhance the lives of our customers around the globe, while remaining steadfast in our commitment to sustainable practices.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-8 bg-brand-bg text-center group hover:bg-brand-charcoal hover:text-white transition-colors duration-300">
              <Globe className="mx-auto text-brand-green mb-6 group-hover:text-white transition-colors" size={32} />
              <h3 className="font-display text-xl mb-3">Global Reach</h3>
              <p className="text-brand-gray text-xs leading-relaxed group-hover:text-white/80 transition-colors">Delivering New Zealand's finest produce to over 80 countries worldwide.</p>
            </div>
            <div className="p-8 bg-brand-bg text-center group hover:bg-brand-charcoal hover:text-white transition-colors duration-300">
              <Leaf className="mx-auto text-brand-green mb-6 group-hover:text-white transition-colors" size={32} />
              <h3 className="font-display text-xl mb-3">Sustainable Future</h3>
              <p className="text-brand-gray text-xs leading-relaxed group-hover:text-white/80 transition-colors">Dedicated to environmental stewardship and reducing our carbon footprint.</p>
            </div>
            <div className="p-8 bg-brand-bg text-center group hover:bg-brand-charcoal hover:text-white transition-colors duration-300">
              <TrendingUp className="mx-auto text-brand-green mb-6 group-hover:text-white transition-colors" size={32} />
              <h3 className="font-display text-xl mb-3">Innovation</h3>
              <p className="text-brand-gray text-xs leading-relaxed group-hover:text-white/80 transition-colors">Investing in healthcare and nutrition solutions to maximize product value.</p>
            </div>
            <div className="p-8 bg-brand-bg text-center group hover:bg-brand-charcoal hover:text-white transition-colors duration-300">
              <Users className="mx-auto text-brand-green mb-6 group-hover:text-white transition-colors" size={32} />
              <h3 className="font-display text-xl mb-3">Our People</h3>
              <p className="text-brand-gray text-xs leading-relaxed group-hover:text-white/80 transition-colors">Fostering a culture of safety, respect, and diversity across our workforce.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Areas */}
      <section className="py-32 bg-brand-panel">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group cursor-pointer" onClick={() => setCurrentPage('products')}>
              <div className="aspect-[4/3] overflow-hidden mb-8 relative">
                <div className="absolute inset-0 bg-brand-charcoal/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                <img 
                  src="https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=500&auto=format&fit=crop&q=60"
                  alt="Premium Brands"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="font-display text-3xl text-brand-green font-light italic mb-4">Premium Brands</h3>
              <p className="text-brand-gray text-sm leading-relaxed mb-6">
                Discover our portfolio of world-class beef and lamb brands, including Ocean Beef, Greenstone Creek, and Maimoa.
              </p>
              <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-charcoal group-hover:text-brand-green transition-colors">
                View Brands <ArrowRight size={14} />
              </span>
            </div>

            <div className="group cursor-pointer" onClick={() => setCurrentPage('sustainability')}>
              <div className="aspect-[4/3] overflow-hidden mb-8 relative">
                <div className="absolute inset-0 bg-brand-charcoal/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                <img 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1920&auto=format&fit=crop"
                  alt="Sustainability"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="font-display text-3xl text-brand-green font-light italic mb-4">Sustainability</h3>
              <p className="text-brand-gray text-sm leading-relaxed mb-6">
                We are committed to preserving our environment for future generations through sustainable farming and processing practices.
              </p>
              <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-charcoal group-hover:text-brand-green transition-colors">
                Our Commitment <ArrowRight size={14} />
              </span>
            </div>

            <div className="group cursor-pointer" onClick={() => setCurrentPage('careers')}>
              <div className="aspect-[4/3] overflow-hidden mb-8 relative">
                <div className="absolute inset-0 bg-brand-charcoal/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                <img 
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1920&auto=format&fit=crop"
                  alt="Careers"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="font-display text-3xl text-brand-green font-light italic mb-4">Join Our Team</h3>
              <p className="text-brand-gray text-sm leading-relaxed mb-6">
                Looking for career diversity and opportunities for advancement? Explore our current vacancies and join the ANZCO family.
              </p>
              <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-charcoal group-hover:text-brand-green transition-colors mt-auto pt-4">
                Working at ANZCO <ArrowRight size={14} />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Beef Gallery */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-brand-charcoal font-light italic mb-6">Premium New Zealand Beef</h2>
            <p className="text-brand-gray text-sm leading-relaxed">
              Explore the exceptional quality and beautiful marbling of our pasture-raised beef, crafted for the ultimate culinary experience.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1690983323238-0b91789e1b5a?q=80&w=854&auto=format&fit=crop"
                alt="Grass fed beef"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=500&auto=format&fit=crop&q=60"
                alt="Ocean Beef"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="overflow-hidden col-span-2 md:col-span-1">
              <img 
                src="https://plus.unsplash.com/premium_photo-1723672929404-36ba6ed8ab50?w=500&auto=format&fit=crop&q=60"
                alt="ANZCO Beef"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
