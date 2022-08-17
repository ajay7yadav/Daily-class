// doubly link list
class Node {
    constructor(data){
        this.prev = null;
        this.data = data;
        this.next = null;
    }
}
class Doubly_LL {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    insertAtHead(value){
        let newNode = new Node(value);
        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
            this.length ++;
            return;
        }
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length ++;
    }
    insertAtEnd(value){
        let newNode = new Node(value);
        if(this.tail == null){
            return this.insertAtHead(value);
        }
        
    }
    insertAtPosition(){

    }
    printDLL(){
        let curr = this.head;
        while(curr){
            console.log(curr.data);
            curr = curr.next;
        }
    }
}
let dlink = new Doubly_LL();
dlink.insertAtHead(10);
dlink.insertAtHead(20);
dlink.insertAtHead(30);
dlink.printDLL();
console.log(dlink.head);