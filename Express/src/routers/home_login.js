const express = require('express');
const router = new express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Register = require('../Model/RegModel');


router.get("/",(req,res)=>{
  res.json("Hello")
})
//Club Login
router.post("/login",async(req,res)=>{
  try {
  
  const {Email,Password} = req.body; 
  const userEmail = await Register.findOne({ Email: Email });
  const isMatch = await bcrypt.compare(Password, userEmail.Password); 
  if(isMatch === true){
    if (isMatch) {
      for(let i=0; i<userEmail.tokens.length;i++){
          userEmail.tokens.shift();
      }
      const token = await userEmail.LoginToken();
      res.cookie("jwt",token)
      res.json({token:token,Email:userEmail.Email,id:userEmail.id,HostEmail1:process.env.HostEmail1,HostEmail2:process.env.HostEmail2}).status(202);
    }
  }else{
    res.sendStatus(404);
  } 
} catch (error) {
  res.sendStatus(404)
}
})


module.exports = router;