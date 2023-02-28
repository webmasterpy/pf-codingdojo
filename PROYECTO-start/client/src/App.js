import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Web/Home';
import Panel from './Components/Admin/Panel';
import BlogDetalle from './Components/Web/BlogDetalle';


function App() {
  
  return (
    <BrowserRouter>
        <Routes>
          {/* Routas Web */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/blogs/" element={<Blogs />} /> */}
          <Route path="/blog/:idBlog" element={<BlogDetalle/>} />
          
          {/* Rutas Admin & Login*/}
          {/* <Route path="/admin/login" element={<Login />} /> */}
          <Route path="/admin/panel" element={<Panel />} />

          {/* Rutas Productos */}
          {/* <Route path="/admin/productos/" element={<AdminProductos />} />
          <Route path="/admin/productos/crear/" element={<AdminCrearProductos />} />
          <Route path="/admin/productos/editar/:id" element={<AdminEditarProductos />} /> */}

          {/* Rutas Banner */}
          {/* <Route path="/admin/banner/" element={<AdminBanner />} />
          <Route path="/admin/banner/crear/" element={<AdminCrearBanner />} />
          <Route path="/admin/banner/editar/:id" element={<AdminEditarBanner />} /> */}
          
          {/* Rutas Portfolio */}
          {/* <Route path="/admin/portfolio/" element={<AdminPortfolio />} />
          <Route path="/admin/portfolio/crear/" element={<AdminCrearPortfolio />} />
          <Route path="/admin/portfolio/editar/:id" element={<AdminEditarPortfolio />} /> */}

          {/* Rutas Experiencia */}
          {/* <Route path="/admin/experiencia/" element={<AdminExperiencia />} /> */}
          
          {/* Rutas Blog */}
          {/* <Route path="/admin/blog/" element={<AdminBlog />} />
          <Route path="/admin/blog/crear/" element={<AdminCrearBlog />} />
          <Route path="/admin/blog/editar/:id" element={<AdminEditarBlog />} /> */}
        </Routes>
    </BrowserRouter>
  
  );
} 

export default App;
