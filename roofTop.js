// Consucutive increasing order

function roofTop(arr){
    let max = -1;
    let c = 0;
    for(let i=1; i<arr.length; i++){
        if(arr[i] > arr[i-1]){
            c ++;
        }
        else{
            c = 0;
        }
        max = Math.max(max, c);
    }
    return max;
}
arr = [1, 2, 2, 3, 2];
arr = [1,2,3,4]
console.log(roofTop(arr));