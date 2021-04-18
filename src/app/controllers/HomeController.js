const {mutiple}  = require('../../until/mongoose');
const User = require("../models/User");

class HomeController {
  index(req, res, next) {
    //
    User.find({}).then(users => {
      res.render('home',{users: mutiple(users)}
      );
    }).catch(next);
    
    // return res.render('home',{
    //     style: 'home.css'
    // });
  }

  // POST 

/////// SLide 8///////

  // getUser(req, res, next) {
  //   var baseJson = {
  //     errorCode : undefined,
  //     errorMessage: undefined,
  //     data:undefined
  //   }
  //   User.find({}).then(users => {users = users.map(function (userCallBack) {
  //       return userCallBack.toObject();
  //     })
  //       baseJson.errorCode =200
  //       baseJson.errorMessage = 'OK'
  //       baseJson.data = users
  //   }).catch(
  //       baseJson.errorCode =404
  //       baseJson.data = next
  //   );
  // }
}
module.exports = new HomeController()
