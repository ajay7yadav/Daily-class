function permutation(){
    let a = [2, 1, 3];
    let b = [7, 8, 9];
    let k = 10;
    a.sort((x,y)=>x-y);
    b.sort((x,y)=>x-y);

    for(let i=0; i<a.length; i++){
        if(a[i]+b[b.length-1] >= k){
            continue;
        }
        return false;
    }
    return true;
}
//console.log(permutation());

function countSort(arr){
    let mx = -1;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > mx){
            mx = arr[i];
        }
    }
    let freq = new Array(mx+1).fill(0);
    for(let i=0; i<arr.length; i++){
        freq[arr[i]] = freq[arr[i]]+1;
    }
    console.log(freq);
    let count = new Array(freq.length);
    let sum = 0;
    for(let i=0; i<freq.length; i++){
        sum +=  freq[i];
        count[i] = sum
    }
    console.log(count);
    let ouput = new Array(arr.length);
    
    for(let i=0; i<ouput.length; i++){
        let idx = count[arr[i]]-1;
        ouput[idx] = arr[i];
        count[arr[i]]--
    }
    console.log(ouput);
}
//        [0, 1, 2, 3, 4, 5, 6]
let arr = [1, 4, 1, 2, 7, 44, 99]
//        [1, 1, 2, 2, 4, 5, 7]
//countSort(arr);


function stringSort(){
    let str = "eadsab"
    let mx = -1;
    for(let i=0; i<str.length; i++){
        if(str.charCodeAt(i) > mx){
            mx = str.charCodeAt(i)
        }
    }
    //console.log(mx);
    let freq = new Array(mx+1).fill(0);
    for(let i=0; i<str.length; i++){
        freq[str.charCodeAt(i)] = freq[str.charCodeAt(i)]+1;
    }
    //console.log(freq);
    let count = new Array(freq.length);
    let sum = 0;
    for(let i=0; i<freq.length; i++){
        sum += freq[i];
        count[i] = sum;
    }
    //console.log(count);
    let output = new Array(str.length);
    for(let i=0; i<output.length; i++){
        let idx = count[str.charCodeAt(i)]-1;
        //output[idx] = count[]
        output[idx] = str[i];

        count[str.charCodeAt(i)]--;
    }
    let res = output.join("")
    console.log(output);
    console.log(res);
}
//stringSort()

// 
function commonElements(){
    ar1 = [1, 5, 10, 20, 40, 80];
    ar2 = [6, 7, 20, 80, 100];
    ar3 = [3, 4, 15, 20, 30, 70, 80, 120];
    // ar1 = [3, 3, 3];
    // ar2 = [3, 3, 3];
    // ar3 = [3, 3, 3];

    
    let mp1 = new Set();
    let mp2 = new Set();
    let mp3 = new Set();

    for(let i=0; i<ar1.length; i++){
        mp1.add(ar1[i])
    }
    for(let i=0; i<ar2.length; i++){
        mp2.add(ar2[i])
    }
    for(let i=0; i<ar3.length; i++){
        mp3.add(ar3[i])
    }
    let key = mp1.keys();
    let res = new Set();
    for(let i=0; i<ar1.length; i++){
        if(mp2.has(ar1[i]) && mp3.has(ar1[i])){
            res.add(ar1[i])
        }
    }
    let final = [];
    res.forEach(value => {
        final.push(value)
    });
    console.log(final);
}

//commonElements();

// https://practice.geeksforgeeks.org/problems/find-pair-given-difference1559/1
//

function majorityElement(){
    //let arr = [1,2,3];
    //let arr = [3,1,3,3,2,2,2,2]
    let arr = [1, 13]
    let mp = new Map();
    for(let i=0; i<arr.length; i++){
        if(mp.has(arr[i])){
            mp.set(arr[i],mp.get(arr[i])+1);
        }
        else{
            mp.set(arr[i],1);
        }
    }
    
    let res = -1;
    let half = parseInt(0+(arr.length-0)/2);

    mp.forEach((key,value)=>{
        if( key > half)
        {   
            res = value;
        }
    });
    
    console.log("value ->",res);
}
//majorityElement()

