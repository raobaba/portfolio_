import React, { useEffect } from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import download from "../download/Rajan-Kumar-Resume.pdf";
import Typewriter from "typewriter-effect";
export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  function handleClick(){
    window.open("https://drive.google.com/file/d/1YZ1d8-lA_lQdqeM6ZL8KCBbJ4sNjpSHc/view?usp=share_link",'_blank');
}
  return (
    <div id="home"  className="about about.about.section">
      <div id="user-detail-name" className="about-container about.about.section">
        <div id="user-detail-name" className="left about.about.section" data-aos="fade-up">
          <p className="hello">Hello 👋.</p>
          <p className="intro">
            I'm
            <span id="name" >
              <Typewriter
                options={{
                  strings: ["Rajan Kumar "],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </p>
          <div id="user-detail-name" className="type about.about.section">
            <Typewriter
              options={{
                strings: [
                  "Full-Stack Web Developer !",
                  "Tech Enthusiast,",
                  "Life-Long Learner.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="links">
            <div className="github">
              <a href="https://github.com/raobaba" target="_blank">
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
              </a>
            </div>
            <div className="linkedin">
              <a href="https://www.linkedin.com/in/kumar-rajan/" target="_blank">
                <FontAwesomeIcon
                  className="abc"
                  icon={faLinkedinIn}
                ></FontAwesomeIcon>
              </a>
            </div>
            <div className="envelope">
              <a href="mailto:raorajan9576@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
          <div id="button">
            <a href={download} download="Rajan-Kumar-Resume">
              <button onClick={handleClick}>Resume</button>
            </a>
          </div>
        </div>
        <div className="about-img home-img" data-aos="fade-up">
          <img src="https://avatars.githubusercontent.com/u/99542983?v=4" alt="RaoBaBa" />
        </div>
      </div>
    </div>
  );
}
