import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Menu.css'
import rafalogo from "./rafalogo.png"

function Menu() {
  return (
    <div>
        <Navbar expand="lg" className="menudiv">
      <Container>
        <Navbar.Brand  className="logotext" href="#home">
          <img src={rafalogo} style={{height:"90px"}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto indivnav ">
            <Nav.Link className='menutext' href="#home">Home</Nav.Link>
            <Nav.Link className='menutext' href="#link">Services</Nav.Link>
            <Nav.Link className='menutext' href="#link">Skills</Nav.Link>
            <Nav.Link  className='menutext'href="#link">Projects</Nav.Link>
            </Nav>
            <Nav className='ms-auto'>
              <div className='navbtn'> 
                <Nav.Link className='menutextbtn' href="#link">Contact</Nav.Link>
              </div>
            </Nav>
           
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </div>
  )
}

export default Menu
