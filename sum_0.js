function maxLen(arr,n){
    let mp = new Map();
    let maxLen = 0;
    let sum = 0;
    for(let i=0; i<n; i++){
        sum += arr[i];
        if(arr[i]===0 && maxLen == 0){
            maxLen = 1;
        }
        if(sum === 0){
            maxLen = i+1;
        }
        let prev = mp.get(sum);
        if(prev != null){
            maxLen = Math.max(maxLen, i-prev);
        }
        else{
            mp.set(sum, i);
        }
    }
    console.log(mp);
    console.log(maxLen);
}
let a = [15,-2,2,-8,1,7,10,23]
maxLen(a,a.length)