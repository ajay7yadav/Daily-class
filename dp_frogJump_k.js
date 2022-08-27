//let jump = [10, 20, 10],k = 1;
let jump = [10, 30, 40, 50, 20],k = 3;
let idx = jump.length-1;
function frogJump(idx, jump, k){
    if(idx == 0){
        return 0;
    }
    let min = Infinity;
    for(let i=1; i<=k; i++){
        if(idx-i >= 0 ){
            let right = frogJump(idx-i, jump, k) + Math.abs(jump[idx] - jump[idx-i]);
            min = Math.min(right, min);
        }
    }
    return min;
}

let res = frogJump(idx, jump, k)
console.log(res);

///              DP

function frogJumpDP(idx, jump, k, dp){
    if(dp[idx] != -1) return dp[idx];
    let min = Infinity;
    for(let i=1; i<=k; i++){
        if(idx-i >= 0){
            let next = frogJump(idx-i, jump, k, dp)+ Math.abs(jump[idx] - jump[idx-i]);
            min = Math.min(next, min);
        }
    }
    return min;
}
idx = jump.length-1;
let dp = new Array(idx+1).fill(-1);

let res2 = frogJumpDP(idx, jump, k, dp);
console.log(res2);