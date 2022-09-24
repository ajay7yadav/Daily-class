function rev(arr, i, j){
    while(i<j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i ++;
        j --
    }
    return arr;
}
function nextPermutation(nums, n){
    let l, k;
    for(k=nums.length-2; k>=0; k--){
        if(nums[k] < nums[k+1])break;
    }
    if(k < 0){
        return nums.reverse();
    }
    else{
        for(l = nums.length-1; l>k; l--){
            if(nums[k] < nums[l])break;
        }
        let temp = nums[k];
        nums[k] = nums[l];
        nums[l] = temp;
        this.rev(nums,k+1, nums.length-1);
    }
    return nums;
}
let arr = [1, 2, 3, 6, 5, 4];
//arr = [3, 2, 1]
arr = [5, 1, 1]
console.log(nextPermutation(arr, arr.length));