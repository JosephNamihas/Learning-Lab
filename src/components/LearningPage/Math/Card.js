import React, { useState } from "react";
// import "./Card.css";
import "./CardStyles.css";

const Card = ({ flashcard }) => {
  const [known, setKnown] = useState(false);

  const toggleKnown = () => {
    setKnown(!known);
  };

  return (
    <div className="card" onClick={toggleKnown}>
      <div className="card-content">
        <div className="card-front">
          <h2>{flashcard.question}</h2>
        </div>
        <div className="card-back">
          <p>{flashcard.answer}</p>
        </div>
      </div>
      {known && <p>Marked as known</p>}
    </div>
  );
};

export default Card;
