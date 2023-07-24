const playerModel = require('../models/player');
const PlayersRoute = require('express').Router();

PlayersRoute.get('/',async (req,res) => {
       try {
        let data = await playerModel.FindAllPlayers();
        res.status(200).json(data);
       } catch (error) {
        res.status(500).json({error});
       }
});


module.exports = PlayersRoute;