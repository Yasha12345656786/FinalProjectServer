const DB = require('../utils/db');
class Player{
    first_name;
    last_name;
    email;
    password;
    username;
    triviaScore;
    memoryScore;
   
    constructor(first_name,last_name,email,password,username,triviaScore,memoryScore){
        this.first_name =  first_name;
        this.last_name = last_name;
        this.email = email; 
        this.password = password;
        this.username = username;
        this.triviaScore = triviaScore;
        this.memoryScore = memoryScore;
    }

    static async FindAllPlayers(){
        
        return await new DB().FindAll('Player');
    }

    static async FindByMemoryScore(memoryScore){
        let query = {"memoryScore": Number(memoryScore)}
        return await new DB().FindAll('Player', query);
    }
    static async FindByTriviaScore(triviaScore){
        let query = {"triviaScore": Number(triviaScore)}
        return await new DB().FindAll('Player',query);
    }
    static async UpdatePlayersUsername(id, doc){
        return await new DB().UpadateById('Player', id, doc);
    }

}

module.exports = Player;