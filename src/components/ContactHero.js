import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const ContactHero = (props) => {

  const jumbotron = {backgroundColor: '#FFFFFF', marginBottom: '0px'};

  return(
    <div className="contact-hero-container">
      <Jumbotron
        style={jumbotron}
      >
        <h1 style={{fontSize: '2rem'}}>WANT TO GET IN TOUCH?</h1>
        <p className="contact-message">
          Have a question or comment? Click the link below. Talk to you soon!
        </p>
        <p>
          <Button
            onClick={props.handleShow}
            className="navy-blue-button"
            variant="primary">
            Contact Me
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default ContactHero;
