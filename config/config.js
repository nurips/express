require('dotenv').config();

const config = {
    dev: process.env.NODE_ENV = 'development',
    port: process.env.PORT | 3001,
    DB_HOST : process.env.DB_HOST, 
    DB_PORT : process.env.DB_PORT,
    DB_NAME : process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD 
}
/*const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT | 3001,
    DB_HOST : 'deportiva.wmqzz.mongodb.net', 
    DB_PORT : process.env.DB_PORT,
    DB_NAME : 'deportiva',
    DB_USER: 'deportiva',
    DB_PASSWORD: 'deportiva1' 
}*/
 console.log(config);
module.exports = { config }

