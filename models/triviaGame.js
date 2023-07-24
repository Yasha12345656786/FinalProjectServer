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
}

module.exports = TriviaGame; 