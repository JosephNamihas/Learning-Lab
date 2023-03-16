import React, { useState } from "react";
import Card from "./Card";
// import "./Math.module.css";
// import "./CardStyles.css";

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
    <div className="main-container">
      <div className="card-list">
        <Card flashcard={cardData[currentIndex]} />
      </div>
      <button onClick={prevCard}>Back</button>
      <button onClick={nextCard}>Next</button>
    </div>
  );
};

export default CardList;
