require('dotenv').config();
const express = require('express');
const app =express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const request_router = require('./src/routers/request.js');
const total_registration = require('./src/routers/registration.js');
const Secret_Page = require('./src/routers/SecretPage.js');
const events_page = require('./src/routers/events.js');
const home_login = require('./src/routers/home_login.js');
const complaint_page = require('./src/routers/complaint.js');
require("./src/DB/RegisterData.js")
const port = 4000 || process.env.PORT;
const multer = require('multer');
const path = require("path");



app.use(cors(
  {
    origin:["https://its-rgpv.vercel.app"]
    ,methods:["POST","GET"],
    credentials:true, 
  }
));


//Tak Data Function
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', "https://its-rgpv.vercel.app"); 
  res.setHeader('Access-Control-Allow-Credentials', "true");
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))
app.use(cookieParser());



app.use(request_router);
app.use(total_registration);
app.use(Secret_Page);
app.use(events_page);
app.use(home_login);
app.use(complaint_page);



//Port Listening Logic

app.listen(port,()=>{
    console.log("Connection Sucessfully....")
})

// module.exports = app