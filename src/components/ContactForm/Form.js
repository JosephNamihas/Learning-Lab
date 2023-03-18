import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Container } from "react-bootstrap";
import styles from "./styles.form.css";


function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Future development. Here, we can add code to send the form data to a server.
    // For this example, we'll just clear the form inputs.
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setSubmitted(true);
  };

  return (
    <div>
      <Container className="py-5 wrapper text-center justify-content-center">
        <h2>Contact Us</h2>
        <p className="text"> We are always looking for ways to serve you better. </p>
        <p className="text">Please leave us feedback or make enquires using the form below.</p>
        {!submitted ? (
        <Form onSubmit={handleSubmit} className="py-3 d-flex justify-content-center">
          <Form.Group>
            <div className="form-styles">
              <Form.Control
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
                style={{ width: "30rem" }}
              />
            </div>
            <div className="form-styles">
              <Form.Control
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Example@email.com"
                required
                style={{ width: "30rem" }}
              />
            </div>
            <div className="form-styles">
              <Form.Control
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject"
                required
                style={{ width: "30rem" }}
              />
            </div>
            <div className="form-styles">
              <Form.Control as="textarea"
                type="text"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                rows={8}
                required
                style={{ width: "30rem" }}
              />
            </div>
            <Button style={{ width: "10rem" }} className="my-btn" variant="warning" type="submit">Submit</Button>
          </Form.Group>
        </Form>
        ) : (
        <p className="py-5">Thank you, we have received your message.</p>
      )}
      </Container>
    </div>
  );
}

export default ContactForm;