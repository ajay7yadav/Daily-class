function maxSubarraySum(arr,n){
    let max_end = 0;
    let max_so_far = Number.MIN_VALUE;
    for(let i=0; i<n; i++){
        if(arr[i] <= max_end + arr[i]){
            max_end += arr[i];
        }
        else{
            max_end = arr[i];
        }
        if(max_end > max_so_far){
            max_so_far = max_end;
        }
    }
    console.log(max_so_far);
}
let arr = [ -2, -3, 4, -1, -2, 1, 5, -3 ];
let n = arr.length;
maxSubarraySum(arr,n)