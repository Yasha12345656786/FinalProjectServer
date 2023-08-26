const DB = reqiure('../utils/db');
class BeeInfoPage{
    link;

    constructor(link){
        this.link = link;
    }

    static async FindAllInfoPages(){
        return await new DB().FindAll('BeeInfoPages');
    }
    static async GetPageById(id){
        return await new DB().FindOneById('BeeInfoPages',id);
    }
}
module.exports = BeeInfoPage;
