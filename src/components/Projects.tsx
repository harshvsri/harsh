import { projects } from "../utils/Data";
import Card from "./Card";

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
