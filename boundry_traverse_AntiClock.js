class Node{
    constructor(value){
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);

root.left.left = new Node(25);
root.left.right = new Node(28);

root.right.left = new Node(35);
root.right.right = new Node(40);

function boundry(root){
    
}