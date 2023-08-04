const DB = require('../utils/db');
class Admin{
    username;
    password;
    
    constructor(username, password){
        this.username = username;
        this.password = password;

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
}
module.exports = Admin;