
import axios  from "axios";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKENDURL } from "./config";

export function Auth2(){
    const navigate=useNavigate()
    

const [username,setuserName]=useState("");
const [password,setpassword]=useState("");
async function SendReq(){
    const response=await axios.post(`${BACKENDURL}/api/v1/user/signin`,{
      
      name:username,
      password

    })
    const jwt=response.data.token;
    if(!jwt) {
        alert("Invalid Inputs");
    }
    else {
    localStorage.setItem("token",jwt);
    navigate("/blogs")
    }
    
}
return <div className="flex justify-center flex-col ">

    <div className="flex justify-center">
        <div> <div className="px-5">
            <div className="text-3xl font-extrabold">
    Login to your account
</div>

<div className="pl-9 pt-1flex text-slate-400">Dont have an account?
<Link className="underline pl-2" to={"/signup"}>Signup</Link>
</div>

</div>
    <div>
<LabelledInput label="Username " placeholder="johndoe@gmail.com" onChange={(e)=>{
    setuserName(e.target.value);
    
}}></LabelledInput>
<LabelledInput label="Password " type="password" placeholder="123456" onChange={(e)=>{
    setpassword(e.target.value);
    
}}></LabelledInput></div>
<button type="button"  onClick={SendReq}className="w-full mt-8 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg -sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Signin</button></div>

       
</div>


  


</div>

}

interface Para{
    label:string,
    placeholder:string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?:string
}

function LabelledInput({label,placeholder,onChange,type}:Para){
    return <div>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 pt-4">{label}</label>
            <input onChange={onChange} type={type||"text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
        </div>
    </div>

}