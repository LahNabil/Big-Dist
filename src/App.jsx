import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importez BrowserRouter

import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Liste_Batterie from './pages/Liste_Batterie';
import BatteryDetails from './pages/BatteryDetails';
import AdminPanel from './pages/Panel';
import Edit from './pages/Modifier';
import Ajouter from './pages/Ajouter';
import Login from './composants/Auth/Login';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/batteries" element={<Liste_Batterie />} />
          <Route path="/aboutUs" element={<About />} />
          <Route path="/batterydetails/:batteryId" element={<BatteryDetails />} />
          
          <Route path="/admin" element={<AdminPanel />} />
          
          
          <Route path="/admin/edit" element={<Edit />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/add" element={<Ajouter />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
