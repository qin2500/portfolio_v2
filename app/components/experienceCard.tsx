'use client'
import React, { useRef } from "react";

type ExperienceCardProps = {
  title: string;
  company: string;
  companyUrl?: string;
  period: string;
  description?: string;
  bullets?: string[];
};

const ExperienceCard = ({ title, company, companyUrl, period, description, bullets }: ExperienceCardProps) => {
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

      <div className="relative z-10">
        <div className="flex text-2xl font-bold flex-col w-full">
          <p>{title}</p>
          {companyUrl ? (
            <a href={companyUrl} target="_blank" rel="noopener noreferrer" className="w-fit text-blue-400 hover:text-blue-200 cursor-pointer">
              <p className="ml-1 text-blue-400 underline">@{company}</p>
            </a>
          ) : (
            <p className="ml-1 text-blue-400">@{company}</p>
          )}
        </div>
        <p className="flex text-lg font-bold">{period}</p>
        <div className="mt-3">
          {bullets ? (
            <ul className="list-disc list-inside space-y-1">
              {bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          ) : (
            <p>{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
