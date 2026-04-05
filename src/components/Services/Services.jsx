import './Services.css';

const Services = () => {
  return (
    <section className="bg-[#fdf9f1] py-24 relative">
      {/* Marker Divider */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#FF7F6A]/20 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl relative">

            <h2 className="font-headline text-4xl md:text-5xl font-black text-[#39382f] mb-6">
              Digital Marketing Built For Your{' '}
              <span className="italic text-primary sketch-underline">Vacation Rental</span> Brand
            </h2>
            <p className="text-lg text-on-surface/80 leading-relaxed font-medium">
              We don&apos;t just &quot;run ads.&quot; We curate a guest journey that starts with a
              sketch and ends with a 5-star story.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="material-symbols-outlined text-primary text-7xl rotate-45 doodle-float">
              auto_fix_high
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* SEO Card */}
          <div className="bg-white p-10 marker-border rounded-xl hover:-translate-y-2 transition-all duration-300 relative group">
            <div className="w-16 h-16 bg-[#FF7F6A]/10 rounded-full flex items-center justify-center mb-8 rotate-[-8deg] group-hover:rotate-0 transition-transform">
              <span className="material-symbols-outlined text-primary text-3xl">
                travel_explore
              </span>
            </div>
            <h3 className="font-headline text-2xl font-black mb-4 tracking-tight">
              Direct Booking SEO
            </h3>
            <p className="text-on-surface/70 leading-relaxed mb-6 font-medium">
              Dominate local search for your destination. We optimize your direct booking site to
              beat Airbnb on Google.
            </p>
            <div className="flex items-center text-primary font-black text-sm cursor-pointer group-hover:underline decoration-wavy">
              Explore Strategy{' '}
              <span className="material-symbols-outlined ml-2 text-lg">trending_up</span>
            </div>
          </div>
          {/* Paid Ads Card */}
          <div className="bg-white p-10 marker-border rounded-xl hover:-translate-y-2 transition-all duration-300 relative group">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-8 rotate-[5deg] group-hover:rotate-0 transition-transform">
              <span className="material-symbols-outlined text-secondary text-3xl">ads_click</span>
            </div>
            <h3 className="font-headline text-2xl font-black mb-4 tracking-tight">
              Meta &amp; Google Ads
            </h3>
            <p className="text-on-surface/70 leading-relaxed mb-6 font-medium">
              Retarget guests who browsed your listings but didn&apos;t book. Highly targeted spend
              for maximum occupancy.
            </p>
            <div className="flex items-center text-secondary font-black text-sm cursor-pointer group-hover:underline decoration-wavy">
              See Ad Packs{' '}
              <span className="material-symbols-outlined ml-2 text-lg">monitoring</span>
            </div>
          </div>
          {/* Brand Identity Card */}
          <div className="bg-white p-10 marker-border rounded-xl hover:-translate-y-2 transition-all duration-300 relative group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-8 rotate-[-3deg] group-hover:rotate-0 transition-transform">
              <span className="material-symbols-outlined text-primary text-3xl">palette</span>
            </div>
            <h3 className="font-headline text-2xl font-black mb-4 tracking-tight">
              Visual Storytelling
            </h3>
            <p className="text-on-surface/70 leading-relaxed mb-6 font-medium">
              From professional photography direction to web design that captures the vibe of your
              unique property.
            </p>
            <div className="flex items-center text-primary font-black text-sm cursor-pointer group-hover:underline decoration-wavy">
              View Portfolio{' '}
              <span className="material-symbols-outlined ml-2 text-lg">auto_awesome</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
