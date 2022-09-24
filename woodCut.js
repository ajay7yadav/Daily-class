// gfg

function woodCut(){
    //let arr = [2, 3, 6, 2, 4], k = 4;
    //let arr = [1, 7, 6, 3, 4, 7], k=8;
    let arr = [56, 75, 89, 20, 99], k = 58;
    let mx = -1;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > mx){
            mx = arr[i];
        }
    }
    let l = 0;
    let sum = 0;
    while(l < mx){
        let mid = Math.floor((l+mx)/2)
        let val = check(mid, k, arr)
        if(val == k){
            return mid;
        }
        if(val < k){
            mx = mid;
        }
        else{
            l = mid+1;
        }
    }
    return -1;
}
function check(h,k,arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] <= h){
            continue;
        }
        sum += (arr[i] - h);
    }
    if(sum == k){
        return k;
    }
    else{
        return sum;
    }   
}
console.log(woodCut());