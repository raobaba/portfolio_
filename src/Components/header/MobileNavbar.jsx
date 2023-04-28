import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

function MobileNavbar({sidebar}) {
  return (
    <div className="mobile_parent_container nav-link.home">
      <div className="mobile_bars nav-link.home">
        {
          sidebar ? <FontAwesomeIcon className="open_bars closeit nav-link.home" icon={faXmark} /> : <FontAwesomeIcon className="open_bars" icon={faBars} />
        }
      </div>
    </div>
  );
}

export default MobileNavbar;
