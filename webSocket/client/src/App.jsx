import React from 'react'
import { useEffect,useState,useMemo } from 'react';
import {io} from "socket.io-client"
import {Button, Container, TextField,Typography,Stack} from "@mui/material"

const App = () => {
  //
  const socket=useMemo(()=>io("http://localhost:3000"),[]);

  //5. on form submit call function 
  const handleSubmit=(e)=>{
    e.preventDefault();
    //the l1 sends the message to server
    socket.emit("message",{message,room});
    setMessage("")
  }
  const joinSubmit=(e)=>{
      e.preventDefault();
      socket.emit("join-room",roomName);
      setRoomName("")
    }
  const [message,setMessage]=useState("")
  const [room,setRoom]=useState("")
  const [socketID,setsocketID]=useState("")
  const [allmessages,setAllMessages]=useState([])
  const [roomName,setRoomName] =useState("")

  //3.use useEffect to mount the io-socket when rendering occurs (2. the connection u build with io.on("connection",()=>{}))
  useEffect(()=>{
    //connect the socket to client
    socket.on("connect",()=>{
      setsocketID(socket.id);
      console.log("connected :"+socket.id);
    });
    socket.on("receive-message",(data)=>{
      console.log(data)
      setAllMessages(allmessages=>[...allmessages,data]);
    })

    //3. call from server -socket.on("event_name",data)
    // socket.on("welcome",(msg)=>{
    //   console.log(msg)
    // })
    
    //4. disconnect the socket when work is done and not mounted
    return ()=>{
      socket.disconnect();
    };
  },[])

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="div" gutterBottom>
        Hello everyone {socketID}</Typography>
      
      <form onSubmit={joinSubmit}>
        <TextField  value={roomName} onChange={e=>setRoomName(e.target.value)} id="outlined-basic"  label="RoomName" variant="outlined"/>
        <Button type="submit" variant='contained' color="primary">JOIN</Button>
      </form>
      <form onSubmit={handleSubmit}>
        <TextField  value={message} onChange={e=>setMessage(e.target.value)} id="outlined-basic"  label="Message" variant="outlined"/>
        <TextField  value={room} onChange={e=>setRoom(e.target.value)} id="outlined-basic"  label="Room" variant="outlined"/>
        <Button type="submit" variant='contained' color="primary">Send</Button>
      </form>
      <Stack>
        {allmessages.map((m,i)=>{
          return(
          <Typography key={i} variant="h6" component='div' gutterBottom>
            {typeof m === "object" ? m.message : m}
          </Typography>
        )})}
      </Stack>
    </Container>
  )
}

export default App
