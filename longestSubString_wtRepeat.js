let s = "abcabcbb";

let i = 0, j=0;
let mp = new Set();
let mxL = 0;

while(j<s.length){
    
    if(!mp.has(s[j])){
        mp.add(s[j]);
        j ++;
        mxL = Math.max(mxL, mp.size);
    }
    else{
        mp.delete(s[i]);
        i ++;
    }
}

console.log(mxL);

