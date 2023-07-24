class MemoryGame{
    cards;
    levels;
    minMoves;
    score;

    constructor(cards,levels,minMoves,score){
        this.cards = cards;
        this.levels = levels;
        this.minMoves = minMoves;
        this.score = score;
        
    }
}

module.exports = MemoryGame;