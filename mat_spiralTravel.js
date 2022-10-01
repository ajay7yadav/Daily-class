function spiralMatrix(mat, n, m){
    let left = 0,  right = m-1;
    let up = 0,  down = n-1;
    let res = [];
    let c = n*m;
    while(c){
        // left to right
        for(let i=left; i<=right && c; i++){
            res.push(mat[up][i])
            c --
        }
        up ++;
        // right to down
        for(let i=up; i<=down && c; i++){
            res.push(mat[i][right])
            c --
        }
        right --;
        // right to left
        for(let i=right; i>=left && c; i--){
            res.push(mat[down][i])
            c --
        }
        down --;
        // down to up
        for(let i=down; i>=up && c; i--){
            res.push(mat[i][left])
            c --
        }
        left ++;
    }
    return res;
}
let mat = [[1, 2, 3],
[4, 5, 6], 
[7, 8, 9]];

console.log(spiralMatrix(mat, mat.length, mat[0].length));