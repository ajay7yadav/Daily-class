// leetcode 120
let triangle = [[2],[3,4],[6,5,7],[4,1,8,3]];

function minPathSum(i,j,a,n,dp){
    if(i == n-1){
        return a[n-1][j];
    }
    if(dp[i][j] != -1)return dp[i][j];
    let d = a[i][j] + minPathSum(i+1, j, a,n,dp);

    let dg = a[i][j] + minPathSum(i+1, j+1,a,n,dp)

    return dp[i][j] = Math.min(d, dg);
}
let dp = new Array(triangle.length-1+1);
for(let i=0; i<dp.length; i++){
    dp[i] = new Array(i+1).fill(-1);
}
console.log(dp);
console.log(minPathSum(0,0,triangle,triangle.length,dp));
console.log(dp);