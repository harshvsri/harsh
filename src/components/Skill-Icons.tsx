import { Icon } from "@iconify/react";
import { skills } from "../utils/Data";

function Skill() {
  return (
    <div>
      <div id="skill" className="skill-icons">
        {skills.map((skill, index) => (
          <Icon className="icon" key={index} icon={`skill-icons:${skill}`} />
        ))}
      </div>
    </div>
  );
}

export default Skill;
