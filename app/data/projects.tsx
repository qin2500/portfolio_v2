import IntelliVerse from "@/public/assets/Projects/IntelliVerse_noBanner.png";

export const projects = [
  {
    title: "Procedural Floor Plan Generation with Hierarchical Wave Function Collapse",
    image: null,
    description: (
      <>
        This is the prototype I created during my undergraduate research placement. 
        It features a backend algorithm written in Python with visuals powered by Pygame, 
        along with a plugin for Revit that allows users to export floor plans for use in the generator.
      </>
    ),
    link: {
      url: "https://github.com/qin2500/HWFC_floor_plan_generation",
      text: "GitHub"
    }
  },
  {
    title: "IntelliVerse, Mobile App",
    image: IntelliVerse,
    description: (
      <>
        A mobile app developed for <span className="text-blue-400">Hack the Valley 7</span> hosted by the University of Toronto.
        IntelliVerse helps users gain insight into the emotions conveyed in their text messages by using a custom trained sentiment analysis model.
        The project <span className="text-blue-400">won</span> in two award categories: Best Discovery Hack and Most Creative Use of Github.
      </>
    ),
    link: {
      url: "https://devpost.com/software/intelliverse",
      text: "Project Link"
    }
  },
  
];