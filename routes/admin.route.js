const Admin = require('../models/Admin');
const PlayersRoute = require('./players.route');
const AdminsRoute = require('express').Router();

AdminsRoute.post('/amdin/login',async (req,res)=>{
    try {
         let {username,password} = req.body;
         let admin =  await Admin.Login(username,password);
         console.log(admin);
         if(!admin){ 
           res.status(401).json({msg:"BAD login :( "});
         }
         else{
           res.status(200).json({admin});
          
         }          
    } catch (error) {
       res.status(500).json({error});
      
    }
});
module.exports = PlayersRoute;