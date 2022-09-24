var searchMatrix = function(mat, t){
    
    for(let i=0; i<mat.length; i++){
        let l=0, r = mat[i].length-1;
        while(l <= r){
            let m = Math.floor(l+(r-l)/2);
            if(mat[i][m] == t){
                return true;
            }
            if(mat[i][m] < t){
                l = m+1;
            }
            else{
                r = m-1;
            }
        }
    }
    return false;
};

let matrix = [[1,4,7,11,15],
            [2,5,8,12,19],
            [3,6,9,16,22],
            [10,13,14,17,24],
            [18,21,23,26,30]], target = 5;

console.log(searchMatrix(matrix, target));