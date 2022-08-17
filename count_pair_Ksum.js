// Input:
// N = 4, K = 6
// arr[] = {1, 5, 7, 1}
// Output: 2
// Explanation: 
// arr[0] + arr[1] = 1 + 5 = 6 
// and arr[1] + arr[3] = 5 + 1 = 6.

//let arr = [1, 5, 7, 1], k = 6;

let arr = [1, 1, 1, 1], k = 2;

let mp = new Map();

for(let i=0; i<arr.length; i++){
    mp.set(arr[i]);
}
for(let i=0; i<arr.length; i++){
    if(mp.has(k-arr[i])){
        console.log("yes");
    }
}