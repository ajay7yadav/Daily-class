let mat = [[1,1,1],
           [1,0,1],
           [1,1,1]];
//   [[1,0,1],
//    [0,0,0],
//    [1,0,1]];

console.table(mat);
let  temp = [];
let n = mat.length;
let m = mat[0].length;

let col = false;

for(let i=0; i<n; i++){
    if(mat[i][0] == 0){
        col = true;
    }
    for(let j=1; j<m; j++){
        if(mat[i][j] == 0){
            mat[i][0] = 0
            mat[0][j] = 0;
        }
    }
}
for(let i=1; i<n; i++){
    for(let j=1; j<m; j++){
        if(mat[i][0] == 0 || mat[0][j]==0){
            mat[i][j] = 0;
        }
    }
}
if(mat[0][0] == 0){
    for(let i=0; i<n; i++){
        mat[0][i] = 0;
    }
}
if(col == true){
    for(let i=0; i<n; i++){
        mat[i][0] = 0;
    }
}
console.table(mat);

