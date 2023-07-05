function Navbar() {
  const navItems = ["Skill", "Work", "About", "Contact"];
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            PORTFOLIO.
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navItems.map((item, index) => (
                <li key={index} className="nav-item">
                  <a className="nav-link" href={`#${item.toLowerCase()}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <button className="btn btn-outline-success" type="button">
              Resume
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
