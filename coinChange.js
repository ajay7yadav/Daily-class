let INT = 1e9;

function changeCoin(coin, amt, idx,dp){
    if(idx == 0){
        if(amt%coin[idx] == 0){
            return amt/coin[idx];
        }
        else {
            return  1e9;
        }
    }
    // pick
    if(dp[idx][amt] != -1)return dp[idx][amt];
    // drop
    let notTake = 0 + changeCoin(coin, amt,idx-1,dp);
    let take = Infinity;
    if(coin[idx] < amt){
        take = 1 + changeCoin(coin, amt-coin[idx], idx, dp)
    }
    return dp[idx][amt] = Math.min(take, notTake);
}

let coin = [1,2,3];
let amt = 3
let idx = coin.length-1;
let dp = new Array(coin.length+1);
for(let i=0; i<dp.length; i++){
    dp[i] = new Array(amt+1).fill(-1);
}

console.table(dp);
let s = changeCoin(coin, amt,idx,dp);
if(s>= 1e9){
    console.log("-1");
}
else{
    console.log(s);
}
console.table(dp);
