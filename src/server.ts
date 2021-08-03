import "reflect-metadata"
import path from  'path'

import createConnection from './database'
import express from  'express'
import { Server} from 'socket.io'
import { createServer } from 'http'
import { container } from "tsyringe"
import { CreateUserService } from "./services/CreateUserService"
import './shared/container'
import { CreateDashboardService } from "./services/CreateDashboardService"
import { User } from "./database/entities/User"
import { ListAllCalculationsService } from "./services/ListAllCalculationsService"
const app = express()
const server = createServer(app)
app.use(express.static(path.join(__dirname, "..", "public")))

createConnection()
const io = new Server(server)
io.on("connection",(socket)=>{
  
  socket.on("start", async data => {
    const {name, email} = data
    const createUserService = container.resolve(CreateUserService)
    
     await createUserService.execute({
      name,
      email,
      socket_id: socket.id
    })
    
  })

  socket.on('calc', async ({result, email})=>{

     const value = eval(result)
     socket.emit('result', value)


    const createDashboardService = container.resolve(CreateDashboardService)
    await createDashboardService.execute({
      calculation: result as string,
      result: value as number,
      email

    })
    
  })

  // Lst all calculations
async function list() {
  const listAllCalculationsService = container.resolve(ListAllCalculationsService)
  const dashboard = await listAllCalculationsService.execute()
  socket.emit("list", dashboard)
 }
 list()

})




server.listen(3001, ()=> console.log("Server is Running"))



