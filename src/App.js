import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as ReactDOM from 'react-dom';
import React from "react";
import Home from "./components/Home/Home";
import Collapsible from './components/Shared/Navbar/Navbar';
import Math from './components/LearningPage/Math/Math';
import Vocabulary from './components/LearningPage/Vocabulary';
import Footer from './components/Shared/Footer/Footer';
// import Planner from "./components/Journal/Planner";

function App() {
  return (
      <div className="App">
      <Collapsible />
      <Home />

      <Collapsible />
      <Vocabulary />
      
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Math" element={<Math />} />

          {/* Route Path to Planner */}
          
        </Routes>

      <Footer />

      </div>
  );
}

export default App;
