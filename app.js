app.js
const express = require('express');
const app = express();

const propiedadesRouter = require('./routes/propiedades');
const propietariosRouter = require('./routes/propietarios');
const arrendatariosRouter = require('./routes/arrendatarios');

const https = require ('https');
let port = 3000;
let certificado = fs.readFileSync('certificate.crt');
let llave = fs.readFileSync('private.key');

let credenciales = {
        key: llave, 
        cert: certificado,
        passphrase: 'holasoybiencool'
};

 const httpsServer = https.createServer(credenciales, app);


// Configurar la aplicación para usar los routers de cada recurso
app.use('/propiedades', propiedadesRouter);
app.use('/propietarios', propietariosRouter);
app.use('/arrendatarios', arrendatariosRouter);


// Iniciar el servidor
httpsServer.listen(port, ()=>
{
console.log("Server escuchando en el puerto", port);
}).on("error", (err) =>
{
console.log("ERROR: ", err);
});


// const express = require('express');
// const app = express();
// const fs = require ('fs');


// const metodoPropietario = require("./controladores/Cpropietarios")
// const metodoPropiedades = require("./controladores/Cpropiedades")
// const metodoArrendatarios = require("./controladores/Carrendatarios")


// app.get("/propietarios", metodoPropietario.readPropietarios);
// app.get("/propietarios/:RFC", metodoPropietario.readPropietario);
// app.post("/propietarios", metodoPropietario.newPropietario);
// app.put("/propietarios/:RFC", metodoPropietario.modifiPripietario);
// app.delete("/propietarios/:RFC", metodoPropietario.deletePropietarios);

// app.get("/arrendatarios", metodoArrendatarios.readArrendatarios);
// app.get("/arrendatarios/:RFC", metodoArrendatarios.readArrendatario);
// app.post("/arrendatarios", metodoArrendatarios.newArrendatario);
// app.put("/arrendatarios/:RFC", metodoArrendatarios.modifiArrendatario);
// app.delete("/arrendatarios/:RFC", metodoArrendatarios.deleteArrendatarios);

// app.post("/propiedades", metodoPropiedades.CreatePropiedad);
// app.get("/propiedades", metodoPropiedades.AllPropiedades);
// app.delete("/propiedades", metodoPropiedades.DeletePropiedad);
// app.put("/propiedades/nuevoPropietario", metodoPropiedades.AddPropietario);
// app.put("/propiedades/borrarPropietario", metodoPropiedades.DeletePropietario);
// app.put("/propiedades/nuevoArrendatario", metodoPropiedades.AddArrendatario);
// app.put("/propiedades/borrarArrendatario", metodoPropiedades.DeleteArrendatario);


