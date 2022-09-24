let grid = [[4,3,2,-1],
            [3,2,1,-1],
            [1,1,-1,-2],
            [-1,-1,-2,-3]]

function countNegative(mat){
    let count = 0;
    for(let i=0; i<mat.length; i++){
        let r = mat[i].length-1;

        while(r >=0){
            if(mat[i][r] < 0){
                count ++;
                r --;
            }
            else{
                break;
            }
        }
    }
    console.log(count);
}
//countNegative(grid)

// Optimeze

function countN(mat, i){
    let r = mat[i].length-1;
    let l = 0;
    while(l <= r){
        let m = Math.floor(l+(r-l)/2);
        if(mat[i][m] < 0){
            //count ++;
            r = m-1
        }
        else{
            //break;
            l = m+1
        }
    }
    if(l >= mat[i].length){
        return 0
    }
    else{
        return mat[i].length - l;
    }
}
var countNegatives = function(mat) {
    let count = 0;
    for(let i=0; i<mat.length; i++){
        count += countN(mat, i)
    }
    console.log(count);
};
countNegatives(grid)