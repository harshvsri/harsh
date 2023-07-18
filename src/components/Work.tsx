import { projects } from "../utils/Data";

function Work() {
  return (
    <>
      <div id="work" className="work">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <img
              src={`./${project.name.toLowerCase()}.png`}
              className="card-img card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{project.name}</h5>
              <p className="card-text">{project.about}</p>
              <div className="card-buttons">
                <a href={project.liveLink} className="btn btn-dark m-2">
                  Live Link
                </a>
                <a href={project.sourceCode} className="btn btn-dark m-2">
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Work;
