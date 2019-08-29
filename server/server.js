require('../config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Configuración global de rutas
app.use(require('./routes/index'));







/* mongoose.connect('mongodb://localhost:27017/cafe', { useNewUrlParser: true }, (err, res) => {

    if (err) throw err;

    console.log('Base de datos ONLINE');

}); */


mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false }, (err, res) => {
    if (err) throw err;
    console.log('Base de Datos ONLINE');
});


app.listen(process.env.PORT, () => {
    console.log(`Escuchando en el puerto ${process.env.PORT}`);
});