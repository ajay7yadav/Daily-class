// Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.
// Return any possible rearrangement of s or return "" if not possible.
// Example 1:

// Input: s = "aab"
// Output: "aba"
// Example 2:

// Input: s = "aaab"
// Output: ""

let s = "ABA";
let mp = new Map();

for(let i=0; i<s.length; i++){
    if(mp.has(s[i])){
        mp.set(s[i],mp.get(s[i])+1);
    }
    else{
        mp.set(s[i],1);
    }
} 
let str = '';
for(let i=0; i<s.length; i++){
    
    
}
