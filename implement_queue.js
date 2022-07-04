class Queue {
    constructor(){
        this.front = 0;
        this.rear = 0;
        this.arr = new Array(200);
    }
    _push(x){
        //if(this.front == 0){
            this.arr[this.rear++] = x;
            return;
    }
    _pop(){
        let res = -1;
        if(this.rear == this.front){
            return res;
        }
        res = this.arr[this.front++];
        return res;
    }
}
let qq = new Queue();
qq._push(20)
qq._push(30);
console.log(qq._pop());
console.log(qq._pop());
console.log(qq._pop());
qq._push(40)
qq._push(50);
console.log(qq._pop());
console.log(qq._pop());