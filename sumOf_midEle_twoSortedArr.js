// Ar1 = [1, 2, 4, 6, 10]
// Ar2 = [4, 5, 6, 9, 12]
Ar1 = [1, 12, 15, 26, 38]
Ar2 = [2, 13, 17, 30, 45]

let arr = [];
for(let i=0; i<Ar1.length; i++){
    arr.push(Ar1[i]);
}
for(let i=0; i<Ar2.length; i++){
    arr.push(Ar2[i]);
}

arr.sort((x,y)=>x-y);

let sum = arr[Ar1.length-1]+arr[Ar1.length];
console.log(sum);