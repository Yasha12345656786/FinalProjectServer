const {MongoClient, ObjectId} = require('mongodb');
class DB{
    db_uri;
    db_name;
    client;

    constructor(){
        console.log(3);
        this.db_uri = "mongodb+srv://GUTS:jacob00045052@cluster0.epjctzx.mongodb.net/?retryWrites=true&w=majority";
        this.db_name = "KenDvorim";
        this.client = new MongoClient(this.db_uri);
        console.log(4, this.client);
    }

    async FindAll(collection, query = {}, project = {}){
        try {
            console.log(5);
            await this.client.connect();
            console.log(6);
            return await this.client.db(this.db_name).collection(collection).find(query, project).toArray();
        } catch (error) {
            throw error;
        }
        finally{
            await this.client.close();
        }
        
    }

    

}
module.exports = DB;