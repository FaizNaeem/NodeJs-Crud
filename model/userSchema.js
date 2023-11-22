const mongoose = require("mongoose")
const Schema_user = new mongoose.Schema({
    email :{type :mongoose.SchemaTypes.String , unique:true, requird:true},
    name :{type :mongoose.SchemaTypes.String , requird:true},
    password :{type :mongoose.SchemaTypes.String ,  requird:true}
})
const user = mongoose.model("user-Practice1", Schema_user)
module.exports = user