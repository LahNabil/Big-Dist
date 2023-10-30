import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Liste_Batterie from './pages/Liste_Batterie';
import BatteryDetails from './pages/BatteryDetails';
import AdminPanel from './pages/Panel';

import Ajouter from './pages/Ajouter';
import Auth from './pages/Auth';

function App() {
  

  const [token, setToken] = useState(localStorage.getItem('token'))
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/batteries" element={<Liste_Batterie />} />
          <Route path="/aboutUs" element={<About />} />
          <Route path="/batterydetails/:batteryId" element={<BatteryDetails />} />
          <Route path="/login" element={<Auth />} />
          {/* {localStorage.clear()}
          {
            token == null ?
            <Route path="/login" element={<Login />} />
            :
            <>
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/admin/add" element={<Ajouter />} />
            <Route path="/admin/edit" element={<Edit />} />
            </>
          } */}
          
          <Route
            path="/admin"
            element={token != null ? <AdminPanel /> : <Auth />}
          />
          <Route 
            path="/admin/add"
           element={token != null ? <Ajouter /> : <Auth />}
           />
          
          
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
