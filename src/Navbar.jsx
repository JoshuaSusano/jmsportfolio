import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-[120px] py-3 transition-all duration-500 ${
        scrolling ? 'bg-[#4F46E5] shadow-md' : 'bg-transparent'
      }`}
    >
      <h1 className="text-white text-lg font-bold">Susano.</h1>
      <ul className="hidden md:flex space-x-10">
        {['Home', 'About', 'Project', 'Contact'].map((link) => (
          <li key={link} className="relative group">
            <a 
              href={`#${link.toLowerCase()}`} 
              className="text-white text-sm font-medium hover:text-gray-200 transition-all"
            >
              {link}
            </a>
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
        ))}
      </ul>
      <button 
        className="md:hidden text-white focus:outline-none z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        )}
      </button>
      <div 
        className={`fixed top-0 left-0 h-screen w-full bg-[#4F46E5] flex flex-col items-center justify-center gap-6 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-500 ease-in-out md:hidden`}
        style={{ zIndex: 40 }}
      >
        {['Home', 'About', 'Project', 'Contact'].map((link) => (
          <a 
            key={link}
            href={`#${link.toLowerCase()}`} 
            className="text-white text-xl font-medium hover:text-gray-200 transition-all"
            onClick={() => setIsOpen(false)} 
          >
            {link}
          </a>
        ))}
      </div>
      {isOpen && (
        <div 
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
          style={{ zIndex: 30 }}
        />
      )}
    </nav>
  );
};

export default Navbar;
