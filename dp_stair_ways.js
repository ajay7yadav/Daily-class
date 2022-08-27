function ways(n){
    if(n == 0){
        return 1;
    }
    let l =  ways(n-1)
    let r = 0;
    if(n > 1){
        r = ways(n-2)
    }
    return l+r;
}

let n = 4;
let res = ways(n);
console.log(res);


//////////////    DP

function stairWay(n,dp){
    if(n == 0){
        return 1;
    }
    if(dp[n] != -1) return dp[n];
    let l = stairWay(n-1, dp);
    let r = 0;
    if(n > 1){
        r = stairWay(n-2, dp);
    }
    return dp[n] = l+r;
}

n = 4;
let dp = new Array(n+1).fill(-1);
let re = stairWay(n, dp);
console.log(re);