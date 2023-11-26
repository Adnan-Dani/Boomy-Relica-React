import React,{useState} from "react";
import Container from "react-bootstrap/Container";
import { Button, NavDropdown, Navbar, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import MobileBar from "./MobileBar";
import { FaPlusSquare } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { IoMdHome } from "react-icons/io";

function AppBar() {
  const path = location.pathname;
  const [dropdown, setDropdown] = useState(false)
  return (
    <Navbar collapseOnSelect expand="lg">
      <MobileBar />
      <Container>
        <Navbar.Brand
          href="#home"
          className="text-white d-flex gap-2 items-center"
        >
          <img src="assets/logo.jpg" alt="" className="logowidth" />
          <h3 className="text-danger"> RFM Offical </h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mx-auto navLinks">
            <a href={"/"} className="mx-2">
              <div className={`Links ${path === "/" ? "IsNavActive" : ""}`}>
              <IoMdHome
                size={25}
                color={path === "/" ? "#f81b55" : "#c5cae9"}
                style={{marginTop:"-3px"}}
              />
              <button className="AppbarLinks mx-2" style={{ color: path === "/" ? "#f81b55" : "#c5cae9" }}>Home</button>
              </div>
            </a>
            <a className={`mx-2  ${path === "/song" || path === "/videopage" || path === "/lyrics" || path === "/videopage" ? "IsNavActive" : ""} `} style={{position:"relative"}}  onClick={()=>setDropdown(!dropdown)}>
              <div className={`Links`}>
              <FaPlusSquare
                color={
                  path === "/song" ||
                  path === "/release" ||
                  path === "/lyrics" ||
                  path === "/videopage"
                    ? "#f81b55"
                    : "#c5cae9"
                }
              />
              <button className="AppbarLinks mx-2"  style={{  color: path === "/song" || path === "/release"  || path === "/lyrics" || path === "/videopage"   ? "#f81b55" : "#c5cae9" }}>Create</button>
              </div>
            </a>
            {
      dropdown && (
        <div className={`AppbarDropdown  ${dropdown ? "CreateDropdownFix": "" }  `}>
          <Link to={ "/song"} >
          <Button className="RedirectButtonsAppbar" onClick={()=> setDropdown(!dropdown)}>
            Song
          </Button>
          </Link>
          {/* <Link to={ "/release"}>
          <Button className="RedirectButtons">
            Release
          </Button>
          </Link> */}
          <Link to={ "/lyrics"}  onClick={()=> setDropdown(!dropdown)}>
          <Button className="RedirectButtonsAppbar">
            Lyrics
          </Button>
          </Link>
          <Link to={ "/videopage"}  onClick={()=> setDropdown(!dropdown)}>
          <Button className="RedirectButtonsAppbar">
            Video
          </Button>
          </Link>
        </div>
      )
    }
            <a href={"/pricing"} className={`mx-2`}>
              <div className= {`Links ${path ==="/pricing"? "IsNavActive" : ""}`}>
              <IoIosRocket
                size={25}
                color={path === "/pricing" ? "#f81b55" : "#c5cae9"}
              />
              <button className="AppbarLinks mx-2" style={{ color: path === "/pricing" ? "#f81b55" : "#c5cae9" }} >Pricing</button>
              </div>
            </a>
          </Nav>
          <Nav>
            <Button className="m-2 bg-none border-purple">Sign In</Button>
            <Button className="m-2 bg-purple border-purple">Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppBar;
