class Node {
    constructor(value){
        this.data = value;
        this.next = null;
    }
}

let head = new Node(1);
let h = new Node(1);
let h1 = new Node(3);
let h2 = new Node(4);
let h3 = new Node(7);

let head2 = new Node(2);
let h5 = new Node(4);
let h6 = new Node(5);
let h7 = new Node(9);
let h8 = new Node(10);
// head.next = h;
h.next = h1;
h1.next = h2;
h2.next = h3;

head2.next = h5;
h5.next = h6;
h6.next = h7;
h7.next = h8;


function margeSort(h1, h2){
    let cur1 = h1, cur2 = h2;
    let newNode = new Node(0);
    let res = newNode;
    while(cur1 && cur2){
        if(cur1.data < cur2.data){
            newNode.next = cur1;
            cur1 = cur1.next;
        }
        else{
            newNode.next = cur2;
            cur2 = cur2.next;
        }
        newNode = newNode.next;
    }
    while(cur1){
        newNode.next = cur1;
        cur1 = cur1.next;
        newNode = newNode.next;
    }
    while(cur2){
        newNode.next = cur2;
        cur2 = cur2.next;
        newNode = newNode.next;
    }
    console.log(res);
    while(res){
        console.log(res.data);
        res = res.next;
    }
}

margeSort(head,head2)