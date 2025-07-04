import Galaxia from "@/public/assets/Projects/galaxia.png";
import Mirror from "@/public/assets/Projects/mirror.png";

export const games = [
  {
    title: "Mirror's Memento",
    image: Mirror,
    description: (
      <>
        I contributed to the development of Mirror&apos;s Memento, a Unity-based 3D puzzle game. 
        As part of a 12-person team, I assisted with the design and implementation a key systems such as dynamic controller support, and grid movement.
        The game is currently in open beta on itch.io, where we actively incorporate player feedback to enhance the gameplay experience.
      </>
    ),
    link: {
      url: "https://kleinkodes.itch.io/doppelganger",
      text: "Play it now on Itch.io"
    }
  },
  {
    title: "Galaxia Bound",
    image: Galaxia,
    description: (
      <>
        Developed in Unity and the overall <span className="text-blue-400">winner</span> of 
        the <a href="https://itch.io/jam/scorejam30/rate/2792325" target="_blank" rel="noopener noreferrer">
          <span className="text-blue-300 underline">ScoreSpace Jam #30</span>
        </a> game jam,
        Galaxia Bound is a 2D platformer inspired by Mario Galaxy.
        Players navigate through a series of planets, utilizing unique gravity mechanics to reach the final goal.
        The game includes five challenging levels and features a fully functional global leaderboard.
      </>
    ),
    link: {
      url: "https://qin2500.itch.io/galaxia-bound",
      text: "Play it now on Itch.io"
    }
  }
];