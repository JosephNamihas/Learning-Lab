import React from 'react';
import Quiz from '../Math/Quiz';
import MathCategories from './MathCategory.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const SubComponent1 = () => {
  return <div><Quiz /></div>;
};

const SubComponent2 = () => {
  return <div><MathCategories /></div>;
};

const SubComponent3 = () => {
  return <div>This is Sub-Component 3</div>;
};

const SubComponent4 = () => {
  return <div>This is Sub-Component 4</div>;
};

const Math = () => {
  return (
    <div className="container">
      <h1 className="my-4">Maths Corner</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title"> </h5>
              <SubComponent1 />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Sub-Component 2</h5>
              <SubComponent2 />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Sub-Component 3</h5>
              <SubComponent3 />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Sub-Component 4</h5>
              <SubComponent4 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Math;
