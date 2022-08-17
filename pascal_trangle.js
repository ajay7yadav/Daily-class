let row = 4;

//        1  
//       1 1 
//      1 2 1 
//     1 3 3 1 
//    1 4 6 4 1 
//   1 5 10 10 5 1 

let arr = [];

function pascal(arr, row){
    for(let i=0; i<row; i++){
        arr[i] = new Array(i+1);
        // bondry
        arr[i][0] = 1;
        arr[i][i] = 1;

        for(let j=1; j<i; j++){
            //              upper     +   left bondry
            arr[i][j] = arr[i-1][j-1] + arr[i-1][j];
        }
    }
    //console.log(arr[row-1]);
    console.log(arr);
}
pascal(arr,row);
