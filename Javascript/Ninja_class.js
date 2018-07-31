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



}

var ryu = new Ninja('Ryu');
ryu.sayName();
ryu.showStats();
ryu.drinkSake();