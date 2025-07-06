import React from "react";
import ProjectCard from "./projectCard";
import { projects } from "@/app/data/projects";
import { games } from "@/app/data/games";

const Projects = () => {
  return (
    <div className="mt-[4rem] m-5">
      <div>
        <h1 className="text-5xl font-bold mb-10">Projects</h1>
        
        {/* Software Projects Section */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-5 text-blue-300">Software Projects</h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <ProjectCard 
                key={`project-${index}`}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        </div>

        {/* Game Projects Section */}
        <div className="mt-14">
          <h2 className="text-3xl font-bold mb-5 text-blue-300">Game Projects</h2>
          <div className="space-y-6">
            {games.map((game, index) => (
              <ProjectCard 
                key={`game-${index}`}
                title={game.title}
                description={game.description}
                link={game.link}
                image={game.image} // Add image only for games
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
