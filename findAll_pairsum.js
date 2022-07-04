// Input:
// A[] = {1, 2, 4, 5, 7}
// B[] = {5, 6, 3, 4, 8} 
// X = 9 
// Output: 
// 1 8
// 4 5 
// 5 4
// Explanation:
// (1, 8), (4, 5), (5, 4) are the
// pairs which sum to 9.

// let a = [1, 2, 4, 5, 7]
// let b = [5, 6, 3, 4, 8] 
// let x = 9;
let a = [-1,-2,4,-6,5,7];
let b = [6,3,4,0];
let x = 8;

a.sort((x,y)=>x-y)
b.sort((x,y)=>x-y)
// let res = [];
// for(let i=0; i<a.length; i++){
//     let k = i;
//     let l = 0;
//     let n = b.length-1;
//     while(l<n){
//         let mid = parseInt(l+(n-l)/2);
//         if(a[k]+b[mid] == x){
//             res.push([a[k],b[mid]]);
//             break;
//         }
//         if(a[k]+b[mid]>x){
//             n = mid-1;
//         }
//         else{
//             l = mid+1;
//         }
//     }
// }
//console.log(res);

let mp = new Set();
for(let j=0; j<b.length; j++){
    mp.add(b[j]);
}
let res1 = [];
for(let i=0; i<a.length; i++){
    if(mp.has(x-a[i])){
        console.log(a[i]," + ",x-a[i]," = ",x);
        res1.push([a[i],x-a[i]]);
    }
}
console.log(res1);