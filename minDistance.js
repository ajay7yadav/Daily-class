// Minimum distance between two numbers
// N = 4
// A[] = {1,2,3,2}
// x = 1, y = 2
// Output: 1

// let arr = [1,2,3,2];
// let x = 1, y = 2;

let arr = [86,39,90,67,84,66,62]
let x = 42, y = 12;

function minLength(arr,x,y){
    let s = -1, e = -1;
        let res = Infinity;
        
        for(let i=0; i<arr.length; i++){
            if(arr[i] == x){
                s = i; 
            }
            if(arr[i] == y){
                e = i; 
            }
            if(s != -1 && e != -1){
                res = Math.min(res, Math.abs(e-s));
            }
        }
        if(s == -1 || e == -1){
            return -1
        }
        return res;
}
console.log(minLength(arr,x,y));