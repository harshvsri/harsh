import { projects } from "../utils/Data";
import Card from "./ProjectCard";

function Work() {
  return (
    <>
      <div id="work" className="projects">
        {projects.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </>
  );
}

export default Work;
