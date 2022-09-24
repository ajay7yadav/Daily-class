// 150 leetCode

//let nums = ["2","1","+","3","*"];
let nums = ["3","-4","+"]
let stack = [];
let l , r;
for(let i=0; i<nums.length; i++){

    if(nums[i] == "*" ){
        l = stack.pop();
        r = stack.pop();
        stack.push(l*r)
    }
    else if(nums[i] == "/"){
        l = stack.pop();
        r = stack.pop();
        stack.push(Math.floor(r/l))
    }
    else if(nums[i] == "+"){
        l = stack.pop();
        r = stack.pop();
        stack.push(l+r)
    }
    else if(nums[i] == "-"){
        l = stack.pop();
        r = stack.pop();
        stack.push(-1*(l-r))
    }
    else{
        if(nums[i] < 0){
            stack.push(-parseInt(nums[i]))
        }
        
        else{
            stack.push(parseInt(nums[i]))
        }
    }
    console.log(stack);
}
console.log(stack);