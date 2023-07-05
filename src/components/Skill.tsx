import { skills } from "./Data";

function Skill() {
  return (
    <>
      <div id="skill" className="skill">
        <div>
          {skills.map((set) => (
            <div>
              {set.skillName.map((skill) => (
                <iconify-icon icon={`devicon:${skill}`}></iconify-icon>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skill;
