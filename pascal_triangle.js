

let n = 5;
let arr = [];

for(let i=0; i<n; i++){
    arr[i] = new Array(i+1)
    arr[i][0] = 1;
    arr[i][i] = 1;

    let l = 1;

    while(l < i ){
        arr[i][l] = arr[i-1][l] + arr[i-1][l-1];
        l ++;
    }
    //console.log(arr);
}
console.log(arr);