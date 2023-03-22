import React, { useState, useEffect } from "react";
import formulaeData from "./JSON/formulae.json";

const MathFormulaeCards = () => {
  const [formulae, setFormulae] = useState({});
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  useEffect(() => {
    setFormulae(formulaeData);
  }, []);

  const renderCard = (formula) => (
    <div className="col-md-4 mb-3" key={formula.name}>
      <div className="card">
        {formula.image_url && <img src={formula.image_url} alt={formula.name} className="card-img-top" />}
        <div className="card-body">
          <h6 className="card-title">{formula.name}</h6>
          <p className="card-text">{formula.formula}</p>
        </div>
      </div>
    </div>
  );

  const handleNextCategory = () => {
    if (currentCategoryIndex < Object.keys(formulae).length - 1) {
      setCurrentCategoryIndex(currentCategoryIndex + 1);
    }
  };

  const handlePreviousCategory = () => {
    if (currentCategoryIndex > 0) {
      setCurrentCategoryIndex(currentCategoryIndex - 1);
    }
  };

  const currentCategory = Object.keys(formulae)[currentCategoryIndex];
  const currentCategoryData = formulae[currentCategory];

  return (
    <div className="container">
      <h1>Math Formulae</h1>
      {Object.keys(formulae).length > 0 ? (
        <>
          <div>
            <h2>{currentCategory}</h2>
            <div className="row">
              {currentCategoryData.map((formula) =>
                renderCard(formula)
              )}
            </div>
          </div>
          <div className="text-center mt-3">
            <button
              className="btn btn-primary me-3"
              disabled={currentCategoryIndex === 0}
              onClick={handlePreviousCategory}
            >
              Back
            </button>
            <button
              className="btn btn-primary"
              disabled={currentCategoryIndex === Object.keys(formulae).length - 1}
              onClick={handleNextCategory}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MathFormulaeCards;
