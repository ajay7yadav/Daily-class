// class QNode
// {
//     constructor(key)
//     {
//         this.key = key;
//         this.next = null;
//     }
// }
 
// let front = null, rear = null;
 
// function enqueue(key)
// {
//     // Create a new LL node
//         let temp = new QNode(key);
   
//         // If queue is empty, then new node is front and rear both
//         if (rear == null) {
//             front = rear = temp;
//             return;
//         }
   
//         // Add the new node at the end of queue and change rear
//         rear.next = temp;
//         rear = temp;
// }
 
 
// function dequeue()
// {
//     // If queue is empty, return NULL.
//         if (front == null)
//             return;
   
//         // Store previous front and move front one node ahead
//         let temp = front;
//         front = front.next;
   
//         // If front becomes NULL, then change rear also as NULL
//         if (front == null)
//             rear = null;
// }

class Node {
    constructor(value){
        this.prev = null;
        this.data = value;
        this.next = null;
    }
}
class DD {
    constructor(){
       
        this.front = null;
        this.rear = null;
       
    }
    push(x){
        let newNode = new Node(x);
        if(this.front == null){
            this.front = newNode;
            this.rear = newNode;
            return;
        }
        this.rear.next = newNode.prev;
        this.rear = newNode;
    }
    pop(){
        if(this.front == null){
            return -1;
        }
        let res = this.front;
        this.front = this.front.next;
        return res.data;
    }
}
let qu = new DD();
qu.push(20);
qu.push(10);
qu.push(0);
console.log(qu.pop());