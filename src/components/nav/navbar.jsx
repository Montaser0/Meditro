import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./nav.css";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faArrowRight, faPhone, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Navbars() {
  return (
    <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/home'>
              Home
            </Link>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">FAQ</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Booking</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Error 404</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                Login / Register
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Service</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                Service Details
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Blog" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Blogs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                Blogs Details
              </NavDropdown.Item>
            </NavDropdown>

            <Link to='/contact'>Contact Us</Link>
            <Nav.Link>
              {" "}
              <FontAwesomeIcon icon={faSearch} />
            </Nav.Link>
            <Nav.Link>
            <FontAwesomeIcon icon={faPhone} />
              (+01) 999 888 777</Nav.Link>
            <Nav.Link>
              <button className="custom-button">
                Contact Us <span><FontAwesomeIcon icon={faArrowRight} /></span>
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
