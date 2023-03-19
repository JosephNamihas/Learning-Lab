// Learn.js
import React from "react";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

function Learn() {
  return (
    <Container>
      <h1 className="text-center">Other Subjects</h1>
      <Row>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Library</Card.Title>
              <Card.Text>Explore our library resources.</Card.Text>
              <Link to="/library">
                <Button variant="primary">Go to Library</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Geography</Card.Title>
              <Card.Text>Explore the world of Geography.</Card.Text>
              <Link to="/geography">
                <Button variant="primary">Go to Geography</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>History</Card.Title>
              <Card.Text>Dive into the history of humanity.</Card.Text>
              <Link to="/history">
                <Button variant="primary">Go to History</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Science</Card.Title>
              <Card.Text>Discover the wonders of Science.</Card.Text>
              <Link to="/science">
                <Button variant="primary">Go to Science</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Spanish</Card.Title>
              <Card.Text>Learn the Spanish language.</Card.Text>
              <Link to="/spanish">
                <Button variant="primary">Go to Spanish</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>French</Card.Title>
              <Card.Text>Learn the French language.</Card.Text>
              <Link to="/french">
                <Button variant="primary">Go to French</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Learn;
