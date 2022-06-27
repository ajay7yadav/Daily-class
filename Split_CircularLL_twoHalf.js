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
// let h3 = new Node(50);
// let h4 = new Node(60);
// let h5 = new Node(70);
// let h6 = new Node(80);
head.next = h;
h.next = h1;
h1.next = h2;
h2.next = head;
let head1 ,head2;
const splitIntoTwoHalf = (head)=>{
    let slow = head;
    let fast = head;
    while(fast.next != head && fast.next.next != head){
        slow = slow.next;
        fast = fast.next.next;
    }
    if(fast.next.next == head){
        fast.next = fast.next.next;
    }
    head1 = head;
    if(head.next != head){
        head2 = slow.next;
    }
    fast.next = slow.next;
    slow.next = head;
    console.log(head1);
    console.log(head2);
}
splitIntoTwoHalf(head);