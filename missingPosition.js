var findKthPositive = function(arr, k) {
    let max = arr.reduce((mx, idx)=>{
        if(idx > mx){
            mx = idx;
        }
        return idx;
    });
    let freq = new Array(max+k+1).fill(0);
    for(let i=0; i<arr.length; i++){
        freq[arr[i]]++;
    }
    //console.log(freq);
    let miss = [];
    for(let i=1; i<freq.length; i++){
        if(freq[i] < 1){
            miss.push(i);
        }
    }
    //console.log(miss);
    if(miss.length == 0){
        console.log(arr.length+k);
        //console.log(miss);
    }
    else{
        console.log(miss[k-1]);
    }
};

arr = [2,3,4,7,11], k = 5;
findKthPositive(arr, k);
arr = [1,2,3,4], k = 2
findKthPositive(arr, k);
arr = [5,6,7,8,9], k = 9
findKthPositive(arr, k);