import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import React from "react";
<<<<<<<<< Temporary merge branch 1
import Home from "./components/Home";

=========
import Quiz from "../src/components/LearningPage/Quiz"
>>>>>>>>> Temporary merge branch 2
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
    <div>
<<<<<<<<< Temporary merge branch 1
      <Home />
=========
      <Quiz />
      
>>>>>>>>> Temporary merge branch 2
    </div>
  );
}

export default App;
