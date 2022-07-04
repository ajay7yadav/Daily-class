// Input: N = 5, arr[] = {2, 4, 1, 3, 5}
// Output: 3
// Explanation: The sequence 2, 4, 1, 3, 5 
// has three inversions (2, 1), (4, 1), (4, 3).

// formula :- two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j.

let arr = [2, 4, 1, 3, 5];
let n = arr.length;

for(let i=0; i<n; i++){
    for(let j=i+1; j<n; j++){
        if(arr[i]>arr[j] && i < j){
            console.log(arr[i]," > ",arr[j]);
        }
    }
}

let mp = [];
for(let i=0; i<n; i++){
    mp.push(arr[i])
}
mp.sort((x,y)=>x-y);
let i=0;
let j=0;
while(i<arr.length && j<mp.length){
    if(arr[i]>mp[j]){
        //console.log(arr[i]," > ",mp[j]);
        j ++;
    }
    else{
        i ++;
    }
}
console.log(arr);
console.log(mp);