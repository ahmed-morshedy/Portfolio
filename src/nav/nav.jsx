import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Nav className="justify-content-center pt-4" variant="tabs">
      <Nav.Item>
        <Nav.Link eventKey="link-1" as={Link} to="/">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" as={Link} to="/dates">
          My Dates
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3" as={Link} to="/todo">
          My Tasks
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;
