import Container from "react-bootstrap/Container";
import { Button, NavDropdown, Navbar, Nav } from "react-bootstrap";

function AppBar() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="text-white">
          RFM Official
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mx-auto ">
            {/* mx-auto for horizontal centering */}
            <Nav.Link href="#features">Home</Nav.Link>
            <NavDropdown
              className="navDropdown"
              title="Create"
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item className="DropdownItem" href="/song">
                Song
              </NavDropdown.Item>
              <NavDropdown.Item className="DropdownItem" href="/release">
                Release
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
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
