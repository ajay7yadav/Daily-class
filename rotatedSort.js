let arr = [1,2,5,6,7,0];

function rotatedSort(arr){
    let l = 0, r = arr.length-1;
    while(l < r){
        let m = parseInt(l+(r-l)/2);
        if(arr[m] <= arr[r]){
            r = m;
        }
        else{
            l = m + 1;
        }
        // else{
        //     r = r - 1;
        // }
    }
    console.log(r);
}
rotatedSort(arr)