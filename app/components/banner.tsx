import React, { useEffect, useState } from "react";
import { Typography, IconButton } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Itch from '../../public/assets/itch.svg';
import Devpost from '../../public/assets/devpost.svg';

const Banner = ({ navRef, experienceRef }: { navRef: React.RefObject<HTMLDivElement>, experienceRef: React.RefObject<HTMLDivElement> }) => {
  const [viewportHeight, setViewportHeight] = useState('100vh');
  const [navHeight, setNavHeight] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // Hide the scroll cue once the visitor has started scrolling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Inject minimal scrollbar styles
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .scrollbar-minimal {
        scrollbar-width: thin;
        scrollbar-color: rgba(148, 163, 184, 0.3) transparent;
      }
      
      .scrollbar-minimal::-webkit-scrollbar {
        width: 4px;
      }
      
      .scrollbar-minimal::-webkit-scrollbar-track {
        background: transparent;
      }
      
      .scrollbar-minimal::-webkit-scrollbar-thumb {
        background-color: rgba(148, 163, 184, 0.3);
        border-radius: 2px;
        border: none;
      }
      
      .scrollbar-minimal::-webkit-scrollbar-thumb:hover {
        background-color: rgba(148, 163, 184, 0.5);
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (navRef.current) {
        const navRect = navRef.current.getBoundingClientRect();
        const vh = window.innerHeight;
        setNavHeight(navRect.height);
        setViewportHeight(`${vh - navRect.height}px`);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [navRef]);

  return (
    <div className="w-full relative" style={{ minHeight: viewportHeight }}>
      {/* Main content container */}
      <div className="flex flex-col justify-between w-full" style={{ minHeight: viewportHeight }}>
        
        {/* Bio section with responsive layout */}
        <div className="flex-1 flex items-center px-4 py-8 min-h-0">
          <div className="w-full h-full">
            {/* Mobile: centered and scrollable */}
            <div className="block md:hidden w-full h-full flex items-center justify-center">
              <div 
                className="items-center w-full max-w-lg overflow-y-auto scrollbar-minimal"
                style={{ 
                  maxHeight: 'calc(100vh - 200px)',
                  paddingRight: '8px'
                }}
              >
                <h1 className="text-3xl text-slate-100 font-bold outline outline-slate-200 w-fit p-2 bg-slate-200 bg-opacity-30 mb-4 mx-auto">
                  Hi! I&apos;m Anthony Qin
                </h1>
                
                <div className="px-2">  
                  <p className="text-slate-100 mt-3 text-sm">
                    Hi! I&apos;m Anthony, a backend and cloud engineer who studied Computer Science at UofT. I&apos;m currently a Software Engineer at <a href="https://sideshift.app" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline hover:text-blue-200">SideShift</a>, where I&apos;m leading the migration of the platform&apos;s data layer from Firestore to PostgreSQL. I love blending technical precision with great user experiences.
                  </p>

                  <p className="text-slate-100 mt-3 text-sm">
                    Off the clock, I&apos;m either snowboarding, lifting, playing trading card games, or working on my own game projects.
                  </p>
                  
                  <div className="mt-6 pb-4 text-center">
                    <a 
                      href="mailto:anthony.qin@mail.utoronto.ca" 
                      className="text-blue-300 underline z-50 text-sm"
                    >
                      Contact Me!📧
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop: original left-aligned layout */}
            <div className="hidden md:flex items-center">
              <div className="ml-[10%] lg:ml-[20%] items-center">
                <h1 className="text-4xl lg:text-6xl text-slate-100 font-bold outline outline-slate-200 w-fit p-3 bg-slate-200 bg-opacity-30 mb-4">
                  Hi! I&apos;m Anthony Qin
                </h1>
                
                <div className="max-w-[60vw] lg:max-w-[50vw]">
                  <p className="text-slate-100 mt-5 text-base">
                    Hi! I&apos;m Anthony, a backend and cloud engineer who studied Computer Science at UofT. I&apos;m currently a Software Engineer at <a href="https://sideshift.app" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline hover:text-blue-200">SideShift</a>, where I&apos;m leading the migration of the platform&apos;s data layer from Firestore to PostgreSQL. I love blending technical precision with great user experiences.
                  </p>

                  <p className="text-slate-100 mt-5 text-base">
                    Off the clock, I&apos;m either snowboarding, lifting, playing trading card games, or working on my own game projects.
                  </p>
                  
                  <div className="mt-8">
                    <a 
                      href="mailto:anthony.qin@mail.utoronto.ca" 
                      className="text-blue-300 underline z-50 text-base"
                    >
                      Contact Me!📧
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social links - always at bottom */}
        <div className="flex justify-center py-4">
          <div className="flex gap-2">
            <IconButton 
              href="https://github.com/qin2500?tab=repositories" 
              target="_blank" 
              aria-label="GitHub"
              className="hover:scale-110 transition-transform"
            >
              <GitHub fontSize="large" className="text-white" />
            </IconButton>
            
            <IconButton 
              href="https://cn.linkedin.com/in/anthony-qin-719ba1207/" 
              target="_blank" 
              aria-label="LinkedIn"
              className="hover:scale-110 transition-transform"
            >
              <LinkedInIcon fontSize="large" className="text-white" />
            </IconButton>
            
            <IconButton 
              href="https://qin2500.itch.io" 
              target="_blank" 
              aria-label="Itch.io"
              className="hover:scale-110 transition-transform"
            >
              <img 
                src={Itch.src} 
                alt="Itch" 
                className="text-white" 
                style={{ width: '30px', height: '30px' }} 
              />
            </IconButton>
            
            <IconButton 
              href="https://devpost.com/qin2500?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" 
              target="_blank" 
              aria-label="Devpost"
              className="hover:scale-110 transition-transform"
            >
              <img 
                src={Devpost.src} 
                alt="Devpost" 
                className="text-white" 
                style={{ width: '30px', height: '30px' }} 
              />
            </IconButton>
          </div>
        </div>

        {/* Scroll cue */}
        <div className={`flex justify-center pb-6 transition-opacity duration-500 ${scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <button
            onClick={() => experienceRef.current?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="Scroll down to experience"
            tabIndex={scrolled ? -1 : 0}
            className="flex flex-col items-center text-slate-400 hover:text-slate-100 transition-colors duration-200"
          >
            <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
            <KeyboardArrowDownIcon className="animate-bounce mt-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;