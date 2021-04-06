const Users = require('../models/Users');
class HomeController{
    index(req,res,next){
Users.find({}).then(user => {
    user = user.map(function(newCallback){
        return newCallback.toObject();
    })  
    res.send({user});

}).catch(next);

        // return res.render('home',{
        //     style: 'home.css'
        // });
    }
}
module.exports = new HomeController;