const {ObjectId} = require('mongodb');
const DB = require('../utils/db');
class TriviaGame {
    answers;
    correctAnswers;
    levels;
    questions;
    scorePerQuestion;

    constructor(answers, correctAnswers, levels, questions, scorePerQuestion){
        this.answers = answers;
        this.correctAnswers = correctAnswers;
        this.levels = levels;
        this.questions = questions;
        this.scorePerQuestion = scorePerQuestion;
    }
    static async GetGame(gameID){
        let query ={_id: new ObjectId(gameID)}
        return await new DB().FindOne('TriviaGame',query);
    }

    static async GetAllQuestion(gameID){
        let query = {_id: new ObjectId(gameID)}
        let options = {projection: {Questions:1,_id:0}}
        return await new DB().FindOne('TriviaGame',query,options)
    }
    static async GetQuestionsByLvl(gameID){ 
    let game = this.GetGame(gameID)
    let query = game.Questions
    let options ={projection:{Questions:lvl,_id:0}}
    return await new DB().FindOne('TriviaGame',query, options)
    }

   
}

module.exports = TriviaGame; 
