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

const printEachLevel =(root)=>{
    let queue = [];
    queue.push(root);

    while(queue.length !== 0){

        let level = [];
        let len = queue.length;

        while(len > 0){

            let curr = queue.shift();
            level.push(curr.data);

            if(curr.left !== null){
                queue.push(curr.left);
            }
            if(curr.right !== null){
                queue.push(curr.right);
            }
            len --;
        }
        console.log(level);
    }
};
printEachLevel(root);