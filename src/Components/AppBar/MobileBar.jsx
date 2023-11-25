import React, { useState } from "react";
import "./mobilebar.css";
import home from "../../assets/home.svg";
import { ReactSVG } from 'react-svg'
import { FaPlusSquare } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const MobileBar = () => {
  const path =  location.pathname
  const [dropdown, setDropdown] = useState(false)
  return (
    <nav className="mobile-nav d-lg-none" >
  <a href="/" className={`bloc-icon d-flex flex-column ${path === "/" ? "IsActive" : ""}`}>

      <IoMdHome size={25} color={path === "/" ? "#f81b55": "#c5cae9"} />
   
      <div style={{ color: path === "/" ? "#f81b55" : "#c5cae9" }}>
  Home
</div>
      </a> 
      <a   className={` bloc-icon d-flex flex-column ${path === "/song" || path === "/release" ? "IsActive" : ""}`}  onClick={() => setDropdown(!dropdown)}>
     < FaPlusSquare size={25}  color={path === "/song" || path === "/release" ? "#f81b55": "#c5cae9"} />
     
     <div style={{ color: path === "/song" ? "#f81b55" : "#c5cae9" }}>
  Create
</div>
    {
      dropdown && (
        <div className="CreateDropdown">
          <Link to={ "/song"} >
          <Button>
            Song
          </Button>
          </Link>
          <Link to={ "/release"}>
          <Button>
            Release
          </Button>
          </Link>
        </div>
      )
    }
        
      </a>
      <a href="/pricing" className={`bloc-icon d-flex flex-column ${path ==="/pricing"? "IsActive" : ""}`}>
      <IoIosRocket size={25} color={path === "/pricing"  ? "#f81b55": "#c5cae9"} />
     
      <div style={{ color: path === "/pricing" ? "#f81b55" : "#c5cae9" }}>
  Pricing
</div>

        
      </a>
    </nav>
  );
};

export default MobileBar;
