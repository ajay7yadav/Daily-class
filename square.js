function square(x){
    let res = 0;
    for(let i = 0; i<x; i++){
        if(i*i == x){
            res = i
            break;
        }
        if(i*i < x){
            res = Math.max(res, i);
        }
    }
    return res
}
//console.log(square(8));

// Optimize

function squareX(x){
    
    let l = 0, r = x;
    let res = 0;
    while(l < r){
        let mid = Math.floor(l+(r-l)/2);
        if(mid == x){
            return mid;
        }
        else if(mid*mid < x){
            res = mid;
            l = mid + 1;
        }
        else{
            r = mid - 1;
        }
    }
    return res;
}
console.log(squareX(8));