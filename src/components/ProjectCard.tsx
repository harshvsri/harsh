import { Icon } from "@iconify/react";

interface Project {
  name: string;
  about: string;
  techUsed: string[];
  liveLink: string;
  sourceCode: string;
}

function Card(project: Project) {
  return (
    <div className="card">
      <img
        src={`./${project.name.toLowerCase()}.png`}
        className="card-img"
      ></img>
      <div className="card-info">
        <h3 className="card-title">{project.name.toUpperCase()}</h3>
        <p className="card-text">{project.about}</p>
        <div className="card-tech">
          {project.techUsed.map((tech, index) => (
            <Icon className="icon" key={index} icon={`skill-icons:${tech}`} />
          ))}
        </div>
        <div className="card-buttons">
          <a href={project.liveLink} className="btn btn-dark">
            Live Link
          </a>
          <a href={project.sourceCode} className="btn btn-dark">
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
