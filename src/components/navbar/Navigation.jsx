import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navigation.css";

const Navigation = () => {
  return (
    <>
      <Navbar className="navigation" bg="dark" variant="dark">
        <Container className="container">
          <Navbar.Brand>Michael</Navbar.Brand>
          <Nav className="d-none d-md-flex flex-row">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/abilities">Abilities</NavLink>
            <NavLink to="/contact-me">Contact Me</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/workbackground">Workbackground</NavLink>
          </Nav>
          <DropdownButton
            className="dropdown d-sm-flex d-md-none"
            id="dropdown-item-button"
            title="Dropdown button"
          >
            <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
            <Dropdown.Item as="button"><NavLink to="/about">About</NavLink></Dropdown.Item>
            <Dropdown.Item as="button"><NavLink to="/abilities">Abilities</NavLink></Dropdown.Item>
            <Dropdown.Item as="button"><NavLink to="/contact-me">Contact Me</NavLink></Dropdown.Item>
            <Dropdown.Item as="button"><NavLink to="/projects">Projects</NavLink></Dropdown.Item>
            <Dropdown.Item as="button"><NavLink to="/workbackground">Workbackground</NavLink></Dropdown.Item>
          </DropdownButton>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
