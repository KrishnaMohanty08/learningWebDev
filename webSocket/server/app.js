import express from "express";
import {Server} from 'socket.io'
import {createServer} from 'http';
import cors from 'cors';

//0. create default express app
const app=express();
const port =3000;
const server=createServer(app);

//1.sets cores set server defaults 
const io=new Server(server,{
    cors:{
        origin:"http://localhost:5173",
        methods:["GET","POST"],
        credentials:true,
    },
});
app.use(cors({
        origin:"http://localhost:5173",
        methods:["GET","POST"],
        credentials:true,
}));

app.get("/",(req,res)=>{
    res.send("Hello World");
})

//2. get io and connect a socket program (3.client)
io.on("connection",(socket)=>{
    console.log("User connected",socket.id);

    //socket.emit("welcome",`Welcome to the server ${socket.id}`);//jo perticular connected socket h ussi ko msg jaiga 

    // socket.broadcast.emit("new",`user:${socket.id} joined the server`)//the message will be broadcasted to all the sockets that are not connected for eg:on refresing l1 the msg will be shown in l2...
    
    //2. build events for the clients socket.on("event_name",data)
    socket.on("message",({room,message})=>{
        console.log(room,":",message);
        socket.to(room).emit("receive-message",message);
    })
    socket.on("disconnect",()=>{
        console.log("User Disconnected",socket.id);
    });
    socket.on("join-room",(room)=>{
      socket.join(room);
      console.log(`User joined ${room}`)
    })
})


server.listen(port,()=>{
    console.log("http://localhost:3000/");
});