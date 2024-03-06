import { Icon } from "@iconify/react";
import { hobbies } from "../utils/Data";

function About() {
  return (
    <>
      <div id="about" className="about">
        <div>
          <h1>About Me...</h1>
          <p>
            I'm currently pursuing my bachelors in Computer Science and
            Engineering from University of Lucknow.
            <br />
            I love learning new things and experimenting with cutting-edge tools
            and frameworks to create modern, responsive, and user-friendly
            websites.
            <br />
            Beyond the keyboard, I'm also into fitness
            <Icon icon={hobbies.gym} />, hitting the gym regularly, and I'm
            always up for a game of chess <Icon icon={hobbies.chess} /> or
            badminton
            <Icon icon={hobbies.badminton} />. Oh, and did I mention I'm a
            casual online gamer <Icon icon={hobbies.gaming} /> too? Let's
            connect and maybe even challenge each other to a match sometime!
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
