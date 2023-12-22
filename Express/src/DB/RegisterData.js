const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log(" Data-Base connection sucessfully....")})
.catch((e)=>{console.log(e)})