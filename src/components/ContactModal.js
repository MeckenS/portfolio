import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';


const ContactModal = (props) => {

  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleHide}
        dialogClassName="modal-60w"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Contact Me
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Your email"
                onChange={props.emailChange}
                value={props.senderEmail}
              />
            </Form.Group>

            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Name"
                onChange={props.nameChange}
                value={props.senderName}
              />
            </Form.Group>

            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
              as="textarea"
              rows="3"
              onChange={props.messageChange}
              value={props.senderMessage}
            />
            </Form.Group>

            <Button  className="purple-button" variant="primary" type="submit" onClick={props.submitMessage}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ContactModal;
