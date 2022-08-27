let str = "abc";
let idx = 0;
let temp = [];
function subSequence(str, idx, temp){
    if(idx >= str.length){
        console.log(temp);
        return;
    }
    // pick
    temp.push(str[idx])
    subSequence(str, idx+1, temp);
    // not pick
    temp.pop();
    subSequence(str, idx+1, temp);
}
//console.log(subSequence(str, idx, temp));


function logestCommonSubsequence(idx1, idx2, s1, s2){

    if(idx1 < 0 || idx2 < 0){
        return 0;
    }
    if(s1[idx1] == s2[idx2]){
        return 1+logestCommonSubsequence(idx1-1,idx2-1, s1, s2);
    }
    else{
        return Math.max(logestCommonSubsequence(idx1-1,idx2, s1, s2),
        logestCommonSubsequence(idx1,idx2-1, s1, s2))
    }
}
let s1 = "abc";
let s2 = "abc";
let ix1 = s1.length-1;
let ix2 = s2.length-1;
let res = logestCommonSubsequence(ix1, ix2, s1, s2);

console.log(res);
//////////////////////////////   DP

function logestCommonSubsequenceDP(idx1, idx2, s1, s2,dp){
    if(idx1 < 0 || idx2 < 0){
        return 0;
    }
    if(dp[idx1][idx2] != -1) return dp[idx1][idx2];
    if(s1[idx1] == s2[idx2]){
        return 1 + logestCommonSubsequenceDP(idx1-1, idx2-1, s1, s2,dp)
    }
    else{
        return dp[idx1][idx2] =  Math.max(logestCommonSubsequenceDP(idx1-1,idx2, s1, s2,dp),
        logestCommonSubsequenceDP(idx1,idx2-1, s1, s2,dp))
    }
}
s1 = "abc";
s2 = "abc";
ix1 = s1.length-1;
ix2 = s2.length-1;
let dp = new Array(ix1+1);
for(let i=0; i<dp.length; i++){
    dp[i] = new Array(ix2+1).fill(-1);
}

let res2 = logestCommonSubsequenceDP(ix1, ix2, s1, s2,dp);

console.log(res2);