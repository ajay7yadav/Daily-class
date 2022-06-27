//let arr = [1,2,3,4];
let arr = [5,6,8,9]
let k = 33;
console.log(k = k%arr.length);
let s = [];
for(let i=0; i<k; i++){
    s.push(arr[i])
}
s.reverse();
for(let i=arr.length-1; i>=k; i--){
    s.push(arr[i])
}
console.log(s);