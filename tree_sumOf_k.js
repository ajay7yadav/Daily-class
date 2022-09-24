class Node{
    constructor(value){
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(20);
root.left = new Node(8);
root.right = new Node(22);

root.left.left = new Node(4);
root.left.right = new Node(12);

root.left.right.left = new Node(10);
root.left.right.right = new Node(14);

let k = 3
let sum = 0
function preOrder(root){
    if(root == null){
        return;
    }
    
    preOrder(root.left);
    if(k > 0){
        sum += root.data;
        k --;
    }
    preOrder(root.right);
    
}


preOrder(root); 
console.log(sum);