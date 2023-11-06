require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

const usuarioRouter = require('./routes/usuarioRoutes.js');
const autenticacionRouter = require('./routes/autenticacionRoutes.js');
const archivoRouter = requiere('./routes/archivoRouter.js');

const app = express();
const PORT = 3000;

//Middleware
app.use(bodyParser.json());
app.use(fileUpload);

app.use(usuarioRouter);
app.use(autenticacionRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})