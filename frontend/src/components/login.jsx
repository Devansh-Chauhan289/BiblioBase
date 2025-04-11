import { useState } from "react"
import { Input } from "../modules/input"
import { Button } from "../modules/Button"


export const Login = () => {

    const [user,setuser] = useState({
        fullname : "",
        email : "",
        password : ""
    })

    const handlechange = (e) => {
        setuser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        const res = await fetch("http://localhost:5050/user/login",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(user)
        })
        const data = await res.json()
        if(res.status == 201 && data.token){
            localStorage.setItem("token",data.token)
            localStorage.setItem("id",data.user._id)
            console.log(data);
        } 
        alert(data.msg)
    }

    return(
        <>
        <div className="border bg-[#222831] w-full h-screen">
            <div className="m-[auto] rounded-xl mt-[10%] p-[3px] bg-gradient-to-r from-[#662d91] to-[#F9629F] w-[40%]">
                <form onSubmit={handleSubmit} className="rounded-xl bg-[#222831] w-full h-[auto] flex flex-col justify-space-around gap-10 px-10 py-10">
                    <h1 className="text-white text-[300%] text-center font-semibold"
                    >
                    Already with us..? then Sign In </h1>

                    <Input placeholder="Enter your Email" name="email"className="text-white" value={user.email} onchange={handlechange} type="email" />

                    <Input placeholder="Enter your Password" name="password" className="text-white" value={user.password} onchange={handlechange} type="password" />
                    <Button type="Submit" label="Sign In"/>
                </form>
            </div>
        
        </div>
        
        </>
    )
}