import { useEffect, useState } from "react";
import { Input } from "../modules/input";


export const Dashboard = () => {

    const [notes,setnotes] = useState([])
    const [single,setsingle] = useState(null)
    const [updatedData, setupdatedData] = useState({
        title : "",
        summary : ""
    })

    const getnotes = async() => {

        const res = await fetch("http://localhost:5050/notes/getnotes",{
            method : "GET",
            headers : {
                "Content-Type" : "application/json"
            },
            
        })
        const data = await res.json()
        if(res.status == 200){
            setnotes(data.notes)
        }
        console.log(data);
    }

    const GetOneNote = async(noteId) => {

        const res = await fetch(`http://localhost:5050/notes/getnotes/${noteId}`,{
            method : "GET",
            headers : {
                "Content-type" : "application/json"
            }
        })
        const data = await res.json()
        setsingle(data.Note)
    }

    const UpdateNote = async(e,noteId) => {
        const updatedField = {
            [e.target.name] : e.target.value
        }
        setsingle((prev) => ({
            ...prev,
            updatedField
        }))
        const res = await fetch(`http://localhost:5050/notes/update/${noteId}`,{
            method : "PUT",
            headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify({
                ...single,
                ...updatedField
            })

        })
        const data = await res.json()
        setsingle(data.Note)
    }

    useEffect(() => {
        getnotes()
    },[])



    notes ? console.log(notes) : console.log("NO res");
    return(
        <>
        <div className="h-screen w-full flex bg-[#222831] text-white  ">
            <div className="border-2 border-gray h-screen w-[25%]">
                {
                    notes? (
                        notes.map((note) => (
                            <div key={note._id} className="" onClick={() => GetOneNote(note._id)}   >
                                <h1>{note.title}</h1>
                                <h3>{note.summary.substring(0,35)}</h3>
                                <hr />
                            </div>
                        ))
                    ) : (
                        <div>No Notes available</div>
                    )
                }
            </div>
            <div className="border-2 border-black h-screen w-[75%]">
                {
                    single ? (
                        <div>
                            <Input value={single.title} name="title" onchange={(e) => UpdateNote(e,single._id)} className="h-30 text-6xl"  />
                            <Input value={single.summary} className="h-50 text-3xl" />
                        </div>
                    ) : (
                        <div>

                        </div>
                    )
                }
            </div>
        </div>
            
        </>
    )
}