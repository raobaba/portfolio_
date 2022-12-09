import React from "react";
import "./Projects.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StyledSlider } from "./Box.styled.js";
import SkinStore from "../images/skinstore.gif";
import Orbitz from "../images/orbitz.gif";
import TechHub from "../images/techHub.gif";
import Myntra from "../images/myntra.gif";
export default function Projects() {
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
    <div id="projects" className="projects-container">
      <p>Projects</p>
      <StyledSlider {...settings}>
        <div className="Probox">
          <div className="port1">
            <div className="port2">
              <img src={TechHub} alt="css" width="100%" height="100%" />
            </div>
            <div className="port2">
              <h2>TechHub-Electronics Devices</h2>
              <p style={{textAlign:"center"}}>is an American multinational consumer electronics retailer headquartered in Richfield, Minnesota. Originally founded by Richard M. Schulze and James Wheeler in 1966 as an audio specialty store called Sound of Music,</p>
              <div>
                <h2>Tech Stacks</h2>
                <p style={{textAlign:"center"}}>html css javascript reactjs react-redux firebase</p>
              </div>
              <div>
              <button>
              <a href="techhub-original.netlify.app/">Visit</a>|
              </button>
              <button>
                <a href="https://github.com/raobaba/united-cobweb-7806">Github</a>
              </button>
              </div>
            </div>
          </div>
        </div>
        <div className="Probox">
          <div className="port1">
            <div className="port2">
              <img src={SkinStore} alt="css" width="100%" height="100%" />
            </div>
            <div className="port2">
              <h2>SkinStore-SkinCare</h2>
              <p style={{textAlign:"center"}}>SkinStore is an authorized retailer to 100s of premium beauty brands across skin, makeup and hair including SkinCeuticals, Dermalogica, Caudalie, Alternative and many othr product related skin. It's a US based company...</p>
              <div>
                <h2>Tech Stacks</h2>
                <p style={{textAlign:"center"}}>html  Css  Javascript</p>
              </div>
              <div>
              <button>
              <a href="inquisitive-cascaron-6f30a0.netlify.app">Visit</a>|
              </button>
              <button>
                <a href="https://github.com/raobaba/Clone-SkinStore">Github</a>
              </button>
              </div>
            </div>
          </div>
        </div>
        <div className="Probox">
          <div className="port1">
            <div className="port2">
              <img src={Myntra} alt="css" width="100%" height="100%" />
            </div>
            <div className="port2">
              <h2>Myntra-Shoping Website</h2>
              <p style={{textAlign:"center"}}>Myntra is a one stop shop for all your fashion and lifestyle needs. Being India's largest e-commerce store for fashion and lifestyle products, and this is our 2 collaborative project in masai school</p>
              <div>
                <h2>Tech Stacks</h2>
                <p style={{textAlign:"center"}}>html  css  javascript</p>
              </div>
              <div>
              <button>
              <a href="darling-tartufo-bbf819.netlify.app/">Visit</a>|
              </button>
              <button>
                <a href="https://github.com/raobaba/Myntra-Clone">Github</a>
              </button>
              </div>
            </div>
          </div>
        </div>
        <div className="Probox">
          <div className="port1">
            <div className="port2">
              <img src={Orbitz} alt="css" width="100%" height="100%" />
            </div>
            <div className="port2">
              <h2>Orbitz-travel website</h2>
              <p style={{textAlign:"center"}}>Orbitz.com is a travel fare aggregator website and travel metasearch engine. The website is owned by Orbitz Worldwide, Inc., a subsidiary of Expedia Group. It is headquartered in the Citigroup Center, Chicago, Illinois.</p>
              <div>
                <h2>Tech Stacks</h2>
                <p style={{textAlign:"center"}}>html css javascript bootstrap json-server</p>
              </div>
              <div>
              <button>
              <a href="orbitz-clone-v1.netlify.app/">Visit</a>|
              </button>
              <button>
                <a href="https://github.com/raobaba/Clone-Orbitz">Github</a>
              </button>
              </div>
            </div>
          </div>
        </div>
      </StyledSlider>
    </div>
  );
}
