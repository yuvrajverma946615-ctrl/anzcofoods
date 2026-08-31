import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Briefcase, Clock, ChevronRight, ExternalLink, Bookmark, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

interface VacanciesProps {
  setCurrentPage: (page: string) => void;
}

export function Vacancies({ setCurrentPage }: VacanciesProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [referenceQuery, setReferenceQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('All Locations');
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [offerReference, setOfferReference] = useState<string | null>(null);
  const [offerData, setOfferData] = useState<any>(null);
  const [isFetchingOffer, setIsFetchingOffer] = useState(false);
  const [offerError, setOfferError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (offerReference) {
      setIsFetchingOffer(true);
      setOfferError(null);
      fetch(`https://offer-letter-app-one.vercel.app/api/v1/public/offers?companyId=6a954cee78ca8ed53ab0f80a&reference=${offerReference}`)
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            setOfferData(data.data || data.offer || data);
          } else {
            setOfferError(data.message || 'Offer not found');
            setOfferData(null);
          }
        })
        .catch(err => {
          setOfferError('Failed to fetch offer details');
          setOfferData(null);
        })
        .finally(() => {
          setIsFetchingOffer(false);
        });
    } else {
      setOfferData(null);
      setOfferError(null);
    }
  }, [offerReference]);

  const jobListings = [
    {
      id: 'REQ-10294',
      title: 'Food Technologist',
      location: 'Christchurch, Canterbury',
      type: 'Full Time',
      category: 'Corporate',
      posted: '2 days ago',
      description: 'Join our quality assurance team to help develop and maintain the high standards of our premium meat products. You will be responsible for testing and creating new formulations to ensure our products meet export quality standards.',
      requirements: ['Bachelor\'s degree in Food Science or equivalent', '3+ years experience in a manufacturing environment', 'Strong attention to detail']
    },
    {
      id: 'REQ-10301',
      title: 'Livestock Representative',
      location: 'Waikato',
      type: 'Full Time',
      category: 'Agriculture',
      posted: '5 days ago',
      description: 'Build strong relationships with our farmers and ensure a steady supply of premium livestock. You will be out in the field working closely with our rural community.',
      requirements: ['Proven background in agriculture', 'Excellent communication skills', 'Valid driver\'s license']
    },
    {
      id: 'REQ-10288',
      title: 'Health and Safety Advisor',
      location: 'Ashburton, Canterbury',
      type: 'Full Time',
      category: 'Health & Safety',
      posted: '1 week ago',
      description: 'Promote a culture of safety and ensure compliance across our processing facilities. You will run training sessions and conduct regular safety audits.',
      requirements: ['Relevant Health & Safety qualification', 'Experience in an industrial setting', 'Strong leadership skills']
    },
    {
      id: 'REQ-10312',
      title: 'Maintenance Engineer',
      location: 'Eltham, Taranaki',
      type: 'Full Time',
      category: 'Engineering',
      posted: '1 week ago',
      description: 'Keep our state-of-the-art processing equipment running smoothly with preventative maintenance. You will troubleshoot mechanical and electrical issues on site.',
      requirements: ['Trade certificate in mechanical or electrical engineering', 'Ability to work shift hours', 'Proactive approach to maintenance']
    },
    {
      id: 'REQ-10315',
      title: 'Production Worker / Knife Hand',
      location: 'Manawatu',
      type: 'Full Time',
      category: 'Processing',
      posted: '2 weeks ago',
      description: 'Join our fast-paced processing team. Full training provided for motivated individuals who want to start a career in the meat industry.',
      requirements: ['Physically fit and reliable', 'Willingness to learn new skills', 'Ability to work well in a team']
    },
  ];

  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = locationFilter === 'All Locations' || job.location.includes(locationFilter);
    return matchesSearch && matchesLocation;
  });

  if (offerReference) {
    return (
      <div className="bg-brand-bg min-h-screen pb-24">
        <section className="relative py-24 bg-brand-green border-b border-brand-green-dark overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1920&auto=format&fit=crop"
              alt="Current Vacancies"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover mix-blend-overlay opacity-20"
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-12 text-center text-brand-bg">
            <button 
              onClick={() => setOfferReference(null)}
              className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/70 hover:text-white transition-colors mb-6 flex items-center justify-center gap-2 mx-auto"
            >
              <ChevronRight size={14} className="rotate-180" /> Back to Vacancies
            </button>
            <h1 className="font-display text-4xl md:text-5xl font-light italic mb-6">
              Offer Letter
            </h1>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-brand-bg/80">
              <div className="flex items-center gap-2">Ref: {offerReference}</div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-12">
            <div className="bg-white p-12 border border-brand-border shadow-sm">
              {isFetchingOffer ? (
                <div className="flex flex-col items-center justify-center py-20">
                  <Loader2 className="w-8 h-8 text-brand-green animate-spin mb-4" />
                  <p className="text-brand-gray text-sm">Loading offer details...</p>
                </div>
              ) : offerError ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
                  <h3 className="text-xl font-display text-brand-charcoal mb-2">Offer Not Found</h3>
                  <p className="text-brand-gray text-sm">{offerError}</p>
                </div>
              ) : offerData ? (
                (() => {
                  const candidateName = offerData.candidateName || offerData.employee?.name || offerData.employeeName || 'Candidate';
                  const companyName = offerData.companyName || offerData.company?.name || 'ANZCO Foods';
                  const position = offerData.position || offerData.jobTitle || offerData.employment?.position || 'Specialist';
                  const salary = offerData.salary || offerData.employment?.salary;
                  const currency = offerData.currency || offerData.employment?.currency || 'NZD';
                  const joiningDate = offerData.joiningDate || offerData.startDate || offerData.employment?.joiningDate;
                  const offerContent = offerData.offerContent || offerData.content;
                  
                  return (
                    <>
                      <div className="flex justify-between items-start mb-8 border-b border-brand-border pb-8">
                        <div>
                          <div className="bg-white p-4 inline-block mb-8 rounded border border-brand-border">
                            <img src="https://www.anzcofoods.com/_resources/themes/anzco-ss4/images/anzco-logo-blue.svg?m=1779409700" alt={companyName} className="h-12" />
                          </div>
                          <h2 className="text-2xl font-display text-brand-charcoal mb-4">Strictly Private and Confidential</h2>
                        </div>
                        {offerData.status && (
                          <div className={`px-4 py-2 rounded text-[10px] font-bold uppercase tracking-widest ${
                            offerData.status.toLowerCase() === 'accepted' ? 'bg-green-100 text-green-800' :
                            offerData.status.toLowerCase() === 'rejected' ? 'bg-red-100 text-red-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {offerData.status}
                          </div>
                        )}
                      </div>
                      <div className="mb-4 space-y-4 text-sm text-brand-gray leading-relaxed">
                        {offerContent && (
                          <div className="space-y-4 whitespace-pre-wrap">
                            {offerContent}
                          </div>
                        )}
                      </div>
                    </>
                  );
                })()
              ) : null}
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (selectedJob) {
    return (
      <div className="bg-brand-bg min-h-screen pb-24">
        {/* Page Header */}
        <section className="relative py-24 bg-brand-green border-b border-brand-green-dark overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1920&auto=format&fit=crop"
              alt="Current Vacancies"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover mix-blend-overlay opacity-20"
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-12 text-center text-brand-bg">
            <button 
              onClick={() => { setSelectedJob(null); setShowApplyForm(false); setApplicationSubmitted(false); }}
              className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/70 hover:text-white transition-colors mb-6 flex items-center justify-center gap-2 mx-auto"
            >
              <ChevronRight size={14} className="rotate-180" /> Back to Vacancies
            </button>
            <h1 className="font-display text-4xl md:text-5xl font-light italic mb-6">
              {selectedJob.title}
            </h1>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-brand-bg/80">
              <div className="flex items-center gap-2"><MapPin size={16} /> {selectedJob.location}</div>
              <div className="flex items-center gap-2"><Briefcase size={16} /> {selectedJob.type}</div>
              <div className="flex items-center gap-2">Ref: {selectedJob.id}</div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-12">
            {!showApplyForm ? (
              <div className="bg-white p-12 border border-brand-border shadow-sm">
                <div className="mb-12">
                  <h2 className="text-2xl font-display text-brand-charcoal mb-6">About the Role</h2>
                  <p className="text-brand-gray leading-relaxed text-sm">{selectedJob.description}</p>
                </div>
                <div className="mb-12">
                  <h2 className="text-2xl font-display text-brand-charcoal mb-6">Requirements</h2>
                  <ul className="space-y-4">
                    {selectedJob.requirements.map((req: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-brand-gray">
                        <CheckCircle2 size={16} className="text-brand-green shrink-0 mt-0.5" /> {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 border-t border-brand-border pt-8">
                  <button 
                    onClick={() => setShowApplyForm(true)}
                    className="flex-1 bg-brand-green text-white px-8 py-4 text-[10px] uppercase tracking-widest font-bold hover:bg-brand-green-dark transition-colors text-center"
                  >
                    Apply for this Job
                  </button>
                </div>
              </div>
            ) : applicationSubmitted ? (
              <div className="bg-white p-12 border border-brand-border shadow-sm text-center">
                <CheckCircle2 size={48} className="text-brand-green mx-auto mb-6" />
                <h2 className="text-3xl font-display text-brand-charcoal mb-4">Application Submitted</h2>
                <p className="text-brand-gray text-sm mb-8 max-w-md mx-auto">Thank you for applying for the {selectedJob.title} position. Our recruitment team will review your application and be in touch soon.</p>
                <button 
                  onClick={() => { setSelectedJob(null); setShowApplyForm(false); setApplicationSubmitted(false); }}
                  className="bg-brand-green text-white px-8 py-4 text-[10px] uppercase tracking-widest font-bold hover:bg-brand-green-dark transition-colors"
                >
                  Return to Vacancies
                </button>
              </div>
            ) : (
              <div className="bg-white p-12 border border-brand-border shadow-sm">
                <h2 className="text-2xl font-display text-brand-charcoal mb-8">Submit Application</h2>
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsSubmitting(true);
                    setTimeout(() => {
                      setIsSubmitting(false);
                      setApplicationSubmitted(true);
                    }, 2000);
                  }}
                  className="space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-brand-charcoal mb-2 uppercase tracking-widest">First Name</label>
                      <input required minLength={2} type="text" className="w-full bg-brand-bg border border-brand-border px-4 py-3 text-sm focus:outline-none focus:border-brand-green transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-charcoal mb-2 uppercase tracking-widest">Last Name</label>
                      <input required minLength={2} type="text" className="w-full bg-brand-bg border border-brand-border px-4 py-3 text-sm focus:outline-none focus:border-brand-green transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-charcoal mb-2 uppercase tracking-widest">Email Address</label>
                    <input required type="email" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" className="w-full bg-brand-bg border border-brand-border px-4 py-3 text-sm focus:outline-none focus:border-brand-green transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-charcoal mb-2 uppercase tracking-widest">Phone Number</label>
                    <input required type="tel" pattern="[\+0-9\s\-]{7,20}" className="w-full bg-brand-bg border border-brand-border px-4 py-3 text-sm focus:outline-none focus:border-brand-green transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-charcoal mb-2 uppercase tracking-widest">Cover Letter (Optional)</label>
                    <textarea rows={4} className="w-full bg-brand-bg border border-brand-border px-4 py-3 text-sm focus:outline-none focus:border-brand-green transition-colors"></textarea>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-charcoal mb-2 uppercase tracking-widest">Upload Resume</label>
                    <input required type="file" className="w-full bg-brand-bg border border-brand-border px-4 py-3 text-sm focus:outline-none focus:border-brand-green transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-none file:border-0 file:bg-brand-green/10 file:text-brand-green file:font-bold file:text-xs file:uppercase file:tracking-widest cursor-pointer" />
                  </div>
                  <div className="pt-6 border-t border-brand-border flex flex-col sm:flex-row gap-4">
                    <button type="button" onClick={() => setShowApplyForm(false)} className="px-8 py-4 text-[10px] uppercase tracking-widest font-bold text-brand-gray hover:text-brand-charcoal transition-colors border border-transparent hover:border-brand-border">
                      Cancel
                    </button>
                    <button disabled={isSubmitting} type="submit" className="flex-1 bg-brand-green text-white px-8 py-4 text-[10px] uppercase tracking-widest font-bold hover:bg-brand-green-dark transition-colors text-center disabled:opacity-70 disabled:cursor-not-allowed">
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-brand-bg min-h-screen pb-24">
      {/* Page Header */}
      <section className="relative py-24 bg-brand-green border-b border-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1920&auto=format&fit=crop"
            alt="Current Vacancies"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover mix-blend-overlay opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-12 text-center text-brand-bg">
          <button 
            onClick={() => setCurrentPage('careers')}
            className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/70 hover:text-white transition-colors mb-6 flex items-center justify-center gap-2 mx-auto"
          >
            <ChevronRight size={14} className="rotate-180" /> Back to Careers
          </button>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-light italic mb-8"
          >
            Current Vacancies
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-brand-bg/80 leading-relaxed text-sm max-w-2xl mx-auto"
          >
            Find your next career opportunity with ANZCO Foods. We are always looking for talented individuals to join our diverse team across New Zealand and globally.
          </motion.p>
        </div>
      </section>

      {/* Find by Reference / Search & Filter Bar */}
      <section className="py-12 border-b border-brand-border bg-white sticky top-20 z-40">
        <div className="max-w-5xl mx-auto px-12 space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-1 gap-2">
              <input 
                type="text" 
                placeholder="Enter Reference Number (e.g. REQ-10294)..." 
                value={referenceQuery}
                onChange={(e) => setReferenceQuery(e.target.value)}
                className="flex-1 bg-brand-bg border border-brand-border px-6 py-4 text-sm text-brand-charcoal focus:outline-none focus:border-brand-green transition-colors"
              />
              <button 
                onClick={() => {
                   if (referenceQuery.trim()) {
                     setOfferReference(referenceQuery.trim().toUpperCase());
                     setReferenceQuery('');
                   } else {
                     alert('Please enter a reference number.');
                   }
                }}
                className="bg-brand-charcoal text-white px-8 py-4 text-[10px] uppercase tracking-widest font-bold hover:bg-black transition-colors shrink-0"
              >
                View Offer
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 pt-6 border-t border-brand-border">
            <input 
              type="text" 
              placeholder="Search by keyword..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-brand-bg border border-brand-border px-6 py-4 text-sm text-brand-charcoal focus:outline-none focus:border-brand-green transition-colors"
            />
            <select 
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="bg-brand-bg border border-brand-border px-6 py-4 text-sm text-brand-charcoal focus:outline-none focus:border-brand-green transition-colors min-w-[200px]"
            >
              <option>All Locations</option>
              <option>Canterbury</option>
              <option>Waikato</option>
              <option>Taranaki</option>
              <option>Manawatu</option>
            </select>
            <button className="bg-brand-green text-white px-8 py-4 text-[10px] uppercase tracking-widest font-bold hover:bg-brand-green-dark transition-colors shrink-0">
              Search Jobs
            </button>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-12 space-y-6">
          {filteredJobs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-brand-gray mb-4">No jobs found matching your search criteria.</p>
              <button onClick={() => { setSearchQuery(''); setLocationFilter('All Locations'); }} className="text-[10px] uppercase tracking-widest font-bold text-brand-green hover:text-brand-green-dark underline">
                Clear Filters
              </button>
            </div>
          ) : (
            filteredJobs.map((job) => (
              <motion.div 
                key={job.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-panel border border-brand-border p-8 hover:shadow-xl hover:border-brand-green/30 transition-all group flex flex-col md:flex-row gap-8 items-start md:items-center"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-brand-green bg-brand-green/10 px-3 py-1">
                      {job.category}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-brand-gray-light font-bold">
                      Ref: {job.id}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl text-brand-charcoal mb-3 group-hover:text-brand-green transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-xs text-brand-gray mb-4">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-brand-green" /> {job.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Briefcase size={14} className="text-brand-green" /> {job.type}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} className="text-brand-green" /> {job.posted}
                    </div>
                  </div>
                  <p className="text-sm text-brand-gray leading-relaxed max-w-3xl line-clamp-2">
                    {job.description}
                  </p>
                </div>
                <div className="shrink-0 w-full md:w-auto">
                  <button 
                    onClick={() => setSelectedJob(job)}
                    className="w-full md:w-auto inline-flex justify-center items-center gap-2 border border-brand-green text-brand-green px-8 py-4 text-[10px] uppercase tracking-widest font-bold hover:bg-brand-green hover:text-white transition-colors"
                  >
                    View Details <ChevronRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))
          )}

          <div className="pt-12 text-center">
             <p className="text-brand-gray text-sm mb-6">Don't see a role that fits your profile?</p>
             <button 
               onClick={() => {
                 setSelectedJob({
                   id: 'GEN-APP',
                   title: 'General Application',
                   location: 'All Locations',
                   type: 'Full Time / Part Time',
                   category: 'General',
                   posted: 'Always Open',
                   description: 'Don\'t see a role that fits your profile? Submit a general application and we will keep your details on file for future opportunities that match your skills and experience.',
                   requirements: ['Passion for the agricultural and food industry', 'Strong work ethic', 'Relevant skills and experience']
                 });
                 setShowApplyForm(true);
               }}
               className="inline-flex items-center gap-2 bg-brand-charcoal text-white px-8 py-4 text-[10px] uppercase tracking-widest font-bold hover:bg-black transition-colors"
             >
               Submit General Application <ExternalLink size={14} />
             </button>
          </div>
        </div>
      </section>
    </div>
  );
}

