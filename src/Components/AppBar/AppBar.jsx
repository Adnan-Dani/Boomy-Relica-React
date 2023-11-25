import Container from "react-bootstrap/Container";
import { Button, NavDropdown, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function AppBar() {
  // const
  return (
    <Navbar collapseOnSelect expand="lg">
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
          <Nav className="me-auto mx-auto ">
            <Nav.Link
              as={NavLink}
              to="/"
              exact
              activeClassName="active"
              className="custom-hover fw-bold"
            >
              Home
            </Nav.Link>
            <NavDropdown
              className="fw-bold custom-hover"
              title="Dropdown"
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item
                as={NavLink}
                to="/song"
                className="navdropd mt-2 fw-bold"
              >
                Song
              </NavDropdown.Item>
              <NavDropdown.Item
                to="#"
                as={NavLink}
                className="navdropd mt-1 fw-bold"
              >
                Release
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              className="custom-hover fw-bold"
              as={NavLink}
              to="/pricing "
            >
              Pricing
            </Nav.Link>
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
