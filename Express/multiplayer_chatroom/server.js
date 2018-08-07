const express = require('express');
const app = express();
const server = app.listen(1337);
const io = require('socket.io')(server);

app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");


require("./server/config/routes")(app);
var messages = [];


class Fighter{
    constructor(name){
        this.name = name;
        this.health = 50;
        this.block = false;
        this.stunned = false;
        this.turn_over = false;
        this.alert = '';
        this.status = 0;
    }
    strike(opponent){
        if(this.turn_over == true){
            this.status = 5;
            this.alert = 'You have already acted this round!'
            return this;
        }
        else{
            if(this.stunned == true){
                this.turn_over = true;
                this.alert = "you can't do that while stunned!"
                opponent.turn_over = false;
                this.status = 3;
                return this;
                
            }
            else{
                if(opponent.block == true){
                    this.turn_over = true;
                    opponent.turn_over = false;
                    opponent.block = false;
                    this.status = 2;
                    return this;
                    
                }
                else{
                    console.log(`${this.name} strikes ${opponent.name} for 10 damage!`)
                opponent.health -=10;
                this.turn_over = true;
                opponent.turn_over = false;
                this.status = 1;
                return this;
                }
            }
        }
    }
    defend(opponent){
        if(this.turn_over == true){
            this.status = 5;
            return this;
        }
        else{
            if(this.stunned == true){
                this.turn_over = true;
                this.alert = "you can't do that while stunned!"
                this.status = 3;
                opponent.turn_over = false;
                return this;
                
            }
            else{       
            this.block = true;
            this.status = 1;
            this.turn_over = true;
            opponent.turn_over = false;
            return this;
            }
        }
    }
    break(opponent){
        if(this.turn_over == true){
            this.status = 5;
            return this;
        }
        else{
            if(this.stunned == true){
                this.turn_over = true;
                this.alert = "you can't do that while stunned!"
                opponent.turn_over = false;
                this.status = 3;
                return this;
                
            }
            else{
                if(opponent.block == true){
                    opponent.block = false;
                    opponent.stunned = true;
                    this.turn_over = true;
                    opponent.turn_over = false;
                    this.status = 1;
                    return this;
                }
                else{
                    this.stunned = true;
                    this.status = 2;
                    this.turn_over = true;
                    opponent.turn_over = false;
                    return this;
                }
            }
        }

    }
    recover(opponent){
        if(this.turn_over == true){
            this.status = 5;
            return this;
        }
        else{
            this.stunned = false;
            this.health +=5;
            this.turn_over = true;
            opponent.turn_over = false;
            return this;
        }
    }
    debug(){
        console.log(this.health, this.block, this.stunned, this.turn_over)
    }
}
const Ryu = new Fighter('ryu');
const Ken = new Fighter('ken');
const Necalli = new Fighter('necalli');
const Cammy = new Fighter('cammy');
const Laura = new Fighter('laura');
const Bison = new Fighter('bison');
var contenders = [Ryu, Ken, Necalli, Cammy, Laura, Bison];

io.on('connection', function(socket){
    const user = {};
    

    console.log('a user has connected!')
    
    socket.on('sign-in', function(data){
        console.log('A user has joined!')
        user.name = data.user;
        socket.emit('return', {messages:messages})
        
    })
    socket.on('new_message', function(data){
        console.log(data.new_message + "in console")
        messages.push(data.new_message)
        var latest_message = data.new_message
        io.emit('latest_message', {messages:messages, latest_message})
    })

    socket.on('new_challenger', function(data){
        console.log('A new challenger approaches!', data.name)
        
        
        
        socket.emit('fight_time', {contenders:contenders})
        socket.broadcast.emit('new_fighter', {contender:contenders.length-1})
    })
    socket.on('challenge', function(data){
        
        user.fighter = data.fighter_id;
        user.opponent = data.opponent;
        console.log(user.fighter)
        console.log(user.opponent)
        // console.log(opponent);
        // console.log(fighter)
        io.emit('challenged', {user:contenders[user.fighter], opponent:contenders[user.opponent]})
    })
    socket.on('strike', function(){
        console.log(user.fighter, user.opponent)
    contenders[user.fighter].strike(contenders[user.opponent]);
    console.log(contenders[user.opponent].health)
    if(contenders[user.fighter].status == 3){
        socket.emit('stunned', {user:contenders[user.fighter], opponent:contenders[user.opponent]})
        socket.broadcast.emit('opponent_stunned', {user:contenders[user.fighter], opponent:contenders[user.opponent]})
    }
    else if(contenders[user.fighter].status == 5){
        socket.emit('stunned', {user:contenders[user.fighter]})
    }
    else{
        if(contenders[user.opponent].health <=0){
            io.emit('game_over', {user:contenders[user.fighter], opponent:contenders[user.opponent]})
        }
        else{
        io.emit('attack', {user:contenders[user.fighter], opponent:contenders[user.opponent]})
        }
    }
        
    })
    socket.on('defend', function(){
        contenders[user.fighter].defend(contenders[user.opponent]);
        if(user.status ==3){
            socket.emit('stunned', {user:contenders[user.fighter], opponent:contenders[user.opponent]})
            io.emit('opponent_stunned', {user:contenders[user.fighter], opponent:contenders[user.opponent]})
        }
        else if(contenders[user.fighter].status == 5){
            socket.emit('stunned', {user:contenders[user.fighter]})
        }
        else{
            socket.emit('defending', {user:contenders[user.fighter], opponent:contenders[user.opponent]})
            io.emit('block_up', {user:contenders[user.fighter], opponent:contenders[user.opponent]})
        }
    })
    socket.on('feign', function(){
        contenders[user.fighter].defend(contenders[user.opponent]);
        if(user.status ==3){
            socket.emit('stunned', {user:contenders[user.fighter], opponent:contenders[user.opponent]})
            io.emit('opponent_stunned', {user:contenders[user.fighter], opponent:contenders[user.opponent]})
        }
        else if(contenders[user.fighter].status == 5){
            socket.emit('stunned', {user:contenders[user.fighter]})
        }
        else{
        contenders[user.fighter].block = false;
        io.emit('block_up', {user:contenders[user.fighter], opponent:contenders[user.opponent]})
        }
    })
    socket.on('break', function(){
        contenders[user.fighter].break(contenders[user.opponent]);
        if(contenders[user.fighter].status == 3){
            socket.emit('stunned', {user:contenders[user.fighter], opponent:contenders[user.opponent]})
            io.emit('opponent_stunned', {user:contenders[user.fighter], opponent:contenders[user.opponent]})
        }
        else if(contenders[user.fighter].status == 5){
            socket.emit('stunned', {user:contenders[user.fighter]})
        }
        else{
            io.emit('guard_break', {user:contenders[user.fighter], opponent:contenders[user.opponent]})
        }
    })
    
    socket.on('heal', function(){
        contenders[user.fighter].recover(contenders[user.opponent]);
        if(contenders[user.fighter].status == 5){
            socket.emit('stunned', {user:contenders[user.fighter]})
        }
        socket.emit('healed', {user:contenders[user.fighter], opponent:contenders[user.opponent]})
        io.emit('recovered', {user:contenders[user.fighter], opponent:contenders[user.opponent]})
    })

})