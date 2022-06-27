//let n = 9, k = 3;
arr = [1, 2, 3, 1, 4, 5, 2, 3, 6], k = 3;
//let arr = [8,5,10,7,9,4,15,12,90,13] , k = 4;
let n = arr.length;
 
let stack = [];

function maxEle(arr,k,n){
    let queue = [];
    let max = 0;
    for(let i=0; i<k; i++){
        queue.push(arr[i]);
        if(arr[i]>max){
            max = arr[i];
        }
    }
    for(let i=k-1; i<n; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        queue.shift();
        queue.push(arr[i])
        console.log(max);
    }
}
maxEle(arr,k,n);
// function maxSub(arr,n,k){
//     for(let i=0; i<n-(k-1); i++){
//         let max = arr[i];
//         for(let j=i; j<k+i; j++){
//             if(arr[j]>max){
//                 max = arr[j]
//             }
//         }
//         console.log(max);
//     }
// }
//maxSub(arr,n,k);

