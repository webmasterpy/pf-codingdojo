import React from 'react'
import Banner from './Banner'
import Blog from './Blog'
import Contacto from './Contacto'
import Experiencia from './Experiencia'
import Navegacion from './Navegacion'
import Portfolio from './Portfolio'

const Home = () => {
  return (
    <>
    <div id="home">
      <Navegacion/>
      <Banner/>
      <Portfolio/>
      <Experiencia/>
      <Blog/>
      <Contacto/>
    </div>
    </>
  )
}

export default Home