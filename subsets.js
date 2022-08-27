let arr = ["1","2"];
let temp = [];
let idx = 0;
let res = [];
function sub(arr, idx,temp){
    // pick
    if(idx >= arr.length){
        res.push([...temp]);
        return;
    }
    temp.push(arr[idx]);
    sub(arr, idx+1, temp);
    // pop
    temp.pop();
    sub(arr, idx+1, temp); 
}
sub(arr,idx,temp);
console.log(res);