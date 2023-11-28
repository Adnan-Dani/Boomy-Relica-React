import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Button, NavDropdown, Navbar, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import MobileBar from "./MobileBar";
import { FaPlusSquare } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { IoMdHome } from "react-icons/io";

function AppBar() {
  const path = location.pathname;
  const [dropdown, setDropdown] = useState(false);
  return (
    <Navbar collapseOnSelect expand="lg">
      <MobileBar />
      <Container>
        <Navbar.Brand
          href="#home"
          className="text-white d-flex gap-2 align-items-center"
        >
          <img src="assets/logo.jpg" alt="" className="logowidth" />
          <h3 className=""> RFM Offical </h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mx-auto navLinks">
            <a href={"/dashboard"} className="mx-2">
              <div
                className={`Links ${
                  path === "/dashboard" ? "IsNavActive" : ""
                }`}
              >
                <IoMdHome
                  size={25}
                  color={path === "/dashboard" ? "#f81b55" : "#c5cae9"}
                  style={{ marginTop: "-3px" }}
                />
                <button
                  className="AppbarLinks mx-2"
                  style={{
                    color: path === "/dashboard" ? "#f81b55" : "#c5cae9",
                  }}
                >
                  Home
                </button>
              </div>
            </a>
            <a
              className={`mx-2  ${
                path === "/dashboard/song" ||
                path === "/dashboard/videopage" ||
                path === "/dashboard/lyrics" ||
                path === "/dashboard/videopage"
                  ? "IsNavActive"
                  : ""
              } `}
              style={{ position: "relative" }}
              onClick={() => setDropdown(!dropdown)}
            >
              <div className={`Links`}>
                <FaPlusSquare
                  color={
                    path === "/dashboard/song" ||
                    path === "/dashboard/release" ||
                    path === "/dashboard/lyrics" ||
                    path === "/dashboard/videopage"
                      ? "#f81b55"
                      : "#c5cae9"
                  }
                />
                <button
                  className="AppbarLinks mx-2"
                  style={{
                    color:
                      path === "/dashboard/song" ||
                      path === "/dashboard/release" ||
                      path === "/dashboard/lyrics" ||
                      path === "/dashboard/videopage"
                        ? "#f81b55"
                        : "#c5cae9",
                  }}
                >
                  Create
                </button>
              </div>
            </a>
            {dropdown && (
              <div
                className={`AppbarDropdown  ${
                  dropdown ? "CreateDropdownFix" : ""
                }  `}
              >
                <Link to={"/dashboard/song"}>
                  <Button
                    className="RedirectButtonsAppbar"
                    onClick={() => setDropdown(!dropdown)}
                  >
                    Song
                  </Button>
                </Link>
                {/* <Link to={ "/dashboard/release"}>
          <Button className="RedirectButtons">
            Release
          </Button>
          </Link> */}
                <Link
                  to={"/dashboard/lyrics"}
                  onClick={() => setDropdown(!dropdown)}
                >
                  <Button className="RedirectButtonsAppbar">Lyrics</Button>
                </Link>
                <Link
                  to={"/dashboard/videopage"}
                  onClick={() => setDropdown(!dropdown)}
                >
                  <Button className="RedirectButtonsAppbar">Video</Button>
                </Link>
              </div>
            )}
            <a href={"/dashboard/pricing"} className={`mx-2`}>
              <div
                className={`Links ${
                  path === "/dashboard/pricing" ? "IsNavActive" : ""
                }`}
              >
                <IoIosRocket
                  size={25}
                  color={path === "/dashboard/pricing" ? "#f81b55" : "#c5cae9"}
                />
                <button
                  className="AppbarLinks mx-2"
                  style={{
                    color:
                      path === "/dashboard/pricing" ? "#f81b55" : "#c5cae9",
                  }}
                >
                  Pricing
                </button>
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
