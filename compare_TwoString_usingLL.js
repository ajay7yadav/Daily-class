
class Node {
    constructor(value){
        this.data = value;
        this.next = null;
    }
}

let head = new Node('a');
let h = new Node('j');
let h1 = new Node('a');
let h2 = new Node('y');

let head2 = new Node('a');
let h4 = new Node('j');
let h5 = new Node('a');
let h6 = new Node('a');
let h7 = new Node('z');
head.next = h;
h.next = h1;
h1.next = h2;
head2.next = h4;
h4.next = h5;
h5.next = h6;
//h6.next = h7;
const compaireString = (head,head2)=>{
    let curr1 = head;
    let curr2 = head2;
    while( curr1 && curr2 && curr1.data === curr2.data){
        curr1 = curr1.next;
        curr2 = curr2.next;
    }
    if(curr1 !== null && curr2 !== null){
        return curr1.data > curr2.data ? 1 : -1
    }
    else if(curr1 != null && curr2 == null){
        return 1;
    }
    if(curr1 == null && curr2 != null){
        return -1
    }
    return 0;
}
console.log(compaireString(head,head2));
