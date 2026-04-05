import './Impact.css';

const Impact = () => {
  return (
    <section className="py-24 px-8 overflow-hidden relative">
      {/* Doodly Background Plane */}
      <span className="material-symbols-outlined absolute top-1/4 right-10 text-[#FF7F6A]/10 text-[300px] -rotate-12 select-none">
        beach_access
      </span>
      <div className="max-w-7xl mx-auto">
        <div className="bg-white marker-border rounded-3xl p-12 md:p-20 relative overflow-hidden">
          <div className="absolute -top-6 -right-12 opacity-10 doodle-float">
            <span className="material-symbols-outlined text-[240px] text-primary">Trip</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
            <div className="flex flex-col items-center">
              <h4 className="font-headline text-6xl font-black text-primary mb-2 relative">
                42%
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-2 bg-[#FF7F6A]/30 rounded-full"></span>
              </h4>
              <p className="text-sm font-black text-secondary uppercase tracking-widest mt-4">
                Avg Increase in Directs
              </p>
              <p className="text-on-surface/60 mt-2 italic">Within the first 6 months</p>
            </div>
            <div className="flex flex-col items-center">
              <h4 className="font-headline text-6xl font-black text-primary mb-2 relative">
                $3.2M
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-2 bg-[#FF7F6A]/30 rounded-full"></span>
              </h4>
              <p className="text-sm font-black text-secondary uppercase tracking-widest mt-4">
                Managed Revenue
              </p>
              <p className="text-on-surface/60 mt-2 italic">For independent hosts in 2023</p>
            </div>
            <div className="flex flex-col items-center">
              <h4 className="font-headline text-6xl font-black text-primary mb-2 relative">
                15k+
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-2 bg-[#FF7F6A]/30 rounded-full"></span>
              </h4>
              <p className="text-sm font-black text-secondary uppercase tracking-widest mt-4">
                Leads Generated
              </p>
              <p className="text-on-surface/60 mt-2 italic">
                Through email &amp; social funnels
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
