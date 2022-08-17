// find min positive missing number

let arr = [1,2,3,4,5];
//let arr = [0, -10, 1, 3, -20];
//let arr = [8 ,28, 7, -36, 21, -21, -50, 9, -32]


function findMinMiss(arr){
    let max = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    let freq = new Array(max).fill(0);
    for(let i=0; i<arr.length; i++){
        let j = arr[i];
        freq[j] = freq[j]+1;
    }
    let flag = false;
    for(let i=1; i<freq.length; i++){
        if(freq[i] == 0){
            console.log(i);
            flag = true;
            break;
        }
    }
    if(!flag){
        console.log(freq.length);
    }
}
findMinMiss(arr)