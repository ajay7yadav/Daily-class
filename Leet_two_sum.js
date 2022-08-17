//let arr = [2,7,11,15], t = 9;
let arr = [3,2,4] , t = 6;

let mp = new Map();

for(let i=0; i<arr.length; i++){
    
    if(mp.has(t-arr[i])){
        let e = i;
        let s = mp.get(t-arr[i]);
        console.log(s," to ",e);
        break;
    }

    mp.set(arr[i],i)
}