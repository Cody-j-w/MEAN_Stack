module.exports = function (){
  return {
    add: function(num1, num2) { 
        let num3 = num1+num2;
        console.log(num1+ ' + ' +num2 +' = '+ num3);
        return num3;
    },
    multiply: function(num1, num2) {
        let num3 = num1*num2;
        console.log(num1+ ' * ' +num2 +' = '+ num3);
        return num3;
    },
    square: function(num) {
        let num2 = num*num;
        console.log(num+ ' squared = '+ num2);
        return num2;
    },
    random: function(num1, num2) {
        if(num1<num2){
            let num3 = Math.floor(Math.random()*(num2-num1)+num1);
            console.log(num3+' is a random value between '+num1+ ' and '+num2);
            return num3;
        }
        else{
            let num3 = Math.floor(Math.random()*(num1-num2)+num2);
            console.log(num3+' is a random value between '+num1+ ' and '+num2);
            return num3;
        }
    }
  }
};
