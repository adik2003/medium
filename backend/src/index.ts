
import { Hono } from 'hono'
import { withAccelerate } from '@prisma/extension-accelerate'
import{sign,verify,decode} from 'hono/jwt'
import {cors} from 'hono/cors'

import { PrismaClient } from '@prisma/client/edge';

import { userRouter } from './user';
import {blogRouter } from'./blog'

const app = new Hono();

app.use('/*',cors())

app.route("/api/v1/user",userRouter)
app.route("/api/v1/blog",blogRouter)
app.get('/', (c) => {
  return c.text('Hello Hono!')
})






export default app
