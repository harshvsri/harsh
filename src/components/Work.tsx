import { projects } from "./Data";

function Work() {
  return (
    <>
      <div className="work">
        {projects.map((project) => (
          <div className="card">
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
