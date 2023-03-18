import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import * as ReactDOM from 'react-dom';
import Home from "./components/Home/home";
import Collapsible from './components/Shared/Navbar/Navbar';
import Math from './components/LearningPage/Math/Math';
import ContactForm from './components/ContactForm/Form';
// import Vocabulary from './components/LearningPage/Vocabulary';
import Footer from './components/Shared/Footer/Footer';
import Planner from "./components/Journal/Planner";
import "bootstrap/dist/css/bootstrap.min.css";

{/*const options = {
  method: "GET",
  url: "https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf",
  headers: {
    "X-RapidAPI-Key": "958ecc0b13msh0ca9342a3cd9f49p1a6a0bjsnba6be6199123",
    "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com"
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});*/}

function App() {
  return (
    <Router>
      <div className="App">
        <Collapsible />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Math" element={<Math />} />
          <Route path="/Planner" element={<Planner />} />
          <Route path="/ContactForm" element={<ContactForm />} />
          {/* Route Path to Planner */}
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
