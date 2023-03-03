import React, {useState} from 'react'
import { Link } from "react-router-dom";

const Navegacion = () => {
  // const [activoBanner, setActivoBanner] = useState("")
  // const [activoPortfolio, setActivoPortfolio] = useState("")
  // const [activoExperiencia, setActivoExperiencia] = useState("")
  // const [activoBlog, setActivoBlog] = useState("")

  let activoBanner ="";
  let activoPortfolio ="";
  let activoExperiencia ="";
  let activoBlog ="";

  
  let actualUrl = window.location.href;
  actualUrl = actualUrl.split("/");
  actualUrl = actualUrl[4].toString();

  console.log(actualUrl)

  switch (actualUrl) {
    case 'banner': activoBanner="activado"; break;
    case 'portfolio': activoPortfolio="activado"; break;
    case 'experiencia': activoExperiencia="activado"; break;
    case 'blog': activoBlog="activado"; break;
  }


  return (
    <div className="vertical-menu">
        <div className="menu">
            <b>Menu</b>
        </div>
        <Link to="/admin/banner" className={activoBanner}>Banner</Link>
        <Link to="/admin/portfolio" className={activoPortfolio}>Portfolio</Link>
        <Link to="/admin/experiencia" className={activoExperiencia}>Experiencia</Link>
        <Link to="/admin/blog" className={activoBlog}>Blog</Link>
        <Link to="/admin/login" >Salir</Link>
    </div>
  )
}

export default Navegacion