import { motion } from 'motion/react';
import { ArrowRight, PlayCircle, ExternalLink } from 'lucide-react';

interface CareersProps {
  setCurrentPage: (page: string) => void;
}

export function Careers({ setCurrentPage }: CareersProps) {
  const staffProfiles = [
    {
      name: 'Jessica Sheehan',
      role: 'Site Finance and Administrator Manager',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
      quote: 'I started work with ANZCO as a packer three years ago. I grew to love the company and its values and decided I’d like to expand my career within the business.',
    },
    {
      name: 'Steve Dickie',
      role: 'Head of Foodservice',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
      quote: 'There are several things that make my role enjoyable: the people I work with, my team and others around me; the fact that no two days are the same; and my ability to be able to make decisions.',
    },
    {
      name: 'Amber Kururangi',
      role: 'Supervisor Lamb Further Processing',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
      quote: 'The things I enjoy most about my role are the daily challenges - no two days are ever the same – and the people I work with and get to meet.',
    },
    {
      name: 'John Moses',
      role: 'Knife Training Co-ordinator',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
      quote: 'I\'m passionate about showing people how to use the equipment they are given correctly and safely.',
    },
    {
      name: 'Harriet Watson',
      role: 'Sales Executive – Trading',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop',
      quote: 'I grew up on a farm and I have always been passionate about understanding where my food comes from. I feel like there is plenty of opportunity at ANZCO.',
    },
    {
      name: 'Jason King',
      role: 'Lamb Production Planner',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
      quote: 'I have a personal drive to always grow and develop myself. I enjoy seeing the improvements in the cutting systems and the changes in the market dynamics.',
    }
  ];

  return (
    <div className="bg-brand-bg min-h-screen">
      {/* Page Header */}
      <section className="relative py-24 bg-brand-green border-b border-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=1920&auto=format&fit=crop"
            alt="Working at ANZCO"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover mix-blend-overlay opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-12 text-center text-brand-bg">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-light italic mb-8"
          >
            Working at ANZCO
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-brand-bg/80 leading-relaxed text-sm max-w-3xl mx-auto"
          >
            If you're looking for career diversity, new challenges and opportunities for advancement ANZCO offers great prospects. Whether it’s a meat processing job or in our corporate team, from knife handlers to food technologists; accountants to health and safety advisors; engineers to sales executives or livestock reps, ANZCO has a diverse range of opportunities for growth and development.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
          >
             <button 
               onClick={() => setCurrentPage('vacancies')}
               className="inline-flex items-center justify-center bg-white text-brand-green px-8 py-4 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-brand-bg transition-colors"
             >
               Explore current vacancies
             </button>
             <button 
               onClick={() => setCurrentPage('vacancies')}
               className="inline-flex items-center justify-center border border-white text-white px-8 py-4 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white/10 transition-colors"
             >
               Career opportunities
             </button>
          </motion.div>
        </div>
      </section>

      {/* Intro Stats / Highlight */}
      <section className="py-24 border-b border-brand-border bg-white">
        <div className="max-w-7xl mx-auto px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[400px]">
             <div className="absolute inset-0 bg-brand-green/10 -translate-x-4 translate-y-4"></div>
             <img 
               src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=1920&auto=format&fit=crop"
               alt="Team working together"
               referrerPolicy="no-referrer"
               className="relative z-10 w-full h-full object-cover shadow-lg"
             />
          </div>
          <div>
            <h2 className="font-display text-4xl text-brand-green font-light italic mb-6 leading-tight">
              We offer a collaborative and supportive work environment where safety is our top priority.
            </h2>
            <p className="text-brand-gray text-sm leading-relaxed mb-6">
              We’re a team of around 3,000 people, and a leader in the agricultural industry. We pride ourselves on creating a great working atmosphere where our people back each other and are inspired to make every day count.
            </p>
            <p className="text-brand-gray text-sm leading-relaxed">
              Encouraging our team to consistently strive for excellence, ANZCO is dedicated to creating an environment that encourages continuous learning and career development.
            </p>
          </div>
        </div>
      </section>
      
      {/* Meet our people Video */}
      <section className="py-24 bg-brand-panel border-b border-brand-border">
         <div className="max-w-5xl mx-auto px-12">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl text-brand-green font-light italic">Meet our people</h2>
            </div>
            <div className="aspect-video bg-black relative group cursor-pointer shadow-xl">
               <img 
                 src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1920&auto=format&fit=crop" 
                 alt="Video thumbnail"
                 className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity duration-300" 
               />
               <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle size={64} className="text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" strokeWidth={1} />
               </div>
            </div>
         </div>
      </section>

      {/* Staff Profiles Grid */}
      <section className="py-24 bg-[#E8E4D9]">
        <div className="max-w-7xl mx-auto px-12">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl text-brand-green font-light italic">Staff profiles</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staffProfiles.map((staff, i) => (
              <div key={i} className="bg-white border border-brand-border flex flex-col group hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden relative border-b border-brand-border bg-brand-bg">
                  <img 
                    src={staff.image}
                    alt={staff.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale-[20%] group-hover:grayscale-0"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="font-display text-2xl text-brand-charcoal mb-2">{staff.name}</h3>
                  <p className="text-[11px] uppercase tracking-wider text-brand-green font-bold mb-6">{staff.role}</p>
                  <p className="text-brand-gray text-sm leading-relaxed mb-6 flex-1 italic">"{staff.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-panel border-y border-brand-border text-center">
        <div className="max-w-4xl mx-auto px-12">
          <h2 className="font-display text-4xl text-brand-green font-light italic mb-12">Testimonials</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
             <div className="bg-[#E8E4D9] p-8 border border-brand-border relative">
                <div className="text-4xl text-brand-green font-display opacity-20 absolute top-4 left-4">"</div>
                <p className="text-brand-charcoal text-sm leading-relaxed mb-6 relative z-10 italic mt-4">
                  “I’ve had great support from supervisors, managers and our on-site training advisor who have helped me upskill and try new things.”
                </p>
                <div className="h-px w-12 bg-brand-green mx-auto mb-4"></div>
                <p className="text-xs uppercase tracking-widest font-bold text-brand-green">John Moses</p>
                <p className="text-[10px] uppercase tracking-wider text-brand-gray mt-1">Knife Training Co-ordinator</p>
             </div>
             <div className="bg-[#E8E4D9] p-8 border border-brand-border relative">
                <div className="text-4xl text-brand-green font-display opacity-20 absolute top-4 left-4">"</div>
                <p className="text-brand-charcoal text-sm leading-relaxed mb-6 relative z-10 italic mt-4">
                  “I enjoy being able to work as part of a great team of people.”
                </p>
                <div className="h-px w-12 bg-brand-green mx-auto mb-4"></div>
                <p className="text-xs uppercase tracking-widest font-bold text-brand-green">Chad Tangata</p>
                <p className="text-[10px] uppercase tracking-wider text-brand-gray mt-1">Leading Hand</p>
             </div>
          </div>
        </div>
      </section>

      {/* Join the team */}
      <section className="py-24 bg-brand-green text-brand-bg">
        <div className="max-w-7xl mx-auto px-12 grid md:grid-cols-2 gap-16 items-center">
           <div>
             <h2 className="font-display text-4xl font-light italic mb-6">Join our ANZCO Foods Team</h2>
             <p className="text-brand-bg/80 text-sm leading-relaxed mb-4">
               Looking to make a difference and challenge yourself? Passionate about our industry and want to join an industry leader? Think you've got a strong skill set that will set you apart?
             </p>
             <p className="text-brand-bg/80 text-sm leading-relaxed mb-10">
               If you want career diversity and opportunities for advancement then ANZCO is the place for you. We pride ourselves on creating a great working atmosphere and being a fair employer.
             </p>
             <button 
               onClick={() => setCurrentPage('vacancies')}
               className="inline-flex items-center gap-2 border border-white text-white px-8 py-4 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-brand-green transition-colors cursor-pointer"
             >
               Check out our current vacancies <ExternalLink size={14} />
             </button>
           </div>
           <div className="relative h-[500px]">
             <img 
               src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
               alt="ANZCO Team"
               referrerPolicy="no-referrer"
               className="w-full h-full object-cover shadow-xl"
             />
             <div className="absolute inset-0 bg-brand-green/20 mix-blend-multiply"></div>
           </div>
        </div>
      </section>
    </div>
  );
}
