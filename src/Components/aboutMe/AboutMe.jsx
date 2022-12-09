import React,{useEffect} from "react";
import "./AboutMe.css";
import FeelingProud from "../greetings/FeelingProud";
import AOS from "aos";
export default function AboutMe() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div id="about">
      <div id="AboutMe-parent">
        <p>Who I am</p>
        <div className="parent">
          <div>
            <div className="paragraph" >
              <p>
                My name is Rajan Kumar. I'm a aspiring Full-Stack Web-Developer
                based in Masai School, Bengaluru.
              </p>
              <p>
                I am a B.Sc graduate in Math(Honours) from Magadh University Bodh 
                Gaya Bihar. love exploring new technologies in the field of Web 
                Development and always try to adapt to it.I believe in the concept 
                of continuous learning by regularly upgrading my skills and 
                enhancing my knowledge.I have learned MERN stack,data structures,
                algorithms, and soft skills at Masai School. As a developer, my 
                hunger for learning has drastically increased.And I want to 
                centralize my skills and learning for enhancement of an organization
                and more of it, to enhance my career. And besides coding,
                I love singing, Playing Cricket, traveling and exploring new places.
              </p>
            </div>
          </div>
          <div className="animation">
            <FeelingProud />
          </div>
        </div>
      </div>
    </div>
  );
}
