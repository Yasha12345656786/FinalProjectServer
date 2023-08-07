require('dotenv').config();
const express = require('express');
const path = require('path'); 
const cors = require('cors'); 
const PORT = process.env.PORT || 5500;

let server =  express(); 
server.use(express.json());
server.use(cors());

server.use('/api/admin',require('./routes/admin.route'));
server.use('/api/player',require('./routes/players.route'));
//server.use('/api/memoryGame',require('./routes/memoryGame.route'));
//server.use('/api/memoryGame',require('./routes/triviaGame.route'));

server.listen(PORT, () => console.log(`http://localhost:${PORT}`)); 