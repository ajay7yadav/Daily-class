// N = 8
// A[] = {15,-2,2,-8,1,7,10,23}
// Output: 5
// Explanation: The largest subarray with
// sum 0 will be -2 2 -8 1 7.

let arr = [ 15,-2,2,-8,1,7,10,23 ];
let n = arr.length;

// for(let i=0; i<n; i++){
//     let sum = 0;
//     for(let j=i; j<n; j++){
//         sum += arr[j];
//         if(sum == 0){
//             console.log(i," To ",j);
//         }
//     }
// }

let mp = new Map();
let sum = 0;
let maxLen = 0;
for(let i=0; i<arr.length; i++){
    sum += arr[i];
    if(arr[i] == 0 && maxLen == 0){
        maxLen = 1;
        console.log("1st if");
    }
    if(sum == 0){
        maxLen = i+1;
        console.log("2st if");
    }
    let prev = mp.get(sum);
    if(prev != null){
        
        maxLen = Math.max(maxLen, i-prev);
        console.log("max len  ",maxLen);
    }
    else{
        console.log("sum,  i ",sum,i);
        mp.set(sum,i);
    }
}
console.log(mp);
console.log(maxLen);