// simple binary search
let arr = [1,2,2,4,5,6,9,12];

function findK(arr,k){
    let l = 0;
    let r = arr.length-1;
    while(l<r){
        let mid = l + parseInt((r-l)/2);
        if(arr[mid] == k){
            return mid;
        }
        if(arr[mid] < k){
            l = mid;
        }
        else{
            r = mid;
        }
    }
}
//console.log(findK(arr,2));

// find starting position of k
arr = [2,3,6,7,7,7,10,12,18,20];

function findAccurance(arr,k){
    let l=0, r=arr.length-1;
    let res = - 1;
    while(l<r){
        let mid = l + parseInt((r-l)/2);
        if(arr[mid] == k){
            //res = mid;
            r = mid - 1;
            //l = mid + 1;
        }
        if(arr[mid] < k){
            l = mid + 1;
        }
        else {
            r = mid - 1;
        }
    }
    return r;
}
//console.log(findAccurance(arr,7));
//
// Find ending accurance of k
function lastAccurance(arr, k){
    let l = 0, r = arr.length-1;
    let res = -1;
    while(l < r){
        let mid = parseInt(l+(r-l)/2);
        if(arr[mid] == k){
            //res = mid;
            l = mid + 1;
        }
        if(arr[mid] < k){
            l = mid + 1;
        }
        else{
            r = mid - 1;
        }
    }
    return l;
}
//console.log(lastAccurance(arr, 7));

// count element in number of k
arr = [2,3,6,7,7,7,10,12,18,20];
function countNumbers(arr, k){

    let firstAcc = findAccurance(arr, k);
    let lastAcc = lastAccurance(arr, k);

    let res = (lastAcc - firstAcc) + 1;
        
    return res;
}
//console.log(countNumbers(arr, 7));

// Find smollest in Rotated sorted Array
arr = [5,7,9,12,0,2,3,4];
function rotatedSorted(arr, n){
    let l = 0, r = n-1;

    while(l < r){
        let mid = parseInt(l+(r-l)/2);
        if(arr[mid] == arr[r]){
            //console.log(arr[mid]," == ",arr[r]);
            r --;
        }
        if(arr[mid] > arr[r]){
            //console.log(arr[mid]," > ",arr[r]);
            l = mid + 1;
        }
        else{
            //console.log(arr[mid]," < ",arr[r]);
            r = mid;
        }
    }
    return r;
}
//console.log(rotatedSorted(arr, arr.length));

// count number of rotate in sorted rotated array
arr = [5,7,9,12,2,3,4];

function countRotate(arr){
    let l = 0, r = arr.length-1;

    while(l<r){
        let mid = l+parseInt((r-l)/2);
        if(arr[mid] == arr[r]){
            r --;
        }
        if(arr[mid] > arr[r]){
            l = mid + 1;
        }
        else{
            r = mid;
        }
    }
    let rotate = arr.length - r;
    return rotate;
}
//console.log(countRotate(arr));

// Find Element in sorted rotated array
arr = [5,7,9,12,0,2,3,4];
let k = 7;
function findElementInRotatedArr(arr, k){
    // divide the array in two part
    // 1st find smaller index
    let smaller = rotatedSorted(arr,arr.length);

    // search result in left side
    let res1 = searchSorted(0,smaller-1,arr,k);
    // search result in right side
    let res2 = searchSorted(smaller,arr.length,arr,k);
    if(res1 != -1){
        return res1;
    }
    else{
        return res2;
    }
}
function searchSorted(l,r,arr,k){
    while(l<=r){
        let mid = parseInt(l+(r-l)/2);
        if(arr[mid] == k){
            return mid;
        }
        if(arr[mid] > k){
            r = mid - 1;
        }
        else{
            l = mid + 1
        }
    }
    return -1;
}

//console.log(findElementInRotatedArr(arr, k));


