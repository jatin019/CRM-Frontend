import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../assets/img/logo.png';
import { Link, useHistory } from 'react-router-dom';
import { userLogout } from '../../api/userApi';

export const Header = () => {
  const history = useHistory();

  const logMeOut = () => {
    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("tmsSite");
    userLogout()
    history.push("/");
  };

  return (
    <Navbar collapseOnSelect variant="dark" bg="info" expand="md">
      <Navbar.Brand>
        <img src={logo} alt="logo" width="50px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
          <Nav.Link as={Link} to="/tickets">Tickets</Nav.Link>
          <Nav.Link onClick={logMeOut}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
