// REQUERIMOS MONGOOSE
const mongoose = require("mongoose");

// SETEAMOS VARIABLES PARA CONEXION
const driverConnect = "mongodb://localhost";
const dbName = "web_project";

// CONECTAMOS A MONGO DB
mongoose.set("strictQuery", false);
mongoose.connect(`${driverConnect}/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log(`Se establecion la coneccion con la base de datos [${dbName}]`))
    .catch(err => console.log('Existe un error conectando a la base MongoDb', err));