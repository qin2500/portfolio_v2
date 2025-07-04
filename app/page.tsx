'use client'
import React, {useRef} from "react"

import CursorSpotlight from "./components/cursorSpotlight"
import Navbar from "./components/navBar"
import Banner from "./components/banner"
import Experience from "./components/experience"
import Projects from "./components/projects"
import Footer from "./components/footer"

export default function Home() {
  const navRef = useRef(null);
  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  return (
    <div className="bg-gradient-to-b from-slate-950 to-slate-900 min-h-screen h-full relative overflow-hidden">
      <CursorSpotlight />
      <div ref={navRef}><Navbar homeRef={homeRef} experienceRef={experienceRef} projectsRef={projectsRef}></Navbar></div>
      <div ref={homeRef} className="flex-grow"><Banner navRef={navRef}></Banner></div>

      <div className="text-slate-100 flex flex-col items-center max-w-[1300px] mx-auto mb-[5%] relative z-10">
        <div ref={experienceRef}><Experience></Experience> </div>
        <div ref={projectsRef}><Projects></Projects></div>
        
        <Footer></Footer>
      </div>
      
    </div>
    
  )
}
