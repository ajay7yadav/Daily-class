let candidates = [10,1,2,7,6,1,5], target = 8;
let res = [];
let idx = 0;

function combinationOfSumII(arr,t,res,idx){
    if(idx >= arr.length){
        if(t == 0){
            console.log(res);
            
        }
        return;
    }
    // pick
    for(let i=idx; i<arr.length; i++){
        if(arr[i] <= t){
            res.push(arr[i]);
            combinationOfSumII(arr,t-arr[i],res,i);
            // non pick
            res.pop();
        }
    }
    // if(arr[idx] <= t){
        
    // }
    
    
}
combinationOfSumII(candidates,target,res,idx)