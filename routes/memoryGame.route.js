const memoryGame = require('../models/memoryGame');
const MemoryRoute =  require('express').Router();

MemoryRoute.get('/cards/:card', async (req,res)=>{
    try {
        let data = await memoryGame.GetAllCards();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error});
    }

});
MemoryRoute.get('/card/:id',async(req,res)=>{
    try {
        let data = await memoryGame.GetCardById();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error});
        
    }
});
