// leetCode 198

let nums = [1,2,3,1];
let idx = 0;
let sum = 0;
let dp = new Array(nums.length).fill(-1)
function houseRober(nums,idx,dp){
    if(idx >= nums.length){
        return 0;
    } 
    if(dp[idx] != -1)return dp[idx];
    //pick
    let l = nums[idx] + houseRober(nums, idx+2, dp);
    // not pick
    let r = 0+houseRober(nums, idx+1, dp);
    return dp[idx] = Math.max(l, r);
}
let um = houseRober(nums,idx,dp)

console.log(um);

