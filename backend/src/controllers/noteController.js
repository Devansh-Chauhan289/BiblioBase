import { NoteModel } from "../models/noteModel.js"


const CreateNote = async(req,res) => {
    const {title,summary,userId} = req.body
    try{
        // if(!title || !summary){
        //     const newnote = await NoteModel({
        //         summary : ""
        //     })
        //     await newnote.save()
        //     return res.status(201).json({msg : "successs"})
        // }

        const newnote = await NoteModel({
            title,
            summary,
            updatedAt : Date.now(),
            createdby : userId
        })
        await newnote.save()
        return res.status(201).json({msg : "successs"})
        
    } catch(error){
        console.log("Error Occurred",error);
        return res.status(500).json({msg : "Something went wrong"})
    }
}


const UpdateNote = async(req,res) => {
    const {title,summary} = req.body
    const {id}  = req.params
    try{
        
        const mynote = await NoteModel.findById(id)

        mynote.summary = summary || mynote.summary
        mynote.updatedAt = Date.now()
        mynote.title = title || "Untitled"

        await mynote.save()
        
        return res.status(201).json({msg : "successs"})
        
    } catch(error){
        console.log("Error Occurred",error);
        return res.status(500).json({msg : "Something went wrong"})
    }
}


const GetNotes = async(req,res) => {

    
    try {
        const Allnotes = await NoteModel.find()
        if(!Allnotes){
            res.status(200).json({msg : "Success",Allnotes})
        }
        return res.status(200).json({msg : "success",notes : Allnotes})
    } catch (error) {
        console.log("Error Occurred", error);
        return res.status(500).json({ msg: "Something went wrong" });
    }
}

const GetoneNote = async(req,res) => {
    const {noteId} = req.params
    try {
        const note = await NoteModel.findById(noteId)
        return res.status(200).json({msg : "success", Note : note})
    } catch (error) {
        console.log("Error Occurred", error);
        return res.status(500).json({ msg: "Something went wrong" });
    }
}




export {
    CreateNote,
    UpdateNote,
    GetNotes,
    GetoneNote
}

