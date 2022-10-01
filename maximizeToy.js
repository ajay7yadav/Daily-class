
function maximizeToy(arr, k){
    arr.sort((x,y)=>x-y);
    let i=0, j=0, r = arr.length-1;
    let sum = 0;
    let res = -1;
    while(j<r){
        sum += arr[j];
        if(sum >= k){
            break;
        }
        j ++;
    }
    if(sum > k){
        sum -= arr[j--];
    }
    console.log(j+1);
    console.log(sum);
}
arr = [1, 12, 5, 111, 200, 1000, 10], k=50;
maximizeToy(arr, k);