let A1 = [2, 1, 2, 5, 7, 1, 9, 3, 6, 8, 8];
let A2 = [2, 1, 8, 3];

function relativeSort(a1,a2){
    //a1.sort((x,y)=>x-y);
    let res = [];
    for(let i=0; i<a2.length; i++){
        for(let j=0; j<a1.length; j++){

        }
    }
}
//relativeSort(A1,A2)

// Longest K unique characters substring

function uniqueSubsting(s, k){
    let i = 0, j = 0;
    let mp = new Map();
    let res = 0;
    while(j < s.length){
        if(mp.size > k){
            while(mp.size > k){
                
                if(mp.get(s[i]) > 1){
                    mp.set(s[i], mp.get(s[i])-1)    
                }
                else{
                    mp.delete(s[i]);
                }
                i ++;
            }
        }
        if(mp.size == k){
            res = Math.max(res, j-i);
            //j++;
        }
        if(mp.size < k){
            if(mp.has(s[j])){
                mp.set(s[j], mp.get(s[j])+1);
            }
            else{
                mp.set(s[j], 1)
            }
            //j ++;
        }
        res = Math.max(res, j-i);
        j ++;
    }
    console.log(res);
    console.log(mp);
    //return res>0?res:-1;
}
//let s = "aabacbebebe", k = 3
s = "repggxrpnrvy", k = 12
//console.log(uniqueSubsting(s, k));




function inversionOfArr(arr){
    let mp = new Map()
}
//let arr = [2, 4, 1, 3, 5]
//inversionOfArr(arr)






function threeSum(arr, X){
    let ans = 0;
    for(let i=0; i<arr.length; i++){
        let l = i+1, r = arr.length-1;
        while(l < r){
            let sum = arr[i]+arr[l]+arr[r];
            let temp = Math.abs(X-sum);
            if(ans <= temp){
                ans = sum;
                r --;
            }
            if(ans < temp){
                l ++;
            }
            else r --;
        }
    }
    console.log(ans);
}
//let arr = [1, 2, 3, 4, -5], x = 10
let arr = [6 , -2, -5, 7, -9], x= 3
//threeSum(arr, x)



function largestSub0(arr, n){
    let mp = new Map();
    let sum = 0;
    let max = -1;
    for(let i=0; i<n; i++){
        sum += arr[i];
        if(mp.get(sum) == false){
            mp.set(sum, i);
        }
        if(mp.has(sum)){
            let idx = i-mp.get(sum);
            max = Math.max(max, idx);
        }
    }
    console.log(max);
}
arr = [15,-2,2,-8,1,7,10,23];
largestSub0(arr, arr.length)










