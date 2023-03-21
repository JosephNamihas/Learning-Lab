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
          <Card style={{ width: "22rem", height: "28rem" }}>
            <Card.Body>
              <Card.Title>Library</Card.Title>
              <Card.Img variant="top" src="./images/library.jpg" />
              <Card.Text>Explore our library resources.</Card.Text>
              <Link to="/library">
                <Button className="my-btn" variant="warning">Go to Library</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card style={{ width: "22rem", height: "28rem" }}>
            <Card.Body>
              <Card.Title>Geography</Card.Title>
              <Card.Img variant="top" src="./images/geo.jpg" />
              <Card.Text>Explore the world of Geography.</Card.Text>
              <Link to="/geography">
                <Button className="my-btn" variant="warning">Go to Geography</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card style={{ width: "22rem", height: "28rem" }}>
            <Card.Body>
              <Card.Title>History</Card.Title>
              <Card.Img variant="top" src="./images/history.jpg" />
              <Card.Text>Dive into the history of humanity.</Card.Text>
              <Link to="/history">
                <Button className="my-btn" variant="warning">Go to History</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card style={{ width: "22rem", height: "28rem" }}>
            <Card.Body>
              <Card.Title>Science</Card.Title>
              <Card.Img variant="top" src="./images/Science.jpg" />
              <Card.Text>Discover the wonders of Science.</Card.Text>
              <Link to="/science">
                <Button className="my-btn" variant="warning">Go to Science</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card style={{ width: "22rem", height: "28rem" }}>
            <Card.Body>
              <Card.Title>Spanish</Card.Title>
              <Card.Img variant="top" src="./images/Spanish.jpg" />
              <Card.Text>Learn the Spanish language.</Card.Text>
              <Link to="/spanish">
                <Button className="my-btn" variant="warning">Go to Spanish</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card style={{ width: "22rem", height: "28rem" }}>
            <Card.Body>
              <Card.Title>French</Card.Title>
              <Card.Img variant="top" src="./images/French.jpg" />
              <Card.Text>Learn the French language.</Card.Text>
              <Link to="/french">
                <Button className="my-btn" variant="warning">Go to French</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Learn;
