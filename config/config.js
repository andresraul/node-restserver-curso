//===============================
//  Puerto
//===============================

process.env.PORT = process.env.PORT || 3000;


//===============================
//  Entorno
//===============================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//===============================
//  Vencimiento del token
//===============================

process.env.CADUCIDAD_TOKEN = '48h';

//===============================
//  SEED de autenticación
//===============================

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//===============================
//  Base de datos
//===============================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

//===============================
//  Client ID Google
//===============================

process.env.CLIENT_ID = process.env.CLIENT_ID || '287331357347-d8imc9p2eicmbthr2h16usgolgbpr897.apps.googleusercontent.com';