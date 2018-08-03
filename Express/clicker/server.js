const express = require('express');
const app = express();
const server = app.listen(1337);
const io = require('socket.io')(server);

app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");


require("./server/config/routes")(app);

io.on('connection', function(socket){
    console.log('a user has connected!')
    let click = 0;
    io.emit('return', {click:click})
    
    socket.on('click', function(){
        console.log('clicked!')
        click +=1
        io.emit('return', {click:click})
        
    })
    socket.on('reset', function(){
        click = 0;
        io.emit('return', {click:click})
    })
})