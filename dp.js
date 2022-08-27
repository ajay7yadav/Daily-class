//let  nums = [5,2,6,1]
let nums = [-5770,-2858,1327,3080,2137,-6379,-6353,5495,-6536,7940];
let stack = [];
let res = [];
res.push(0);
stack.push(nums[nums.length-1]);

for(let i = nums.length-2; i>=0; i--){
    while(stack.length != 0 && stack[stack.length-1] > nums[i]){
        stack.pop();
    }
    if(stack.length == 0){
        res.push(0);
    }
    else{
        res.push(stack[stack.length-1]);
    }
    stack.push(nums[i]);
}

console.log(res.reverse());


// https://leetcode.com/problems/count-of-smaller-numbers-after-self/

// https://leetcode.com/problems/third-maximum-number/