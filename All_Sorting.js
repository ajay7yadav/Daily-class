// Arrange data in away for we can access easy 
let arr = [12,9,22,4,-7,10,15,7];
////////////||   Selection Sort
//  we find min element and select or move

function selectionSort(arr,n){
    for(let i=0; i<n; i++){
        let k = i;
        for(let j=i+1; j<n; j++){
            if(arr[j] < arr[k]){
                k = j;
            }
        }
        let temp = arr[k];
        arr[k] = arr[i];
        arr[i] = temp;
    }
    console.log(arr);
}
//selectionSort(arr,arr.length)

/////////////////|| bubble sort
// who is greatest element moved to last
function bubbleSort(arr,n){
    let countSwap = 0;

    for(let i=0; i<n-1; i++){
        for(let j=0; j<n-1; j++){

            if(arr[j] > arr[j+1]){

                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                countSwap ++;
            }
        }
    }
    //console.log(countSwap);
    console.log(arr);
}
//bubbleSort(arr,arr.length)


/////////////////|| insertion sort

function insertionSort(arr,n){
    
    for(let i=1; i<n; i++){
        let key = i;
        let j = i-1;
        while(arr[j] > arr[key]){
            let temp = arr[j];
            arr[j] = arr[key];
            arr[key] = temp;
            key --;
            j --;
        }
    }
    console.log(arr);
    // This Approch take more swaps 
    // Optimize Number of swaps
    arr = [12,9,22,4,-7,10,15,7];
    let j, k, i;
    for(i=0; i<n; i++){
        j = i-1;
        k = arr[i];
        while(j>=0 && arr[j] > k){
            arr[j+1] = arr[j];
            j --;
        }
        arr[j+1] = k;
    }
    console.log(arr);
}
arr = [12,9,22,4,-7,10,15,7];
insertionSort(arr,arr.length);

///////////////////////////////|| Marge Sort

function margeSort(arr, start,end){
    if(start >= end){
        return;
    }
    let mid = start+parseInt((end - start)/2);
    margeSort(arr,start,mid);
    margeSort(arr,mid+1,end);

    marge(arr,start,mid,end)
}

function marge(arr,start,mid,end){

    var temp = [];
    let k = start
    let l = start;
    let r = mid + 1;
    
    while(l <= mid && r <= end){
        if(arr[l] < arr[r]){
            temp[k++] = arr[l++];
        }
        else{
            temp[k++] = arr[r++];
        }
    }
    while(l <= mid){
        temp[k++] = arr[l++];
    }
    while(r <= end){
        temp[k++] = arr[r++];
    }
    
    for(let i=start; i<=end; i++){
        arr[i] = temp[i];
    }

}
//margeSort(arr,0,arr.length-1);

//console.log(arr);

//////////////////////////|| Quick Sort

function quickSort(arr, low, high){
    if(low < high){
        
        let pi = partition(arr, low, high);

        quickSort(arr, low, pi-1);
        quickSort(arr, pi+1, high);
    }
}
function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function partition(arr, low, high){
    let pivot = arr[high];

    let i = (low-1);
    for(let j=low; j<=high-1; j++){
        if(arr[j] < pivot){

            i ++;
            swap(arr, i, j);
        }
    }

    swap(arr, i+1, high);
    return (i+1);
}
//quickSort(arr,0,arr.length-1);
//console.log(arr);

//////////////////////////|| Count Sort

function countSort(arr,n){
    let max = Math.max.apply(Math, arr);
    let min = Math.min.apply(Math, arr);
    let range = max-min+1;

    let freqArr = new Array(range).fill(0);
    for(let i=0; i<n; i++){
       freqArr[arr[i]] = +1
    }
    let m = freqArr.length;
    let res = [];
    for(let i=0; i<m; ){
        if(freqArr[i] > 0){
            res.push(i);
            freqArr[i] = freqArr[i]-1;
        }
        i++;
    }
    console.log(res);
}
//countSort(arr,arr.length);

////////////////////////////|| 
function  countShort(arr){
    let max = Math.max.apply(Math, arr);
    let min = Math.min.apply(Math, arr);
    let range = max - min + 1;
    let count = new Array(range).fill(0);
    let output = new Array(arr.length).fill(0);

    for(let i=0; i<arr.length; i++){
        count[arr[i] - min]++;
    }
    console.log(count);
    for(let i=1; i<count.length; i++){
        count[i] += count[i-1];
    }
    console.log(count);
    for(let i=arr.length-1; i>=0; i--){
        output[count[arr[i]-min]-1] = arr[i];
        count[arr[i]-min]--;
    }
    console.log(output);
}
//countShort(arr)

//////////////////////////////////////////
// agrigation
// sort string