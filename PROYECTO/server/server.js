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
    credentials:true
}))

// IMPORTAR LAS RUTAS DE NUESTRO SERVIDOR BACK-END
const rutasWebProjects = require('./routes/WebProject.routes');
rutasWebProjects(app);
const rutasUser = require('./routes/User.routes');
rutasUser(app);

// LEVANTAMOS SERVICIO MONGO AL PUETO ASIGNADO
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})

