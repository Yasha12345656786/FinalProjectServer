const DB = require('../utils/db');
class Admin{
    password;
    email;
    triviaScore;
    memoryScore;
    
    constructor(email, password,triviaScore, memoryScore){
        this.email = email;
        this.password = password;
        this.triviaScore = triviaScore;
        this.memoryScore = memoryScore;

    }
    static async GetAdminById(id){
        return await new DB().FindOneById('Admin',id);
    }
    static async GetAdminByEmail(email){
        let query = {email:email};
        return await new DB().FindOne('Admin',query);
    }

    static async UpdateAdminsEmail(id, email){
        let doc = {
            email:email
        }
        return await new DB().UpdateById('Admin', id, doc);
    }
    static async UpdateAdminsPassword(id, password){
        let doc = {
            password: password
        }
        return await new DB().UpdateById('Admin', id, doc);
    }
    static async Login(email, password){
        let query = {email:email}
        console.log(query);
        let admin = await new DB().FindOne("Admin",query);
     
        if(!admin || !(await (password,admin.password))){
            console.log("admin",admin)
           return null;}
           this._id = admin._id;
           this.email = admin.email;  
        return {...this};
       }
    //    static async AddNewAdmin(password,username,triviaScore,memoryScore){
    //     let doc = {
    //         password: await bcrypt.hash(password,10),
    //         username:username,
    //         triviaScore:Number(triviaScore),
    //         memoryScore:Number(memoryScore)
    //     }
    //         return await new DB().Insert('Admin',doc);
    // }
    static async AddPoints(id,type,score){
        let admin = await new DB().FindOneById('Admin',id);
        if (type ===  0) {
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