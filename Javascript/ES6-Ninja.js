class Ninja{
    constructor(name){
        this.ninjaName = name;
        this.health = 100;
        this.strength = 3;
        this.speed = 3;
    }
    showStats(){
        console.log(`Name: ${this.ninjaName}, Health: ${this.health}, Strength: ${this.strength}, Speed: ${this.speed}`)
    }
    sayName(){
        console.log(`My name is ${this.ninjaName}`)
    }
    drinkSake(){
        this.health +=10;
    }

}

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.strength = 10;
        this.speed = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        const wisdom = super.drinkSake();
        console.log("Fool me once, shame on you. Fool me twice, can't fool me again.");
    }
}

const superSensei = new Sensei('Nobitsura');

superSensei.speakWisdom();
superSensei.showStats();
