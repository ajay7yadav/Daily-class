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

function maxSum(root){
    let stack = [];
    stack.push(root);
    let res = root.data;
    
    while(stack.length != 0){
        let level = [];
        let len = stack.length;
        let sum = 0;
        while(len > 0){

            let curr = stack.shift();
            sum += curr.data;
            level.push(curr.data)
            if(curr.left != null){
                stack.push(curr.left);
            }
            if(curr.right != null){
                stack.push(curr.right);
            }
            len --;
        }
        res = Math.max(res, sum);
        console.log(level ,"-> total sum "+ res);
    }
    return res;
}
console.log(`Max sum = ${maxSum(root)}`);