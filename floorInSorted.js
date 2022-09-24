function floorInSorted(arr, x){
    let l=0, r = arr.length-1;
    let res = -1;
    while(l <= r){
        let m = Math.floor(l+(r-l)/2);
        if(arr[m] == x){
            return m;
        }
        else if(arr[m] < x){
            res = m;
            l = m + 1;
        }
        else{
            r = m - 1;
        }
    }
    return arr[res];
}
arr = [1,2,8,10,11,12,19], x = 5;
console.log(floorInSorted(arr, x));