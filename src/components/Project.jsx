import { useState } from "react";
import tilesImage from '../assets/tiles.png';
import travelImage from '../assets/travel.png';
import expenseImage from '../assets/expense.png';

const Portfolio = () => {
  const [projects] = useState([
    {
      id: 1,
      name: "Tiles Shop Management System",
      image: tilesImage,
      link: "https://github.com/PraveenChavan-11/Tiles-Shop-Management-System",
      languages: ["C#", ".NET Framework"],
      techUsed: ["Microsoft SQL"],
    },
    {
      id: 2,
      name: "Travel Blog",
      image: travelImage,
      link: "https://github.com/PraveenChavan-11/TravelBlog",
      languages: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP"],
      techUsed: ["ProcessWire", "MySQL"],
    },
    {
      id: 3,
      name: "Expense Tracker",
      image: expenseImage,
      link: "https://github.com/PraveenChavan-11/ExpenseTracker",
      languages: ["MERN Stack"],
      techUsed: ["MongoDB", "Express.js", "React", "Node.js"],
    },
  ]);

  return (
    <div className="lg:mx-12 mx-4 my-10" id="project">
      <div className="mb-10">
        <h2 className="md:text-5xl text-4xl text-center text-headingcolor font-bold">
          My <span>Projects</span>
        </h2>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
          {projects.map((project) => (
            <div key={project.id} className="shadow-xl rounded-lg">
              <img src={project.image} alt={project.name} />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-2">
                  <span>{project.name}</span>
                </h3>
                <p className="mb-2">Languages: {project.languages.join(", ")}</p>
                <p className="mb-4">Tech Used: {project.techUsed.join(", ")}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-8"
                >
                  <span>View Project</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;