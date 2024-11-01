import { BlogCard } from "./BlogCard";
import { Appbar } from "./Appbar"
import { useBlogs } from "./useBlogs";
import { Link } from "react-router-dom";
export function Blogs(){
    const {loading,blogs}=useBlogs();
   
    
    return <div> <Appbar></Appbar>
    {loading==true?
    
    
    
    <div className="flex flex-col justify-center h-screen ">
    < div className="flex justify-center">Loading..</div>
     </div>:null}
   
     <div className="flex justify-center"> <div >
          {blogs.map(blog=>{
             return<>
             <Link to={`/blog/${blog.id}`}>
             <BlogCard title={blog.title} content={blog.content} authorName={blog.author.name} id={blog.id} publishDate="22nd"></BlogCard></Link></>
 
 })}
         
 
        
     
 
     </div>
     </div></div>
   

    
}