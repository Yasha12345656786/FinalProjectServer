const memoryGame = require('../models/memoryGame');
const MemoryRoute =  require('express').Router();


MemoryRoute.get('/:id/MemoryGame', async(req,res)=>{
    try {
        let {id} = req.params;
        let data = await memoryGame.GetGame(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error});
    }
});
MemoryRoute.get('/:id/:lvl/memoryGameLevel',async(req,res)=>{
    try {
        let {id} = req.params;
        let {lvl} = req.params;
        let data = await memoryGame.GetMemoryGameLevel(id,lvl);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error});
    }
});

// MemoryRoute.get('/:id/cards', async (req,res)=>{
//     try {
//         let {id} = req.params;
//         let data = await memoryGame.GetAllCards(id);
//         res.status(200).json(data);
//     } catch (error) {
//         res.status(500).json({error});
//     }

// });

// MemoryRoute.get('/:id/MinMoves',async (req,res)=>{
//     try {
//         let {id} = req.params;
//         let data = await memoryGame.GetMovesPerLevel(id);
//         res.status(200).json(data);
//     } catch (error) {
//         res.status(500).json({error});
//     }
// })

// MemoryRoute.put('/:id/AddCard',async(req,res)=>{
//     try {
//         let {_id} = req.params;
//         let {id} = req.body;
//         let {img} = req.body;
//         let data = await memoryGame.AddCard(_id,id,img)
//         res.status(200).json(data);
//     } catch (error) {
//         res.status(500).json({error});
        
//     }
// });
// MemoryRoute.get('/:id/:Cardid/findCardByID', async(req,res)=>{
//     try {
        
//     } catch (error) {
        
//     }
// })
MemoryRoute.get('/',async (req,res)=>{
    try {
        let data = await memoryGame.GetAllLevels();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error});
    }
});
MemoryRoute.get('/:lvl',async (req,res)=>{
    try {
        let {lvl} = req.params;
        let data = await memoryGame.GetLevelBylvl(lvl);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error});
    }
});
MemoryRoute.get('/minmovesbyLvl/:lvl', async(req,res)=>{
    try {
        let {lvl} = req.params;
        let data = await memoryGame.GetMinMovesBylvl(lvl);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error});
    }
});
MemoryRoute.get('/GetPointsByLvl/:lvl',async(req,res)=>{
     try {
        let {lvl} = req.params;
        let data = await memoryGame.GetPointsByLvl(lvl);
        res.status(200).json(data);
     } catch (error) {
        res.status(500).json({error});
     }
});
MemoryRoute.post('/AddLevel',async(req,res)=>{
    try {
           let {lvl} = req.body;
           let {Cards} = req.body;
           let {MinMoves} = req.body;
           let {points} = req.body;
           let data = await memoryGame.AddLevel(lvl,Cards,MinMoves,points);
           res.status(200).json(data);
    } catch (error) {
           res.status(500).json({error});
    }
});
//tried it also with lvl
MemoryRoute.put('ChangeCardsByLvl/:lvl',async(req,res)=>{
    try {
        let {id} = req.params;
        let {Cards} = req.body;
        let data = await memoryGame.ChangeCardsByLvl(id,Cards);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error});
    }
})
module.exports = MemoryRoute;