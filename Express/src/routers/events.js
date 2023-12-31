const express = require('express');
const router = new express.Router();
const verify = require('../Middleware/TokenVerification.js');
const pro = require('../Middleware/personal.js')
const addData = require('../Middleware/EventData.js')
const  AddEvent = require('../Model/event_data');
const PastEvent = require('../Model/PastEvent.js');
const bcrypt = require('bcryptjs');
const Request = require('../Model/ReqModel');
const path = require("path");
const fs = require('fs');

//Event Verification Request

router.get("/VerifyEvent/:id",verify,async(req,res)=>{
    try {
      const _id = req.params.id;
      const find = await Request.findById({_id});
      res.status(202).json({
      _id :_id,
      EventName:find.EventName,
      Discreption:  find.Discreption,
      Place:find.Place,
      EDate: find.EDate,
      Time: find.Time,
      Name: find.Name,
      RegLink:find.RegLink,
      EventBanner:find.EventBanner,
      Email: find.ReqEmail,
      Image: find.image,
     })
    } catch (error) {
      res.status(404).send(error);
    }
  })
  
  router.post("/VerifyEvent/:id",verify, async(req,res)=>{
    try {
      const {EventName,Discreption,Place,EDate,Time,Name,RegLink,Image, ReqEmail} = req.body;
        const response = await AddEvent.create({
          EventName,Discreption,Place,EDate,Time,Name,RegLink, ReqEmail,image:Image
        });
        res.sendStatus(202);
    } catch (error) {
       res.sendStatus(404);
    }
  })

  router.get("/AllEventDashbord/:id",verify,async(req,res)=>{
    try{
    const data = await AddEvent.find();
    res.json({data:data});
    res.status(201);
    }catch(error){
      res.sendStatus(404);
    }
  })

  router.get("/PastEvent/:id",async(req,res)=>{
    try{
    const data = await PastEvent.find();
    res.json({data:data});
    res.status(201);
    }catch(error){
      res.sendStatus(404);
    }
  })

  //Event Add
  router.post("/uplodeData",addData,async (req,res)=>{
    try{
    const {Password,ReqEmail,Discreption,EventName,Place,EDate, Time, Name,RegLink,MobileNumber,image} = req.body;
    let em = req.user;
     let pa = req.password; 
     const isMatch = await bcrypt.compare(Password, pa);
     if(em===ReqEmail && isMatch===true){
      if(ReqEmail === (process.env.HostEmail1 || process.env.HostEmail2) ){
        await AddEvent.create({
        EventName,Name,Discreption,Place,EDate, Time,ReqEmail,Name,RegLink,image
        })
      }
      else{
      const res = await Request.create({
        Password,ReqEmail,EventName,Discreption, Place, EDate, Time,Name,MobileNumber,RegLink,image})
      }
      res.json({HostEmail1:process.env.HostEmail1 , HostEmail2:process.env.HostEmail2  }).status(201);
     }
     else{
      console.log(error)
      res.sendStatus(404);
     }
  }
  catch(error){
    console.log(error)
    res.sendStatus(404);
  }
  })
  
  //***************----------------------------*********************** */
  // Show Event
  router.get("/events", async (req, res) => {
    try{
        const data = await AddEvent.find();
        res.json({data:data});
        res.sendStatus(201);
        }catch(e){
          console.log(e);
         res.sendStatus(404);
        }
  }) 
  
  //Past Event Show
  router.get("/PastEvent",async(req,res)=>{
    try{
      const data = await PastEvent.find();
      res.json({data:data});
      res.sendStatus(201);
      }catch(e){
        console.log(e);
        res.sendStatus(404);
      }
  })
  
  //***************----------------------------*********************** */
  //Edit Event
  router.get("/edit/:id",verify, async (req,res)=>{
    try {
        const _id = req.params.id;
        const find = await AddEvent.findById({_id});
        res.status(202).json({
        _id :_id,
        EventName:find.EventName,
        Discreption:  find.Discreption,
        Place:find.Place,
        EDate: find.EDate,
        Time: find.Time,
        Name: find.Name,
        RegLink: find.RegLink,
        EventBanner: find.EventBanner,
        Email: find.ReqEmail,
      })
    } catch (error) {
        res.status(404).send(error);
    }
  })
  
  router.post("/edit/:id",pro,async (req,res)=>{
    try{
        const pass = req.password;
        const Password = req.body.Password;
        const _id = req.params.id;
        const isMatch = await bcrypt.compare(Password,pass); 
       if(isMatch === true){
        const up = await AddEvent.updateOne({ _id},{
            $set :{
                EventName:req.body.EventName,
                Discreption:  req.body.Discreption,
                Place:req.body.Place,
                EDate: req.body.EDate,
                Time: req.body.Time,
                Name: req.body.Name,
                RegLink: req.body.RegLink,
                EventBanner: req.body.EventBanner,
                 ReqEmail: req.body.ReqEmail
            }
        })
        res.json({data:up}).status(202);
      }
      else{
        res.status(404);
      }
    }catch(error){
      res.status(404)
    }
  })

  //Delete Event 
router.delete("/PersonalPage/:id",async(req,res)=>{
    try {
      const _id = req.params.id;
       const deletedata = await AddEvent.findById(_id);
       const {EventName,Discreption,Place,EDate, Time, Name,RegLink,image} = deletedata;
       await PastEvent.create({
        EventName,Discreption,Place,EDate, Time, Name,RegLink,image
       })
       await AddEvent.findByIdAndDelete(_id);
         res.sendStatus(202);
    } 
    catch (error) {
      res.sendStatus(404);
    }
  })
  
  router.delete("/PastEvent/:id",async(req,res)=>{
    try {
      const _id = req.params.id;
      const data =  await PastEvent.findById(_id);
       const imgName = data.image;
      console.log(imgName)
       if(imgName != null){
         const pat = path.join(__dirname,`../../public/images/${imgName}`)
        fs.unlinkSync(pat);
       }
      await PastEvent.findByIdAndDelete(_id);
        res.sendStatus(202);
    } 
    catch (error) {
      res.sendStatus(404);
      console.log(error);
    }
  })

  
module.exports = router;
