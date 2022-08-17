let arr = [42, 564, 5775, 34, 123, 454, 1, 5, 45, 3556, 23442];
let res = [];
for(let i=0; i<arr.length; i++){
    let num = arr[i];
    let c = 0;
    while(num>0){
        num = parseInt(num/10);
        c ++;
    }
    if(c%2 == 0){
        res.push(arr[i])
    }
}

console.log(res);