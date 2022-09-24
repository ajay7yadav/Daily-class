function moveZerotoEnd(arr){
    // find 1st zero
    let f0 = 0;
    while(f0 < arr.length){
        if(arr[f0] == 0){
            break
        }
        else{
            f0 ++;
        }
    }
    // swap if element is not 0
    let i = f0;      // non-zero element move this position
    let j = f0 + 1;  
    while(i < arr.length && j < arr.length){
        if(arr[j] != 0){
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
            i++  // position increase
        }
        j ++;
    }
    return arr;
}
arr = [3, 5, 0, 0, 4];
arr = [0, 0, 0, 4];

console.log(moveZerotoEnd(arr));