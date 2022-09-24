let arr = [2, 5, 0, 0, 1, 2];

let t = 0

function searchInRotatedArray(arr, t){
    let l = 0;
    let r = arr.length-1;

    while(l < r){
        let m = parseInt(l+(r-l)/2);
        if(arr[m] == t){
            return true;
        }
        if(arr[l] <= arr[m]){
            if(arr[l] <= t && t <= arr[m]){
                r = m -1;
            }
            else{
                l = m+1;
            }
        }
        else{
            if(arr[m] <= t && t <= arr[r]){
                l = m+1;
            }
            else{
                r = m - 1;
            }
        }
    }
    return false;
}

console.log(searchInRotatedArray(arr, t));