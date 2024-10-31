import { BlogCard } from "./BlogCard";
import { Appbar } from "./Appbar"
export function Blog(){
    return <>
    <div><Appbar></Appbar></div>
    <div className="flex justify-center"> <div className="max-w-xl">  <BlogCard authorName="adifsdsfsdfsdf" title="zazafsfsfsdfsf" content="pelosfffsfsffffffffffffffaaaaaaaaaaaaaaaaaaaaaaa" publishDate="22 nd "></BlogCard>
    <BlogCard authorName="adifsdsfsdfsdf" title="zazafsfsfsdfsf" content="pelosfffsfsffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" publishDate="22 nd "></BlogCard>
    <BlogCard authorName="adifsdsfsdfsdf" title="zazafsfsfsdfsf" content="pelosfffsfsffffffffffffffaaaaaaaaaaaaaaaaaaaaaaa" publishDate="22 nd "></BlogCard></div>
    </div>

    </>
}