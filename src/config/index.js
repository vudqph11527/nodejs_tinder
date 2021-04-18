const mongoose = require('mongoose');

async function connectWithDB(){
try{
    await mongoose.connect('mongodb+srv://quangvucot:DaoVu5001@cluster0.94wjh.mongodb.net/Tinder',{
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
