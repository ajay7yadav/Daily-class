// Maximum Index

// https://practice.geeksforgeeks.org/problems/maximum-index-1587115620/1?page=2&category[]=Arrays&sortBy=submissions

let arr = [34, 8, 10, 3, 2, 80, 30, 33, 1];  // 6
         // 1  , 2, 3 8 , 
//let arr = [1, 10];

function findMaxIndex(arr){
    let res = 0;
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] <= arr[j]){
                res = Math.max(res, j-i);
            }
        }
    }
    return res;
}
//console.log(findMaxIndex(arr));
//
// Optimize 
function maximumIndex(arr,n){
    let lMax = [];
    let rMax = new Array(n);

    lMax.push(arr[0]);
    for(let i=1; i<n; i++){
        lMax.push(Math.min(arr[i], lMax[i-1]));
    }
    rMax[n-1] = arr[n-1]
    for(let i=n-2; i>=0; --i){
        rMax[i] = Math.max(arr[i], rMax[i+1])
    }

    let l = 0, r = 0;
    let res = -1;
    while(l<n && r<n){
        if(lMax[l] <= rMax[r]){
            res = Math.max(res, r-l);
            r = r+1
        }
        else{
            l = l+1;
        }
    }
    console.log(res);
    
}
maximumIndex(arr,arr.length);