// finding missing and repeating elements

// Input:
// N = 2
// Arr[] = {2, 2}
// Output: 2 1
// Explanation: Repeating number is 2 and 
// smallest positive missing number is 1.

//let arr = [2,2];
let arr = [1,3,3]
//let arr = [4, 3, 6, 2, 1, 1]

let mp = new Map();
let a,b;
for(let i=0; i<arr.length; i++){
    if(mp.has(arr[i])){
        //console.log("Repeating ", arr[i]);
        a = arr[i];
    }
    else{
        mp.set(arr[i],1);
    }
}

for(let i = 1; i<=arr.length; i++){
    if(!mp.has(i)){
        //console.log("missing ",i);
        b = i;
    }
}



// Array | recurstion | String |