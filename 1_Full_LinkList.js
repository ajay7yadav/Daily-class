// Linked list is a linear Data Stucture 
// a node take data and a pointer point next node address

class Node{
    constructor(value){
        this.data = value;
        this.next = null;
    }
}
class SinglyLL{
    constructor(){
        this.head = null;
        this.length = 0;
        this.tail = null;
    }
    insertAtStart(value){
        let newNode = new Node(value);

        if(this.head == null){
            this.tail = newNode;
            this.head = newNode;
            this.length ++;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length ++;
    }
    insertAtEnd(value){
        if(this.tail == null){
            return this.insertAtStart(value);
        }
        let newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
    insertAtPosition(idx,value){
        // if(idx > this.length || idx < 0){
        //     console.log("Not valid Position");
        // }
        if(idx == 0 || idx == 1){
            this.insertAtStart(value)
            return;
        }
        if(idx == this.length){
            this.deleteAtEnd(value);
            return;
        }
        let pos = 1;
        let newNode = new Node(value);
        let prev = null;
        let curr = this.head;
        while(pos < idx){
            prev = curr;
            curr = curr.next;
            pos ++;
        }
        prev.next = newNode;
        newNode.next = curr;
        this.length ++;
    }
    updateAtStart(value){
        
        let newNode = new Node(value);
        let nxt = this.head.next
        this.head.next = newNode;
        newNode.next = nxt;
        this.head = newNode;
    }
    updateAtEnd(value){
        
        let curr = this.head;
        let prev = null;
        while(curr.next !== null){
            prev = curr;
            curr = curr.next;
        }
        let newNode = new Node(value);
        prev.next = newNode;
        newNode.next = curr.next;
        curr = null;
        this.tail = newNode;
    }
    updateAtPosition(idx, value){        
        if(idx == 0 || idx == 1){
            this.updateAtStart(value)
            return;
        }
        if(idx == this.length){
            this.updateAtEnd(value);
            return;
        }
        let pos = 1;
        let curr = this.head;
        let prev = null;
        while(pos < idx){
            prev = curr;
            curr = curr.next;
            pos ++;
        }
        let newNode = new Node(value);
        prev.next = newNode;
        newNode.next = curr.next;
        curr = null;
    }
    deleteAtStart(){
        let newHead = this.head.next;
        this.head = newHead;
        this.length --;
    }
    deleteAtEnd(){
        let curr = this.head;
        let prev = null;
        while(curr.next != null){
            prev = curr;
            curr = curr.next;    
        }
        if(prev == null){
            this.deleteAtStart();
        }
        else{
            prev.next = null;
            this.tail = prev;
            this.length --;
        }
        return curr;
    }
    deleteAtPosition(idx){
        if(idx == 0 || idx == 1){
            this.deleteAtStart(value)
            return;
        }
        if(idx == this.length){
            this.deleteAtEnd(value);
            return;
        }
        let pos = 1;
        let curr = this.head;
        let prev = null;
        while(pos < idx){
            prev = curr;
            curr = curr.next;    
            pos ++;
        }
        let nxt = curr.next
        prev.next = nxt;
        this.length --;
    }
    printLL(){
        let curr = this.head;

        while(curr){

            console.log(curr.data);
            curr = curr.next;
        }
    }
    reverseLL(){
        let curr = this.head;
        let prev = null;
        while(curr){
            let nxt = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nxt;
        }
        this.head = prev;
    }
}

let link = new SinglyLL();
////////////////////|| Insertion Link List ||////////////////////
link.insertAtStart(10);
link.insertAtEnd(20);
link.insertAtEnd(30);
link.insertAtEnd(40);
//link.printLL();
link.insertAtPosition(2,35);
link.printLL();
////////////////////|| Update Link List ||////////////////////
// console.log("--------------");
link.updateAtStart(5);
//link.printLL();
link.updateAtEnd(99);
console.log("--------------");
link.updateAtPosition(2,15);
link.printLL();
////////////////////|| Delete Link List ||////////////////////
console.log("--------------");
//link.deleteAtStart();
//link.deleteAtEnd();
// link.deleteAtPosition(4);
//link.printLL();
console.log(link.length);
console.log("--------------");
////////////////////////||     Reverse    ||////////////////////////
link.reverseLL()
link.printLL();
