function threeSum(arr, n){
    arr.sort((x,y)=>x-y)
    let res = [];
    for(let j=0; j<n; j++){
        //if(arr[j] == arr[j-1])continue;
        let l = j+1, r=n-1;
        while(l<r){
            let sum = arr[j]+arr[l]+arr[r];
            if(sum < 0){
                l++
            }
            else if(sum > 0){
                r --;
            }
            else{
                res.push([arr[j],arr[l],arr[r]]);
                while(l<r && arr[l]==arr[l+1])l++;
                while(l<r && arr[r]==arr[r-1])r--;
                l++;
                r--
            }
            //console.log("3rd");
        }
        while(j+1<n && arr[j]==arr[j+1])j++;
    }
    console.log(res);
}

//arr = [88, 84, 3, 51, 54 ,99 ,32, 60, 76, 68, 39, 12, 26, 86, 94, 39, 95, 70, 34, 78, 67, 1, 97, 2, 17, 92, 52]
arr = [-1,0,1,2,-1,-4];
//k = 179;
// arr = [0, 0, 2, 1, 1], k= 3;
// arr = [10,2,3,4,5,7,8], k= 23;
threeSum(arr, arr.length, k);