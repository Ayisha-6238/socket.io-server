
const io =require("socket.io")(3001,{cors:{origin:"htpp://localhost:3000"}})

io.on("connection",(socket)=>{
    console.log("user is connected", socket.id);
    
    socket.on("send message",(msg)=>{
        socket.broadcast.emit("receive message",msg)
        console.log(msg);
        
    })

    socket.on("disconnect",()=>{
        console.log("user is disconnected");
        
    })
})