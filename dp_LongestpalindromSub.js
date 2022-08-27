let str = "bbbab";
let str2 = '';
for(let i=str.length-1; i>=0; i--){
    str2 += str[i];
}

function logestPaliandromSubsequence(idx1, idx2, s1, s2){
    if(idx1 < 0 || idx2 < 0){
        return 0;
    }
    if(s1[idx1] == s2[idx2]){
        return 1 + logestPaliandromSubsequence(idx1-1, idx2-1, s1, s2);
    }
    else{
        return Math.max(logestPaliandromSubsequence(idx1-1, idx2, s1, s2),
        logestPaliandromSubsequence(idx1, idx2-1, s1, s2))
    }
}

let idx1 = str2.length-1;
let idx2 = str.length-1;
let res = logestPaliandromSubsequence(idx1, idx2,str, str2);

console.log(res);

function logestPaliandromSubsequenceDP(idx1, idx2, s1, s2, dp){
    if(idx1 < 0 || idx2 < 0){
        return 0;
    }
    if(dp[idx1][idx2] != -1) return dp[idx1][idx2];

    if(s1[idx1] == s2[idx2]){
        return 1 + logestPaliandromSubsequenceDP(idx1-1, idx2-1, s1, s2, dp);
    }
    else{
        return dp[idx1][idx2] = Math.max(logestPaliandromSubsequenceDP(idx1-1, idx2, s1, s2, dp),
        logestPaliandromSubsequenceDP(idx1, idx2-1, s1, s2, dp));
    }
}

idx1 = str2.length-1;
idx2 = str.length-1;
let dp = new Array(idx1+1);
for(let i=0; i<dp.length; i++){
    dp[i] = new Array(idx2+1).fill(-1);
}
let rs = logestPaliandromSubsequenceDP(idx1, idx2, str, str2, dp)
console.log(rs);