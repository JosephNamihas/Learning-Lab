import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import Card from "./Card";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ChevronLeft from '@mui/icons-material/ChevronLeft';

// import "./Math.module.css";
import "./CardStyles.css";

const CardList = ({ cardData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    if (currentIndex < cardData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <Container className="main-container">
      <Row className="text-center"></Row>
      <Col className="card-list">
        <Card flashcard={cardData[currentIndex]} />
        <Row>
          <Button className="card-btn" variant="warning" onClick={prevCard}><ChevronLeft/> Back</Button>
          <Button className="card-btn" variant="warning" onClick={nextCard}>Next <NavigateNextIcon /></Button>
        </Row>
      </Col>
    </Container>
  );
};

export default CardList;
