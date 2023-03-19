import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import * as ReactDOM from 'react-dom';
import Home from "./components/Home/home";
import Collapsible from './components/Shared/Navbar/Navbar';
import Math from './components/LearningPage/Math/Math';
import ContactForm from './components/ContactForm/Form';
import Vocabulary from './components/LearningPage/Vocabulary';
import Footer from './components/Shared/Footer/Footer';
import Planner from "./components/Journal/Planner";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from './components/LearningPage/Main';
import Learn from '.components/LearningPage/Learn';
import Geography from "./components/LearningPage/Geography";
import History from "./components/LearningPage/History";
import Science from "./components/LearningPage/Science";
import Library from "./components/LearningPage/Library";
import Spanish from "./components/LearningPage/Spanish";
import French from "./components/LearningPage/French";

function App() {
  return (
    <Router>
      <div className="App">
        <Collapsible />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Math" element={<Math />} />
          <Route path="/Planner" element={<Planner />} />
          <Route path="/Vocabulary" element={<Vocabulary />} />
          <Route path="/ContactForm" element={<ContactForm />} />
          <Route path="/" element={<Main />} index />
          <Route path="/Learn" element={<Learn />} />
          <Route path="/geography" element={<Geography />} />
          <Route path="/history" element={<History />} />
          <Route path="/science" element={<Science />} />
          <Route path="/library" element={<Library />} />
          <Route path="/spanish" element={<Spanish />} />
          <Route path="/french" element={<French />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}



export default App;
