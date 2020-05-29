const express = require('express');
const dotenv = require('dotenv').config();

const app = express();
const server = require('http').Server(app);


const db = require('./db')
const router = require('./router/routes');
const port = process.env.PORT || 3000;
const url = process.env.DB_URL;

const bodyParser = require('body-parser');


db.connect(url);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

router(app); 


server.listen( port,() => {
       console.log('la aplicación está en marcha!!!');
     });
     