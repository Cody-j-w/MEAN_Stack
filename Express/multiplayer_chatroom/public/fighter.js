

class Fighter{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.block = false;
        this.stunned = false;
        this.turn_over = false;
        this.alert = '';
        this.status = 0;
    }
    strike(opponent){
        if(this.turn_over == true){
            return this;
        }
        else{
            if(this.stunned == true){
                this.turn_over = true;
                this.alert = "you can't do that while stunned!"
                this.status = 3;
                return this;
                
            }
            else{
                if(opponent.block == true){
                    this.turn_over = true;
                    this.status = 2;
                    return this;
                    
                }
                else{
                opponent.health -=10;
                this.turn_over = true;
                this.status = 1;
                return this;
                }
            }
        }
    }
    block(){
        if(this.turn_over == true){
            return this;
        }
        else{
            if(this.stunned == true){
                this.turn_over = true;
                this.alert = "you can't do that while stunned!"
                this.status = 3;
                return this;
                
            }
            else{       
            this.block = true;
            this.status = 1;
            this.turn_over = true;
            return this;
            }
        }
    }
    break(opponent){
        if(this.turn_over == true){
            return this;
        }
        else{
            if(this.stunned == true){
                this.turn_over = true;
                this.alert = "you can't do that while stunned!"
                this.status = 3;
                return this;
                
            }
            else{
                if(opponent.block == true){
                    opponent.block = false;
                    opponent.stunned = true;
                    this.turn_over = true;
                    this.status = 1;
                    return this;
                }
                else{
                    this.stunned = true;
                    this.status = 2;
                    this.turn_over = true;
                    return this;
                }
            }
        }

    }
    recover(){
        if(this.turn_over == true){
            return this;
        }
        else{
            this.stunned = false;
            this.health +=5;
            this.turn_over = true;
            return this;
        }
    }
    debug(){
        console.log(this.health, this.block, this.stunned, this.turn_over)
    }
}

module.exports = Fighter;