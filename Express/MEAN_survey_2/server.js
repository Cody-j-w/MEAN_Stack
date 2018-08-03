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

    socket.on('user_info', function(data){
        console.log('survey recieved')
        randnum = Math.floor(Math.random()*1000)+1;
        socket.emit('details', {user_info:data.user_info, randnum:randnum})
    })
})
