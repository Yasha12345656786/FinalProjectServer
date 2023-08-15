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

MemoryRoute.get('/:id/MinMoves',async (req,res)=>{
    try {
        let {id} = req.params;
        let data = await memoryGame.GetMovesPerLevel(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error});
    }
})

MemoryRoute.put('/:id/AddCard',async(req,res)=>{
    try {
        let {_id} = req.params;
        let {id} = req.body;
        let {img} = req.body;
        let data = await memoryGame.AddCard(_id,id,img)
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error});
        
    }
});
MemoryRoute.get('/:id/:Cardid/findCardByID', async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
})

module.exports = MemoryRoute;