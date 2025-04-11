import express from "express"
import { CreateNote, GetNotes, GetoneNote, UpdateNote } from "../controllers/noteController.js"


const NoteRouter = express.Router()

NoteRouter.post("/update/new",CreateNote)
NoteRouter.put("/update/:id",UpdateNote)
NoteRouter.get("/getnotes",GetNotes)
NoteRouter.get("/getnotes/:noteId",GetoneNote)

export {
    NoteRouter
}