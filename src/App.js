// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//     <>
//     <h1>Hello React</h1>
//     </>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Register from './components/Auth/Register';
// import Login from './components/Auth/Login';
// import TimeEntryForm from './components/Intern/TimeEntryForm';
// import ViewTimeEntries from './components/Admin/ViewTimeEntries';

// function App() {
//   return (
//     <Router>
//       <Routes>
//       <Route path="/" element={<Navigate to="/login" />} /> 
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/intern/time-entries" element={<TimeEntryForm />} />
//         <Route path="/admin/time-entries" element={<ViewTimeEntries />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Include Navigate
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import TimeEntryForm from './components/Intern/TimeEntryForm';
import ViewTimeEntries from './components/Admin/ViewTimeEntries';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect to Login */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/intern/time-entries" element={<TimeEntryForm />} />
        <Route path="/admin/time-entries" element={<ViewTimeEntries />} />
      </Routes>
    </Router>
  );
}

export default App;
