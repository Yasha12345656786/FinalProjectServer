const triviaGame =  require('../models/triviaGame');
const TriviaRoute = require('express').Router();

TriviaRoute.get('/question/:lvl',async (req,res)=>{
    try {
        let data = await triviaGame.GetOneQuestion();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error});
    }
});
TriviaRoute.get('/answers/:lvl',async (req,res)=>{
    try {
        let data = await triviaGame.GetAnswers();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error});
    }
});
TriviaRoute.get('/correctAnswers/:lvl',async (req,res)=>{
    try {
        let data = await triviaGame.GetCorrectAnswers();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error});
    }
});
// TriviaRoute.post('/addQuestion', async(req,res)=>{
//     try {
//         answers;
//     correctAnswers;
//     levels;
//     questions;
//     scorePerQuestion
//     } catch (error) {
        
//     }

// });

 