import { Appbar } from "./Appbar"
import { Avatar } from "./Avatar"
import{Blog} from "./useBlogs"
export function FullBlog({blog}:{blog:Blog}){
    return <div><Appbar></Appbar>
    <div className=" flex justify-center"> <div className="px-20 w-full max-w-screen-xl pt-11 grid grid-cols-12">
        <div className="col-span-8"><div className=" text-5xl font-extrabold">{blog.title}</div>
        <div className="text-slate-400 text-s pt-2">Posted on 22 Dec</div>
        <div className=" text-l pt-2">{blog.content}</div>
       </div>
        <div className="col-span-4">
        <div>Author</div>
            <div className="flex"><div className="flex flex-col justify-center pr-2"><Avatar Name={blog.author.name}></Avatar></div>
            
          <div className="pl-2"><div className="text-xl font-bold pt-1">{blog.author.name}</div>
          <div className="pt-1 text-slate-500 text-xs">Carchphrase</div></div>
            
            </div>
            
            </div>
    </div>
   
</div>
    
    
    
    </div>
    
}