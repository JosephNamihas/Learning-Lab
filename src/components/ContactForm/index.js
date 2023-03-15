import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Form from './components/ContactForm';

const root = document.getElementById('root');
const rootElement = ReactDOM.createRoot(root);
rootElement.render(
  <React.StrictMode>
    <Form />
  </React.StrictMode>
);

reportWebVitals();
