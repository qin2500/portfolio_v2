import React from "react";

type ProjectCardProps = {
  title: string;
  image: any;
  description: React.ReactNode;
  link: {
    url: string;
    text: string;
  };
};

const ProjectCard = ({ title, image, description, link }: ProjectCardProps) => {
  return (
    <div className="flex flex-col sm:flex-row mb-8">
      <div className="mr-5 h-[200px] w-[300px] mt-3 overflow-hidden">
        <img src={image.src} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="flex-1">
        <div className="flex text-2xl font-bold flex-col w-full">
          <p>{title}</p>
        </div>
        <div className="mt-3">
          <p>{description}</p>
        </div>
        {link && (
          <div className="mt-2">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit text-blue-400 hover:text-blue-200 cursor-pointer z-50"
            >
              <p className="ml-1 text-blue-300 underline">{link.text}</p>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;