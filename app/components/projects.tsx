import React from "react";
import ProjectCard from "./projectCard";
import { projects } from "@/app/data/projects.tsx";
import { games } from "@/app/data/games.tsx";

const Projects = () => {
  return (
    <div className="mt-[4rem] m-5">
      <div>
        <h1 className="text-5xl font-bold">Projects</h1>
        
        {/* Software Projects Section */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-5 text-blue-300">Software Projects</h2>
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 bg-opacity-50 p-5 rounded-xl border border-slate-700">
            {projects.map((project, index) => (
              <ProjectCard 
                key={`project-${index}`}
                title={project.title}
                image={project.image}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        </div>

        {/* Game Projects Section */}
        <div className="mt-14">
          <h2 className="text-3xl font-bold mb-5 text-blue-300">Game Projects</h2>
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 bg-opacity-50 p-5 rounded-xl border border-slate-700">
            {games.map((game, index) => (
              <ProjectCard 
                key={`game-${index}`}
                title={game.title}
                image={game.image}
                description={game.description}
                link={game.link}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
