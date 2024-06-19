import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navigation.css";
import { useState } from "react";



const Navigation = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  
setTimeout(() => {
    const currentTime = new Date()
    setTime(currentTime.toLocaleTimeString())
  }, 1000);

  return (
    <>
      <Navbar className="navigation" bg="dark" variant="dark">
        <Container className="container">
          <Navbar.Brand><NavLink to="/">Michael</NavLink></Navbar.Brand>
          <p className="time">{time}</p>
          <Nav className="d-none d-md-flex flex-row links">
          <NavLink to="/">Dashboard</NavLink>
            <NavLink to="/about">Über mich</NavLink>
            <NavLink to="/workbackground">Werdegang</NavLink>
            <NavLink to="/abilities">Fähigkeiten</NavLink>
            <NavLink to="/projects">Projekte</NavLink>
            <NavLink to="/contact-me">Kontakt</NavLink>
          </Nav>
          <DropdownButton
            className="dropdown d-sm-flex d-md-none"
            id="dropdown-item-button"
            title="Auswahl"
          >
            <NavLink className="links" to="/"><Dropdown.Item as="button">Dashboard</Dropdown.Item></NavLink>
            <NavLink className="links" to="/about"><Dropdown.Item as="button">Über mich</Dropdown.Item></NavLink>
            <NavLink className="links" to="/workbackground"><Dropdown.Item as="button">Werdegang</Dropdown.Item></NavLink>
            <NavLink className="links" to="/abilities"><Dropdown.Item as="button">Fähigkeiten</Dropdown.Item></NavLink>
            <NavLink className="links" to="/projects"><Dropdown.Item as="button">Projekte</Dropdown.Item></NavLink>
            <NavLink className="links" to="/contact-me"><Dropdown.Item as="button">Kontakt</Dropdown.Item></NavLink>
          </DropdownButton>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;