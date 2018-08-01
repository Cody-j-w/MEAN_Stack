function Car(model){
    var self = this;
    self.model = model;
    self.damage = 0;

    self.bump = function(opponent){
        if(opponent instanceof Car){
            opponent.damage += 10;
            console.log('the '+opponent.model+' takes 10 damage from the '+self.model)
        }
    }
}

var car1 = new Car('truck')

var car2 = new Car('van')

car1.bump(car2)