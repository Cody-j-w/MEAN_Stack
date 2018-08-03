const express = require('express');
const app = express();
const server = app.listen(1337);
const io = require('socket.io')(server);

app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");


require("./server/config/routes")(app);
var color = 'green';
io.on('connection', function(socket){
    console.log('a user has connected!')
    io.emit('color', {color:color})

    socket.on('blue', function(data){
        color = 'blue';
        
        io.emit('color', {color:color})
    })
    socket.on('green', function(data){
        color = 'green';
        
        io.emit('color', {color:color})
    })
    socket.on('pink', function(data){
        color = 'pink';
        
        io.emit('color', {color:color})
    })
})