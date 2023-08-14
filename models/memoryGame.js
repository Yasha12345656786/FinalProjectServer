const { ObjectId } = require('mongodb');
const DB = require('../utils/db');
class MemoryGame {
    cards;
    levels;
    minMoves;
    score;

    constructor(cards, levels, minMoves, score) {
        this.cards = cards;
        this.levels = levels;
        this.minMoves = minMoves;
        this.score = score;

    }
    static n = 0;

    static async GetAllCards(gameID) {
        let query = { _id: new ObjectId(gameID) }
        let options = { projection: { cards: 1, _id:0 } }
        return await new DB().FindOne('MemoryGame', query, options);
    }
    static async GetCardById() {
        let query = { id: id }
        return await new DB().GetCardByIdDB('MemoryGame', query);

    }
}

module.exports = MemoryGame;