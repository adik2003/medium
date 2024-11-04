import { BlogCard } from "./BlogCard";
import { Appbar } from "./Appbar"
import { useBlogs } from "./useBlogs";
import { Link } from "react-router-dom";
import { Spinner } from "./Spinner";
export function Blogs(){
    const {loading,blogs}=useBlogs();
   
    
    return <div className="max-h-screen"> <Appbar></Appbar>
    {loading==true?
    
    
    
    <div className="relative h-screen">
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Spinner />
    </div>
</div>
:null}
     
   
     <div className="flex justify-center "> <div >
          {blogs.map(blog=>{
             return<>
             <Link to={`/blog/${blog.id}`}>
             <BlogCard title={blog.title} content={blog.content} authorName={blog.author.name} id={blog.id} publishDate="22nd"></BlogCard></Link></>
 
 })}
         
 
        
     
 
     </div>
     </div></div>
   

    
}