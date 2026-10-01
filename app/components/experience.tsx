'use client'
import React, { useState } from "react";
import ExperienceCard from "./experienceCard";
import FadeIn from "./fadeIn";
import { experiences } from "@/app/data/experience";

const Experience = () => {
    const [selected, setSelected] = useState(0);
    const active = experiences[selected];

    return (
        <div className="mt-[4rem] mb-5 w-full px-5">
            <FadeIn>
                <h1 className="text-5xl font-bold mb-10">Work Experience</h1>
            </FadeIn>

            <FadeIn delay={100}>
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Company tabs: horizontal scroller on mobile, vertical list on desktop */}
                    <div
                        role="tablist"
                        aria-label="Work experience"
                        className="flex md:flex-col overflow-x-auto md:overflow-visible scrollbar-minimal md:w-64 shrink-0 border-b md:border-b-0 md:border-l border-slate-700"
                    >
                        {experiences.map((exp, i) => {
                            const isActive = i === selected;
                            return (
                                <button
                                    key={exp.company}
                                    role="tab"
                                    aria-selected={isActive}
                                    aria-controls="experience-panel"
                                    onClick={() => setSelected(i)}
                                    className={`relative shrink-0 whitespace-nowrap md:whitespace-normal text-left px-4 py-3 -mb-px md:mb-0 md:-ml-px border-b-2 md:border-b-0 md:border-l-2 transition-colors duration-200 ${
                                        isActive
                                            ? "border-blue-400 bg-blue-400/10 text-blue-300"
                                            : "border-transparent text-slate-400 hover:text-slate-100 hover:bg-white/5"
                                    }`}
                                >
                                    <span className="block font-semibold">{exp.company}</span>
                                    <span className="hidden md:block text-xs text-slate-500 mt-0.5">{exp.period}</span>
                                </button>
                            );
                        })}
                    </div>

                    <div id="experience-panel" role="tabpanel" className="flex-1 min-w-0">
                        <div key={selected} className="animate-fade-in"><ExperienceCard {...active} /></div>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}

export default Experience;
