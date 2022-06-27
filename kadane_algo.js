let arr = [-2, 1,-3, 4,-1,2,1,-5,4];

function maxSumSubArr(arr){
    let maxSum = Number.MIN_SAFE_INTEGER;
    let currSum = 0;
    // actual Kadane's algo
    for(let i=0; i<arr.length; i++){
        currSum += arr[i];

        if(currSum < 0){
            currSum = 0;
        }
        maxSum = Math.max(currSum, maxSum);
    }
    console.log(maxSum);
}
maxSumSubArr(arr);
arr = [ -1, -2, -3, -4];  // here Kadane's algo failed
maxSumSubArr(arr);

// Modification for handle all Negative number

function maxSumSubA(arr){
    let maxSum = Number.MIN_SAFE_INTEGER;
    let currSum = 0;
    // actual Kadane's algo
    for(let i=0; i<arr.length; i++){
        currSum += arr[i];

        maxSum = Math.max(currSum, maxSum);
        if(currSum < 0){
            currSum = 0;
        }
    }
    console.log(maxSum);
}
arr = [ -1, -2, -3, -4];
maxSumSubA(arr)
