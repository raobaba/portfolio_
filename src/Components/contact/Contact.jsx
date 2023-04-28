import React from "react";
import "./Contact.css";
import phone from "../images/phone.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faContactBook,
  faCompass,
} from "@fortawesome/free-regular-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import download from "../download/Rajan-Kumar-Resume.pdf";

export default function Contact() {
  function handleClick() {
    window.open(
      "https://drive.google.com/file/d/1YZ1d8-lA_lQdqeM6ZL8KCBbJ4sNjpSHc/view?usp=share_link",
      "_blank"
    );
  }
  return (
    <div id="Contact">
      <p>Contact</p>
      <div className="contact-container">
        <div className="phone-container">
          <img src={phone} alt="phone" />
          <br />
          <div id="button" style={{ marginTop: "0px" }}>
            <a href={download} download="Rajan-Kumar-Resume">
              <button onClick={handleClick}>Resume</button>
            </a>
          </div>
        </div>
        <div className="detail-container">
          <div className="resize">
            <div className="boxes">
              <a href="https://www.linkedin.com/in/kumar-rajan/" target="_blank">
                <FontAwesomeIcon
                  className="abc"
                  color="rgb(14, 118, 168)"
                  icon={faLinkedinIn}
                ></FontAwesomeIcon>
              </a>
              <div>
                <a
                  href="https://www.linkedin.com/in/kumar-rajan/"
                  target="_blank"
                >
                  <p>Rajan Kumar</p>
                </a>
              </div>
            </div>
            <div className="boxes">
              <a href="https://github.com/raobaba" target="_blank">
                <FontAwesomeIcon
                  color="black"
                  icon={faGithub}
                ></FontAwesomeIcon>
              </a>
              <div>
                <a href="https://github.com/raobaba" target="_blank">
                  <p>raobaba</p>
                </a>
              </div>
            </div>
            <div className="boxes">
              <a href="https://twitter.com/RajanRao7061" target="_blank">
                <FontAwesomeIcon
                  color="black"
                  icon={faTwitter}
                ></FontAwesomeIcon>
              </a>
              <div>
                <a href="https://twitter.com/RajanRao7061" target="_blank">
                  <p>RajanRao7061</p>
                </a>
              </div>
            </div>
            <div className="boxes">
              <a href="mailto:raorajan9576@gmail.com">
                <FontAwesomeIcon color="rgb(255, 0, 76)" icon={faEnvelope} />
              </a>
              <div>
                <a href="mailto:raorajan9576@gmail.com" target="_blank">
                  <p>raorajan9576@gmail.com</p>
                </a>
              </div>
            </div>
            <div className="boxes">
              <a href="tel:+917985152748">
                <FontAwesomeIcon color="teal" icon={faContactBook} />
              </a>
              <div>
                <a href="tel:+917061344366" target="_blank">
                  <p>+91-7061344366</p>
                </a>
              </div>
            </div>
            <div className="boxes">
              <a href="https://en.wikipedia.org/wiki/Siwan,_Bihar" target="_blank">
                <FontAwesomeIcon color="orangered" icon={faCompass} />
              </a>
              <div>
                <a href="https://en.wikipedia.org/wiki/Siwan,_Bihar" target="_blank">
                  <p>Siwan , Bihar</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
