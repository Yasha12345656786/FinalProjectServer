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

    static nq = 0;
    static na = 0;
    static nac = 0;

    static async GetOneQuestion(){
        let lvl = "lvl" + (++nq);
        return await new DB().GetQuestion('TriviaGame', lvl);
        
    }

    static async GetAnswers(){
        let lvl = "lvl" + (++na);
        return await new DB().GetAnswersDB('TriviaGame', lvl);
    }
    static async GetCorrectAnswers(){
        let lvl = "lvl" + (++nac);
        return await new DB().GetCorrectAnswerDB('TriviaGame', lvl);
    }
}

module.exports = TriviaGame; 