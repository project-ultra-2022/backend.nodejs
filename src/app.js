// Se importa el servidor local Express
const express = require('express');

// La constante app ahora es el servidor local
const app = express()

// Se declara que es un API el cual permite todos los verbos HTTP
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, x-access-token"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

// Decimos que se va a manerar el formato JSON
app.use(express.json())

// Configuramos el arranque de todos los módulos
require("./allRoutes")(app);

// Asignamos un puerto para iniciar el servidor local
app.listen(3000, () => {
    console.log('Servidor corriendo')
})