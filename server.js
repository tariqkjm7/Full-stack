'use strict';
const express = require('express');
require('dotenv').config();
const cors = require('cors');

const server = express();
const PORT = process.env.PORT;

const weather = require('./modules/weather.js');
const movie = require('./modules/movies.js');
server.use(cors());





server.get('/', homeRoute)

server.get('/weather', weather)
server.get('/movie', movie)



server.get('*', notfound)


//handlers
function homeRoute(req, res) {


    res.send('all good')
}


function notfound(req, res) {


    res.send('404 not found!!!!')

}


server.listen(PORT, () => {

    console.log(`on port ${PORT}`);
});
