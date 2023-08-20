const { ObjectId } = require('mongodb');
const DB = require('../utils/db');
class MemoryGame {
   levels;
   cards;
   minMoves;
   points;

    constructor(level, cards, minMoves, points) {
        this.levels = levels;
        this.cards = cards;
        this.minMoves = minMoves;
        this.points = points;
    }
    static async GetGame(gameID){
        let query = {_id:new ObjectId(gameID)}
        return await new DB().FindOne('MemoryGame',query);
    }
    static async GetMemoryGameLevel(gameID,lvl){
       let query = this.GetGame(gameID);
       let options = {
        Levels: 
            {$elemMatch:{lvl:lvl,query}}
       }
        return await new DB().FindAll('MemoryGame',options);
    }

    // static async GetAllCards(gameID,) {
    //     let memoryGame = GetGame(gameID);
    //     let query = 
    //     let options = {}
    //     return await new DB().FindOne('MemoryGame', query, options);
    // }
    // static async GetCard(gameID){
    //     let game = this.GetGame()

    // }
    // static async AddCard(gameID,id,img){
    //     let query = {_id: new ObjectId(gameID)}
    //     let doc = {
    //         id: id,
    //         img:img
    //     }
    //     return await new DB().UpadateById('MemoryGame',query,doc)
    // }
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