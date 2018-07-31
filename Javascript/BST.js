function Node(x){
    this.val = x;
    this.left = null;
    this.right = null;
}



function BST(){
    this.root = null;

    this.insert = function(x){
        var newnode = new Node(x);
        if(!this.root){
            this.root = newnode;
            return this;
        }
        else{
            
            var runner = this.root;
            while(runner){

                if(x >= runner.val && runner.right == null){
                    runner.right = newnode;
                    return this;
                }
                else if(x<runner.val && runner.left == null){
                    runner.left = newnode;
                    return this;
                }

                if(x >= runner.val){
                    runner = runner.right;
                }
                else if(x<runner.val){
                    runner = runner.left;
                }
            
                
                
            }
            
            return this;
        }
    }
}


newBST = new BST;

console.log(newBST.insert(40).insert(25).insert(70).insert(50).insert(16).insert(90).insert(150).insert(20).insert(45).insert(75).insert(30))
