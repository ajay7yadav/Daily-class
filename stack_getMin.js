class Stack{
    constructor(){
        this.stack = [];
        this.top = -1;
        this.min = [];
        this.idx = -1;
    }
    push(x) {
        // code here
        if(this.min[this.idx] >= x || this.idx == -1){
            this.min[++this.idx] = x;
        }
        this.stack[++this.top] = x;
    }
    pop() {
        // code here
        if(this.top == -1){
            return -1;
        }
        let val = this.stack[this.top--];
        if(val == this.min[this.idx]){
            this.idx --;
        }
        return val;
    }
    getMin() {
        // code here
        if(this.idx == -1){
            return -1;
        }
        let val = this.min[this.idx];
        return val;
    }
}
let st = new Stack();
st.push(2);
st.push(3);
console.log(st.pop());
console.log(st.getMin());
st.push(1);
console.log(st.getMin());