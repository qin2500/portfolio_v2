import React from "react";

type ExperienceCardProps = {
  title: string;
  company: string;
  companyUrl?: string;
  period: string;
  description: string;
};

const ExperienceCard = ({ title, company, companyUrl, period, description }: ExperienceCardProps) => {
  return (
    <div className="mb-8 p-5 bg-slate-800 bg-opacity-50 rounded-lg border border-slate-700 hover:bg-slate-750 transition-colors">
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
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;