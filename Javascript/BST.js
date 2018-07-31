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

    this.pre_traverse = function(root){
        console.log(root.val)
        if(root.left){
            this.pre_traverse(root.left);
        }
        if(root.right){
            this.pre_traverse(root.right);
        }
    }

    this.post_traverse = function(root){
        
        if(root.left){
            this.post_traverse(root.left);
        }
        console.log(root.val)
        if(root.right){
            this.post_traverse(root.right);
        }
    }

    this.in_order_traverse = function(root){
        if(root.left){
            this.in_order_traverse(root.left);
        }
        
        if(root.right){
            this.in_order_traverse(root.right);
        }
        console.log(root.val)
    }
}


newBST = new BST;

console.log(newBST.insert(40).insert(25).insert(70).insert(50).insert(16).insert(90).insert(150).insert(20).insert(45).insert(75).insert(30))

console.log(newBST.in_order_traverse(newBST.root))
