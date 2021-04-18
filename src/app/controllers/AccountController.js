const { mutiple } = require("../../until/mongoose");
const User = require("../models/User");

class AccountController {
  login(req, res) {
    return res.render("login", {
      style: "app.css",
    });
  }
  register(req, res) {
    return res.render("register", {
      style: "signup.css",
    });
  }
  infor(req, res, next) {
    const formData = req.body;
    const user = new User(formData);
    //   user.save().then(() => res.redirect('/')).catch(erro => {});
    user.save();
    res.send(user);
  }
}
module.exports = new AccountController();
