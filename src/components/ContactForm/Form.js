import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Container } from "react-bootstrap";
import styles from "./styles.form.css";

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Future development. Here, we can add code to send the form data to a server.
    // For this example, we'll just clear the form inputs.
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <Container className="py-5 text-center">
          <h2>Contact Us</h2>
          <p className="text"> We are always looking for ways to serve you better. </p>
          <p className="text">Please leave us feedback or make enquires using the form below.</p>
     
        <Form className="py-3 d-flex justify-content-center">
          <Form.Group>
            <Form.Control style={{ width: "25rem"}} type="text" placeholder="Name" />
            <Form.Control style={{ width: "25rem"}} type="email" placeholder="Example@email.com" />
            <Form.Control style={{ width: "25rem"}} type="text" placeholder="Subject" />
            <Form.Control as="textarea" rows={8} style={{ width: "25rem"}} type="text" placeholder="Message" />
            </Form.Group>
        </Form>
      <Button className="my-btn" variant="warning" type="submit">Submit</Button>
      </Container>
    </div>
  );
}

export default ContactForm;
