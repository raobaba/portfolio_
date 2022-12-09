import React from "react";
import Marquee from "react-fast-marquee";

import "./Skills.css";

import { skillsImage } from "./SkillImage";

const skillsDataFrontend = [
    'HTML',
    'Javascript',
    'CSS',
    'React',
    'Redux',
    'Styled-Components'
]
const skillsDataBackend = [
  'MongoDB',
  'Node JS',
  'MySQL',
  'Postman',
  'Express JS',
  'Npm'
]
const hosting = [
  'Heroku',
  'Git',
  'Netlify'
]
function Skills() {

  const skillBoxStyle = {
    backgroundColor: "white",
  };

  return (
    <div id="skills" className="skills" style={{ backgroundColor: "rgb(40,44,52)" }}>
      <div className="skillsHeader">
        <h2 style={{ color: "#00ade7" }}>Skills</h2>
      </div>
      <div className="skillsContainer">
        <div className="skill--scroll">
          <h1 className="skillsHeader specific">Front End</h1>
          <Marquee
            gradient={false}
            speed={150}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="right"
          >
            {skillsDataFrontend.map((skill, id) => (
              <div className="skill--box" key={id} style={skillBoxStyle}>
                <img src={skillsImage(skill)} alt={skill} />
                <h3 style={{ color: "black" }}>{skill}</h3>
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      <div className="skill--scroll">
        <h1 className="skillsHeader specific">Back End</h1>
        <Marquee
          gradient={false}
          speed={150}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="right"
        >
          {skillsDataBackend.map((skill, id) => (
            <div className="skill--box" key={id} style={skillBoxStyle}>
              <img src={skillsImage(skill)} alt={skill} />
              <h3 style={{ color: "black" }}>{skill}</h3>
            </div>
          ))}
        </Marquee>
      </div>

      <div className="skill--scroll">
        <h1 className="skillsHeader specific">Hosting Platform</h1>
        <Marquee
          gradient={false}
          speed={150}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="right"
        >
          {hosting.map((skill, id) => (
            <div className="skill--box" key={id} style={skillBoxStyle}>
              <img src={skillsImage(skill)} alt={skill} />
              <h3 style={{ color: "black" }}>{skill}</h3>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;
