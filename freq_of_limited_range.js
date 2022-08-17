//Frequencies of Limited Range Array Elements
// https://practice.geeksforgeeks.org/problems/frequency-of-array-elements-1587115620/1?page=2&category[]=Arrays&sortBy=submissions

let arr= [2, 3, 2, 3, 5]
//let arr = [3,3,3,3];

function countFrequency(arr){
    let max = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    if(arr.length > max){
        max = arr.length
    }
    let freq = new Array(max+1).fill(0);
    for(let i=0; i<arr.length; i++){
        let j = arr[i];
        freq[j] = freq[j]+1;
    }
    freq.shift();
    console.log(freq);
}

countFrequency(arr);