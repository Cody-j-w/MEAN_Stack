class Bike {
     
    constructor(public price:number, public max_speed: string, public miles:number =0) {
        
    }
    ride() {
        console.log('Riding!')
        this.miles +=10
    }
    reverse() {
        if (this.miles >= 5) {
            this.miles -= 5;
            console.log('Backing up! Backing up!');
            console.log(`this bike now has ${this.miles} on it!`)
        }
        else {
            console.log("can't back up any more!")
            console.log(`this bike now has ${this.miles} on it!`)
        }
    }
    displayInfo() {
        console.log(`this bike is $${this.price}, goes a maximum of ${this.max_speed}, and has ${this.miles} miles on it.`)
    }
    
}

let bike1 = new Bike(1000, '70mph');
let bike2 = new Bike(5000, '25mph');
let bike3 = new Bike(150, '125mph');



