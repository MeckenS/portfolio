import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons'

const Navigation = (props) => {

  const codeIcon = {color: 'white', fontSize: '2rem', margin: '10px 0px 5px 5px'};

  return(
    <Navbar className="bg-light" bg="dark" expand="lg">
      <Container>
        <Navbar.Brand style={{display: 'flex'}}>
          <FontAwesomeIcon
           style={codeIcon}
           icon={faCode} />
          <h3 className="name">Mecken Swyter</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-end" style={{marginRight:"5px"}}>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link onClick={props.handleShow}href="#">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
