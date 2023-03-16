import React from "react";
import "./Sidebar.css";
import CardList from "./CardList";

const Sidebar = ({ customDeck }) => {
  return (
    <div className="sidebar">
      <h2>Custom Deck</h2>
      {customDeck.map((flashcard, index) => (
        <div key={index} className="sidebar-card">
          <h3>{flashcard.question}</h3>
          <p>{flashcard.answer}</p>
        </div>
      ))}
    </div>
  );
};

Sidebar.defaultProps = {
  customDeck: []
};

export default Sidebar;
