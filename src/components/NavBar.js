// src/components/NavBar.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/logo.jpg';
import '../styles/PageStyles.css'; // Asegúrate de que la ruta sea correcta según tu estructura

const NavBar = () => {
  return (
    <Navbar className="navbar-custom" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            alt="logo"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top rounded-circle"
            style={{ marginRight: '8px' }}
          />
          <span>MEATH</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ marginLeft: '20px' }}>
            <LinkContainer to="/rutines">
              <Nav.Link>Rutines</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/alarms">
              <Nav.Link>Alarms</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/calendar">
              <Nav.Link>Calendar</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/food">
              <Nav.Link>Food</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <LinkContainer to="/user">
              <Nav.Link>
                <img
                  alt="profile"
                  src="https://via.placeholder.com/30"
                  width="30"
                  height="30"
                  className="d-inline-block align-top rounded-circle"
                />
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
