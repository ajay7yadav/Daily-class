// Input: N = 6, M = 4
// A[] = {4, 1, 2, 1, 1, 2}
// B[] = (3, 6, 3, 3)
// Output: 1
// Explanation: Sum of elements in A[] = 11
// Sum of elements in B[] = 15, To get same 
// sum from both arrays, we can swap following 
// values: 1 from A[] and 3 from B[]

let a = [4, 1, 2, 1, 1, 2];
let b = [3, 6, 3, 3];

function findSwapPair(a,b){
    let sum1 = 0;
    let sum2 = 0;

    for(let i=0; i<a.length; i++){
        sum1 += a[i];
    }
    for(let i=0; i<b.length; i++){
        sum2 += b[i];
    }
    let ns1, ns2;
    for(let i=0; i<a.length; i++){
        for(let j=0; j<b.length; j++){
            ns1 = sum1 - a[i]+b[j];
            ns2 = sum2 + a[i]-b[j]
            console.log(ns1);
            console.log(ns2);
        }
    }
}
findSwapPair(a,b);
let s1 = [];
let s2 = [];
let i=0,j=0;
while(i<a.length || j<b.length){
    sum1 += a[i];
    sum2 += b[j];
    if(sum1 < sum2){

    }
}




