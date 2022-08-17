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
h6.next = h2;
/////////////////////////////////||  check is looped link list
function findLoop(head){
    let fast = head;
    let slow = head;

    while(slow && fast && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            return true;
        }
    }
    return false
}
console.log("is link list is loop ",findLoop(head));

/////////////////////////////////||  find starting point of loop
function startPointLoop(head){
    let slow = head;
    let fast = head;
    while(slow && fast){
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast){
            break;
        }
    }
    if(slow == fast){

        slow = head;
        if(slow != fast){
            while(slow != fast){
                slow = slow.next;
                fast = fast.next;
            }
            console.log("starting at ",slow.data);
        }
        else{
            while(fast.next != slow){
                fast = fast.next;
            }
            console.log(console.log("starting at ",fast.data));
        }
    }
}
startPointLoop(head);
//////////////////////////////////////|| count number of list in loop

function countList(head){
    let slow = head;
    let fast = head;
    while(fast && slow){
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast){
            return count(slow);
        }
    }
}
function count(node){
    let tmp = node;
    let c = 1;
    while(tmp.next != node){
        tmp = tmp.next;
        c ++;
    }
    return c;
}
console.log("Total list in loop ",countList(head));

/////////////////////////////////////||    Remove loop

function removeLoop(head){
    let slow = head;
    let fast = head;
    
    while(slow && fast && fast.next != null){
        
        slow = slow.next;
        fast = fast.next.next;

        if(slow == fast){
            break;            
        }
    }
    if(slow == fast){
        slow = head;
        if(slow != fast){
            while(slow.next !== fast.next){
                slow = slow.next;
                fast = fast.next;
            }
            fast.next = null;
        }
        else{
            while(fast.next != slow){
                fast = fast.next;
            }
            fast.next = null;
        }
    }
    
    while(head){
        console.log(head.data);
        head = head.next;
    }
}
removeLoop(head);