import { Link } from "react-router-dom"
import { Avatar } from "./Avatar"


export const Appbar =()=>{
    return <div className=" flex justify-between py-1 px-20 border-y-2 ">
<div className="flex flex-col  justify-center ">Medium</div>
        
        <div className="flex justify-center  p-1  ">
            <div className="flex-col justify-center "><Link to={"/blog"}><div className="  mr-4 border rounded-3xl bg-green-500 p-2"><div >Publish</div></div></Link></div>
            
            <div className="flex flex-col justify-center "><Avatar Name="adi"></Avatar></div>
           
            
            </div>
    </div>
}
