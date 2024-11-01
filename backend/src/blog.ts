
import { Hono } from 'hono'
import { withAccelerate } from '@prisma/extension-accelerate'
import{sign,verify,decode} from 'hono/jwt'

import { PrismaClient } from '@prisma/client/edge';
import { Bindings } from 'hono/types';
export const blogRouter=new Hono<{
    Bindings:{
        DATABASE_URL:string,
        SECRET:string
        
    },Variables:{
userId:string,
    }
}>()
blogRouter.use('/*', async (c, next) => {

    const header=c.req.header("authorization")||""
    
   
    
    const user=await verify(header,c.env.SECRET);
    const id=user.id;
    
    if(user){
 c.set("userId",String(id))
       await next();
    }
    else {
        return c.json({
            msg:"no access"
        })
    }

  
  })
blogRouter.post("/",async(c)=>{
    const prisma=new PrismaClient({
    
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const body=await c.req.json();
    const name=body.title;
    const id=c.get("userId")
    const content=body.content;
    const response =await prisma.post.create({
        data:{
        title:name,
        content:content,
        authorid:Number(id)
    }
    })
    return c.json({
        authorid:id,
        id:response.id

    })
  })
  
  blogRouter.get("/bulk",async(c)=>{
    const prisma=new PrismaClient({
    
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const blogs=await prisma.post.findMany({
        select:{
            content:true,
            title:true,
            id:true,
            author:{
                select:{name:true}
                
            }
        }
    });
   return  c.json({
        blogs
    })
    
  })

  blogRouter.get("/:id",async(c)=>{
    const prisma=new PrismaClient({
    
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
const id=c.req.param("id");
const blog=await prisma.post.findFirst({
    where:{
        id:Number(id)
    },
    select:{
        title:true,
        content:true,
        author:{
            select:{ name:true}
           
        }
    }
})
return c.json({
    blog
})

  })
  
  blogRouter.put("/",async(c)=>{
    const prisma=new PrismaClient({
    
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const body=await c.req.json();
    const id=body.id;
    const name=body.title;
    const content=body.content;
    const response =await prisma.post.update({
        where :{
        id:Number(id)
        },
        data:{
        title:name,
        content:content,
       
    }
    })
    return c.json({
        msg:"post updated",
        postid:id
    })
  })

 