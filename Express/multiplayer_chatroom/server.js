const express = require('express');
const app = express();
const server = app.listen(1337);
const io = require('socket.io')(server);

app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");


require("./server/config/routes")(app);
var messages = [];
io.on('connection', function(socket){

    console.log('a user has connected!')
    
    socket.on('sign-in', function(){
        console.log('A user has joined!')
        socket.emit('return', {messages:messages})
        
    })
    socket.on('new_message', function(data){
        console.log(data.new_message)
        messages.push(data.new_message)
        var latest_message = data.new_message
        io.emit('latest_message', {messages:messages, latest_message})
    })
})