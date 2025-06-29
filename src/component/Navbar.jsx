import { useEffect, useState } from 'react';

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize(); // initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-purple-700/60 via-indigo-600/60 to-blue-600/60 backdrop-blur-md border-b border-white/10 shadow-md transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-blue-300">Pulkit's.tech</a>

          {/* Hamburger icon - only visible on mobile */}
          {!isDesktop && (
            <div
              className="w-7 h-5 relative cursor-pointer z-50 text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              &#9776;
            </div>
          )}

          {/* Desktop nav links */}
          <div className={`${isDesktop ? 'flex' : 'hidden'} items-center space-x-8 w-full justify-end`}>
            <a href="#home" className="text-gray-200 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-gray-200 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-gray-200 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-gray-200 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};
