let arr = [10, 22, 28, 29, 30, 40];
let x = 54;

let l=0, r = arr.length-1;
let res = [-1, -1];
let diff = Infinity;
while(l < r){
    let sum = arr[l]+arr[r];

    if(Math.abs(x-sum) < diff){
        
        diff = Math.abs(x-sum);
        res[0] = arr[l];
        res[1] = arr[r];
    }
    if( sum > x){
        r--
    }
    else{
        l ++;
    }
}
console.log(res);