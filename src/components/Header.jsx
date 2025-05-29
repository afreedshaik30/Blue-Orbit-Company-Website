import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const closeNavbar = () => setExpanded(false);

  return (
    <section id="header">
      <Navbar bg="light" expand="lg" expanded={expanded}>
        <Container>
          {/* <Navbar.Brand as={Link} to="/" onClick={closeNavbar}>
            Blue Orbit
          </Navbar.Brand> */}
          <Navbar.Brand>
            <Link to="/" className="navbar-brand-link" onClick={closeNavbar}>
              Blue Orbit
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleToggle}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" onClick={closeNavbar}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" onClick={closeNavbar}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/services" onClick={closeNavbar}>
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/works" onClick={closeNavbar}>
                Work
              </Nav.Link>
              <Nav.Link as={Link} to="/teams" onClick={closeNavbar}>
                Teams
              </Nav.Link>
              {/* <Nav.Link href="#testimonials">Testimonials</Nav.Link> */}
              {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
              <Nav.Link as={Link} to="/blog" onClick={closeNavbar}>
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" onClick={closeNavbar}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default Header;
