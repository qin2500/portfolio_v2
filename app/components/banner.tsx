import { Typography, IconButton } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Itch from '../../public/assets/itch.svg';
import Devpost from '../../public/assets/devpost.svg';
import React, { ReactHTMLElement, useEffect, useState } from "react";

const Banner = ({ navRef }: { navRef: React.RefObject<HTMLDivElement> }) => {
  // Inject minimal scrollbar styles
  React.useEffect(() => {
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
  const [viewportHeight, setViewportHeight] = useState('100vh');
  const [navHeight, setNavHeight] = useState(0);

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
        
        {/* Bio section with scroll for narrow screens */}
        <div className="flex-1 flex items-center justify-center px-4 py-8 min-h-0">
          <div className="max-w-4xl w-full h-full flex items-center">
            <div 
              className="ml-0 sm:ml-[10%] lg:ml-[20%] items-center w-full overflow-y-auto scrollbar-minimal"
              style={{ 
                maxHeight: 'calc(100vh - 200px)', // Reserve space for social links
                paddingRight: '8px' // Space for scrollbar
              }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-6xl text-slate-100 font-bold outline outline-slate-200 w-fit p-2 sm:p-3 bg-slate-200 bg-opacity-30 mb-4">
                Hi! I&apos;m Anthony Qin
              </h1>
              
              <div className="max-w-none sm:max-w-[60vw] lg:max-w-[50vw] pr-2">
                <p className="text-slate-100 mt-3 sm:mt-5 text-sm sm:text-base">
                  Hi! I&apos;m a Computer Science student at the University of Toronto, entering my final year and graduating in Summer 2026. I&apos;m passionate about software development, game design, and artificial intelligence. Currently, I&apos;m working as a Cloud Engineer intern at HOOPP, working on infrastructure automation and scalable systems. I&apos;m actively seeking full-time software engineering opportunities starting in 2026.
                </p>
                
                <p className="text-slate-100 mt-3 sm:mt-5 text-sm sm:text-base">
                  When I&apos;m not coding, you&apos;ll find me snowboarding, biking, or playing card games with friends.
                </p>
                
                <div className="mt-6 sm:mt-8 pb-4">
                  <a 
                    href="mailto:anthony.qin@mail.utoronto.ca" 
                    className="text-blue-300 underline z-50 text-sm sm:text-base"
                  >
                    Contact Me!📧
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social links - always at bottom */}
        <div className="flex justify-center py-4 bg-gradient-to-t from-black/20 to-transparent">
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
      </div>
    </div>
  );
};

export default Banner;