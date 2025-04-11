import {isObjectIdOrHexString, model, Schema} from "mongoose"

const NoteSchema = new Schema({
    title : {type : String,default : "Untitled"},
    updatedAt : {type : Date},
    summary : {type : String},
    createdby : {type : Schema.Types.ObjectId,ref : "users"}
})

const NoteModel = model("notes",NoteSchema)

export {
    NoteModel
}