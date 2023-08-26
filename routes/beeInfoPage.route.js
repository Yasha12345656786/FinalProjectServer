const BeeInfoPage =require('../models/beeInfoPage');
const BeeInfoPageRoute = require('express').Router();


BeeInfoPageRoute.get('/',async(req,res)=>{
    try {
        let data =await BeeInfoPage.FindAllInfoPages();
        res.status(200);
    } catch (error) { 
        res.status(500).json({error});
    }
});
BeeInfoPageRoute.get('/getPageById/:id',async(req,res)=>{
    try {
        let {id} = req.params;
        let data = await BeeInfoPage.GetPageById(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error});
    }
})


module.exports = BeeInfoPageRoute;