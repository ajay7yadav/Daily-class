function fourSum(arr, n, k){
    arr.sort((x,y)=>x-y)
    let res = [];
    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            let sum = k-arr[i]-arr[j];
            let l=j+1, r = n-1;
            while(l<r){
                let currSum = arr[l]+arr[r];
                if(currSum < sum){
                    l ++;
                }
                else if(currSum > sum){
                    r --;
                }
                else{
                    res.push([arr[i],arr[j],arr[l],arr[r]]);
                    while(l<r && arr[l]==arr[l+1])l++;
                    while(l<r && arr[r] == arr[r-1])r--;
                    l ++;
                    r --;
                }
            }
            while(j+1<n && arr[j] == arr[j+1])j++;
        }
        while(i+1<n && arr[i] == arr[i+1])i++;
        //console.log(res);
    }
    console.log(res);
}

//arr = [88, 84, 3, 51, 54 ,99 ,32, 60, 76, 68, 39, 12, 26, 86, 94, 39, 95, 70, 34, 78, 67, 1, 97, 2, 17, 92, 52]
//arr = [-1,2,1,-4], k = 1;
//k = 179;
// arr = [0, 0, 2, 1, 1], k= 3;
 arr = [10,2,3,4,5,7,8], k= 23;
fourSum(arr, arr.length, k);