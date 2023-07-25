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
        console.log(2);
        return await new DB().FindAll('player');
    }

    static async FindByMemoryScore(memoryScore){
        let query = {"memoryScore": memoryScore}
        return await new DB().FindAll('player', query);
    }

}

module.exports = Player;