function posibleSubsequence(arr,sum){
    arr.sort((x,y)=>x-y);
    let res=[]
    let count=0
    for(let i=0;i<arr.length-2;i++)
    {
        let l=i+1
        let r=arr.length-1

        while(l<r)
        {
            let currSum = arr[i]+arr[l]+arr[r];
            if( currSum == sum)
            {
                //res.push([arr[i],arr[l],arr[r]])
                count += r-l-1
                l++
                
            }
            if(currSum < sum){
                count += r-l;
                l ++;
            }
            else 
            {
                r--
            }
        }
    }
    console.log(count);
    //return count
}
let a = [5, 1, 3, 4, 7];

//posibleSubsequence(a,12)

function maxSumAdjacents(){
    let arr = [3, 2, 7, 10];
    let max = 0;
    let prev = 0;
    let curr = arr[0];
    for(let i=1; i<arr.length; i++){
        max = Math.max(prev, curr);
        curr = prev + arr[i];
        prev = max;
    }
    if(curr > max){
        console.log(curr);
    }
    else{
        console.log(max);
    }
}
//maxSumAdjacents()

function countInversion(){
    let arr = [2, 4, 1, 3, 5];
    let count = margeSort(arr, 0,arr.length-1);
    //return count;
    console.log(arr);
}
function margeSort(arr, s, e){
    if(s >= e){
        return;
    }
    let mid = parseInt(s+(e-s)/2);
    margeSort(arr, s, mid);
    margeSort(arr, mid+1, e);
    margeCount(arr, s, mid, e);
}
function margeCount(arr, s, mid, e){
    let temp = [];
    let idx = s;
    let l = s;
    let r = mid+1;
    while(l <= mid && r <= e){
        if(arr[l] < arr[r]){
            temp[idx++] = arr[l++];
        }
        else{
            temp[idx++] = arr[r++];
            
        }
    }
    while(l <= mid){
        temp[idx++] = arr[l++]
    }
    while(r <= e){
        temp[idx++] = arr[r++]
    }
    
    for(let i=s; i<=e; i++){
        arr[i] = temp[i];
    }
    
}
//countInversion();


function findDuplicate(){
    let arr = [0,3,1,2,2,1,2];
    let freq = new Array(arr.length).fill(0);
    for(let i=0; i<arr.length; i++){
        freq[arr[i]]++;
    }
    let res = [];
    for(let i=0; i<arr.length; i++){
        if(freq[i] > 1){
            res.push(i);
        }
    }
    console.log(res);
}

//findDuplicate()

function radixSort(){
    let arr = [170, 45, 75, 90, 802, 24, 2, 66];
    let mx = -1;
    for(let i=0; i<arr.length; i++){
        if(mx < arr[i]){
            mx = arr[i];
        }
    }
    for(let position=1; mx/position > 1; position *= 10){
        countsSort(arr,position);
    }
}
function countsSort(arr, position){
    let mx = -1;
    for(let i=0; i<arr.length; i++){

        let digit = Math.floor(arr[i]/position)%10;
        if(mx < digit){
            mx = digit;
        }
    }
    let freq = new Array(mx+1).fill(0);
    for(let i=0; i<mx; i++){
        let digit = Math.floor(arr[i]/position)%10;
        freq[digit]++;
    }
    let sum = 0;
    let count = new Array(mx+1);
    for(let i=0; i<freq.length; i++){
        sum += freq[i];
        count[i] = sum;
    }
    let output = new Array(arr.length);
    for(let i=0; i<arr.length; i++){
        let digit = Math.floor(arr[i]/position)%10;
        let idx = count[digit]-1;
        output[idx] = digit;
        count[digit]--;
    }

}
radixSort();

function checkReversingArraySorted(){
    let arr = [1, 2, 5, 4, 3];
    let mx = -1;
    let pos = -1;
    for(let i=0; i<arr.length; i++){
        if(mx < arr[i]){
            mx = arr[i];
            pos = i;
        }
    }
    if(!mx){}
    let r = arr.length-1;
    while(pos < r){
        let temp = arr[pos];
        arr[pos] = arr[r];
        arr[r] = temp;
        pos ++;
        r --;
    }
    console.log(arr);
}
//checkReversingArraySorted()

