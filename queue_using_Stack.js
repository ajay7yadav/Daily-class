class Queue {
    constructor(){
        this.s1 = [];
        this.s2 = [];
        this.f = -1;
        this.r = -1;
    }
    enqueue(x){
        //code here
        this.s1.push(x);
    }
      dequeue(){
        //code here
        let v = this.s1[0];
        this.s1.shift();
        return v;
    }
  }

  let xx = new Queue();
  xx.enqueue(20);
  console.log(xx.dequeue());