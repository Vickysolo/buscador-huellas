const express = require('express');
const dotenv = require('dotenv').config();

const app = express();
const server = require('http').Server(app);


const db = require('./db')
const router = require('./router/routes');
const port = process.env.PORT || 3000;
const url = process.env.DB_URL;

db.connect(url);

router(app); 


server.listen( port,() => {
       console.log('la aplicación está en marcha!!!');
     });
     