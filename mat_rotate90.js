function rotate90(mat, n){
    let res = new Array(n);
    for(let i=0; i<n; i++){
        res[i] = new Array(n);
    }

    let l = 0;
    let r = res.length-1;
    for(let i=0; i<n; i++){
        let k = r;
        for(let j=0; j<n; j++){
            res[k--][l] = mat[i][j];
        }
        l++
    }
    
    console.table(res);
}
let mat = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];

rotate90(mat, mat.length);