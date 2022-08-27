// function febo(n){
//     if(n <= 1){
//         return n;
//     }
//     return febo(n-1)+febo(n-2);
// }
// console.log(febo(10));

// optimize the in DP

function feboDP(n, dp){
    if(n <= 1){
        return n;
    }
    if(dp[n] != -1) return dp[n]
    
    return dp[n] = feboDP(n-1,dp) + feboDP(n-2,dp);
    
}
let n = 7;
let dp  = new Array(n+1).fill(-1);

feboDP(n, dp)
console.log(dp);

