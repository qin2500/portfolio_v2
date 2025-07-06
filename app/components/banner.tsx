import { Typography , IconButton} from "@mui/material";
import { GitHub } from "@mui/icons-material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Itch from '../../public/assets/itch.svg';
import Devpost from '../../public/assets/devpost.svg';
import { ReactHTMLElement, useEffect, useState } from "react";

const Banner = ({navRef} : {navRef:  React.RefObject<HTMLDivElement>}) => {
    const [maxHeight, setMaxHeight] = useState('100vh');
    useEffect(() => {
        const handleResize = () => {
          if (navRef.current) {
            const navHeight = navRef.current.getBoundingClientRect().height;
            const viewportHeight = window.innerHeight;
            setMaxHeight(`${viewportHeight - navHeight}px`);
          }
        };
    
        handleResize();
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return(
        <div className="w-full">
            <div className='flex  items-center w-full'
                style={{height: '90vh'}}>
                <div className="ml-[20%] items-center mt-10">
                    <h1 className="text-6xl text-slate-100 font-bold outline outline-slate-200 w-fit p-3 bg-slate-200 bg-opacity-30 mr-10">
                        Hi! I&apos;m Anthony Qin
                    </h1>
                                        
                    <p className="text-slate-100 w-[50vw] mt-5">
                    Hi! I&apos;m a Computer Science student at the University of Toronto, entering my final year and graduating in Summer 2026. 
                    I&apos;m passionate about software development, game design, and artificial intelligence. 
                    Currently, I&apos;m working as a Cloud Engineer intern at HOOPP, working on infrastructure automation and scalable systems. 
                    {/* Over the past few years, I&apos;ve also worked on projects ranging from generative design tools to AI-powered storytelling systems.  */}
                    I&apos;m actively seeking full-time software engineering opportunities starting in 2026.
                    </p>
                    <br />
                    <p className="text-slate-100 w-[50vw] mt-5">                   
                    When I&apos;m not coding, you&apos;ll find me snowboarding, biking, or playing card games with friends.
                    {/* Let&apos;s connect and build something awesome together! */}
                    </p>

                    <div className="mt-8">
                        <a href="mailto:anthony.qin@mail.utoronto.ca" className="text-blue-300 underline z-50">
                            Contact Me!📧
                        </a>
                    </div>
                    
                    
                </div>
                
            </div>

            <div className="flex justify-center mt-5 ">
                <IconButton href="https://github.com/qin2500?tab=repositories" target="_blank" aria-label="git"  >
                    <GitHub fontSize="large" className="text-white" />
                </IconButton>
                <IconButton href="https://cn.linkedin.com/in/anthony-qin-719ba1207/" target="_blank" aria-label="linked in">
                    <LinkedInIcon fontSize="large" className="text-white" />
                </IconButton>
                <IconButton href="https://qin2500.itch.io" target="_blank" aria-label="itch.io">
                    <img src={Itch.src} alt="Itch" className="text-white" style={{width: '30px', height: '30px'}} />
                </IconButton>
                <IconButton href="https://devpost.com/qin2500?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank" aria-label="itch.io">
                    <img src={Devpost.src} alt="Itch" className="text-white" style={{width: '30px', height: '30px'}} />
                </IconButton>
            </div>

        </div>
    );
}

export default Banner;