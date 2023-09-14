const Admin = require('../models/Admin');
const AdminsRoute = require('express').Router();

AdminsRoute.post('/login',async (req,res)=>{
    
    try {
         let {username,password} = req.body;
       
         let admin =  await Admin.Login(username,password);
         console.log(admin);
         if(!admin){ 
           res.status(401).json({msg:"BAD login :( "});
         }
        
           res.status(200).json({admin});
          
               
    } catch (error) {
       res.status(500).json({error});
      
    }
});
AdminsRoute.put('/updateUsername/:id',async(req,res)=>{
  try {
         let {id} = req.params;
         let {username} = req.body;
         let data = await Admin.UpdateAdminsUsername(id,username);
         res.status(200).json(data);
  } catch (error) {
         res.status(500).json({error});
  }
});
AdminsRoute.put('/updatePassword/:id',async(req,res)=>{
  try {
         let {id} = req.params;
         let {password} = req.body;
         let data = await Admin.UpdateAdminsPassword(id, password);
         res.status(200).json(data);
  } catch (error) {
         res.status(500).json({error});
  }
});
AdminsRoute.get('/getAdminById/:id',async(req,res)=>{
  try {
         let {id} = req.params;
         let data = await Admin.GetAdminById(id);
         res.status(200).json(data);
  } catch (error) {
         res.status(500).json({error});
         
  }
});
AdminsRoute.post('/AddPoints',async(req,res)=>{
  try {
         let {id,type,score}=req.body;
         let admin = await Admin.AddPoints(id,type,score);
         res.status(200).json({admin});
  } catch (error) {
   res.status(500).json({error});
  }
});
module.exports = AdminsRoute;