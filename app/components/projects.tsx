import React from "react";
import { projectCards } from "./projectCards.tsx"; // Path to where you saved the data

const Projects = () => {
  return (
    <div className="mt-[4rem] m-5">
      <div>
        <h1 className="text-5xl font-bold">Projects </h1>
        <div className="bg-slate-50 bg-opacity-5 mt-7 p-5 outline-dotted outline-slate-200 rounded-lg">

          {projectCards.map((project, index) => (
            <div key={index} className="m-3 flex flex-col sm:flex-row">

              <div className="mr-5 h-[200px] w-[300px] mt-3 overflow-hidden">
                <img src={project.image.src} alt={project.title} />
              </div>

              <div>
                <div className="flex text-2xl font-bold flex-col w-full">
                  <p>{project.title}</p>
                </div>
                <div className="mt-3">
                  <p>{project.description}</p>
                </div>
                {project.link && (
                  <div className="mt-2">
                    <a
                      href={project.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-fit text-blue-400 hover:text-blue-200 cursor-pointer z-50"
                    >
                      <p className="ml-1 text-blue-300 underline">{project.link.text}</p>
                    </a>
                  </div>
                )}
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Projects;
