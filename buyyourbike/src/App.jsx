import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import viteLogo from '/vite.svg'
import Home from './Home'
import Showroom from './Showroom';
import Models from "./Models";
import Contact from "./Contact";
import BikeDetail from './BikeDetail';
import Bikebooking from './Bikebooking';
import Login from './Loginform';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/Home" element={<Home />} />
        <Route path="/Showroom" element={<Showroom />} />
        <Route path="/models" element={<Models />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bike/:bikeId" element={<BikeDetail />} />
        <Route path="/Bikebooking" element ={<Bikebooking />}/>
      </Routes>
    </Router>
  );
};

export default App
