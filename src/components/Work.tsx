function Work() {
  const projects = [
    {
      name: "Sketch Pad",
      img: "/sketchpad.png",
      about: "This is basic",
      liveLink: "",
      sourceCode: "",
    },
    {
      name: "ShoeKart",
      img: "/shoekart.png",
      about: "This is basic game",
      liveLink: "",
      sourceCode: "",
    },
    {
      name: "ShoeKart",
      img: "/shoekart.png",
      about: "This is basic game",
      liveLink: "",
      sourceCode: "",
    },
    {
      name: "ShoeKart",
      img: "/shoekart.png",
      about: "This is basic game",
      liveLink: "",
      sourceCode: "",
    },
    {
      name: "ShoeKart",
      img: "/shoekart.png",
      about: "This is basic game",
      liveLink: "",
      sourceCode: "",
    },
    {
      name: "ShoeKart",
      img: "/shoekart.png",
      about: "This is basic game",
      liveLink: "",
      sourceCode: "",
    },
  ];

  return (
    <>
      <div className="work">
        {projects.map((project) => (
          <div className="card">
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
