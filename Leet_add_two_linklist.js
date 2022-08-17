// sort linked list in 0, 1, 2
class ListNode{
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

let l1 = new ListNode(5);
let q4 = new ListNode(6);
let l3 = new ListNode(4);
l1.next = q4;
q4.next = l3;

let l2 = new ListNode(2);
let q2 = new ListNode(4);
let q3 = new ListNode(3);

l2.next = q2;
q2.next = q3;

let rem = 0;
let res = new ListNode(0);
let temp = res;
while(l1 || l2){
    let sum = 0;
    if(l1 != null){
        sum += l1.val;
        l1 = l1.next;
    }
    if(l2 != null){
        sum += l2.val;
        l2 = l2.next;
    }
    sum += rem;
    
    if(sum > 9){
        rem = parseInt(sum/10);
        console.log("res ",rem);
        let mod = sum % 10
        temp.next = new ListNode(mod);
        temp = temp.next;
    }
    else{
        temp.next = new ListNode(sum);
        temp = temp.next;
        rem = 0
    }
}

if(rem != 0){
    temp.next = new ListNode(rem);
}
res = res.next;

while(res){
    console.log(res.val);
    res = res.next
}
    
