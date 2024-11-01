import axios from "axios";
import { Appbar } from "./Appbar";

import { ChangeEvent, useState } from "react";
import { BACKENDURL } from "./config";
import { useNavigate } from "react-router-dom";

export function Publish(){
    const navigate=useNavigate();
    const[title,setTite]=useState("");
    const [content,setContent]=useState("");
    return <div>
       <div><Appbar></Appbar></div> 
<div className="flex justify-center"> <div className=" max-w-screen-lg w-full"> 
<input onChange={(e)=>{
    setTite(e.target.value)
}}type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-g
focus: ring-blue-500 focus:border-blue-500 block mt-3 w-full p-3 focus:outline-none" placeholder="Title" />
<TextEditor onChange={(e)=>{
    setContent(e.target.value)
}}/><button onClick={ async()=>{
    const res=await axios.post(`${BACKENDURL}/api/v1/blog`,{
        title,content
    },{
        headers:{Authorization:localStorage.getItem("token")}
    })
navigate(`/blog/${res.data.id}`)
}} type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center
    text-white bg-blue-700 rounded-lg focus:ring-4 focus: ring-blue-200 dark: focus: ring-blue-900
    hover: bg-blue-800 mt-6">
    Publish post
    </button></div>


</div>


       
    </div>
}



function TextEditor({onChange}:{onChange:(e:ChangeEvent<HTMLTextAreaElement>)=>void}) {return <form>
    <div className="w-full mb-4">
    <div className="flex items-center justify-between border-b">
    <div className=" py-2 bg-white rounded-b-lg w-full">
    < label className="sr-only">Publish post</label>
    <textarea onChange={onChange}id="editor" rows={8} className="f block w-full  text-sm text-gray-800 bg-white
    border-g" placeholder="write an article..." required />
    </div>
    </div>
   
    </div>
    </form>
    }

   

    
