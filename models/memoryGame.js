const DB = require('../utils/db');
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
    static n = 0;

    static async GetAllCards(){
        let card = "card" + (++n);
        return await new DB().GetAllCardsDB('MemoryGame', card);
    }
    static async GetCardById(){
        let query = {id:id}
        return await new DB().GetCardByIdDB('MemoryGame',query);

    }
}

module.exports = MemoryGame;