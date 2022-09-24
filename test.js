let arr = [9, 8, 7, 6, 4, 2, 1, 3];

function rotateArray(arr){
    // for(let i=0; i<arr.length-1; i++){
    //     let temp = arr[i];
    //     arr[i] = arr[i+1];
    //     arr[i+1] = temp;

    // }
    for(let i=arr.length-2; i>=0; i--){
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp
    }
    

    console.log(arr);

}
// 3,9,8,7,6,4,2,1
rotateArray(arr)