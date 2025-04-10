import mongoose, { model } from "mongoose"
import { Schema } from "mongoose"

const UserSchema = new Schema({
    fullname : {type : String,require:true},
    email : {type : String,require:true},
    password : {type : String,require:true}
})

const UserModel = model("users",UserSchema)

export {
    UserModel
}