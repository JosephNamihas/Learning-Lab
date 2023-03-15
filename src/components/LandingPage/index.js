import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import AvatarSelector from '../components/LandingPage';

const root = document.getElementById('root');

// Replace ReactDOM.render with createRoot
const rootElement = ReactDOM.createRoot(root);
rootElement.render(
  <React.StrictMode>
    <AvatarSelector />
    
  </React.StrictMode>
);

reportWebVitals();
