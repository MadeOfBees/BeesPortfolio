import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar({ currentPage, handlePageChange }) {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav>
            <Nav.Item>
              <Nav.Link
                href="#home"
                onClick={() => handlePageChange('Home')}
                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
              >Home
              </Nav.Link>
            </Nav.Item>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Projects"
            >
              <Dropdown.Item
                href="#Proj1"
                onClick={() => handlePageChange('Proj1')}
                className={currentPage === 'Proj1' ? 'nav-link active' : 'nav-link'}
              >Proj1
              </Dropdown.Item>
              <Dropdown.Item
                href="#Proj2"
                onClick={() => handlePageChange('Proj2')}
                className={currentPage === 'Proj2' ? 'nav-link active' : 'nav-link'}
              >Proj2
              </Dropdown.Item>
              <Dropdown.Item
                href="#Proj3"
                onClick={() => handlePageChange('Proj3')}
                className={currentPage === 'Proj3' ? 'nav-link active' : 'nav-link'}
              >Proj3
              </Dropdown.Item>
              <Dropdown.Item
                href="#Proj4"
                onClick={() => handlePageChange('Proj4')}
                className={currentPage === 'Proj4' ? 'nav-link active' : 'nav-link'}
              >Proj4
              </Dropdown.Item>
              <Dropdown.Item
                href="#Proj5"
                onClick={() => handlePageChange('Proj5')}
                className={currentPage === 'Proj5' ? 'nav-link active' : 'nav-link'}
              >Proj5
              </Dropdown.Item>
              <Dropdown.Item
                href="#Proj6"
                onClick={() => handlePageChange('Proj6')}
                className={currentPage === 'Proj6' ? 'nav-link active' : 'nav-link'}
              >Proj6
              </Dropdown.Item>
              <Dropdown.Item
                href="#Proj7"
                onClick={() => handlePageChange('Proj7')}
                className={currentPage === 'Proj7' ? 'nav-link active' : 'nav-link'}
              >Proj7
              </Dropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <Nav.Link
                href="#Contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              >Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;