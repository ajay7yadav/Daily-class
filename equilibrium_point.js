// Input: 
// n = 5 
// A[] = {1,3,5,2,2} 
// Output: 3 
// Explanation: For second test case 
// equilibrium point is at position 3 
// as elements before it (1+3) = 
// elements after it (2+2). 

let arr = [1,3,5,2,2];
let rsum = 0;

for(let i=0; i<arr.length; i++){
    rsum += arr[i];
}
let lsum = 0;
for(let i=0; i<arr.length; i++){
    rsum -= arr[i];
    if(rsum == lsum){
        console.log(i+1);
    }
    lsum += arr[i]
}