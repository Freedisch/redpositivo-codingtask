import mongoose from "mongoose";
const Schema = mongoose.Schema;

var validateEmail = function (email: string) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const User = new Schema({
  id: { type: Math.random() },
  name: { type: String, required: true, minlength: 3, maxlength: 25 },
  email: {
    type: String,
    required: true,
    validate: [validateEmail, "Please fill a valid email address"],
  },
  phoneNumber: Number,
  hobbies: { type: String, required: true, minlength: 3, maxlength: 45 },
});

exports.Userform = mongoose.model("User", User);
