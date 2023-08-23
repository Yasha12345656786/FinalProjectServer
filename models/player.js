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
        return await new DB().UpdateById('Player', id, doc);
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
        return await new DB().Insert('Player',{...this});
    }
    static async Login(username, password){
     let query = {username:username}
     let player = await new DB().FindOne("Player",query);
     if(!player || !(await bcrypt.compare(password,player.password))){
        return null;}
        this._id = player._id;
        this.first_name = player.first_name;
        this.last_name = player.last_name;
        this.email = player.email;
        this.username = player.username;
        this.triviaScore = player.triviaScore;
        this.memoryScore = player.memoryScore;
     return {...this};
    }
    static async AddPoints(id,type,score){
        let player = await new DB().FindOneById('Player',id);
        if (type ==  0) {
            player.memoryScore += score;
        } 
        else{
            player.triviaScore += score;
        }
        await new DB().UpdateById('Player',id,player);
       return player;
        
    }
    

}

module.exports = Player;