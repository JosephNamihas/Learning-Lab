import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from "axios";
import React from "react";
import Collapsible from "./components/Shared/Navbar";
import Home from "./components/Home";
import NavBar from './components/Shared/Nav';
import Math from './components/LearningPage/Math/Math';
// import Planner from "./components/Journal/Planner";
// import Vocabulary from './components/LearningPage/Vocabulary';




const options = {
  method: 'GET',
  url: 'https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf',
  headers: {
    'X-RapidAPI-Key': '958ecc0b13msh0ca9342a3cd9f49p1a6a0bjsnba6be6199123',
    'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});



// Pass props to Vocabuluary (js)



function App() {
  return (
    <BrowserRouter>
      <div className='App'>
      <Collapsible />
      <Home />
      <NavBar />
      
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Math" element={<Math />} />

          {/* Route Path to Planner */}
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
