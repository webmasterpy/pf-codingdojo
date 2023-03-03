import './App.css';
import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './Components/Web/Home';
import BlogDetalle from './Components/Web/BlogDetalle';
import Blogs from './Components/Web/Blogs';

import Panel from './Components/Admin/Panel';
import Login from './Components/Admin/Login';
import AdminBanner from './Components/Admin/AdminBanner';
import AdminPortfolio from './Components/Admin/AdminPortfolio';
import AdminExperiencia from './Components/Admin/AdminExperiencia';


function App() {
  const [idUsuario, setIdUsuario] = useState('');
  //const [idBanner, setBanner] = useState('');

  return (
    <BrowserRouter>
        <Routes>
          {/* Routas Web */}
          <Route path="/" element={<Home />} />
          <Route path="/blogs/" element={<Blogs />} />
          <Route path="/blog/:idBlog" element={<BlogDetalle/>} />
          
          {/* Rutas Admin & Login*/}
          <Route path="/admin/login" element={<Login idUsuario={idUsuario} setIdUsuario={setIdUsuario} />} />
          <Route path="/admin/panel" element={<Panel />} />

          {/* Rutas Banner */}
          <Route path="/admin/banner" element={<AdminBanner accion="listado" />} />
          <Route path="/admin/banner/nuevo" element={<AdminBanner accion="nuevo" />} />
          <Route path="/admin/banner/editar/:idBanner" element={<AdminBanner accion="editar" />} />

          {/* Rutas Portfolio */}
          <Route path="/admin/portfolio" element={<AdminPortfolio accion="listado" />} />
          <Route path="/admin/portfolio/nuevo" element={<AdminPortfolio accion="nuevo" />} />
          <Route path="/admin/portfolio/editar/:idPortfolio" element={<AdminPortfolio accion="editar" />} />
          
          {/* Rutas Experiencia */}
          <Route path="/admin/experiencia/" element={<AdminExperiencia accion="listado" />} />
          <Route path="/admin/experiencia/editar/:idExperiencia" element={<AdminExperiencia accion="editar" />} />
          
          {/* Rutas Blog */}
          {/* <Route path="/admin/blog/" element={<AdminBlog />} />
          <Route path="/admin/blog/crear/" element={<AdminCrearBlog />} />
          <Route path="/admin/blog/editar/:id" element={<AdminEditarBlog />} /> */}
        </Routes>
    </BrowserRouter>
  
  );
} 

export default App;
