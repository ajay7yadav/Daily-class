var removeDuplicates = function(nums) {
    //let 
    for(let i=nums.length-2; i>=0; i--){
        if(nums[i] == nums[i-1] && nums[i] == nums[i+1]){
            nums.splice(i,1);
        }
    }
    return nums;
};
let nums = [1,1,1,2,2,3]
//let nums = [0,0,1,1,1,1,2,3,3]
console.log(removeDuplicates(nums));