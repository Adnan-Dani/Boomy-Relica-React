import Container from "react-bootstrap/Container";
import { Button, NavDropdown, Navbar, Nav } from "react-bootstrap";

function AppBar() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="text-white d-flex gap-2 items-center">

          <img src="assets/logo.jpg" alt="" className="logowidth" />
          <h3 className="text-danger">  RFM Offical </h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mx-auto ">
            {/* mx-auto for horizontal centering */}
            <Nav.Link className="custom-hover fw-bold" href="#features">Home</Nav.Link>
            <NavDropdown className="fw-bold " title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1 " className="navdropd mt-2 fw-bold">Song</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="navdropd mt-1 fw-bold">Release</NavDropdown.Item>
            </NavDropdown>
 
            <Nav.Link className="custom-hover fw-bold" href="/pricing ">Pricing</Nav.Link>
 
        
          </Nav>
          <Nav>
            <Button className="mx-2 bg-none border-purple">Sign In</Button>
            <Button className="bg-purple border-purple">Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppBar;
