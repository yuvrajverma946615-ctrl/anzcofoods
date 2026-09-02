import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface ProductsProps {
  setCurrentPage?: (page: string) => void;
}

export function Products({ setCurrentPage }: ProductsProps) {

  // Grass-fed Beef Brands
  const grassFedBrands = [
    {
      name: 'ANZCO Foods New Zealand Beef',
      image: '/brands/newzeland-beef.jpg',
      desc: "New Zealand beef is famous around the world for its taste, texture and nutritional quality. Our lush green pastures, temperate climate and strong farming heritage ensures that when you pick ANZCO Foods New Zealand Beef, you're picking the best.",
      link: 'anzco-beef',
      linkText: 'View our products',
      isInternal: true,
    },
    {
      name: 'Greenstone Creek by ANZCO Foods',
      image: '/brands/newzeland-paties.jpg',
      desc: "We select only the finest cuts of beef to wear the Greenstone Creek name. From lush green pasture to expert hand-selection and delicate aging for 21 days, it’s beef that’s beautifully-marbled, mouth-wateringly tender, and full of rich, natural flavour.",
      link: 'https://greenstonecreek.co.nz/',
      linkText: 'Visit greenstonecreek.co.nz',
      isInternal: false,
    },
    {
      name: 'Stony River Black Angus by ANZCO Foods',
      image: '/brands/newzeland-oceanbeaf.png',
      desc: "Stony River is exceptional grass-fed New Zealand Black Angus, committed to small-scale production to protect its purity and taste. Our goal is to make Stony River Black Angus the mouth-watering centre piece of any meal – the true beef-lovers beef.",
      link: 'https://www.stonyriver.com/',
      linkText: 'Visit stonyriver.com',
      isInternal: false,
    },
  ];

  return (
    <div className="bg-brand-bg min-h-screen">

      {/* ==================== PAGE HEADER ==================== */}
      <section className="relative py-24 bg-brand-green border-b border-brand-green-dark overflow-hidden">

        <div className="absolute inset-0 z-0">
          <img
            src="/brands/ocean-beef.webp"
            alt="Premium meat products"
            className="w-full h-full object-cover mix-blend-overlay opacity-30"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-12 text-center text-brand-bg">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-light italic mb-8"
          >
            Premium New Zealand Beef & Lamb
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-brand-bg/80 leading-relaxed text-sm max-w-2xl mx-auto"
          >
            We pride ourselves on producing the finest beef and lamb with
            exceptional taste, and quality. When you pick ANZCO Foods, you
            pick the best New Zealand has to offer.
          </motion.p>

        </div>
      </section>


      {/* ==================== OUR BEEF AND LAMB BRANDS ==================== */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-12">

          <div className="text-center mb-16">
            <h2 className="font-display text-4xl text-brand-green font-light italic">
              Our Beef and Lamb Brands
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {[
              {
                name: 'ANZCO Foods Beef',
                img: '/brands/newzeland-beef.jpg',
                link: 'anzco-beef',
              },
              {
                name: 'Greenstone Creek',
                img: '/brands/newzeland-paties.jpg',
                link: 'anzco-beef',
              },
              {
                name: 'Stony River Black Angus',
                img: '/brands/newzeland-oceanbeaf.png',
                link: 'anzco-beef',
              },
            ].map((brand, i) => (

              <div
                key={i}
                className="bg-brand-panel flex flex-col group border border-transparent hover:border-brand-border transition-colors pb-6"
              >

                <div className="aspect-square flex items-center justify-center p-8">

                  <img
                    src={brand.img}
                    alt={brand.name}
                    className="w-full h-full object-contain"
                  />

                </div>

                <div className="px-6 flex justify-center mt-auto">

                  <button
                    onClick={() =>
                      setCurrentPage && setCurrentPage(brand.link)
                    }
                    className="inline-flex items-center justify-center border border-brand-charcoal text-brand-charcoal px-6 py-3 text-[10px] uppercase tracking-widest font-bold hover:bg-brand-charcoal hover:text-white transition-colors"
                  >
                    Find out more
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* ==================== GRASS-FED HIGHLIGHT ==================== */}
      <section className="py-24 bg-brand-panel border-y border-brand-border">

        <div className="max-w-7xl mx-auto px-12 grid lg:grid-cols-2 gap-16 items-center">

          <div className="relative h-[400px] lg:h-[500px]">

            <div className="absolute inset-0 bg-brand-green/10 -translate-x-4 translate-y-4"></div>

            <img
              src="/brands/newzeland-grasscow.jpg"
              alt="Grass-fed beef"
              className="relative z-10 w-full h-full object-cover shadow-lg"
            />

          </div>

          <div>

            <h2 className="font-display text-4xl text-brand-green font-light italic mb-6">
              Grass-fed New Zealand beef
            </h2>

            <p className="text-brand-gray text-sm leading-relaxed">
              ANZCO Foods sources the majority of its finest beef from
              grass-fed cattle, benefitting from our country’s extensive
              pastures and favourable climate. Our commitment to excellence
              is reflected in our brands, including ANZCO Foods New Zealand
              Beef, celebrated globally for its exceptional taste, texture,
              and nutritional quality. Explore the exquisite Greenstone Creek
              hand-selected and delicately aged beef, and Stony River Black
              Angus, an exceptional New Zealand Black Angus committed to
              small-scale production for mouth-watering flavour.
            </p>

          </div>

        </div>
      </section>


      {/* ==================== GRASS-FED BRANDS GRID ==================== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-12">

          <div className="text-center mb-16">
            <h2 className="font-display text-4xl text-brand-green font-light italic">
              Our grass-fed beef brands
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {grassFedBrands.map((brand, i) => (
              <div
                key={i}
                className="bg-brand-panel border border-brand-border flex flex-col group hover:shadow-xl transition-shadow"
              >

                {/* DIFFERENT IMAGE FOR EACH BOX */}
                <div className="aspect-[16/9] overflow-hidden relative border-b border-brand-border">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-8 flex flex-col flex-1">

                  <h3 className="font-display text-2xl text-brand-charcoal mb-4 leading-tight">
                    {brand.name}
                  </h3>

                  <p className="text-brand-gray text-xs leading-relaxed mb-8 flex-1">
                    {brand.desc}
                  </p>


                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
}