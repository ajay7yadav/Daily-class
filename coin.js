let coins = [1,2,5];
let sum = 11
let idx = 0;
let temp = [];
let res = [];
function coinChange(coins, idx, sum, dp){
    if(idx == 0){
        if(sum%coins[idx] == 0){
            return sum/coins[idx];
        }
        else{
            return 1e9;
        }
    }
    
    if(dp[idx][sum] != -1)return dp[idx][sum];
    // not take
    let notTake = 0 + coinChange(coins, idx-1, sum, dp);
    let take = Infinity;
    // take coin
    if(sum >= coins[idx]){
        take = 1 + coinChange(coins, idx, sum-coins[idx], dp);
    }
    return dp[idx][sum] = Math.min(notTake, take);
    
}

let dp = new Array(coins.length)
for(let i=0; i<dp.length; i++){
    dp[i] = new Array(sum+1).fill(-1);
}
let x = coinChange(coins, coins.length-1, sum,dp);

console.log(x);

