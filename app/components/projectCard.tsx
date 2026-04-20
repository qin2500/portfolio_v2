'use client'
import React, { useRef } from "react";

type ProjectCardProps = {
  title: string;
  description: React.ReactNode;
  link: {
    url: string;
    text: string;
  };
  image?: any;
};

const ProjectCard = ({ title, description, link, image }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="relative mb-8 p-5 bg-slate-800 bg-opacity-50 rounded-lg border border-slate-700 hover:border-slate-500 transition-all duration-300 overflow-hidden group"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
        style={{
          background: 'radial-gradient(500px circle at var(--mouse-x, -9999px) var(--mouse-y, -9999px), rgba(59, 130, 246, 0.1), transparent 70%)',
        }}
      />

      <div className="relative z-10 flex flex-col md:flex-row gap-6">
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
