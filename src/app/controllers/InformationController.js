const { mutiple } = require("../../until/mongoose");
const User = require("../models/User");

class InformationController {
  show(req, res, next) {
    User.findOne({ slug: req.params.slug })
      .then((user) => {
        res.json(user);
      })
      .catch(next);
  }


  

}

module.exports = new InformationController();
