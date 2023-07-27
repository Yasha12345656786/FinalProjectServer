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
PlayersRoute.get('/memory/:memoryScore', async (req,res) => {
       try {
              let {memoryScore} = req.params;
              console.log(memoryScore);
              let data = await playerModel.FindByMemoryScore(memoryScore);
              res.status(200).json(data);
       } catch (error) {
              res.status(500).json({error});
       }
});
PlayersRoute.get('/trivia/:triviaScore', async (req,res)=>{ 
       try {
              let{triviaScore} = req.params;
              console.log(triviaScore);
              let data = await playerModel.FindByTriviaScore(triviaScore);
              res.status(200).json(data);
       } catch (error) {
              res.status(500).json({error});
       }
});

PlayersRoute.put('/:id',async(req,res)=>{
       try {
              let {id} = req.params;
              let {username} = req.body;
            
              let data = await playerModel.UpdatePlayersUsername(id,{username});
       } catch (error) {
              res.status(500).json({error});
       }
});
module.exports = PlayersRoute; 