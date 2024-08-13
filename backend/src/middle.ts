
import { Hono } from 'hono'
import { withAccelerate } from '@prisma/extension-accelerate'
import{sign,verify,decode} from 'hono/jwt'

import { PrismaClient } from '@prisma/client/edge';


const app=new Hono();

