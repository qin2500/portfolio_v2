export interface Experience {
  title: string;
  company: string;
  companyLink?: string;
  period: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    title: "Intern, Software Engineer, HCI & AI",
    company: "Autodesk Research",
    companyLink: "https://www.research.autodesk.com/research-areas/science/#human",
    period: "May - August 2024",
    description: "Developed a web-based prototype using Next.js, LangChain, and React Flow to help authors visualize and analyze their stories. By leveraging large language models, I automated the extraction of narrative elements, enabling the creation of digital storyboards. Collaborated closely with my research manager to refine project direction, focusing on providing innovative perspectives for authors. Designed a flexible software architecture that facilitated rapid prototyping and adaptation to evolving project needs."
  },
  {
    title: "Intern, Software Engineer, HCI & AI",
    company: "Autodesk Research",
    companyLink: "https://www.research.autodesk.com/research-areas/science/#human",
    period: "May - August 2024",
    description: "Developed a web-based prototype using Next.js, LangChain, and React Flow to help authors visualize and analyze their stories. By leveraging large language models, I automated the extraction of narrative elements, enabling the creation of digital storyboards. Collaborated closely with my research manager to refine project direction, focusing on providing innovative perspectives for authors. Designed a flexible software architecture that facilitated rapid prototyping and adaptation to evolving project needs."
  },
  {
    title: "Full Stack Engineer Co-op",
    company: "Manulife",
    period: "January - April 2023",
    description: "Built a fullstack internal dashboard application from scratch using Spring Boot and React.js, greatly improving the collaboration between different departments. Provided application support on existing projects by configuring servers using Putty, ensuring that the application is running smoothly when needed. Assisted with development of automation scripts using PowerShell and C, dramatically improving the efficiency of my team."
  }
];