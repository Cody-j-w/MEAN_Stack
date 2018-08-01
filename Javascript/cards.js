

class Card{
    constructor(suit, str_val, num_val){
        this.suit = suit;
        this.str_val = str_val;
        this.num_val = num_val;
        
    }
    
}

class Deck {
    constructor(){
        this.deck = [];

        const suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
        const values = ['Ace', 2,3,4,5,6,7,8,9,'Jack', 'Queen', 'King']
        const values2 = [1,2,3,4,5,6,7,8,9,10,11,12,13]
        var x = 1;
        var y = 1;
        for(let  i=0; i<suits.length; i++){
            for(let j=0; j<values.length; j++){
                this.deck[j+i * values.length] = new Card(suits[i], values[j], x)
                var card_y = new Card(suits[i], values[j], x)
                y++;
                x++;
            }
            x = 1;
        }
    }

    shuffle(deck){
        var m =this.deck.length, t, i;

  while (m) {

    i = Math.floor(Math.random() * m--);

    t =this.deck[m];
   this.deck[m] =this.deck[i];
   this.deck[i] = t;
  }

  return this.deck;
    }
    reset(deck){
        this.newdeck = [];

        const suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
        const values = ['Ace', 2,3,4,5,6,7,8,9,10,'Jack', 'Queen', 'King']
        const values2 = [1,2,3,4,5,6,7,8,9,10,11,12,13]
        var x = 1;
        var y = 1;

        for(let  i=0; i<suits.length; i++){
            for(let j=0; j<values.length; j++){
                this.newdeck[j+i * values.length] = new Card(suits[i], values[j], x)
                var card_y = new Card(suits[i], values[j], x)
                y++;
                x++;
            }
            x = 1;
        }
        this.deck = this.newdeck;
        return this.deck;
    }

    show(card){
        console.log(`This card is a(n) ${card.str_val} of ${card.suit}`)
        return this;
    }

    deal(player){
        temp = this.deck[this.deck.length-1];
        random = Math.floor(Math.random*this.deck.length)
        value = this.deck[random]
        this.deck[this.deck.length-1] = this.deck[random]
        this.deck[random] = temp;
        player.hand.push(this.deck[this.deck.length-1]);
        this.deck.pop();
        return value;
    }
}


class Player {
    constructor(name){
        playerName = name;
        hand = [];
    }
    discard(card_number){
        temp = this.hand[card_number];
        this.hand[card_number] = this.hand[this.hand.length-1];
        this.hand[this.hand.length-1] = temp;
        this.hand.pop();
        return this;
    }

    draw(deck){
        this.hand.push(deck.deck[deck.deck.length-1]);
        deck.deck.pop();
        return this;
    }
}

deck1 = new Deck;

console.log(deck1.deck)
console.log(deck1.shuffle(deck1.deck))
console.log(deck1.reset(deck1.deck))

console.log(deck1.show(deck1.deck[42]))