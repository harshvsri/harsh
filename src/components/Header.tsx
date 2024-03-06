import { useState } from "react";

function NavBar() {
  const [linksClass, setBtnClass] = useState("links");
  const navItems = ["Skill", "Work", "About", "Contact"];

  function handleClick() {
    setBtnClass(linksClass === "links" ? "links active" : "links");
  }

  return (
    <nav>
      <div className="heading">PORTFOLIO.</div>
      <a href="#" className="toggle-btn" onClick={handleClick}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className={linksClass}>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
          <li>
            <a href="/resume.pdf">Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
