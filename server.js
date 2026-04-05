const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);


app.use(express.static(__dirname));

let users = 0;

io.on("connection", (socket) => {

```
users++;
io.emit("participants", users);

socket.on("chatMessage", (data) => {

    // Send user's message to everyone
    io.emit("chatMessage", data);

    // Simple chatbot reply logic
    let userMsg = data.message.toLowerCase();
    let botReply = "";

    if(userMsg.includes("hello") || userMsg.includes("hi")){
        botReply = "Yo 👋 what's up! Ready to focus?";
    }

    else if(userMsg.includes("timer")){
        botReply = "Bro just hit START on the Pomodoro timer and grind for 25 mins 💪";
    }

    else if(userMsg.includes("study")){
        botReply = "Lowkey best method → 25 min focus + 5 min break. Trust the Pomodoro 🔥";
    }

    else if(userMsg.includes("break")){
        botReply = "Yeah take a 5 min break, stretch a bit and hydrate 💧";
    }

    else{
        botReply = "Hmm interesting 🤔 tell me more!";
    }

    // Send bot reply after small delay
    setTimeout(()=>{
        io.emit("chatMessage", {
            name: "FocusBot",
            message: botReply
        });
    },1000);

});

socket.on("disconnect", () => {
    users--;
    io.emit("participants", users);
});
```

});

server.listen(3000, () => {
console.log("Server running on http://localhost:3000");
});