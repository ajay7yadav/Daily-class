let arr = [1,2,3,-2,5];

let sum = 0;
let maxSum = -Infinity;
for(let i=0; i<arr.length; i++){

    sum += arr[i];
    maxSum = Math.max(sum, maxSum);
    // for negative value
    if(sum < 0){
        sum = 0;
    }
}

console.log(maxSum);