import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isContact = location.pathname === '/contact';
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fffbff] dark:bg-stone-950 border-b-4 border-[#FF7F6A]/20 border-dashed backdrop-blur-md transition-all duration-300">
      <nav className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <Link
          to="/"
          className="text-2xl font-black text-[#39382f] dark:text-stone-100 italic tracking-tight font-headline"
          onClick={closeMenu}
        >
          SketchBook Rentals
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            className={`font-headline font-bold tracking-tight hover:bg-[#FF7F6A]/5 transition-all duration-300 active:scale-95 cursor-pointer ${
              isHome
                ? 'text-[#ac4131] border-b-2 border-[#ac4131] pb-1'
                : 'text-[#39382f] dark:text-stone-400 hover:text-[#ac4131]'
            }`}
            to="/"
          >
            Home
          </Link>
          <Link
            className={`font-headline font-bold tracking-tight hover:bg-[#FF7F6A]/5 transition-all duration-300 active:scale-95 cursor-pointer ${
              isContact
                ? 'text-[#ac4131] border-b-2 border-[#ac4131] pb-1'
                : 'text-[#39382f] dark:text-stone-400 hover:text-[#ac4131]'
            }`}
            to="/contact"
          >
            Contact Us
          </Link>
        </div>

        {/* Hamburger Button (mobile only) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-[#FF7F6A]/10 transition-all active:scale-90"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#39382f] rounded-full transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-[5px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#39382f] rounded-full transition-all duration-300 mt-[4px] ${
              menuOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#39382f] rounded-full transition-all duration-300 mt-[4px] ${
              menuOpen ? '-rotate-45 -translate-y-[5px]' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-6 pb-6 pt-2 gap-4 border-t-2 border-dashed border-[#FF7F6A]/20 bg-[#fffbff]">
          <Link
            className={`font-headline font-bold tracking-tight py-3 px-4 rounded-xl transition-all duration-300 ${
              isHome
                ? 'text-[#ac4131] bg-[#FF7F6A]/10 border-l-4 border-[#ac4131]'
                : 'text-[#39382f] hover:text-[#ac4131] hover:bg-[#FF7F6A]/5'
            }`}
            to="/"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            className={`font-headline font-bold tracking-tight py-3 px-4 rounded-xl transition-all duration-300 ${
              isContact
                ? 'text-[#ac4131] bg-[#FF7F6A]/10 border-l-4 border-[#ac4131]'
                : 'text-[#39382f] hover:text-[#ac4131] hover:bg-[#FF7F6A]/5'
            }`}
            to="/contact"
            onClick={closeMenu}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
