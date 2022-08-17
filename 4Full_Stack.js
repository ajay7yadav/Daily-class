// Next largest element
// Nearest Right greatest

let arr = [ 1, 3, 2, 4];

function nextLargestElmentRIGHT(arr){
    let stack = [];
    let res = [];
    stack.push(arr[arr.length-1]);
    res.push(-1);

    for(let i=arr.length-2; i>=0; i--){

        while(stack.length != 0 && stack[stack.length-1] <= arr[i]){
            stack.pop();
        }
        if(stack.length == 0){
            res.push(-1);
        }
        else{
            res.push(stack[stack.length-1]);
        }
        stack.push(arr[i]);
    }
    return res.reverse();
}
//console.log(nextLargestElmentRIGHT(arr));

// Nearest greatest to left
// 
function nextLargestElmentLEFT(arr){
    let result = [];
    let stack = [];

    stack.push(arr[0]);
    result.push(-1);
    
    for(let i=1; i<arr.length; i++){

        while(stack.length !=0 && stack[stack.length-1] < arr[i]){
            stack.pop();
        }
        if(stack.length == 0){
            result.push(-1);
        }
        else{
            result.push(stack[stack.length-1]);
        }
        stack.push(arr[i]);
    }
    return result;
}
//console.log(nextLargestElmentLEFT(arr));
///////////////////////////////////////////////////////////////////
// nearest smaller element to left
// Nearest smaller element

function nearestSmallerLEFT(arr){
    let res = [];
    let stack = [];

    stack.push(arr[0]);
    res.push(-1);

    for(let i=1; i<arr.length; i++){

        while(stack.length !=0 && stack[stack.length-1] > arr[i]){
            stack.pop();
        }
        if(stack.length == 0){
            res.push(-1);
        }
        else{
            res.push(stack[stack.length-1]);
        }
        stack.push(arr[i]);
    }
    return res;
}
//console.log(nearestSmallerLEFT(arr));

// Nearest smaller to right

arr = [4, 5, 2, 10, 8];
function nearestSmallerRIGHT(arr){
    let res = [];
    let stack = [];

    stack.push(arr[arr.length-1]);
    res.push(-1);

    for(let i=arr.length-2; i>=0; i--){

        while(stack.length !=0 && stack[stack.length-1] >= arr[i]){
            stack.pop();
        }
        if(stack.length == 0){
            res.push(-1);
        }
        else{
            res.push(stack[stack.length-1]);
        }
        stack.push(arr[i]);
    }
    return res.reverse();
}
//console.log(nearestSmallerRIGHT(arr));
///////////////////////////////////////////////////////////////////

// Stock Span Problem

arr =      [100, 80, 60, 70, 60, 75, 85];
// NGL      -1  100  80  80  70  80  100
// NGL-Idx  -1   0   1   1   3   1    0
// arr Idx   0   1   2   3   4   5    6   
//         ------------------------------
// res arr   1   1   1   2   1   4    6

function stockSpan(arr){
    let ngl = [];
    let idx = [];
    let stack = [];
    let stackIdx = [];

    ngl.push(-1);
    idx.push(-1);
    stackIdx.push(0);
    stack.push(arr[0]);

    for(let i=1; i<arr.length; i++){

        while(stack.length !=0 && stack[stack.length-1] <= arr[i]){
            stack.pop();
            stackIdx.pop();
        }
        if(stack.length == 0){
            ngl.push(-1);
            idx.push(-1);
        }
        else{
            ngl.push(stack[stack.length-1]);
            idx.push(stackIdx[stackIdx.length-1]);
        }
        stack.push(arr[i]);
        stackIdx.push(i);
    }
    //console.log(ngl);
    //console.log(idx);
    let res = [];
    for(let i=0; i<arr.length; i++){
        res.push(i-idx[i]);
    }
    console.log(res);

}
//stockSpan(arr);

// Maximum Area of histogram
//           0  1  2  3  4  5  6 
arr =       [6, 2, 5, 4, 5, 1, 6];
// NSR Idx  -1  5  3  5  5  7  7 -> why 7 may be next is Smaller
// NSL Idx  -1 -1  1  1  3 -1  5
// -1       -1 -1 -1 -1 -1 -1 -1
//      -------------------------
//wight      1  5  1  3  1  7  1
//  area = arr[i] * wight[i]
//wight      1  5  1  3  1  7  1 
//arr       [6, 2, 5, 4, 5, 1, 6]
// --------------------------------
//  area =   6  10 5  12 5  7  6  find Max = 12 ans

function maximumAreaOfHistogram(arr){
    
}
maximumAreaOfHistogram(arr)


// Trapping rain water
arr =      [3, 0, 0, 2, 0, 4];
//maxLeft   3  3  3  3  3  4
//maxRigt   4  4  4  4  4  4  
//         -------------------
//min B/W   3  3  3  3  3  4
//  arr     3  0  0  2  0  4
//         -------------------
//          0  3  3  1  3  0 = sum = 10 ans
function trapRainWater(arr){
    let maxLeft = [];
    let maxRight = [];
    maxLeft.push(arr[0]);
    for(let i=1; i<arr.length; i++){
        maxLeft.push( Math.max(arr[i], maxLeft[maxLeft.length-1]));
    }
    //console.log(maxLeft);
    maxRight.push(arr[arr.length-1]);
    for(let i=arr.length-2; i>=0; i--){
        maxRight.push( Math.max(arr[i], maxRight[maxRight.length-1]));
    }
    //console.log(maxRight);
    let minBuild = [];
    for(let i=0; i<arr.length; i++){
        minBuild.push( Math.min(maxLeft[i], maxRight[i]));
    }
    //console.log(minBuild);
    let water = [];
    for(let i=0; i<arr.length; i++){
        water.push( minBuild[i] - arr[i] );
    }
    //console.log(water);
    let res = 0;
    for(let i=0; i<arr.length; i++){
        res += water[i];
    }
    console.log("contain water ->",res);
}
//trapRainWater(arr)


