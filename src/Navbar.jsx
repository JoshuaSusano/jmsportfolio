import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-[120px] py-2 transition-all duration-500 ${
        scrolling ? 'bg-[#4F46E5] shadow-md' : 'bg-transparent'
      }`}
    >
      <h1 className="text-white text-lg font-bold">Susano.</h1>
      <ul className="flex space-x-10">
        {['Home', 'About', 'Project', 'Contact'].map((link) => (
          <li key={link} className="relative group">
            <a href="#" className="text-white text-sm font-medium hover:text-gray-200 transition-all">
              {link}
            </a>
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
