'use client'
import React from "react"

import Navbar from "./components/navBar"
import Banner from "./components/banner"
import Experience from "./components/experience"

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-slate-950 to-slate-900 min-h-screen">
      <Navbar></Navbar>
      <Banner></Banner>

      <div className="text-slate-100 ml-[20%] mr-[20%]">
        <Experience></Experience>
      </div>
      
    </div>
    
  )
}
