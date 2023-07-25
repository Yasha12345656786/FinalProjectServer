const playerModel = require('../models/player');
const PlayersRoute = require('express').Router();

PlayersRoute.get('/',async (req,res) => {
       try {
           console.log(1);   
        let data = await playerModel.FindAllPlayers();
        console.log(7);
        res.status(200).json(data);
       } catch (error) {
        res.status(500).json({error});
       }
});
PlayersRoute.get('/:memoryScore', async (req,res) => {
       try {
              let {memoryScore} = req.params;
              let data = await playerModel.FindByMemoryScore(memoryScore);
              res.status(200).json(data);
       } catch (error) {
              res.status(500).json({error});
       }
});


module.exports = PlayersRoute; 