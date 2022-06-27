class Queue {
    constructor(){
        this.data = [];
        this.front = -1;
        this.rear = -1;
        this.length = 0;
    }
    size(){
        return this.length;
    }
    enqueue(value){
        if(this.length == 0){
            this.data[++this.front] = value;
            this.rear ++;
            this.length ++;
            return;
        }
        this.data[++this.rear] = value;
        this.length ++;
    }
    dequeue(){
        if(this.length == 0){
            return -1;
        }
        this.front ++;
        this.length --;
    }
    front(){
        console.log(this.data[this.front]);
    }
}
let ss = new Queue();
ss.enqueue(10)
ss.enqueue(20)
ss.enqueue(30)
ss.enqueue(40)
ss.enqueue(50)
ss.enqueue(60)
ss.enqueue(70)
ss.enqueue(80)

function reverseFirstKelement(que , k){
    let stack = [];

}
reverseFirstKelement(ss,)
