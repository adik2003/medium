import { Link } from "react-router-dom"
import { Avatar } from "./Avatar"


export const Appbar =()=>{
    return <div className=" flex justify-between py-1 px-20 border-y-2 ">
        <Link  className="flex flex-col  justify-center cursor-pointer "to={"/blogs"}><div >Medium</div></Link>

        
        <div className="flex justify-center  ">
            <Link to={"/publish"}><button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl  mr-4 p-2 focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5  mt-2 text-center me-2 mb-2">New</button></Link>
        
            <div className="flex flex-col justify-center "><Avatar Name="adi"></Avatar></div>
           
            
            </div>
    </div>
}
