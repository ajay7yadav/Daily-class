function revArr(arr, i, j){
    while(i < j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i ++;
        j --;
    }
    return arr;
}
function leftRotate(arr, n, k){
    k = k%n;
    if(k<0){
        k = k+arr.length;
    }
    revArr(arr, 0, k-1);
    revArr(arr, k, arr.length-1);
    revArr(arr, 0, arr.length-1);
    console.log(arr);
}
let arr = [1, 2, 3, 4, 5, 6, 7], k=-12;
leftRotate(arr, arr.length, k)