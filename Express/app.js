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


app.get("/", (req,res)=>
{
  res.send("Hello, Its rgpv!")
})

//React Cors
// app.use(cors(
//   {
//     origin:["http://its-rgpv-2m34.vercel.app"],
//     credentials:true,
//     optionsSuccessStatus:200
//   }
// ));

app.use(cors(
  {
    origin:["https//its-rgpv-nh4a.vercel.app"]
    ,methods:["POST","GET"],
    credentials:true, 
  }
));


//Tak Data Function
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "http://its-rgpv-nh4a.vercel.app"); 
  res.header('Access-Control-Allow-Credentials', "true");
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
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

// const images = path.join(__dirname, "../public/images");
// //  console.log(images);
// const storage = multer.diskStorage({
//   destination:function(req,file,cb){
//     return cb(null,images)
//   }
//   ,
//   filename:function(req,file,cb){
//     return cb(null,`${Date.now()}_${file.originalname}`)
//   }
// })

// const uplode =multer({storage})

// app.post("/uplode",uplode.single('file'),(req,res)=>{
//   console.log(req)
//   console.log(req.file)
// })


//Port Listening Logic

app.listen(port,()=>{
    console.log("Connection Sucessfully....")
})

// module.exports = app