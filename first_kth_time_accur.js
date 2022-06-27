let n = 7, k = 2
let arr = [1, 7, 4, 3, 4, 8, 7]
let mp = new Map();
for(let i=0; i<n; i++){
    if(mp.has(arr[i])){
        mp.set(arr[i],mp.get(arr[i])+1);
        
    }
    else{
        mp.set(arr[i],1);
    }
    if(mp.get(arr[i]) == k){
        console.log("Yes",arr[i]);
    }
}
console.log(mp);