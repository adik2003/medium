import { useParams } from "react-router-dom";
import { useBlog } from "./useBlogs";
import { FullBlog } from "./FullBlog";
import { Appbar } from "./Appbar";
import {Blog as s} from"./useBlogs"
import { Spinner } from "./Spinner";

export function Blog(){
    const {id}= useParams();
    const {loading,blog}=useBlog({id:id||""});
    if(loading){
        return <>
        <Appbar/> 
        <div className="flex flex-col justify-center h-screen">

          <div className="flex justify-center"><Spinner/> </div>
    
            
          
          </div>
          </>
    }
  return <div>
    <FullBlog blog={blog as s} />
  </div>
    



    

}