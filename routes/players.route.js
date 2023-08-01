const Player = require('../models/player');
const PlayersRoute = require('express').Router();

PlayersRoute.get('/',async (req,res) => {
       try {
              
        let data = await Player.FindAllPlayers();
       
        res.status(200).json(data);
       } catch (error) {
        res.status(500).json({error});
       }
});
PlayersRoute.get('/memory/:memoryScore', async (req,res) => {
       try {
              let {memoryScore} = req.params;
              console.log(memoryScore);
              let data = await Player.FindByMemoryScore(memoryScore);
              res.status(200).json(data);
       } catch (error) {
              res.status(500).json({error});
       }
});
PlayersRoute.get('/trivia/:triviaScore', async (req,res)=>{ 
       try {
              let{triviaScore} = req.params;
              console.log(triviaScore);
              let data = await Player.FindByTriviaScore(triviaScore);
              res.status(200).json(data);
       } catch (error) {
              res.status(500).json({error});
       }
});

PlayersRoute.put('/:id',async(req,res)=>{
       try {
              let {id} = req.params;
              let {username} = req.body;
              let data = await Player.UpdatePlayersUsername(id,username);
              res.status(200).json(data);
       } catch (error) {
              res.status(500).json({error});
       }
});
PlayersRoute.post('/AddUser', async(req,res)=>{
       try {
              let {first_name} = req.body;
              let {last_name} = req.body;
              let {email} = req.body;
              let {password} = req.body;
              let {username} = req.body;
              let {triviaScore} = req.body;
              let {memoryScore} = req.body;
              let data = await Player.AddNewPlayer(first_name,last_name,email,password,username,triviaScore,memoryScore)
              res.status(201).json(data);
              
       } catch (error) {
              res.status(500).json({error});
       }
});
PlayersRoute.post('/register',async (req,res)=>{
       try {
            let {first_name, last_name, email, password, username, triviaScore, memoryScore} = req.body; 
            let newPlayer =  await Player.Register(first_name, last_name, email, password, username, triviaScore, memoryScore);
            res.status(201).json(newPlayer);
       } catch (error) {
          res.status(500).json({error});
       }
});
PlayersRoute.post('/login',async (req,res)=>{
       try {
            let {username,password} = req.body;
            let player =  await Player.Login(username,password);
            console.log(player);
            if(!player){ 
              res.status(401).json({msg:"BAD login :( "});
            }
            else{
              res.status(200).json({player});
             
            }          
       } catch (error) {
          res.status(500).json({error});
         
       }
});
module.exports = PlayersRoute; 