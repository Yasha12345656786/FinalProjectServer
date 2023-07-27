require('dotenv').config();
const express = require('express');
const path = require('node:path'); 
const cors = require('cors'); 
const PORT = 5500;

let server =  express(); 
server.use(express.json());
server.use(cors());


server.use('/api/player',require('./routes/players.route'));

server.listen(PORT, () => console.log(`http://localhost:${PORT}`)); 