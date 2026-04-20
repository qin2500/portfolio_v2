import React, { useState, useEffect } from 'react';

const Navbar = ({ homeRef, experienceRef, projectsRef }: { homeRef: React.RefObject<HTMLDivElement>, experienceRef: React.RefObject<HTMLDivElement>, projectsRef: React.RefObject<HTMLDivElement> }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (!ref?.current) return;
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setDrawerOpen(false);
  };

  const navItems = [
    { label: 'About', ref: homeRef },
    { label: 'Experience', ref: experienceRef },
    { label: 'Projects', ref: projectsRef },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-4 px-4">
      {/* Desktop */}
      <nav
        className={`hidden md:flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-300 ${
          scrolled
            ? 'bg-slate-900 shadow-lg shadow-black/20 border border-white/10'
            : 'bg-slate-900 border border-white/10'
        }`}
      >
        {navItems.map(({ label, ref }) => (
          <button
            key={label}
            onClick={() => scrollToRef(ref)}
            className="px-4 py-1.5 text-sm font-medium text-slate-200 rounded-full hover:bg-white/15 hover:text-white transition-all duration-200"
          >
            {label}
          </button>
        ))}
        <div className="w-px h-4 bg-white/20 mx-1" />
        <a
          href="/assets/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-1.5 text-sm font-medium text-white bg-blue-500/70 hover:bg-blue-500 rounded-full transition-all duration-200"
        >
          Resume
        </a>
      </nav>

      {/* Mobile */}
      <div className="flex md:hidden w-full justify-end">
        <button
          onClick={() => setDrawerOpen(!drawerOpen)}
          className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white hover:bg-white/20 transition-all duration-200"
          aria-label="Toggle menu"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`block h-0.5 bg-white rounded transition-all duration-300 ${drawerOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block h-0.5 bg-white rounded transition-all duration-300 ${drawerOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-white rounded transition-all duration-300 ${drawerOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </div>
        </button>

        {drawerOpen && (
          <div className="absolute top-14 right-4 flex flex-col gap-1 p-2 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-white/10 shadow-xl shadow-black/30 min-w-[160px]">
            {navItems.map(({ label, ref }) => (
              <button
                key={label}
                onClick={() => scrollToRef(ref)}
                className="px-4 py-2 text-sm font-medium text-slate-200 rounded-xl hover:bg-white/10 hover:text-white transition-all duration-200 text-left"
              >
                {label}
              </button>
            ))}
            <div className="h-px bg-white/10 my-1" />
            <a
              href="/assets/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-500/70 hover:bg-blue-500 rounded-xl transition-all duration-200 text-center"
            >
              Resume
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
