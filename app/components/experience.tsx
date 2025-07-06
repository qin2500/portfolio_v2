import React from "react";

const experience = () => {
    return (
        <div className="mt-[4rem] m-5">
            <div>
                <h1 className="text-5xl font-bold mb-5">Work Experience</h1>
                <div className="bg-gradient-to-r from-slate-800 to-slate-900 bg-opacity-50 p-5 rounded-xl border border-slate-700 shadow-lg">
                    {/* University of Toronto / Diamond Schmitt */}
                    <div className="m-3 mb-8">
                        <div className="flex text-2xl font-bold flex-col w-full">
                            <p>Undergraduate Researcher – Procedural Generation Research Project</p>
                                <p className="ml-1 text-blue-400">@University of Toronto / Diamond Schmitt</p>
                                    
                        </div>
                        <p className="flex text-lg font-bold">May - August 2024</p>
                         <div className="mt-3">
                            <p>
                            I designed and implemented a constraint-based floor map generation system
                             using the Hierarchical Wave Function Collapse algorithm. This involved applying
                              principles of constraint satisfaction, data modeling, and algorithmic optimization 
                              to procedurally generate realistic floor plans. I presented the working prototype to 
                              Diamond Schmitt Architects, which led to discussions around potential collaboration and access 
                              to real architectural diagrams for further development.                            
                            </p>
                         </div>
                    </div>
                    {/* Autodesk */}
                    <div className="m-3 mb-8">
                        <div className="flex text-2xl font-bold flex-col w-full">
                            <p>Intern, Software Engineer, HCI & AI</p>
                            <a href="https://www.research.autodesk.com/research-areas/science/#human" target="_blank" rel="noopener noreferrer" className=" w-fit text-blue-400 hover:text-blue-200 cursor-pointer">
                                <p className="ml-1 text-blue-400 underline">@Autodesk Research</p>
                            </a>        
                        </div>
                        <p className="flex text-lg font-bold">May - August 2024</p>
                         <div className="mt-3">
                            <p>
                                Developed a web-based prototype using Next.js, LangChain, and React Flow to help authors visualize
                                and analyze their stories. By leveraging large language models, I automated the extraction of narrative 
                                elements, enabling the creation of digital storyboards. Collaborated closely with my research manager 
                                to refine project direction, focusing on providing innovative perspectives for authors. 
                                Designed a flexible software architecture that facilitated rapid prototyping and adaptation to evolving 
                                project needs.                            
                            </p>
                         </div>
                    </div>

                    {/* Manulife */}
                    <div className="m-3 mb-8">
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