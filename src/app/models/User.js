const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    fullName: { type: String, maxlength: 50, required: true },
    username:{type: String, maxlength: 20, required: true},
    email: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    password: { type: String, required: true },
    description:{type: String, required:true},
    hobby :{type: String, required: true},
    image :{type: String}
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", User, "Users");
