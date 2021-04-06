const mongoose = require('mongoose');
async function connectWithDB(){
try{
    await mongoose.connect('mongodb://localhost/tinderWeb',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        userFindAndModify: false,
        useCreateIndex: true
    });
    console.log("Connect Successfully");
}catch(error){
    console.log("Connect Fail");
}
}
module.exports ={connectWithDB};
