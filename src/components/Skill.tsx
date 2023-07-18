import { skills } from "../utils/Data";

function Skill() {
  return (
    <>
      <div id="skill" className="skill">
        <div>
          {skills.map((set, index) => (
            <div key={index}>
              {set.skillName.map((skill, index) => (
                <iconify-icon
                  key={index}
                  icon={`devicon:${skill}`}
                ></iconify-icon>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skill;