function findAllFourSum(){
    // let arr = [10,2,3,4,5,7,8];
    // arr.sort((x,y)=>x-y)
    // let k = 23;
    // let mp = new Map();
    // for(let i=0; i<arr.length-1; i++){
    //     for(let j=i+1; j<arr.length; j++){
    //         mp.set(arr[i]+arr[j],new pair)
    //     }
    // }
    // console.log(res);
}
//findAllFourSum()

function mountainArr(){
    let arr = [1, 2, 3, 4, 9, 8, 7, 6, 5];

    let l = 0;
    let r = arr.length-1;
    // while(l<r){
    //     if()
    // }
}

function aggressiveCow(){
    let arr = [1, 2, 8, 4, 9];
    let cow = 3;
    //||   1 2 4 8 9   ||\\
    arr.sort((x,y)=>x-y);
    let mxDis = arr[arr.length-1]-arr[0];
    //console.log(mxDis);
    let ans = 0;

    for(let d=1; d<=mxDis; d++){
        //console.log(arr,d,cow);
        if(checkDistance(arr,d,cow)){
            //console.log(d);
            ans = Math.max(ans, d);
            
        }
    }
    console.log(ans);
}
function checkDistance(arr, d, cow){
    //console.log(arr,d,cow);
    let value = arr[0];
    cow --;
    for(let i=1; i<arr.length; i++){
        
        if(arr[i]-value >= d){
            cow --;
            //console.log(value,arr[i],d,cow);
            if(!cow){
                //console.log(value, arr[i],d);
                return true;
            }
            value = arr[i];
        }
    }
    return false;
}
//aggressiveCow();


///////////////////////

// |  BackTracking

let mat = [[1, 0, 1, 0],
           [1, 1, 0, 1],
           [1, 1, 0, 0],
           [0, 1, 1, 1]];

let visit = [[0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]]
let i = 0,j=0;
let path = [];
function ratInMaze(mat,visit,row,col,path,res){
    // base condition
     if(row == mat.length-1 && col == mat[0].length-1){
         path = path.join("");
         res.push(path)
         return res;
     }
     // Down
     if(check(mat,visit,row+1,col)){
         path.push("D");
         visit[row][col] = 1;
         ratInMaze(mat,visit,row+1,col,path,res);
         path.pop();
         visit[row][col] = 0;
     }
     // Right
     if(check(mat,visit,row,col+1)){
         path.push("R");
         visit[row][col] = 1;
         ratInMaze(mat,visit,row,col+1,path,res);
         path.pop();
         visit[row][col] = 0;
     }
     // Left
     if(check(mat,visit,row,col-1)){
         path.push("L");
         visit[row][col] = 1;
         ratInMaze(mat,visit,row,col-1,path,res);
         path.pop();
         visit[row][col] = 0;
     }
     // Up
     if(check(mat,visit,row-1,col)){
         path.push("U");
         visit[row][col] = 1;
         ratInMaze(mat,visit,row-1,col,path,res);
         path.pop();
         visit[row][col] = 0;
     }
 }
 function check(mat,visit,i,j){
     if(i >= 0 && j >= 0 && i < mat.length && j < mat[0].length){
         if(mat[i][j] == 1 && visit[i][j] == 0){
             return true;
         }
     }
     return false;
 }
 let rs = [];
//ratInMaze(mat,visit,i,j,path,rs)
//console.log(rs);

arr = [7,2,6,5];
let sum = 16
let temp = [];
let idx = 0;
let currSum = 0;
let res = [];
function combinationOfSum(arr, temp, sum, idx, res,k){
    //
    if(idx >= arr.length){
        if(sum == 0){
            res.push([...temp])
        }
        return;
    }
    // pick
    if(sum >= arr[idx]){
        //sum = sum - arr[idx]
        temp.push(arr[idx]);
        combinationOfSum(arr, temp, sum-arr[idx], idx, res,k);
        temp.pop();
        //idx ++;
    }
    combinationOfSum(arr,temp,sum,idx+1, res,k)
    // up-pick
}
//combinationOfSum(arr, temp, sum, idx, res,0)
//console.log(res);

