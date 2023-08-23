const DB = require('../utils/db');
class Admin{
    username;
    password;
    triviaScore;
    memoryScore;
    
    constructor(username, password,triviaScore, memoryScore){
        this.username = username;
        this.password = password;
        this.triviaScore = triviaScore;
        this.memoryScore = memoryScore;

    }
    static async GetAdminById(id){
        return await new DB().FindOneById('Admin',id);
    }

    static async UpdateAdminsUsername(id, username){
        let doc = {
            username:username
        }
        return await new DB().UpdateById('Admin', id, doc);
    }
    static async UpdateAdminsPassword(id, password){
        let doc = {
            password: await bcrypt.hash(password,10)
        }
        return await new DB().UpdateById('Admin', id, doc);
    }
    static async Login(username, password){
        let query = {username:username}
        let admin = await new DB().FindOne("Admin",query);
        if(!admin || !(await bcrypt.compare(password,admin.password))){
           return null;}
           this._id = admin._id;
           this.username = admin.username;  
        return {...this};
       }
    static async AddPoints(id,type,score){
        let admin = await new DB().FindOneById('Admin',id);
        if (type ==  0) {
            admin.memoryScore += score;
        } 
        else{
            admin.triviaScore += score;
        }
        await new DB().UpdateById('Admin',id,player);
       return player;
        
    }
       
}
module.exports = Admin;