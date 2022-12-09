import React from "react";
import "./certificates.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StyledSlider } from "./Box.styled.js";
import CSS from "../images/css1.png";
import Basic from "../images/basic1.png";
import Intermediate from "../images/intermediate1.png";

export default function Certificates() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
  };
  return (
    <div id="certificates" className="certificates-container">
      <p>Certificate</p>
      <StyledSlider {...settings}>
        <div className="box">
          <div className="cert1">
            <div className="cert2">
              <img src={CSS} alt="css" />
            </div>
            <div className="cert2">
              <h2>Cascading Style Sheets <br />(Basic) </h2>
              <p>Issued Oct 2022 -: No Expiration Date</p>
              <p>Credential Id:- E9C29F7B9DC6</p>
              <button>
              <a href="https://www.hackerrank.com/certificates/e9c29f7b9dc6">View</a>
              </button>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="cert1">
            <div className="cert2">
              <img src={Basic} alt="basic" width="100%" height="100%" />
            </div>
            <div className="cert2">
              <h2>Problem Solving Certificate <br /> (Basic) </h2>
              <p>Issued Oct 2022 :-: No Expiration Date</p>
              <p>Credential Id:- EFC41D56C1E6</p>
              <button>
              <a href="https://www.hackerrank.com/certificates/efc41d56c1e6">View</a>
              </button>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="cert1">
            <div className="cert2">
              <img src={Intermediate} alt="intermediate" width="100%" height="100%" />
            </div>
            <div className="cert2">
              <h2>Problem Solving Certificate <br />(Intermediate) </h2>
              <p>Issued Oct 2022 :-: No Expiration Date</p>
              <p>Credential Id:- 96FEC3490E7F</p>
              <button>
              <a href="https://www.hackerrank.com/certificates/96fec3490e7f">View</a>
              </button>
            </div>
          </div>
        </div>
      </StyledSlider>
    </div>
  );
}
