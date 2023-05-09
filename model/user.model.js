const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: String,
  password: String,
  name: {
    type: String,
    default: ''
  }
},{
    versionKey:false
});
const UserModel=mongoose.model("user",userSchema)
module.exports={
    UserModel
}
