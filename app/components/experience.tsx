import React from "react";

const experience = () => {
    return (
        <div className="mt-[4rem] m-5">
            <div>
                <h1 className="text-5xl font-bold">Work Experience</h1>
                <div className="bg-slate-50 bg-opacity-5 mt-7 p-5 outline-dotted outline-slate-200 rounded-lg">
                    {/* Autodesk */}
                    <div className="m-3">
                        <div className="flex text-2xl font-bold flex-col w-full">
                            <p>Intern, Software Engineer, HCI & AI</p>
                            <a href="https://www.research.autodesk.com/research-areas/science/#human" target="_blank" rel="noopener noreferrer" className=" w-fit text-blue-400 hover:text-blue-200 cursor-pointer">
                                <p className="ml-1 text-blue-400 underline">@Autodesk Research</p>
                            </a>        
                        </div>
                        <p className="flex text-lg font-bold">May - August 2024</p>
                         <div className="mt-3">
                            <p>
                                Built and styled an interactive web based Ai-driven prototype for Autodesk Research's HCI and Data Visualization team using Next.js.
                            </p>
                         </div>
                    </div>

                    {/* Manulife */}
                    <div className="m-3 mt-10">
                        <div className="flex text-2xl font-bold flex-col">
                            <p>Full Stack Engineer Co-op</p>
                            <p className="ml-1 text-blue-400">@Manulife</p>

                        </div>
                        <p className="flex text-lg font-bold">January - April 2023</p>
                         <div className="mt-3">
                            <p>
                                Built a fullstack internal dashboard application from scratch using Spring Boot and React.js, greatly improving the collaboration between different departments.

                                Also, provided application support on existing projects by configuring servers using Putty, insuring that the application is running smoothly when needed 

                                and assisted with development of automation scripts using PowerShell and C, dramatically improving the efficiency of my team.                            
                            </p>
                         </div>
                    </div>
                     
                </div>
                
            </div>
               
        
        </div>
    );
}

export default experience;