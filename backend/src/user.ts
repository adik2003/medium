
import { Hono } from 'hono'
import { withAccelerate } from '@prisma/extension-accelerate'
import{sign,verify,decode} from 'hono/jwt'

import { PrismaClient } from '@prisma/client/edge';
import { Bindings } from 'hono/types';



export const userRouter = new Hono<{
Bindings:{
DATABASE_URL:string
SECRET:string
}}>();

userRouter.post("/signup",async(c)=>{
  
  const prisma=new PrismaClient({
    
    datasourceUrl:c.env.DATABASE_URL,
}).$extends(withAccelerate())

const body=await c.req.json();

const res=await prisma.user.create({
  data:{name:body.name,
    password:body.password,}
})

const token=await sign({id:res.id},c.env.SECRET)
return c.json({
 jwt:token
})
})


userRouter.post("/signin",async(c)=>{
    const prisma=new PrismaClient({
      //@ts-ignore
      datasourceUrl:c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  const body=await c.req.json();
  const name=body.name;
  const password=body.password
  const user=await prisma.user.findUnique({
    where:{name:name,password:password}
    
    
  }
  )
  if(!user){
    return c.json({
      msg:"Invalid inputs"
    })
  }
  else{
    //@ts-ignore
    const token=await sign({id:user.id},c.env.SECRET)
    return c.json({
      msg:"Signed in succesfuly",
      token:token
    })
  }
  
  })

