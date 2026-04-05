import './CTA.css';

const CTA = () => {
  return (
    <section className="py-32 px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center bg-secondary rounded-[60px] p-16 md:p-24 text-white shadow-2xl relative overflow-hidden border-8 border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-60"></div>
        <span className="material-symbols-outlined absolute -top-10 -right-10 text-white/10 text-[200px] doodle-float">
          rocket_launch
        </span>
        <h2 className="font-headline text-4xl md:text-7xl font-black mb-8 relative z-10 leading-tight">
          Ready to break free from the{' '}
          <span className="italic underline decoration-[#FF7F6A] decoration-wavy text-[#FF7F6A]">
            platforms?
          </span>
        </h2>
        <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto relative z-10 font-medium">
          Let&apos;s audit your current presence and build a roadmap to 50%+ direct bookings. No
          fluff, just results.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 relative z-10">
          <button className="bg-[#FF7F6A] text-on-surface px-12 py-6 rounded-full font-black text-2xl hover:scale-110 active:scale-95 transition-transform shadow-2xl border-b-8 border-[#ac4131]">
            Start Your Journal
          </button>
          <div className="flex items-center gap-3 group cursor-pointer">
            <span className="text-xl font-black border-b-2 border-white/40 pb-1 group-hover:border-white transition-all">
              See our results
            </span>
            <span className="material-symbols-outlined text-3xl group-hover:translate-x-2 transition-transform">
              arrow_right_alt
            </span>
          </div>
        </div>
        {/* Decorative Doodle */}
        <div className="absolute -bottom-16 -left-16 text-white opacity-10 doodle-float">
          <span className="material-symbols-outlined text-[240px]">brush</span>
        </div>
      </div>
    </section>
  );
};

export default CTA;
