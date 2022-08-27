let arr = "ABCDGH";
let arr2 = "ACDGHR";
//S1 = "ABCDGH", S2 = "ACDGHR"
let dp = new Array(arr.length+1);
for(let i=0; i<dp.length; i++){
    dp[i] = new Array(arr2.length+1).fill(-1);
}
for(let i=0; i<dp.length; i++){
    dp[i][0] = 0;
}
for(let i=0; i<dp[0].length; i++){
    dp[0][i] = 0;
}
console.table(dp);
function commonSubArray(arr, arr2, dp){
    let ans = 0
    for(let i=1; i<=arr.length; i++){
        for(let j=1; j<=arr2.length; j++){

            if(arr[i-1] == arr2[j-1]){
                dp[i][j] = 1+dp[i-1][j-1];
                
                ans = Math.max(ans, dp[i][j]);
            }
            else{
                 dp[i][j] = 0
            }
        }
    }
    console.table(dp);
    return ans;
}

let x = commonSubArray(arr, arr2, dp)
console.log(x);