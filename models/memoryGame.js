const { ObjectId } = require('mongodb');
const DB = require('../utils/db');
class MemoryGame {
   levels;
   cards;
   minMoves;
   points;

    constructor(levels, cards, minMoves, points) {
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
       //let query = this.GetGame(gameID);
       let projection = {Levels:{$elemMatch:{lvl:2}}};
       const queryAns = await new DB().FindOne('MemoryGame',projection,projection);
        return queryAns;
    }
    // static async GetAllCards(gameID,) {
    //     let memoryGame = GetGame(gameID);5
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
    static async GetAllLevels(){
        return await new DB().FindAll('MemoryGame');
    }
    static async GetLevelBylvl(lvl){

    }
}

module.exports = MemoryGame;
