require('dotenv').config();
const express = require('express');
const path = require('path'); 
const cors = require('cors'); 
const PORT = process.env.PORT || 5500;

let server =  express(); 
server.use(express.json());
server.use(cors());
server.use(express.static(path.join(__dirname, 'Client','dist')));

server.use('/api/admin',require('./routes/admin.route'));
server.use('/api/player',require('./routes/players.route'));
server.use('/api/memoryGame',require('./routes/memoryGame.route'));
// server.use('/api/triviaGame',require('./routes/triviaGame.route'));
server.get('/*', async (req, res) => {
    try {
      res.status(200).sendFile(path.join(__dirname, 'Client','dist', 'index.html'));
    } catch (error) {
      res.status(500).json({error});
    }
  });
server.listen(PORT, () => console.log(`http://localhost:${PORT}`)); 


/*
{
  "cards": [
    {
        "id": 1,
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFFYEThPelzGM94dPw09K2hyv3sseRvXzzEw&usqp=CAU"
    },
    {
        "id": 2,
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3T6L39gtoDMjfaRJm9wYI8141L3KH32A-0Q&usqp=CAU"

    },
    {

        "id": 3,
        "img": "https://cdn.pixabay.com/photo/2013/07/13/14/03/bee-162038_960_720.png"

    },
    {

        "id": 4,
        "img": "https://clipartix.com/wp-content/uploads/2016/04/Search-results-search-results-for-bee-pictures-graphics-clip-art.jpg"

    },
    {

        "id": 5,
        "img": "https://us.123rf.com/450wm/pxlprostudio/pxlprostudio1908/pxlprostudio190800023/127966953-beekeeping-related-icon-on-background-for-graphic-and-web-design-simple-illustration-internet.jpg?ver=6"

    }
  ]
}
*/