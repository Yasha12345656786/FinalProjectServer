const DB = require('../utils/db');
const bcrypt = require('bcrypt');
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
    static async UpdatePlayersUsername(id, username){
        let doc = {username:username}
        return await new DB().UpadateById('Player', id, doc);
    }
    static async AddNewPlayer(first_name,last_name,email,password,username,triviaScore,memoryScore){
        let doc = {
            first_name:first_name,
            last_name:last_name,
            email:email, 
            password: await bcrypt.hash(password,10),
            username:username,
            triviaScore:Number(triviaScore),
            memoryScore:Number(memoryScore)
        }
            return await new DB().Insert('Player',doc);
    }
    static async Register(first_name,last_name,email,password,username,triviaScore,memoryScore){
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = await bcrypt.hash(password, 10);
        this.username =  username;
        this.triviaScore = triviaScore;
        this.memoryScore =  memoryScore;
        console.log(password,this.password);
    }
    static async Login(username, password){
        let doc = {
            username:username,
            password:password
        }
        if(await new DB.FindAll('Player',bcrypt.compare(password,doc.password))&&  await new DB().FindAll('Player', doc.username))
        {
            return doc;
        }else{
            return null;
        }
    }

}

module.exports = Player;