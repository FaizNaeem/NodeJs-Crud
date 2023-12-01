const mongoose = require("mongoose")
const SignupSchema = new mongoose.Schema({
    name :{type :mongoose.SchemaTypes.String , required:true},
    lname :{type :mongoose.SchemaTypes.String , required:true},
    email :{type :mongoose.SchemaTypes.String , unique:true, required:true},
    password :{type :mongoose.SchemaTypes.String ,  required:true}
})
const signup = mongoose.model("Signup", SignupSchema)
module.exports = signup