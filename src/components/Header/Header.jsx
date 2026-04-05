import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isContact = location.pathname === '/contact';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fffbff] dark:bg-stone-950 border-b-4 border-[#FF7F6A]/20 border-dashed backdrop-blur-md transition-all duration-300">
      <nav className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <Link
          to="/"
          className="text-2xl font-black text-[#39382f] dark:text-stone-100 italic tracking-tight font-headline"
        >
          SketchBook Rentals
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link
            className={`font-headline font-bold tracking-tight hover:bg-[#FF7F6A]/5 transition-all duration-300 active:scale-95 cursor-pointer ${isHome
              ? 'text-[#ac4131] border-b-2 border-[#ac4131] pb-1'
              : 'text-[#39382f] dark:text-stone-400 hover:text-[#ac4131]'
              }`}
            to="/"
          >
            Home
          </Link>
          <Link
            className={`font-headline font-bold tracking-tight hover:bg-[#FF7F6A]/5 transition-all duration-300 active:scale-95 cursor-pointer ${isContact
              ? 'text-[#ac4131] border-b-2 border-[#ac4131] pb-1'
              : 'text-[#39382f] dark:text-stone-400 hover:text-[#ac4131]'
              }`}
            to="/contact"
          >
            Contact Us
          </Link>
        </div>


      </nav>
    </header>
  );
};

export default Header;
