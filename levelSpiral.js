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
function levelSpiralTraverse(root){
    let stack = [];
    let stack2 = [];
    let res = [];
    stack.push(root);
    while(stack.length > 0 || stack2.length > 0){
        // left to right
        console.log("h");
        while(stack.length > 0){
            let val = stack.pop();
            if(val.right != null){
                stack2.push(val.right);
            }
            if(val.left != null){
                stack2.push(val.left);
            }
            res.push(val.data);
        }
        // right to left
        while(stack2.length > 0){
            let val = stack2.pop();
            if(val.left != null){
                stack.push(val.left);
            }
            if(val.right != null){
                stack.push(val.right);
            }
            res.push(val.data);
        }
    }
    console.log(res);
}
levelSpiralTraverse(root)