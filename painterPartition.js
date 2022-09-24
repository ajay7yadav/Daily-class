// https://practice.geeksforgeeks.org/problems/the-painters-partition-problem1535/1?page=1&category[]=Binary%20Search&sortBy=submissions

function painterPartition(arr, k, n){
    let max = arr[0], sum = 0;
    for(let i=0; i<n; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        sum += arr[i];
    }
    // now we get starting point and ending point a range to find best partition
    let s = max;
    let e = sum;
    let res = -1;
    while(s < e){
        let mid = parseInt(s+(e-s)/2);
        // check for minimum time 
        if(check(arr, mid, k)){
            res = mid;
            e = mid - 1;
        }
        else{
            s = mid + 1;
        }

    }
    console.log(res);
}
function check(arr, mid, k){
    let count = 1;
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]+sum <= mid){
            sum += arr[i];
        }
        else{
            count ++;
            if(count > k || arr[i] > mid){
                return false;
            }
            sum = arr[i];
        }
    }
    return true;
}
arr = [5,10,30,20,15];
let k = 3;
painterPartition(arr, k, arr.length)