//let arr = [1, 2, 3, 2, 1];
let arr = [1,1,1,1];
let res = [];
let c = 0;
for(let i=0; i<arr.length; i++){
    for(let j=i+1;j<arr.length; j++ ){
        if(arr[i] == arr[j]){
            res.push([arr[i],arr[j]]);
            c ++;
        }
    }
}
// console.log(res);
console.log(c);

function optimize(arr){
    let mp = new Map();

    for(let i=0; i<arr.length; i++){
        if(mp.has(arr[i])){

            mp.set(arr[i],mp.get(arr[i])+1);
        }
        else{
            mp.set(arr[i], 1);
        }
    }
    let count = 0;
    
    for (const [key, value] of mp) {
        count += value * (value-1) / 2 ;
    }
    console.log(count);
}
optimize(arr);