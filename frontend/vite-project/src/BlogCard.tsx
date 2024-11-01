import { Avatar } from "./Avatar"
interface BlogProps{
    authorName:string,
    title:string,
    content:string
    publishDate:string
    id:Number
}
export const BlogCard = ({
    authorName,title,content,publishDate,
}:BlogProps)=>{
    return <div className="border-b pb-2 w-screen max-w-screen-md curson-pointer">
        <div className="flex pt-3"><div className="flex flex-col justify-center  "> <Avatar Name={authorName}></Avatar> </div>
        <div className="font-extralight pl-2 text-xs flex flex-col justify-center">{authorName} </div> <span className="pl-2">&#183;</span><div className=" flex flex-col justify-center pl-2 text-xs font-thin text-slate-500">{publishDate}</div></div>
        
        <div className="text-xl font-semibold">{title}</div>
        <div className="text-md font-thin">{content.slice(0,100)+"...."}</div>
        <div className="text-slate-500 text-xs font-thin ">{Math.ceil(content.length/100)} minutes read</div>
     
    </div>
}