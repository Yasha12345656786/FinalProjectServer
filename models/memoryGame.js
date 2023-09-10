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
    
    static async GetCards(lvl){
        let query = {"lvl":Number(lvl)} 
        let options  = {projection:{cards:1}}
        return await new DB().FindOne('MemoryGame',query,options);
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
