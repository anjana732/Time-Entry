// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use createRoot from React 18
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Updated for React 18
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

