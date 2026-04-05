import './Footer.css';

const Footer = () => {
  return (
    <footer className="w-full py-12 px-8 flex flex-col items-center gap-6 bg-[#fdf9f1] dark:bg-stone-900 border-t-[6px] border-[#ac4131] rounded-t-[50px] mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl w-full mx-auto">
        <div className="flex flex-col gap-6">
          <div className="text-2xl font-black text-[#39382f] dark:text-stone-100 italic tracking-tight font-headline">
            SketchBook Rentals
          </div>
          <p className="text-[#4a6a6a] dark:text-stone-400 font-['Be_Vietnam_Pro'] text-sm leading-relaxed max-w-xs">
            We combine data-driven marketing with artisan creative to help vacation rental owners
            scale independently.
          </p>
          <div className="flex gap-6">
            <span className="material-symbols-outlined text-[#ac4131] hover:underline decoration-wavy decoration-[#FF7F6A] cursor-pointer">
              alternate_email
            </span>
            <span className="material-symbols-outlined text-[#ac4131] hover:underline decoration-wavy decoration-[#FF7F6A] cursor-pointer">
              travel_explore
            </span>
            <span className="material-symbols-outlined text-[#ac4131] hover:underline decoration-wavy decoration-[#FF7F6A] cursor-pointer">
              photo_camera
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <div className="text-xs font-black text-[#39382f] uppercase tracking-widest mb-2">
              Company
            </div>
            <a
              className="text-[#4a6a6a] dark:text-stone-400 hover:underline decoration-wavy decoration-[#FF7F6A] text-sm"
              href="#"
            >
              About Us
            </a>
            <a
              className="text-[#4a6a6a] dark:text-stone-400 hover:underline decoration-wavy decoration-[#FF7F6A] text-sm"
              href="#"
            >
              Contact Us
            </a>
            <a
              className="text-[#4a6a6a] dark:text-stone-400 hover:underline decoration-wavy decoration-[#FF7F6A] text-sm"
              href="#"
            >
              Careers
            </a>
            <a
              className="text-[#4a6a6a] dark:text-stone-400 hover:underline decoration-wavy decoration-[#FF7F6A] text-sm"
              href="#"
            >
              Resources
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-xs font-black text-[#39382f] uppercase tracking-widest mb-2">
              Legal
            </div>
            <a
              className="text-[#4a6a6a] dark:text-stone-400 hover:underline decoration-wavy decoration-[#FF7F6A] text-sm"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-[#4a6a6a] dark:text-stone-400 hover:underline decoration-wavy decoration-[#FF7F6A] text-sm"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="text-[#4a6a6a] dark:text-stone-400 hover:underline decoration-wavy decoration-[#FF7F6A] text-sm"
              href="#"
            >
              Travel Insurance
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="text-xs font-black text-[#39382f] uppercase tracking-widest mb-2">
            Our Newsletter
          </div>
          <p className="text-sm text-[#4a6a6a] italic">
            Direct booking secrets delivered to your inbox weekly.
          </p>
          <div className="flex gap-2 relative">
            <input
              className="bg-white border-2 border-primary/20 rounded-full px-6 py-3 w-full text-sm focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all"
              placeholder="Enter your email..."
              type="email"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white p-2 rounded-full hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </div>
        </div>
      </div>
      <div className="pt-8 border-t-2 border-primary/10 w-full text-center">
        <p className="text-[#4a6a6a] dark:text-stone-400 font-['Be_Vietnam_Pro'] text-sm italic">
          © 2024 SketchBook Rentals. Every stay is a story.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
