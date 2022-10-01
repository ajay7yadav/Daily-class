function makeZeros(mat){
    let visted = new Array(mat.length);
    for(let i=0; i<visted.length; i++){
        visted[i] = new Array(mat[0].length);
    }

    for(let i=0; i<mat.length; i++){
        for(let j=0; j<mat[0].length; j++){
            let sum = 0;
            if(mat[i][j] == 0){
                if(i-1 >= 0){
                    sum += mat[i-1][j];
                    visted[i-1][j] = -1;
                }
                if(i+1 < mat.length){
                    sum += mat[i+1][j];
                    visted[i+1][j] = -1;
                }
                if(j-1 >= 0){
                    sum += mat[i][j-1];
                    visted[i][j-1] = -1;
                }
                if(j+1 < mat.length){
                    sum += mat[i][j+1];
                    visted[i][j+1] = -1;
                }
                visted[i][j] = sum;
            }
        }
    }
    for(let i=0; i<mat.length; i++){
        for(let j=0; j<mat[0].length; j++){
            
            if(visted[i][j] == -1){
                mat[i][j] = 0
            }
            if(visted[i][j] > 0){
                mat[i][j] = visted[i][j];
            }
        }
    }
    console.table(visted);
    
    console.table(mat);
}
let mat = [[1, 2, 3, 4],
    [5, 6, 0, 7], 
    [8, 9, 4, 6],
    [8, 4, 5, 2]];

makeZeros(mat);