import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./css/style.css"


function NavBar({ currentPage, handlePageChange }) {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Projects"
              menuVariant="dark"
            >
              <Dropdown.Item
                href="#Projects"
                onClick={() => handlePageChange('ProjCell')}
                className={currentPage === 'ProjCell' ? 'nav-link active' : 'nav-link'}
              >Projects
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                href="#SQLStore"
                onClick={() => handlePageChange('Proj1')}
                className={currentPage === 'Proj1' ? 'nav-link active' : 'nav-link'}
              >SQL storefront
              </Dropdown.Item>
              <Dropdown.Item
                href="#passwordGen"
                onClick={() => handlePageChange('Proj2')}
                className={currentPage === 'Proj2' ? 'nav-link active' : 'nav-link'}
              >Password generator
              </Dropdown.Item>
              <Dropdown.Item
                href="#readMeGen"
                onClick={() => handlePageChange('Proj3')}
                className={currentPage === 'Proj3' ? 'nav-link active' : 'nav-link'}
              >Readme generator
              </Dropdown.Item>
              <Dropdown.Item
                href="#weatherApp"
                onClick={() => handlePageChange('Proj4')}
                className={currentPage === 'Proj4' ? 'nav-link active' : 'nav-link'}
              >Weather app
              </Dropdown.Item>
              <Dropdown.Item
                href="#arrayGun"
                onClick={() => handlePageChange('Proj5')}
                className={currentPage === 'Proj5' ? 'nav-link active' : 'nav-link'}
              >ArrayGun
              </Dropdown.Item>
              <Dropdown.Item
                href="#fibonacci"
                onClick={() => handlePageChange('Proj6')}
                className={currentPage === 'Proj6' ? 'nav-link active' : 'nav-link'}
              >Fibonacci sequence generator
              </Dropdown.Item>
              <Dropdown.Item
                href="#teamMaker"
                onClick={() => handlePageChange('Proj7')}
                className={currentPage === 'Proj7' ? 'nav-link active' : 'nav-link'}
              >Team Maker
              </Dropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <Nav.Link
                href="#contact"
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