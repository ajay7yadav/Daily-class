function maxNoOf1(mat){
    let res = Infinity;
    let idx = -1;
    for(let i=0; i<mat.length; i++){
        let l = 0, r = mat[i].length-1;
        let re = Infinity;
        while(l <= r){
            let m = Math.floor(l+(r-l)/2);
            if(mat[i][m] == 1){
                re = Math.min(m, re)
            }
            if(mat[i][m-1] == 1){
                r = m-1
            }
            else{
                //if(mat[i][r] == 1)
                l = m + 1
            }
        }
        console.log(re);
        if(re < res){
            idx = i;
            res = re;
        }
    }
    console.log(idx);
}
let mat = [[0, 1, 1, 1,],
        [0, 0, 1, 1],
        [0, 0, 1, 1]];
mat = [[0,1],[1,1]];
maxNoOf1(mat);