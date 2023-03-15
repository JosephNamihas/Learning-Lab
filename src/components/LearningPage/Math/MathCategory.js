import React from 'react';

class MathCategories extends React.Component {
  handleButtonClick = (category) => {
    // Implement logic to handle button click for a given category
    console.log(`Button clicked for ${category}`);
  };

  render() {
    return (
      <div>
        <h2>Math Categories</h2>
        <div className="row">
          <div className="col-sm-6 col-md-4 mb-3">
            <button className="btn btn-primary btn-block" onClick={() => this.handleButtonClick('addition')}>
              Addition
            </button>
          </div>
          <div className="col-sm-6 col-md-4 mb-3">
            <button className="btn btn-primary btn-block" onClick={() => this.handleButtonClick('subtraction')}>
              Subtraction
            </button>
          </div>
          <div className="col-sm-6 col-md-4 mb-3">
            <button className="btn btn-primary btn-block" onClick={() => this.handleButtonClick('multiplication')}>
              Multiplication
            </button>
          </div>
          <div className="col-sm-6 col-md-4 mb-3">
            <button className="btn btn-primary btn-block" onClick={() => this.handleButtonClick('division')}>
              Division
            </button>
          </div>
          <div className="col-sm-6 col-md-4 mb-3">
            <button className="btn btn-primary btn-block" onClick={() => this.handleButtonClick('fractions')}>
              Fractions
            </button>
          </div>
          <div className="col-sm-6 col-md-4 mb-3">
            <button className="btn btn-primary btn-block" onClick={() => this.handleButtonClick('geometry')}>
              Geometry
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MathCategories;
