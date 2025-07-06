import React from "react";

type ProjectCardProps = {
  title: string;
  description: React.ReactNode;
  link: {
    url: string;
    text: string;
  };
  image?: any; // Make image optional
};

const ProjectCard = ({ title, description, link, image }: ProjectCardProps) => {
  return (
    <div className="mb-8 p-5 bg-slate-800 bg-opacity-50 rounded-lg border border-slate-700 hover:bg-slate-750 transition-colors">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Conditionally render image if provided */}
        {image && (
          <div className="flex-shrink-0">
            <img 
              src={image.src} 
              alt={title} 
              className="h-48 w-48 rounded-lg object-cover"
            />
          </div>
        )}
        
        <div className="flex-1">
          <div className="text-2xl font-bold mb-3 text-blue-300">
            {title}
          </div>
          <div className="text-slate-200 mb-4">
            {description}
          </div>
          {link && (
            <div>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span className="ml-1 underline">{link.text}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;