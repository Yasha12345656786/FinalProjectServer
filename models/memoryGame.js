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
    static async GetGame(gameID){
        let query = {_id:new ObjectId(gameID)}
        return await new DB().FindOne('MemoryGame',query);
    }

    static async GetAllCards(gameID) {
        let query = { _id: new ObjectId(gameID) }
        let options = { projection: { cards: 1, _id:0 } }
        return await new DB().FindOne('MemoryGame', query, options);
    }
    static async GetCard(gameID){
        let game = this.GetGame()

    }
    static async AddCard(gameID,id,img){
        let query = {_id: new ObjectId(gameID)}
        let doc = {
            id: id,
            img:img
        }
        return await new DB().UpadateById('MemoryGame',query,doc)
    }
    static async GetMovesPerLevel(gameID){
        let query = {_id:new ObjectId(gameID)}
        let options = {projection:{MinMoves:1,_id:0}}
        return await new DB().FindOne('MemoryGame',query,options);
    }
    static async GetCardById(gameID, cardID) {
        let query = { "cardID": cardID }
        return await new DB().FindOne('MemoryGame', query);

    }
}

module.exports = MemoryGame;