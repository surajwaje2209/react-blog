import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import viteLogo from '/vite.svg'
// import './App.css'
import Home from './Home'
import Models from "./Models";
import Contact from "./Contact";
import BikeDetail from './BikeDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/models" element={<Models />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bike/:bikeId" element={<BikeDetail />} />
      </Routes>
    </Router>
  );
};

export default App
