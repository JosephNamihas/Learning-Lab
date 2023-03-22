/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GeographyQuiz from './GeographyQuiz';
import HistoryQuiz from './HistoryQuiz';
import SpanishQuiz from './SpanishQuiz';
import FrenchQuiz from './FrenchQuiz';
import Library from './Library';
import Vocabulary from './Vocabulary';
import MixedScience from './MixedScience'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />,
    <GeographyQuiz />,
    <FrenchQuiz />,
    <SpanishQuiz />,
    <HistoryQuiz />,
    <MixedScience />
    <Library />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
if (module.hot) {
  module.hot.disable();
}

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);