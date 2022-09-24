
function maxSuminSubArr(arr, n){
    let max = -Infinity;
    for(let i=0; i<n-1; i++){
        max = Math.max(max, (arr[i]+arr[i+1]))
        //console.log(arr[i]+arr[i+1]);
    }
    console.log(max);
}
let arr = [4, 3, 1, 5, 6];
arr = [5, 4, 3, 1, 6];
maxSuminSubArr(arr, arr.length)