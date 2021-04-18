const { mutiple, mongooseToObject } = require("../../until/mongoose");
const User = require("../models/User");

class ManageController {
  users(req, res, next) {
    User.find({})
      .then((users) =>
        res.render("managerUsers/users", {
          users: mutiple(users),
        })
      )
      .catch(next);
  }

  edit(req, res, next) {
    User.findById(req.params.id)
      .then((user) =>
        res.render("managerUsers/edit", {
          user: mongooseToObject(user),
        })
      )
      .catch(next);
  }

  // PUT //manage/user/:id
  update(req, res, next) {
    User.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/manage/users"))
      .catch(next);
  }

  // [DELETE]
  delete(req, res, next) {
    User.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}
module.exports = new ManageController();
