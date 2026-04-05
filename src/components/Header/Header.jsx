import './Header.css';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fffbff] dark:bg-stone-950 border-b-4 border-[#FF7F6A]/20 border-dashed backdrop-blur-md transition-all duration-300">
      <nav className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-black text-[#39382f] dark:text-stone-100 italic tracking-tight font-headline">
          SketchBook Rentals
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a
            className="text-[#ac4131] border-b-2 border-[#ac4131] pb-1 font-headline font-bold tracking-tight hover:bg-[#FF7F6A]/5 transition-all duration-300 active:scale-95 cursor-pointer"
            href="#"
          >
            Home
          </a>
          <a
            className="text-[#39382f] dark:text-stone-400 hover:text-[#ac4131] font-headline font-bold tracking-tight hover:bg-[#FF7F6A]/5 transition-all duration-300 active:scale-95 cursor-pointer"
            href="#"
          >
            Services
          </a>
          <a
            className="text-[#39382f] dark:text-stone-400 hover:text-[#ac4131] font-headline font-bold tracking-tight hover:bg-[#FF7F6A]/5 transition-all duration-300 active:scale-95 cursor-pointer"
            href="#"
          >
            Case Studies
          </a>
          <a
            className="text-[#39382f] dark:text-stone-400 hover:text-[#ac4131] font-headline font-bold tracking-tight hover:bg-[#FF7F6A]/5 transition-all duration-300 active:scale-95 cursor-pointer"
            href="#"
          >
            About
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#39382f] cursor-pointer">
            account_circle
          </span>
          <button className="bg-[#ac4131] hover:bg-[#ac4131]/90 text-white font-headline font-bold px-6 py-2 rounded-full transition-all active:scale-95">
            Book Now
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
