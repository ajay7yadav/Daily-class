// arr1[] = {2, 3, 6, 7, 9}
// arr2[] = {1, 4, 8, 10}
// k = 5
// Output :
// 6
// Explanation :
// The final sorted array would be -
// 1, 2, 3, 4, 6, 7, 8, 9, 10
// The 5th element of this array is 6 .
//
let arr1 = [1, 10 ,10, 25, 40, 54, 79];
let arr2 = [15, 24, 27, 32, 33, 39, 48, 68, 82, 88, 90];

let k = 15;
let l1 = 0,l2 = 0;
let r1 = arr1.length, r2 = arr2.length;
let arr = [];
while(l1<r1 && l2 < r2 ){
    if(arr1[l1] < arr2[l2]){
        arr.push(arr1[l1 ++]);
    }
    else{
        arr.push(arr2[l2 ++]);
    }
}
while(l1<r1){
    arr.push(arr1[l1 ++]);
}
while(l2<r2){
    arr.push(arr2[l2 ++]);
}
console.log(arr[k-1]);

///////////////////////////////////

function tempAdd(a1, a2){
    let temp = [];
    for(let i=0; i<a1.length; i++){
        temp.push(a1[i]);
    }
    for(let i=0; i<a2.length; i++){
        temp.push(a2[i]);
    }
    temp.sort((a,b)=>a-b);

    console.log(temp[k-1]);

}
tempAdd(arr1,arr2);