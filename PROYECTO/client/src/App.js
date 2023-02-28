import './App.css';
import React, { useState } from 'react';
import LoginRegistro from './Components/LoginRegistro';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard';
import VerPirata from './Components/VerPirata';
import NuevoPirata from './Components/NuevoPirata';

function App() {
  const [idPirata, setIdPirata] = useState('');
  return (
    <div className="ancho mt-2" style={{border:"1px solid #000000"}}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginRegistro idPirata={idPirata} setIdPirata={setIdPirata} />} />
            <Route path="/pirates" element={<Dashboard idPirata={idPirata} setIdPirata={setIdPirata}/>} />
            <Route path="/pirate/:idPirata" element={<VerPirata/>} />
            <Route path="/pirate/new" element={<NuevoPirata/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
