require('dotenv').config();
const express = require('express');
const path = require('path'); 
const cors = require('cors'); 
const PORT = process.env.PORT || 5500;
const mongoose = require('mongoose');
let server =  express(); 
server.use(express.json());
server.use(cors());
server.use(express.static(path.join(__dirname, 'Client','dist')));

server.use('/api/admin',require('./routes/admin.route'));
server.use('/api/player',require('./routes/players.route'));
server.use('/api/memoryGame',require('./routes/memoryGame.route'));
server.use('/api/triviaGame',require('./routes/triviaGame.route')); 
//server.use('/api/beeInfoPages',require('./routes/beeInfoPage.route'));
server.get('/*', async (req, res) => {
    try {
      res.status(200).sendFile(path.join(__dirname, 'Client','dist', 'index.html'));
    } catch (error) {
      res.status(500).json({error});
    }
  });
  const mongoURI = 'mongodb+srv://GUTS:jacob00045052@cluster0.epjctzx.mongodb.net/?retryWrites=true&w=majority;' // Replace with your MongoDB URI

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
  // Start your Express server here

});
server.listen(PORT, () => console.log(`http://localhost:${PORT}`)); 