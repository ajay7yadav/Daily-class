// sort linked list in 0, 1, 2
class Node {
    constructor(value){
        this.data = value;
        this.next = null;
    }
}

let head = new Node(1);
let h = new Node(2);
let h1 = new Node(0);
let h2 = new Node(0);
let h3 = new Node(2);
let h4 = new Node(1);
let h5 = new Node(1);
let h6 = new Node(2);
head.next = h;
h.next = h1;
h1.next = h2;
h2.next = h3;
h3.next = h4;
h4.next = h5;
h5.next = h6;

// function sort012(head){
//     let zero = null;
//     let one = null;
//     let two = null;
//     let curr = 
//     //while()
// }
// sort012(head)