let jump = [0,1,2,3,0];
let idx = jump.length-1;

function frogJump(jump, idx){
    if(idx == 0){
        return 0;
    }
    let right = Infinity;
    
    let left = frogJump(jump, idx-1) + Math.abs(jump[idx] - jump[idx-1]);
    if(idx > 1){
        right = frogJump(jump, idx-2) + Math.abs(jump[idx] - jump[idx - 2]);
    }

    return Math.min(left, right);
}

let min = frogJump(jump, idx);
console.log(min);

////////////////////////  DP
function frogJumpWithDP(jump, idx, dp){
    if(idx == 0){
        return 0;
    }
    if(dp[idx] != -1) return dp[idx];
    let left = frogJumpWithDP(jump, idx-1, dp) + Math.abs(jump[idx] - jump[idx-1])

    let right = Infinity;
    if(idx > 1){
        right = frogJumpWithDP(jump, idx-2, dp) + Math.abs(jump[idx] - jump[idx-2])
    }

    return dp[idx] = Math.min(left, right)
}
idx = jump.length-1;
let dp = new Array(idx+1).fill(-1);

let min2 = frogJumpWithDP(jump, idx, dp)
console.log(min2);