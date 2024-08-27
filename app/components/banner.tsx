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
                        A 4th year student at the University of Toronto studying software Engineering. 
                        I&apos;m passionate about software development, machine learning, and game development. 
                        I recently completed my internship at Autodesk Research, and currently seeking opertunities in 2025.
                        So, let&apos;s connect and build something amazing together! When I&apos;m not coding, you&apos;ll find me snowboarding, biking, or enjoying card games with friends.
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