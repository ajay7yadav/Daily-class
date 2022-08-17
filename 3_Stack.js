// stack 
// stack is linear data stucture

class Stack {
    constructor(){
        this.stack = [];
        this.top = -1;
    }

    isEmpty(){
        return  this.top == -1;
    }
    push(value){
        this.stack[++this.top] = value;
    }
    pop(){
        if(this.isEmpty()){
            console.log("stack is empty");
            return;
        }
        let data = this.stack[this.top--];
        return data;
    }
    peek(){
        if(this.isEmpty()){
            console.log("stack is empty now");
            return;
        }
        return this.stack[this.top]
    }
}

let s = new Stack();
s.push(10);
s.push(20);
s.peek()
s.pop();
s.peek();