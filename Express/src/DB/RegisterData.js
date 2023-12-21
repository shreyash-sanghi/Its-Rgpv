const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://shreyashjain:Bittu@8085@shreyashjain.dhe7mgt.mongodb.net/${maindatafolder}?retryWrites=true&w=majority`)
.then(()=>{console.log(" Data-Base connection sucessfully....")})
.catch((e)=>{console.log(e)})