const memoryGame = require('../models/memoryGame');
const MemoryRoute =  require('express').Router();

MemoryRoute.get('/:id/cards', async (req,res)=>{
    try {
        let {id} = req.params;
        let data = await memoryGame.GetAllCards(id);
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

module.exports = MemoryRoute;