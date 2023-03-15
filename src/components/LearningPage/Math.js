import React from 'react';
import Quiz from "../LearningPage/Quiz"


class SubComponent1 extends React.Component {
  render() {
    return <div><Quiz /></div>;
  }
}

class SubComponent2 extends React.Component {
  render() {
    return <div>This is Sub-Component 2</div>;
  }
}

class SubComponent3 extends React.Component {
  render() {
    return <div>This is Sub-Component 3</div>;
  }
}

class SubComponent4 extends React.Component {
  render() {
    return <div>This is Sub-Component 4</div>;
  }
}

class Math extends React.Component {
  render() {
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
  }
}
export default Math;
