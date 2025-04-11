import express from "express"
import mongoose from "mongoose"
import { UserRouter } from "./src/routes/userRoutes.js"
import dotenv from "dotenv"
import { NoteRouter } from "./src/routes/noteROuter.js"
import cors from "cors"

dotenv.config()


const app = express()

app.use(express.json())
app.use(cors())

app.use("/user",UserRouter)
app.use("/notes",NoteRouter)


app.listen(5050,() => {
    try {
        mongoose.connect(process.env.DB_URL)
        console.log("databse connected");
    } catch (error) {
        return console.log("Error occurred",error);
    }
    console.log("Server is running on ")
})