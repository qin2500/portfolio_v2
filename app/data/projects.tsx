import IntelliVerse from "@/public/assets/Projects/IntelliVerse_noBanner.png";

export const projects = [
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
  }
];