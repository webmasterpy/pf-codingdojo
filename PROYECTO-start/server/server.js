// REQUERIMOS CORS PARA INTERCAMBIO
const cors = require('cors');

// REQUERIMOS EXPRESS
const express = require('express');

// SETEO DE VARIABLES
const app = express();
const PORT = 8000;

// REQUERIR ARCHIVO CONFIGURACION
require('./config/mongoose.config');

// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// HABILITAMOS EL CORS PARA INTERCANBIO DE RECURSOS
app.use(cors({
    origin:'http://localhost:3000',
    credentials: true
}))

// IMPORTAR LAS RUTAS DE NUESTRO SERVIDOR BACK-END
const rutasBanner = require('./routes/Banner.routes');
rutasBanner(app);

const rutasPortfolio = require('./routes/Portfolio.routes');
rutasPortfolio(app);

const rutasExperiencia = require('./routes/Experiencia.routes');
rutasExperiencia(app);

const rutasBlog = require('./routes/Blog.routes');
rutasBlog(app);

const rutasUser = require('./routes/User.routes');
rutasUser(app);

// LEVANTAMOS SERVICIO MONGO AL PUETO ASIGNADO
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})

