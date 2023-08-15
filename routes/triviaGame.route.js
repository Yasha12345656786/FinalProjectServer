const triviaGame =  require('../models/triviaGame');
const TriviaRoute = require('express').Router();

TriviaRoute.get('/:id/questions', async(req,res)=>{
    try {
        let {id} = req.params;
        let data = await triviaGame.GetAllQuestion(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error});
    }
});

TriviaRoute.get('/:id/quetion', async(req,res)=>{
    try {
        let {id} = req.params;
        
    } catch (error) {
        
    }
})
 