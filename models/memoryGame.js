const { ObjectId } = require('mongodb');
const DB = require('../utils/db');
class MemoryGame {
   lvl;
   Cards;
   MinMoves;
   points;

    constructor(lvl, Cards, MinMoves, points) {
        this.lvl = lvl;
        this.Cards = Cards
        this.MinMoves = MinMoves;
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
        let query = {"lvl":Number(lvl)}
        return await new DB().FindAll('MemoryGame',query);

    }
    static async GetMinMovesBylvl(lvl){
        let query={"lvl":Number(lvl)}
        let options  = {projection:{MinMoves:1,lvl:0}}
        return await new DB().FindOne('MemoryGame',query,options)
    }
    static async GetPointsByLvl(lvl){
        let query={"lvl":Number(lvl)}
        let options = {projection:{points:1,id:0}}
        return await new DB().FindOne('MemoryGame',query,options)
    }
    static async AddLevel( lvl,Cards,MinMoves,points){
        let doc = {
            lvl:lvl,
            Cards:Cards,
            MinMoves:MinMoves,
            points:Number(points)
        }

        return await new DB().Insert('MemoryGame',doc);
    }
    static async EditLevelById(id, lvl, Cards, MinMoves, points){
        let doc = {
            lvl:Number(lvl),
            Cards:Cards,
            MinMoves:Number(MinMoves),
            points:Number(points)
        }
        return await new DB().UpdateById('MemoryGame', id, doc);
    }
    static async GetNextGameByLvl(lvl){
        let query = {lvl:lvl+1}
        return await new DB().FindOne('MemoryGame',query);
    }
}

module.exports = MemoryGame;
