// Input: 
// N = 9
// Arr[] = {9, 4, -2, -1, 5, 0, -5, -3, 2}
// Output:
// 9 -2 4 -1 5 -5 0 -3 2

let arr = [9, 4, -2, -1, 5, 0, -5, -3, 2];
let n = arr.length;

let pos = [], neg = [];
for(let i=0; i<n; i++){
    if(arr[i] < 0){
        neg.push(arr[i]);
    }
    else{
        pos.push(arr[i]);
    }
}
let res = [];
while(pos.length != 0 || neg.length != 0){
    if(pos.length != 0){
        res.push(pos.shift());
    }
    if(neg.length !=0){
        res.push(neg.shift());
    }
}
console.log(res);