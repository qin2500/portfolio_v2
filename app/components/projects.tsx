import React from "react";
import ProjectCard from "./projectCard";
import FadeIn from "./fadeIn";
import { projects } from "@/app/data/projects";
import { games } from "@/app/data/games";

const Projects = () => {
  return (
    <div className="mt-[4rem] m-5">
      <div>
        <FadeIn>
          <h1 className="text-5xl font-bold mb-10">Projects</h1>
        </FadeIn>

        <div className="mt-10">
          <FadeIn delay={50}>
            <h2 className="text-3xl font-bold mb-5 text-blue-300">Software Projects</h2>
          </FadeIn>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <FadeIn key={`project-${index}`} delay={100 + index * 80}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  link={project.link}
                />
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <FadeIn delay={50}>
            <h2 className="text-3xl font-bold mb-5 text-blue-300">Game Projects</h2>
          </FadeIn>
          <div className="space-y-6">
            {games.map((game, index) => (
              <FadeIn key={`game-${index}`} delay={100 + index * 80}>
                <ProjectCard
                  title={game.title}
                  description={game.description}
                  link={game.link}
                  image={game.image}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
