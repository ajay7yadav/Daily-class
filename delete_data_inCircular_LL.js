
class Node {
    constructor(value){
        this.data = value;
        this.next = null;
    }
}

let head = new Node(10);
let h = new Node(20);
let h1 = new Node(30);
let h2 = new Node(40);
let h3 = new Node(50);
let h4 = new Node(60);
let h5 = new Node(70);
let h6 = new Node(80);
head.next = h;
h.next = h1;
h1.next = h2;
h2.next = h3;
h3.next = h4;
h4.next = h5;
h5.next = h6;
h6.next = h;

function deleteFromCircular(head,data){
    let curr = head;
    let prev = null;
    while(curr.data !== data.data){
        prev = curr;
        curr = curr.next;
    }
    prev.next = curr.next;
    console.log(head);
}
let data = new Node(30);
deleteFromCircular(head,data);