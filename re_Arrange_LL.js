// sort linked list in 0, 1, 2
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
// 1 2 3 4 5 6
// 2 1 4 3 6 5
function reArrange(head){
    if(head == null || head.next == null){
        return;
    }
    let A = head;
    let B = head.next;
    let prev = null;

    while(A && B){
        let temp = B.next;
        B.next = A;
        A.next = temp;

        if(prev != null){
            prev.next = B;
        }
        else{
            head = B;
        }
        prev = A;
        A = temp;
        B = A.next;
    }
    
}
reArrange(head)