import React from "react";

import IntelliVerse from "../../public/assets/Projects/IntelliVerse_noBanner.png";
import Galaxia from "../../public/assets/Projects/galaxia.png";

const projects = () => {
    return (
        <div className="mt-[4rem] m-5">
            <div>
                <h1 className="text-5xl font-bold">Projects </h1>
                <div className="bg-slate-50 bg-opacity-5 mt-7 p-5 outline-dotted outline-slate-200 rounded-lg">

                    {/* IntelliVerse */}
                    <div className="m-3 flex flex-col sm:flex-row">

                        <div className="mr-5 h-[200px] w-[300px] mt-3 overflow-hidden ">
                            <img src={IntelliVerse.src} alt="Intelliverse logo"  />
                        </div>

                        <div>
                            <div className="flex text-2xl font-bold flex-col w-full">
                                <p>IntelliVerse, Mobile App</p>
     
                            </div>
                            <div className="mt-3">
                                <p>
                                    A mobile app developed for <span className="text-blue-400">Hack the Valley 7</span> hosted by the University of Toronto. 
                                    IntelliVerse helps users gain insight into the emotions conveyed in their text messages by using a custom trained sentiment analysis model.
                                    The project <span className="text-blue-400">won</span> in two award catagories: Best Discovery Hack and Most Creative Use of Github.
                                </p> 
                            </div>
                            <div className="mt-2">
                                <a href="https://devpost.com/software/intelliverse" target="_blank" rel="noopener noreferrer" className=" w-fit text-blue-400 hover:text-blue-200 cursor-pointer z-50">
                                        <p className="ml-1 text-blue-300 underline">Project Link</p>
                                </a> 
                            </div>
                        </div>
                        
                    </div>

                    {/* Galaxia Bound */}
                    <div className="m-3 flex flex-col sm:flex-row">

                        <div className="mr-5 h-[200px] w-[300px] mt-3 overflow-hidden ">
                            <img src={Galaxia.src} alt="Intelliverse logo"  />
                        </div>

                        <div>
                            <div className="flex text-2xl font-bold flex-col w-full">
                                <p>Galaxia Bound, Video Game</p>
     
                            </div>
                            <div className="mt-3">
                                <p>
                                    Developed in Unity and the overall <span className="text-blue-400">winner</span> of 
                                    the <a href="https://itch.io/jam/scorejam30/rate/2792325" target="_blank" rel="noopener noreferrer"><span className="text-blue-300 underline">ScoreSpace Jam #30</span></a> game jam,
                                     Galaxia Bound is a 2D platformer inspired by Mario Galaxy. 
                                    Players navigate through a series of planets, utilizing unique gravity mechanics to reach the final goal.
                                    The game includes five challenging levels and features a fully functional global leaderboard.
                               </p> 
                            </div>
                            <div className="mt-2">
                                <a href="https://qin2500.itch.io/galaxia-bound" target="_blank" rel="noopener noreferrer" className=" w-fit text-blue-400 hover:text-blue-200 cursor-pointer z-50">
                                        <p className="ml-1 text-blue-300 underline">Play it now on Itch.io</p>
                                </a> 
                            </div>
                        </div>
                        
                    </div>
                     
                </div>
                
            </div>
               
        
        </div>
    );
}

export default projects;