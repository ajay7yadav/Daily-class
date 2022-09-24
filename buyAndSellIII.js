// leetCode 123

let prices = [3,3,5,0,0,3,1,4];

function buyAndSell(prices, idx, time, buy){
    if(time <= 0){
        return 0
    }
    if(idx >= prices.length){
        return 0;
    }

    if(buy){
        return Math.max(-prices[idx]+buyAndSell(prices, idx+1, time, 0),  0+buyAndSell(prices, idx+1, time, 1))
    }
    else{
        return Math.max(prices[idx]+buyAndSell(prices, idx+1, time-1, 1),  0+buyAndSell(prices, idx+1, time, 0))
    }
}

let res = buyAndSell(prices, 0, 2, 1,);

console.log(res);

//////////////////        DP

function buyAndSellDP(prices, idx, transtion, dp){

    if(idx == prices.length | transtion == 4){
        return 0;
    }
    if(dp[idx][transtion] != -1)return dp[idx][transtion];
    if(transtion %2 == 0){
        return dp[idx][transtion] =  Math.max(-prices[idx]+buyAndSellDP(prices, idx+1, transtion+1,dp),  0+buyAndSellDP(prices, idx+1, transtion, dp))
    }
    else{
        return dp[idx][transtion] = Math.max(prices[idx]+buyAndSellDP(prices, idx+1, transtion+1,dp),  0+buyAndSellDP(prices, idx+1, transtion, dp))
    }
}

let dp = new Array(prices.length);
for(let i=0; i<dp.length; i++){
    dp[i] = new Array(4).fill(-1)
}
let dpRes = buyAndSellDP(prices, 0, 0, dp);

console.log(dpRes);