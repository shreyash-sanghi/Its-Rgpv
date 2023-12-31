require('dotenv').config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const request_router = require('./src/routers/request.js');
const total_registration = require('./src/routers/registration.js');
const Secret_Page = require('./src/routers/SecretPage.js');
const events_page = require('./src/routers/events.js');
const home_login = require('./src/routers/home_login.js');
const complaint_page = require('./src/routers/complaint.js');
const port = process.env.PORT || 4000 ;
const multer = require('multer');
const path = require("path");
const { default: mongoose } = require('mongoose');



app.use(cors(
  {
    origin: ["https://its-rgpv.vercel.app", "https://its-rgpv-nmum.vercel.app"]
    , methods: ["POST", "GET","OPTIONS", "PUT", "DELETE"],
    credentials: true,
  }
));


//Tak Data Function
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', "https://its-rgpv.vercel.app");
  res.header('Access-Control-Allow-Credentials', "true");
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))
app.use(cookieParser());

//Port Listening Logic
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log(" Data-Base connection sucessfully....")

  })
  .catch((e) => { console.log(e) })


app.use(request_router);
app.use(total_registration);
app.use(Secret_Page);
app.use(events_page);
app.use(home_login);
app.use(complaint_page);

app.listen(port, () => {
  console.log("Connection Sucessfully....")
})
// module.exports = app