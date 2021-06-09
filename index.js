const express = require('express');
const app = express();
const cors = require('cors');
const { config } = require('./config/config');
const deportivaAPI = require('./rutas/deportiva');

if (process.env.NODE_ENV === 'development') {
    app.use((req, res, next) => {
         res.header('Access-Control-Allow-Origin', '*');
         res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
         app.options('*', (req, res) => {
               res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
              res.send();
      });
   });
 }


//const corsOptions = { origin : ["https://servidordeportiva.vercel.app/api/deportiva"]}; 

//app.use(cors(corsOptions));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
deportivaAPI(app);


app.listen(config.port,()=>{
    console.log(`servidor escuchando en ${config.port}`)
})