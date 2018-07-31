function Ninja(name){
    var self = this;
    var strength = 3;
    var speed = 3;
    this.name = name;
    this.health = 100;

    this.sayName = function(){
        console.log('my name is '+name)
    }
    this.showStats = function(){
        console.log('Name: '+self.name, 'Health: '+self.health, 'Speed: '+speed, 'Strength: '+strength)
    }

    this.drinkSake = function(){
        self.health += 10;
        console.log(self.name+"'s health is at: "+self.health)
    }

    this.punch = function(opponent){
        if(opponent instanceof Ninja){
            opponent.health -=5;
            console.log(self.name+' punches '+opponent.name+' for 5 damage!')
        }
    }
    this.kick = function(opponent){
        if(opponent instanceof Ninja){
            opponent.health -=(15*strength);
            console.log(self.name+' kicks '+opponent.name+' for '+(15*strength)+' damage!')
        }
    }



}

var ryu = new Ninja('Ryu');


var ken = new Ninja('Ken');

ryu.kick(ken);