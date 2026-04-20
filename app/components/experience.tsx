import React from "react";
import ExperienceCard from "./experienceCard";
import FadeIn from "./fadeIn";

const experience = () => {
    return (
        <div className="mt-[4rem] m-5">
            <div>
                <FadeIn>
                    <h1 className="text-5xl font-bold mb-10">Work Experience</h1>
                </FadeIn>
                <div className="space-y-6">
                    <FadeIn delay={100}>
                        <ExperienceCard
                            title="Founding Full Stack Software Engineer"
                            company="UMA"
                            period="December 2025 – Present"
                            description="Architected and managed the entire AWS cloud ecosystem solo, designing the infrastructure to support high-availability production workloads and seamless device-to-cloud communication. Directed the initial development of the Admin, Operator, and User web portals, establishing the core architecture and codebase for the company's entire web suite. Engineered a centralized backend API architecture to synchronize real-time data across IoT vending machines and web interfaces, enabling remote device management and automated reporting. Collaborated with hardware engineers to define communication protocols and integration standards between embedded systems and cloud services."
                        />
                    </FadeIn>

                    <FadeIn delay={150}>
                        <ExperienceCard
                            title="Cloud Engineer Co-op"
                            company="HOOPP"
                            companyUrl="https://hoopp.com"
                            period="May 2025 - Present"
                            description="I supported the design and maintenance of scalable infrastructure systems. My work involved automating workflows, troubleshooting deployment pipelines, and contributing to internal tooling that improved cloud reliability and security. I also worked with group policy management, ServiceNow, and SQL Server tools to support operational efficiency across teams."
                        />
                    </FadeIn>

                    <FadeIn delay={200}>
                        <ExperienceCard
                            title="Machine Learning Intern"
                            company="Themis AI"
                            period="May 2025 - September 2025"
                            description="I engineered a full-stack interactive image segmentation and classification interface for a data-labeling platform powered by CAPSA (uncertainty quantification) and ActiveLab (active learning). As part of this work, I implemented API integrations to fetch uncertain images identified by ActiveLab for annotation and return labeled data for continuous model retraining. I also enhanced the annotation workflow by improving usability, responsiveness, and the efficiency of data transfer between the frontend and backend."
                        />
                    </FadeIn>

                    <FadeIn delay={250}>
                        <ExperienceCard
                            title="Undergraduate Researcher - Procedural Generation Research Project"
                            company="University of Toronto / Diamond Schmitt"
                            period="January 2025 - Present"
                            description="I designed and implemented a constraint-based floor map generation system using the Hierarchical Wave Function Collapse algorithm. This involved applying principles of constraint satisfaction, data modeling, and algorithmic optimization to procedurally generate realistic floor plans. I presented the working prototype to Diamond Schmitt Architects, which led to discussions around potential collaboration and access to real architectural diagrams for further development."
                        />
                    </FadeIn>

                    <FadeIn delay={300}>
                        <ExperienceCard
                            title="Intern, Software Engineer, HCI & AI"
                            company="Autodesk Research"
                            companyUrl="https://www.research.autodesk.com/research-areas/science/#human"
                            period="May - August 2024"
                            description="Developed a web-based prototype using Next.js, LangChain, and React Flow to help authors visualize and analyze their stories. By leveraging large language models, I automated the extraction of narrative elements, enabling the creation of digital storyboards. Collaborated closely with my research manager to refine project direction, focusing on providing innovative perspectives for authors. Designed a flexible software architecture that facilitated rapid prototyping and adaptation to evolving project needs."
                        />
                    </FadeIn>

                    <FadeIn delay={350}>
                        <ExperienceCard
                            title="Full Stack Engineer Co-op"
                            company="Manulife"
                            period="January - April 2023"
                            description="Built a fullstack internal dashboard application from scratch using Spring Boot and React.js, greatly improving the collaboration between different departments. Also, provided application support on existing projects by configuring servers using Putty, insuring that the application is running smoothly when needed and assisted with development of automation scripts using PowerShell and C, dramatically improving the efficiency of my team."
                        />
                    </FadeIn>
                </div>
            </div>
        </div>
    );
}

export default experience;
