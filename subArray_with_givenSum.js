let n = 10, s =  15  //12;
let arr = [1,2,3,4,5,6,7,8,9,10 ]//[1,2,3,7,5];

// for(let i=0; i<n; i++){
//     let sum = 0
//     for(let j=i; j<n; j++){
//         sum += arr[j];
//         if(sum == s){
//             console.log(`${i+1} to ${j+1} index sum = ${sum}`);
//         }
//     }   
// }
/////// Optimize
let stack = [];
let sum = 0;
let l = 0;
for(let i=0; i<n; i++){
    sum += arr[i];
    while(sum > s){
        sum -= arr[l];
        l++;
    }
    if(sum == s){
        stack.push(l+1);
        stack.push(i+1);
        break;
    }
}
if(stack.length == 0){
    console.log("no");
}

console.log(stack);

