function logestSubArr(arr, n, k){

    let sum = 0, res = 0;
    let mp = new Map();
    
    for(let i=0; i<n; i++){
        sum += arr[i];
        if(sum == k){
            res = i+1;
        }
        if(!mp.has(sum)){
            mp.set(sum, i);
        }
        //console.log("sum-k ",sum-k, " sum ", sum);
        if(mp.has(sum-k)){
            if(res < (i-mp.get(sum - k))){
                res = i-mp.get(sum - k);
            }
        }
       //console.log(mp)
        
    }
    return res;    
}
arr = [10, 5, 2, 7, 1, 9], k = 15;
//arr = [-1, 2, 3], k = 6;
//arr = [-13, 0, 6, 15, 16, 2, 15, -12, 17, -16, 0, -3, 19, -3, 2, -9, -6], k = 15;
console.log(logestSubArr(arr, arr.length ,k));