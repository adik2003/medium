import { useParams } from "react-router-dom";
import { useBlog } from "./useBlogs";
import { FullBlog } from "./FullBlog";
import { Appbar } from "./Appbar";
import {Blog as s} from"./useBlogs"

export function Blog(){
    const {id}= useParams();
    const {loading,blog}=useBlog({id:id||""});
    if(loading){
        return <><Appbar/> <div>Loading...</div></>
    }
  return <div>
    <FullBlog blog={blog as s} />
  </div>
    



    

}