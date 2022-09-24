let a = [2,3,7,10,12];
let b = [1,5,7,8];

let sum1 = 0, sum2 = 0;
let res = 0;
let i=0, j=0;
while(i<a.length && j<b.length){
    if(a[i] < b[j]){
        sum1 += a[i++];
    }
    else 
    if(b[j] < a[i]){
        sum2 += b[j++];
    }
    else{
        res += Math.max(sum1, sum2);
        res += a[i]; // b[i] same hai
        sum1 = 0;
        sum2 = 0;
        i ++;
        j ++;
    }
}
while(i<a.length){
    sum1 += a[i++];
}
while(j<b.length){
    sum2 += b[j++];
}
res += Math.max(sum1, sum2)

console.log(res);