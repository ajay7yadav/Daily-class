class Node {
    constructor(value){
        this.data = value;
        this.next = null;
    }
}

let head = new Node(1);
let h = new Node(2);
let h1 = new Node(3);
let h2 = new Node(4);
let h3 = new Node(5);
let h4 = new Node(6);
let h5 = new Node(7);
let h6 = new Node(8);
let h7 = new Node(9);
let h8 = new Node(10);
head.next = h;
h.next = h1;
h1.next = h2;
h2.next = h3;
h3.next = h4;
h4.next = h5;
h5.next = h6;

function linked(head,k){
    let curr = head;
    let i = 0;
    let temp = new Node(0);
    let res = new Node();
    while(curr){
        if(i==3){
            reverse(temp)
            res = temp;
            i = 0;
        }
        temp.next = curr;
        curr = curr.next;
    }
}